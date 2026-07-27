# Tiny Vegan, Big Trips 🌱✈️

A blog about traveling the world with a vegan toddler, built with
[Astro](https://astro.build).

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally         |

## Writing a post

Add a Markdown file to `src/content/blog/`. Frontmatter:

```yaml
---
title: 'Post title'
description: 'One-sentence summary (used in cards, SEO, and RSS).'
pubDate: '2026-07-27'
heroImage: '/heroes/your-image.jpg'   # optional — drop images in public/
destination: 'Lisbon, Portugal'        # optional — shown as an eyebrow label
tags: ['destination guide', 'europe'] # optional
---
```

The filename becomes the URL: `lisbon-guide.md` → `/blog/lisbon-guide/`.

## Before going live (checklist)

- [ ] Register the domain and update `site` in `astro.config.mjs`
- [ ] Replace placeholder social links in `src/components/Footer.astro`
- [ ] Hook the newsletter form (`src/components/Newsletter.astro`) to a real
      provider (Kit, Buttondown, MailerLite…)
- [ ] Replace the SVG hero placeholders in `public/heroes/` with real photos
- [ ] Write a real About page (`src/pages/about.astro`)
- [ ] Deploy: push to GitHub, connect to Netlify / Vercel / Cloudflare Pages
      (all have free tiers; zero-config for Astro)

## What's included

- Home page with hero + latest guides grid
- Blog archive and individual post pages
- About page skeleton
- RSS feed (`/rss.xml`) and sitemap (auto-generated)
- Open Graph / social sharing meta tags
- Newsletter signup section (placeholder, wired to nothing yet)
- Content collections with typed frontmatter (title, destination, tags…)
