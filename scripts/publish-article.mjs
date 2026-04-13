#!/usr/bin/env node

/**
 * Publish a draft article by setting draft: false and committing.
 *
 * Usage:
 *   npm run publish-article -- hello-world
 *   npm run publish-article -- my-article-slug
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { resolve, dirname, basename } from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = resolve(__dirname, "..", "src", "content", "articles");

const slug = process.argv[2];

if (!slug || slug === "--help") {
  console.log(`
Usage: npm run publish-article -- <slug>

Publishes a draft article by setting draft: false, committing, and pushing.

Available drafts:`);
  const files = readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const content = readFileSync(resolve(articlesDir, file), "utf-8");
    if (/draft:\s*true/i.test(content)) {
      console.log(`  ${basename(file, ".mdx")}`);
    }
  }
  process.exit(0);
}

const filePath = resolve(articlesDir, `${slug}.mdx`);
let content;
try {
  content = readFileSync(filePath, "utf-8");
} catch {
  console.error(`❌ Not found: src/content/articles/${slug}.mdx`);
  process.exit(1);
}

if (!/draft:\s*true/i.test(content)) {
  console.log(`ℹ️  Already published: ${slug}`);
  process.exit(0);
}

// Flip draft to false
content = content.replace(/draft:\s*true/i, "draft: false");
writeFileSync(filePath, content, "utf-8");

console.log(`✅ Published: ${slug}`);
console.log(`🚀 Committing and pushing...`);

try {
  execSync(`git add "${filePath}"`, { stdio: "inherit" });
  execSync(`git commit -m "Publish: ${slug}"`, { stdio: "inherit" });
  execSync(`git push`, { stdio: "inherit" });
  console.log(`\n🎉 Live at: https://cirvine-msft.github.io/articles/${slug}`);
} catch (err) {
  console.error(`\n⚠️  Draft updated but git push failed. Push manually.`);
}
