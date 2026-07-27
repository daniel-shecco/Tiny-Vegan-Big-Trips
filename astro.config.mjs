// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Swap this for your real domain once registered
  site: 'https://tinyveganbigtrips.com',
  integrations: [mdx(), sitemap()],
});
