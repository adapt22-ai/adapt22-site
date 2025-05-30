// src/app/sitemap.xml/route.js

export async function GET() {
  const urls = [
    "", "who-we-are", "what-we-do", "careers", "faqs", "testimonials",
    "industries", "contact", "book-a-call", "demo", "privacy-policy", "terms-of-service"
  ];

  const currentDate = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (slug) => `
  <url>
    <loc>https://adapt22.ai/${slug === "" ? "" : `${slug}/`}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${slug === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}