# cirvine-MSFT.github.io

Personal website and blog for **Casey Irvine** — Software Engineer · Making it up as I go along.

🔗 **Live at [cirvine-msft.github.io](https://cirvine-msft.github.io)**

## Stack

- **[Astro 5](https://astro.build)** — static site generator
- **[Tailwind CSS 4](https://tailwindcss.com)** — styling
- **MDX** — blog articles with component support
- **GitHub Pages** — hosting via GitHub Actions

---

## Quick Start — How to Do Stuff

### 🆕 Create a new article

```sh
npm run new-article -- "My Article Title"
```

This creates a draft MDX file with frontmatter pre-filled. Options:

```sh
# With a YouTube video embedded
npm run new-article -- "My Demo Video" --video dQw4w9WgXcQ

# With tags
npm run new-article -- "AI Tools Roundup" --tags AI,DevTools,Copilot

# Create as published (skip draft stage)
npm run new-article -- "Quick Post" --publish

# All options together
npm run new-article -- "Full Post" --video abc123 --tags AI,DevTools --publish
```

### 👀 Preview locally (see drafts too)

```sh
npm run dev
# Open http://localhost:4321
# Drafts are visible locally but hidden in production
```

### 🚀 Publish a draft article

```sh
npm run publish-article -- my-article-slug
# Sets draft: false, commits, and pushes — live in ~30 seconds
```

To see which drafts are available:
```sh
npm run publish-article
```

### ✏️ Manual workflow (if you prefer)

1. Create `src/content/articles/my-post.mdx`
2. Add frontmatter:
   ```yaml
   ---
   title: "My Post Title"
   description: "A short description."
   pubDate: 2026-04-13
   tags: ["AI", "DevTools"]
   draft: true          # Set false to publish
   youtubeId: "abc123"  # Optional — embeds video at top
   ---
   ```
3. Write content in Markdown/MDX below the frontmatter
4. Preview: `npm run dev`
5. When ready: set `draft: false`, then `git add -A && git commit -m "New post" && git push`

### 🎬 Embed a YouTube video in an article

Add `youtubeId` to any article's frontmatter:

```yaml
youtubeId: "dQw4w9WgXcQ"
```

The video player appears at the top of the article automatically. You can also use the component inline in MDX:

```mdx
import YouTubeEmbed from '../../components/YouTubeEmbed.astro';

<YouTubeEmbed id="dQw4w9WgXcQ" title="My Video" />
```

### 📂 Add a project to the Projects page

Edit `src/pages/projects.astro` and add to the `projects` array:

```js
{
  name: 'My Project',
  description: 'What it does.',
  url: 'https://github.com/cirvine-MSFT/my-project',
  tags: ['TypeScript', 'AI'],
},
```

### 🎥 Add a video to the Videos page

Edit `src/pages/videos.astro` and uncomment/add to the `videos` array:

```js
{
  id: 'dQw4w9WgXcQ',
  title: 'My Video Title',
  description: 'What the video covers.',
},
```

---

## Article Frontmatter Reference

| Field         | Required | Description                                    |
|---------------|----------|------------------------------------------------|
| `title`       | ✅       | Article title                                  |
| `description` | ✅       | Short description (used in cards, SEO, RSS)    |
| `pubDate`     | ✅       | Publication date (`YYYY-MM-DD`)                |
| `tags`        | ❌       | Array of tag strings                           |
| `draft`       | ❌       | `true` = hidden in prod, visible in dev        |
| `youtubeId`   | ❌       | YouTube video ID — embeds at top of article    |

---

## Local Development

```sh
npm install         # First time only
npm run dev         # Dev server at http://localhost:4321
npm run build       # Production build to ./dist/
npm run preview     # Preview production build locally
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages. Takes ~30 seconds.
