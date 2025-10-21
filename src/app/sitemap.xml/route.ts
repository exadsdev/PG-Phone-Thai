// app/sitemap.xml/route.ts
const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pgphonethai.shop';

export async function GET() {
  const urls = [
    '', 'about', 'contact',
    'policies/privacy',
    'policies/terms',
    'policies/refund-shipping'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `<url><loc>${BASE}/${path}</loc><changefreq>weekly</changefreq><priority>${path ? '0.6' : '0.8'}</priority></url>`).join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
