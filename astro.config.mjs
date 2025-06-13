import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki', // Or 'prism' if you prefer
    shikiConfig: {
      theme: 'github-dark', // Choose your preferred Shiki theme
      wrap: false, // Optional: true to wrap long lines, false to scroll
    },
    // remarkPlugins: [], // Add remark plugins here
    // rehypePlugins: [], // Add rehype plugins here
  },
  site: 'https://your-domain.com',
  integrations: [
    react(),
    tailwind(),
    mdx(),
    sitemap()
  ],
  output: 'static',
  image: {
    domains: ['images.pexels.com'],
  }
});