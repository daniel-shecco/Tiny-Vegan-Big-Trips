// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Free Netlify subdomain for now; swap for a custom domain if you buy one
  site: 'https://tinyveganbigtrips.netlify.app',
  integrations: [mdx(), sitemap()],
});
