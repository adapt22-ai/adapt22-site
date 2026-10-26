import "./globals.css";
import ScrollReset from "../components/ScrollReset";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteAnalytics from "../components/Analytics";
const production = process.env.VERCEL_ENV === "production";
export const metadata = {
  metadataBase: new URL("https://www.adapt22.ai"),
  title: {
    default: "adapt22 | Embedded technology leadership",
    template: "%s | adapt22",
  },
  description:
    "Technology leadership embedded in your business. We turn your priorities into a roadmap, lead the team, and take responsibility for technology, AI, data, and business systems.",
  robots: { index: production, follow: production },
  openGraph: {
    type: "website",
    siteName: "adapt22",
    locale: "en_US",
    title: "adapt22 | Built for what comes next.",
    description:
      "A technology leader and delivery team inside your business. Your business priorities, with our team accountable for technology delivery.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-c3.ico", sizes: "any" },
      { url: "/favicon-c3.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-c3.ico",
    apple: "/apple-touch-icon-c3.png",
  },
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollReset />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {production && <SiteAnalytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "adapt22",
              legalName: "adapt22 LLC",
              url: "https://www.adapt22.ai",
              founder: { "@type": "Person", name: "Jackson McConnell" },
              description:
                "Technology consulting, custom software, Salesforce consulting, fractional leadership, AI, modernization, and integrations.",
            }),
          }}
        />
      </body>
    </html>
  );
}
