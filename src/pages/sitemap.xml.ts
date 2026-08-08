const PAGE_PATHS = [
  '/ja/',
  '/en/',
  '/ja/brand/',
  '/en/brand/',
  '/ja/franchise/',
  '/en/franchise/',
  '/ja/contact/',
  '/en/contact/',
  '/ja/privacy/',
  '/en/privacy/',
  '/ja/cookie/',
  '/en/cookie/',
];

function toUrl(origin: string, path: string) {
  return `${origin}${path}`;
}

export async function GET({ url }: { url: URL }) {
  const origin = url.origin;
  const now = new Date().toISOString();

  const entries = PAGE_PATHS.map((path) => {
    return `<url><loc>${toUrl(origin, path)}</loc><lastmod>${now}</lastmod></url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
