import { defineMiddleware } from 'astro/middleware';

const pages = [
  '/',
  '/ongoing-anime',
  '/complete-anime',
  '/genre-list',
  '/jadwal-rilis',
  // tambahkan halaman lain jika perlu
];

export async function GET() {
  const baseUrl = 'https://noginime.com'; // Ganti dengan domainmu

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
