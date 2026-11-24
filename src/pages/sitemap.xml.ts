import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Every static .astro page under src/pages, minus the 404 and dynamic routes.
const pages = import.meta.glob('./**/*.astro');

export const GET: APIRoute = () => {
  const urls = Object.keys(pages)
    .map((file) => file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''))
    .filter((path) => !path.includes('[') && path !== '404')
    .map((path) => new URL(path ? `/${path}/` : '/', site.url).href)
    .sort();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n') +
    `\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
