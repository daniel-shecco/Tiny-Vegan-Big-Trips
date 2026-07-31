import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

/*
  llms.txt — a plain-markdown site summary for AI assistants and crawlers.
  Convention: https://llmstxt.org/
*/
export const GET: APIRoute = async (context) => {
  const site = context.site?.toString().replace(/\/$/, '') ?? '';
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const lines = [
    `# ${SITE_TITLE}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    'We are a vegan family of three from Vienna (Daniel, Dafna, and our young son Luca)',
    'writing honest, field-tested city guides for traveling in Europe with a small vegan',
    'child. Every place we write about, we have actually visited. Guides cover vegan',
    'restaurants and cafés, kid-friendly attractions, stroller accessibility, and an',
    'honest difficulty verdict per city.',
    '',
    '## Guides',
    '',
    ...posts.map(
      (p) =>
        `- [${p.data.title}](${site}/blog/${p.id}/): ${p.data.description}`
    ),
    '',
    '## Pages',
    '',
    `- [About us](${site}/about/): who we are and how we travel`,
    `- [All guides](${site}/blog/)`,
    `- [RSS feed](${site}/rss.xml)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
