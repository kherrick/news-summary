#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REPORTS_DIR = path.join(ROOT_DIR, "reports");

const poolPath = path.join(REPORTS_DIR, "news-pool.json");
const catPath = path.join(REPORTS_DIR, "news-categories.txt");
const readmePath = path.join(ROOT_DIR, "README.md");

if (!fs.existsSync(poolPath)) {
  console.error("Missing reports/news-pool.json. Run fetch-news.mjs first.");
  process.exit(1);
}

const pool = JSON.parse(fs.readFileSync(poolPath, "utf8"));
const poolMap = new Map(pool.map((item) => [item.id, item]));

let catText = "";
if (fs.existsSync(catPath)) {
  catText = fs.readFileSync(catPath, "utf8");
}

const sections = [];
const assignedIds = new Set();

// Extract ## Category Headings and IDs
const sectionRegex = /##\s+([^\n]+)\n([\s\S]*?)(?=(?:\n##|\s*$))/g;
let match;
while ((match = sectionRegex.exec(catText)) !== null) {
  const heading = match[1].trim();
  const body = match[2];
  const ids = (body.match(/\b\d+\b/g) || [])
    .map(Number)
    .filter((id) => poolMap.has(id) && !assignedIds.has(id));

  if (ids.length > 0) {
    ids.forEach((id) => assignedIds.add(id));
    sections.push({
      title: heading,
      articles: ids.map((id) => poolMap.get(id)),
    });
  }
}

// Fallback: If model output yielded fewer than 2 valid categories
if (sections.length < 2) {
  console.warn(
    "[NOTICE] LLM output insufficient or empty. Using deterministic fallback grouping.",
  );
  const sourceGroups = new Map();
  for (const item of pool) {
    let groupName = "General Technology";
    if (item.source === "hacker-news") groupName = "Hacker News Highlights";
    else if (item.source === "lobsters") groupName = "Software & Open Source";
    else if (item.source === "slashdot") groupName = "Tech & Computing";
    else if (item.source === "soylent-news") groupName = "Science & Society";

    if (!sourceGroups.has(groupName)) sourceGroups.set(groupName, []);
    sourceGroups.get(groupName).push(item);
  }

  sections.length = 0;
  for (const [title, articles] of sourceGroups.entries()) {
    sections.push({ title, articles });
  }
} else {
  // If some high-quality articles were unassigned, gather them under "More Highlights" if needed
  const unassigned = pool.filter((item) => !assignedIds.has(item.id));
  if (unassigned.length > 0 && unassigned.length <= 10) {
    sections.push({
      title: "More Highlights",
      articles: unassigned,
    });
  }
}

// Generate canonical README.md
let markdown = `# [News Summary](https://kherrick.github.io/news-summary/)\n\n`;

for (const section of sections) {
  markdown += `## ${section.title}\n\n`;
  for (const article of section.articles) {
    const comments = article.commentsUrl
      ? ` ([comments](${article.commentsUrl}))`
      : "";
    markdown += `* [${article.title}](${article.url})${comments}\n\n`;
  }
}

// Deterministic Verification Sanity Check
const linkCount = (markdown.match(/\* \[/g) || []).length;
const headingCount = (markdown.match(/## /g) || []).length;

if (linkCount < 5 || headingCount < 1) {
  console.error(
    `[ERROR] Verification failed: linkCount=${linkCount}, headingCount=${headingCount}`,
  );
  process.exit(1);
}

fs.writeFileSync(readmePath, markdown.trim() + "\n");
console.log(
  `[SUCCESS] README.md written with ${headingCount} sections and ${linkCount} articles.`,
);
