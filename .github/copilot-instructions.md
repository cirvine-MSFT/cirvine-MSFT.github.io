# Copilot Instructions for caseyirvine.dev

## About This Site

Personal blog and portfolio for Casey Irvine — a software engineer who creates content about developer tools, workflows, and terminal customization. The site is built with Astro + Tailwind CSS, hosted on GitHub Pages at caseyirvine.dev.

## Voice & Tone

Casey writes like he's talking to a friend who's curious about tech — not lecturing, not dumbing things down, just sharing what works for him.

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

## Technical Details

- **Framework:** Astro with MDX for content files
- **Content location:** `src/content/articles/` — MDX files with frontmatter (title, description, pubDate, tags, draft, youtubeId)
- **Styles:** Tailwind CSS v4, global prose styles in `src/styles/global.css`
- **Available CSS classes:** `.tldr-box` for TL;DR callouts, `.prose` blockquotes for asides/footnotes
- **Formatting:** Use blockquotes (`>`) for asides and footnotes, not italics
- **Tables:** Fully styled in prose — use standard markdown tables freely
- **Profile path references:** Use forward slashes for PowerShell profile paths (cross-platform convention Casey prefers)
