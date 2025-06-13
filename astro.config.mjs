import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
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