// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import tailwindcss from '@tailwindcss/vite';

// Draft articles still get a page (handy for previewing an unlisted URL) but must
// stay out of the sitemap so search engines don't index unpublished work.
const articlesDir = resolve('./src/content/articles');
const draftSlugs = readdirSync(articlesDir)
  .filter((file) => file.endsWith('.mdx'))
  .filter((file) => /^draft:\s*true\s*$/m.test(readFileSync(resolve(articlesDir, file), 'utf-8')))
  .map((file) => file.replace(/\.mdx$/, ''));

export default defineConfig({
  site: 'https://caseyirvine.dev',
  output: 'static',
  integrations: [
    // Must come before mdx() so mermaid code fences are transformed first.
    mermaid({
      theme: 'base',
      autoTheme: false,
      enableLog: false,
      mermaidConfig: {
        fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif',
        flowchart: { curve: 'basis', padding: 16, useMaxWidth: true },
        themeVariables: {
          background: '#0B0B1A',
          primaryColor: '#161633',
          primaryTextColor: '#E8E8F0',
          primaryBorderColor: '#00BFFF',
          secondaryColor: '#1E1E3A',
          secondaryTextColor: '#E8E8F0',
          secondaryBorderColor: '#A855F7',
          tertiaryColor: '#111128',
          tertiaryTextColor: '#E8E8F0',
          tertiaryBorderColor: '#39FF14',
          lineColor: '#9090B0',
          textColor: '#E8E8F0',
          mainBkg: '#161633',
          nodeBorder: '#00BFFF',
          clusterBkg: 'rgba(168, 85, 247, 0.06)',
          clusterBorder: 'rgba(168, 85, 247, 0.35)',
          edgeLabelBackground: '#0B0B1A',
          titleColor: '#E8E8F0',
          fontSize: '15px',

          // Sequence diagram specifics
          actorBkg: '#161633',
          actorBorder: '#00BFFF',
          actorTextColor: '#E8E8F0',
          actorLineColor: '#00BFFF',
          signalColor: '#9090B0',
          signalTextColor: '#E8E8F0',
          noteBkgColor: '#231640',
          noteTextColor: '#E8E8F0',
          noteBorderColor: '#A855F7',
          labelBoxBkgColor: '#161633',
          labelBoxBorderColor: '#A855F7',
          labelTextColor: '#E8E8F0',
          loopTextColor: '#E8E8F0',
          activationBkgColor: '#1E1E3A',
          activationBorderColor: '#A855F7',
          sequenceNumberColor: '#0B0B1A',
        },
      },
    }),
    mdx(),
    sitemap({
      filter: (page) => !draftSlugs.some((slug) => page.endsWith(`/articles/${slug}/`)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
