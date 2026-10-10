#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REPORTS_DIR = path.join(ROOT_DIR, "reports");

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const FEEDS = [
  {
    name: "hacker-news",
    url: "https://kherrick.github.io/hacker-news/README.md",
  },
  { name: "lobsters", url: "https://kherrick.github.io/lobsters/README.md" },
  { name: "slashdot", url: "https://kherrick.github.io/slashdot/README.md" },
  {
    name: "soylent-news",
    url: "https://kherrick.github.io/soylent-news/README.md",
  },
];

function cleanUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    // Strip common analytics/feed parameters
    const paramsToDelete = [];
    for (const key of parsed.searchParams.keys()) {
      if (key.startsWith("utm_") || key === "from") {
        paramsToDelete.push(key);
      }
    }
    for (const key of paramsToDelete) {
      parsed.searchParams.delete(key);
    }
    return parsed.toString();
  } catch {
    return rawUrl.trim();
  }
}

async function fetchFeed(feed) {
  const articles = [];
  try {
    const res = await fetch(feed.url, {
      headers: { "User-Agent": "news-summary-bot/1.0" },
    });
    if (!res.ok) {
      console.warn(`[WARN] Failed to fetch ${feed.name}: HTTP ${res.status}`);
      return articles;
    }
    const text = await res.text();
    const lines = text.split("\n");

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("*")) continue;

      // Match: * [date](commentsUrl) - [title](url)
      const match = trimmed.match(
        /^\*\s*\[([^\]]+)\]\(([^)]+)\)\s*-\s*\[([^\]]+)\]\(([^)]+)\)/,
      );
      if (match) {
        const [, dateStr, feedLink, rawTitle, articleUrl] = match;
        const cleanedArticleUrl = cleanUrl(articleUrl);
        const cleanedFeedLink = cleanUrl(feedLink);

        articles.push({
          title: rawTitle.trim(),
          url: cleanedArticleUrl,
          commentsUrl:
            cleanedFeedLink !== cleanedArticleUrl ? cleanedFeedLink : null,
          source: feed.name,
          dateStr: dateStr.trim(),
        });
      }
    }
  } catch (err) {
    console.warn(`[WARN] Error fetching ${feed.name}:`, err.message);
  }
  return articles;
}

async function main() {
  console.log("Fetching news feeds...");
  const results = await Promise.all(FEEDS.map(fetchFeed));

  const allArticles = [];
  const seenUrls = new Set();
  const seenTitles = new Set();

  // Round-robin merge across sources to ensure diverse representation
  const maxPerFeed = Math.max(...results.map((r) => r.length), 0);
  for (let i = 0; i < maxPerFeed; i++) {
    for (const feedArticles of results) {
      if (i < feedArticles.length) {
        const item = feedArticles[i];
        const normalizedUrl = item.url.toLowerCase();
        const normalizedTitle = item.title
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");

        if (!seenUrls.has(normalizedUrl) && !seenTitles.has(normalizedTitle)) {
          seenUrls.add(normalizedUrl);
          seenTitles.add(normalizedTitle);
          allArticles.push(item);
        }
      }
    }
  }

  // Cap at top 45 articles to ensure fast CPU inference and compact prompt (~600 tokens)
  const candidateArticles = allArticles.slice(0, 45).map((article, idx) => ({
    id: idx + 1,
    ...article,
  }));

  const poolPath = path.join(REPORTS_DIR, "news-pool.json");
  fs.writeFileSync(poolPath, JSON.stringify(candidateArticles, null, 2) + "\n");
  console.log(
    `Saved ${candidateArticles.length} candidate articles to ${poolPath}`,
  );

  // Format compact prompt input: ID: Title
  const promptLines = candidateArticles.map((a) => `${a.id}: ${a.title}`);
  const promptInputPath = path.join(REPORTS_DIR, "news-prompt-input.txt");
  fs.writeFileSync(promptInputPath, promptLines.join("\n") + "\n");
  console.log(`Saved prompt input to ${promptInputPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
