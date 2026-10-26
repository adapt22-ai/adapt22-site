// A release must never silently publish a disabled contact form.
if (process.env.VERCEL_ENV === "production") {
  const required = [
    "RESEND_API_KEY",
    "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
    "TURNSTILE_SECRET_KEY",
    "UPSTASH_REDIS_REST_URL",
    "UPSTASH_REDIS_REST_TOKEN",
  ];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length)
    throw new Error(
      "Production release blocked: configure contact delivery and abuse prevention. Missing variable names: " +
        missing.join(", "),
    );
}
const redirects = {
  "/what-we-do": "/services",
  "/who-we-are": "/about",
  "/book-a-call": "/contact",
  "/faq": "/approach#questions",
  "/faqs": "/approach#questions",
  "/testimonials": "/approach",
  "/industries": "/services",
  "/careers": "/about",
  "/demo": "/contact",
};
export default {
  poweredByHeader: false,
  async redirects() {
    return Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/images/optimized/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(process.env.VERCEL_ENV !== "production"
            ? [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }]
            : []),
        ],
      },
    ];
  },
};
