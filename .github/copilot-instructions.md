# Copilot Instructions for caseyirvine.dev

## About This Site

Personal blog and portfolio for Casey Irvine — a software engineer who creates content about developer tools, workflows, and terminal customization. The site is built with Astro + Tailwind CSS, hosted on GitHub Pages at caseyirvine.dev.

## Voice & Tone

Casey writes like he's talking to a friend who's curious about tech — not lecturing, not dumbing things down, just sharing what works for him. He's an elder millennial, so his conversational tone, humor, and cultural references tend to land in that era — think late-90s/2000s internet culture, growing up with AIM and LAN parties, watching technology go from "novel" to "everywhere."

### Do

- **Be conversational and direct.** First person, casual. "I've been using this for a while and honestly it's great" over "This tool provides significant productivity gains."
- **Be self-aware and a little self-deprecating.** Casey doesn't position himself as an authority — more like someone figuring things out and sharing what he finds. "Making it up as I go along" is literally his tagline.
- **Use personal anecdotes.** Tie things back to real experiences — a moment in a presentation, something a senior dev showed him, a problem he actually ran into.
- **Be encouraging without being preachy.** "If this seems overwhelming, just start with one thing" — not "You NEED to do this."
- **Keep it accessible.** Assume the reader might be new to the CLI or not in a traditional dev role. Briefly explain terms without being condescending.
- **Use modern, casual language.** "Vibe session" over "yak-shaving." Casey's voice is current, not steeped in old-school developer jargon.
- **Show real examples from actual config.** Casey's blog posts use real snippets from his personal setup, not hypothetical code. Reference the personal-config repo at `X:\code\work\personal-config` for actual files.
- **End with a nudge, not a lecture.** Challenges, things to try, "leave a comment" — give people something to do, not a homework assignment.

### Don't

- Don't use overly literary or poetic language ("acts of craft", "the crucible of experience").
- Don't use niche developer idioms that would alienate newcomers ("yak-shaving", "bikeshedding") without explaining them.
- Don't write long, dense paragraphs. Keep things scannable.
- Don't be a hype machine. Casey is genuine — he likes tools because they actually help, not because they're trendy.
- Don't assume the reader is a hardcore terminal user. Many readers are discovering the CLI for the first time through tools like Copilot CLI.

## Content Structure

Blog posts on this site typically follow this pattern:

1. **TL;DR callout** — A short summary near the top so skimmers get the core message. Use the `tldr-box` div class.
2. **Personal hook** — Why Casey cares about this topic, often tied to a real experience.
3. **Practical walkthrough** — Real config snippets, directory structures, actual commands. Not abstract advice.
4. **Tools/resources table** — When mentioning multiple tools, use a clean table with links.
5. **Challenge or call to action** — Give the reader something concrete to try.
6. **Closing thought** — Short, personal, ties back to the opening theme.

### Video Companion Posts

Many posts are companions to YouTube videos. For these:
- Set `youtubeId` in frontmatter (auto-embeds via the layout).
- The post should go deeper than the video, not just transcribe it.
- Reference the video naturally: "In the video I showed X, but here's a bit more detail on how that works."

## SRT-to-Blog Post Workflow

Casey's standard content pipeline: record a video → export an SRT transcript from Clipchamp → produce three artifacts in order. This workflow is triggered when Casey attaches an SRT file and asks for a blog post (or says something like "new video post" or "SRT workflow").

### The Three Artifacts

Produce these in order. Casey needs the YouTube metadata first so the video can upload while we work on the blog.

1. **YouTube title & description** — deliver immediately
2. **Blog post** (MDX file) — the main deliverable
3. **LinkedIn post** — deliver after Casey confirms the blog is published

### SRT Handling

- SRT files contain timestamped subtitle text. Strip the sequence numbers and timestamps to extract the raw spoken content.
- The transcript is **source material**, not content to copy. Never paste transcript blocks verbatim into the blog post.
- Read through the full transcript to understand the arc, key topics, and any anecdotes before writing anything.

### Artifact 1: YouTube Title & Description (Deliver First)

Analyze the SRT to identify the core topic and key takeaways, then produce:

- **Title:** Concise, engaging, in Casey's casual voice. Not clickbait — genuine and descriptive. Look at titles of existing posts for the vibe.
- **Description:** Brief summary (2-3 sentences), key topics covered, a placeholder blog link (derive the slug from the title in kebab-case: `https://caseyirvine.dev/articles/[slug]`), and Casey's social links:
  - GitHub: https://github.com/cirvine-MSFT
  - YouTube: https://youtube.com/@CaseyIrvine
  - LinkedIn: https://linkedin.com/in/caseyirvine
  - Blog: https://caseyirvine.dev
- **Chapters (optional):** Only include YouTube chapters if the transcript has clear topic shifts. Use section-level timestamps, not every subtitle boundary. YouTube requires: first chapter at `0:00`, at least 3 chapters, each at least 10 seconds.

Deliver this first so Casey can paste it into YouTube while the upload runs.

### Artifact 2: Blog Post

#### Content Transformation

- Follow all **Voice & Tone** and **Content Structure** guidelines above — they apply in full.
- The post is a **companion** to the video, not a transcript. It should stand on its own for someone who didn't watch.
- **Go deeper** on every substantive topic mentioned in the video:
  - Add code examples, config snippets, or commands when the topic benefits from them.
  - Link to official documentation for every tool, library, API, or technology mentioned.
  - For conceptual topics, deepen with concrete workflows, comparisons, or real-world examples instead of inventing code.
- Reference the video naturally: "In the video I walked through X — here's the deeper dive on how that actually works."
- Pull anecdotes and personal moments from the transcript for the personal hook and closing sections.
- Ignore filler words, repeated captions, CTA/outro text, and transcription artifacts from the SRT — focus on the substantive content.

#### Fact-Checking Protocol

This is critical — the blog post serves as a way to correct or refine anything Casey said off-the-cuff in the video.

- **Actively use web search** to verify every technical claim, tool name, URL, version number, command syntax, and API detail mentioned in the transcript.
- If something in the transcript is **wrong or imprecise**, silently correct it in the blog post. Don't call out the error — just present the right information. The blog is the "corrected record."
- If a claim **cannot be verified** or is uncertain, flag it with an HTML comment: `<!-- VERIFY: [what needs checking] -->` so Casey can review.
- **Verify all URLs** link to the right resources and are not dead.
- Check that code examples are syntactically correct and use current APIs/syntax.

#### Frontmatter Defaults

Always generate posts with these defaults:

```yaml
---
title: "[drafted from video content — concise and punchy]"
description: "[1-2 sentence hook for SEO and social cards]"
pubDate: [today's date, YYYY-MM-DD format]
tags: ["infer from content, match existing tag conventions"]
draft: true
youtubeId: "[ask Casey if not provided — omit this field entirely until a real ID is available]"
---
```

- `draft: true` **always** — Casey reviews and publishes manually.
- `youtubeId` — ask for it if Casey hasn't provided it. **Omit the field entirely** from frontmatter until a real YouTube ID is available (a placeholder string would render a broken embed).
- `tags` — look at existing posts for conventions (e.g., "Copilot CLI", "Developer Tools", "Terminal").
- **Filename:** Derive from the title in kebab-case (e.g., "My Cool Post" → `my-cool-post.mdx`). The filename becomes the URL slug.

#### Structure Checklist

Every generated post must include:

- [ ] TL;DR callout using `<div class="tldr-box">` — summarize the core message in 2-3 sentences
- [ ] Personal hook — pull from anecdotes in the transcript or Casey's experience
- [ ] Practical walkthrough sections — the meat of the post, going deeper than the video
- [ ] Tools/resources table (if multiple tools or resources are mentioned)
- [ ] Challenge or call-to-action — give the reader something concrete to try
- [ ] Closing thought — short, personal, ties back to the opening theme

Note: The YouTube embed is handled automatically by the layout when `youtubeId` is in frontmatter — no need to import or use the `YouTubeEmbed` component in the MDX file.

### Artifact 3: LinkedIn Post (Deliver Last)

Deliver this when Casey says the blog is published and provides the URL (or confirms the slug).

- Short, punchy post in Casey's conversational voice
- Highlight 1-2 key takeaways or an interesting hook from the post
- Include the blog URL
- Add relevant hashtags (e.g., #DevTools, #GitHubCopilot, #Terminal, #SoftwareEngineering)
- Keep it to a few lines — LinkedIn posts that perform well are scannable, not essays

### Quality Gates

Before delivering **YouTube metadata:**
- [ ] Title is engaging and matches Casey's voice (not clickbait)
- [ ] Description includes blog link placeholder with correct slug
- [ ] Chapters (if included) start at `0:00` and have at least 3 entries

Before delivering **blog post:**
- [ ] All documentation links verified via web search and working
- [ ] Technical claims fact-checked against current sources
- [ ] No verbatim transcript blocks — everything rewritten in Casey's blog voice
- [ ] Code examples syntactically correct and using current APIs
- [ ] Frontmatter complete with `draft: true`
- [ ] `youtubeId` either set to a real ID or omitted entirely (no placeholder strings)

Before delivering **LinkedIn post:**
- [ ] Includes the actual published blog URL (not a placeholder)
- [ ] Hashtags are relevant to the content
- [ ] Tone matches Casey's conversational LinkedIn voice

## Technical Details

- **Framework:** Astro with MDX for content files
- **Content location:** `src/content/articles/` — MDX files with frontmatter (title, description, pubDate, tags, draft, youtubeId)
- **Styles:** Tailwind CSS v4, global prose styles in `src/styles/global.css`
- **Available CSS classes:** `.tldr-box` for TL;DR callouts, `.prose` blockquotes for asides/footnotes
- **Formatting:** Use blockquotes (`>`) for asides and footnotes, not italics
- **Tables:** Fully styled in prose — use standard markdown tables freely
- **Profile path references:** Use forward slashes for PowerShell profile paths (cross-platform convention Casey prefers)
