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
