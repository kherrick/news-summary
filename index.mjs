#!/usr/bin/env node

import { chdir } from "process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { encode } from "html-entities";

import jsonSchema from "./news-summary-schema.json" with { type: "json" };

const MODELS_INFERENCE_AI_AZURE_COM =
  process.env["MODELS_INFERENCE_AI_AZURE_COM"] || null;

function sortByDate(text) {
  // split the text into an array of lines
  const lines = text.trim().split("\n");

  // parse each line and extract the date
  const parsedLines = lines
    .map((line) => {
      const match = line.match(/\[(\d{4}-\d{2}-\d{2}, \d{2}:\d{2}:\d{2})\]/);
      if (match) {
        return {
          date: new Date(match[1]),
          text: line,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  // sort the parsed lines by date in descending order
  parsedLines.sort((a, b) => b.date - a.date);

  // join the sorted lines back into a string
  return parsedLines.map((item) => item.text).join("\n");
}

function filterLinesWithTime(text) {
  const lines = text.split("\n");
  const timeRegex = /\d{2}:\d{2}:\d{2}/;

  return lines.filter((line) => timeRegex.test(line)).join("\n");
}

function filterRecentEntries(textBlob = "", days = 1) {
  const currentDate = new Date();
  const daysAgo = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);

  return textBlob
    .split("\n")
    .filter((entry) => {
      const match = entry.match(/\[(\d{4}-\d{2}-\d{2})/);
      if (match) {
        const entryDate = new Date(match[1]);
        return entryDate > daysAgo;
      }
      return false;
    })
    .join("\n");
}

function useHtmlEntities(html) {
  return encode(html, { level: "xml" });
}

async function getNewsItems() {
  return `
    ${await (
      await fetch("https://kherrick.github.io/hacker-news/README.md")
    ).text()}
    ${await (
      await fetch("https://kherrick.github.io/lobsters/README.md")
    ).text()}
    ${await (
      await fetch("https://kherrick.github.io/slashdot/README.md")
    ).text()}
    ${await (
      await fetch("https://kherrick.github.io/soylent-news/README.md")
    ).text()}
  `;
}

async function getModelOptions(newsLinks) {
  return {
    body: {
      messages: [
        {
          role: "system",
          content: `Rules:

1. You are a news robot that summarizes a list of links and their associated descriptions.
2. Use the following markdown for the top most header in the final output: [News Summary](https://kherrick.github.io/news-summary/)
3. The news items are given to you in date ordered markdown format.
4. Make one section per day, but do not include dates in the section headers.
5. Under each day's section, group each item of news together under a commonly themed sub-section with an appropriate description.
6. While each news item is a string, use valid markdown to include relevant links to articles and their associated comments.
7. Within a news item, do not use links for articles and comments from other news items' article or comment links.
8. You must ONLY RESPOND IN JSON according to the following JSON Schema:

\`\`\`json
${JSON.stringify(jsonSchema)}
\`\`\`
`,
        },
        {
          role: "user",
          content: `
Highlight the most unique and interesting articles from within the bulleted list that follows:

\`\`\`markdown
${sortByDate(filterRecentEntries(filterLinesWithTime(useHtmlEntities(newsLinks)), 5))}
\`\`\`
`,
        },
      ],
      model: "gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
      response_format: { type: "json_object" },
    },
  };
}

export async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dataProjectRoot = join(__dirname);

  chdir(dataProjectRoot);

  let newsLinks = "{}";
  try {
    newsLinks = await getNewsItems();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  const modelOptions = await getModelOptions(newsLinks);

  let finalContent = "";

  if (MODELS_INFERENCE_AI_AZURE_COM !== null) {
    const client = new ModelClient(
      "https://models.inference.ai.azure.com",
      new AzureKeyCredential(MODELS_INFERENCE_AI_AZURE_COM)
    );

    try {
      const response = await client
        .path("/chat/completions")
        .post(modelOptions);

      if (response.status !== "200") {
        throw response.body.error;
      }

      const modelResult = JSON.parse(response.body.choices[0].message.content);

      finalContent = `
${modelResult.heading ? `# ${modelResult.heading}` : ""}

${modelResult.sections
  ?.map(
    (section) => `## ${section.title}

${section.newsItems
  ?.map(
    (newsItem) => `* ${newsItem}
`
  )
  .join("\n")}
`
  )
  .join("\n")}
`;
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  if (finalContent) {
    console.log(finalContent);
  } else {
    console.log(`
# [News Summary](https://kherrick.github.io/news-summary/)

## No content was returned.

`);
  }

  console.log(`
---

## Below are the rules that were sent.

### System content.

${modelOptions.body.messages[0].content}

### User content.

${modelOptions.body.messages[1].content.replace("```markdown", "").replace("```", "")}
`);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
