# cirvine-MSFT.github.io

Personal website and blog for **Casey Irvine** — Software Engineer · Making it up as I go along.

🔗 **Live at [cirvine-msft.github.io](https://cirvine-msft.github.io)**

## Stack

- **[Astro 5](https://astro.build)** — static site generator
- **[Tailwind CSS 4](https://tailwindcss.com)** — styling
- **MDX** — blog articles with component support
- **GitHub Pages** — hosting via GitHub Actions

## Writing an Article

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
3. Preview locally: `npm run dev`
4. Set `draft: false` and push to `main` — deployed automatically

## Local Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages.
