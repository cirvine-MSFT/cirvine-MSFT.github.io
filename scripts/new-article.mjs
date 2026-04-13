#!/usr/bin/env node

/**
 * Create a new blog article with frontmatter pre-filled.
 *
 * Usage:
 *   npm run new-article -- "My Article Title"
 *   npm run new-article -- "My Article Title" --video dQw4w9WgXcQ
 *   npm run new-article -- "My Article Title" --tags AI,DevTools
 */

import { writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = resolve(__dirname, "..", "src", "content", "articles");

// Parse args
const args = process.argv.slice(2);
if (args.length === 0 || args[0] === "--help") {
  console.log(`
Usage: npm run new-article -- "My Article Title" [options]

Options:
  --video <youtubeId>   Embed a YouTube video at the top
  --tags  <tag1,tag2>   Comma-separated tags
  --publish             Create as published (default: draft)

Examples:
  npm run new-article -- "Getting Started with Copilot CLI"
  npm run new-article -- "My Demo" --video dQw4w9WgXcQ --tags AI,DevTools
  npm run new-article -- "Quick Post" --publish
`);
  process.exit(0);
}

const title = args[0];
let videoId = "";
let tags = [];
let draft = true;

for (let i = 1; i < args.length; i++) {
  if (args[i] === "--video" && args[i + 1]) {
    videoId = args[++i];
  } else if (args[i] === "--tags" && args[i + 1]) {
    tags = args[++i].split(",").map((t) => t.trim());
  } else if (args[i] === "--publish") {
    draft = false;
  }
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const today = new Date().toISOString().split("T")[0];
const filePath = resolve(articlesDir, `${slug}.mdx`);

if (existsSync(filePath)) {
  console.error(`❌ Article already exists: ${filePath}`);
  process.exit(1);
}

// Build frontmatter
const tagsLine = tags.length > 0
  ? `tags: [${tags.map((t) => `"${t}"`).join(", ")}]`
  : `tags: []`;
const videoLine = videoId ? `youtubeId: "${videoId}"` : "";

const content = `---
title: "${title}"
description: ""
pubDate: ${today}
${tagsLine}
draft: ${draft}
${videoLine}
---

# ${title}

Write your article here. Use Markdown or MDX.
`.replace(/\n{3,}/g, "\n\n");

writeFileSync(filePath, content, "utf-8");
console.log(`✅ Created: src/content/articles/${slug}.mdx`);
console.log(`📝 Edit it, then:`);
if (draft) {
  console.log(`   Preview:  npm run dev`);
  console.log(`   Publish:  Set draft: false, then git push`);
} else {
  console.log(`   Deploy:   git add -A && git commit -m "New: ${title}" && git push`);
}
