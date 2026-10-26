export default function robots() {
  return process.env.VERCEL_ENV === "production"
    ? {
        rules: { userAgent: "*", allow: "/", disallow: "/api/" },
        sitemap: "https://www.adapt22.ai/sitemap.xml",
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
