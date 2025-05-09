// src/app/robots.txt/route.js
export async function GET() {
  return new Response(
    `User-agent: *
Disallow:

Sitemap: https://adapt22.ai/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}