import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteAnalytics from "../components/Analytics";
const production = process.env.VERCEL_ENV === "production";
export const metadata = {
  metadataBase: new URL("https://adapt22.ai"),
  title: {
    default: "adapt22 | Technology consulting, software & Salesforce",
    template: "%s | adapt22",
  },
  description:
    "A technology consulting team for custom software, Salesforce, AI, data, and ongoing leadership. We take responsibility for the work so you can focus on the business.",
  robots: { index: production, follow: production },
  openGraph: {
    type: "website",
    siteName: "adapt22",
    locale: "en_US",
    title: "adapt22 | Built for what comes next.",
    description:
      "A team to plan, build, and manage your technology. Software, Salesforce, AI, and ongoing support.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  manifest: "/site.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {production && <SiteAnalytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "adapt22",
              legalName: "Adapt 22 LLC",
              url: "https://adapt22.ai",
              email: "info@adapt22.ai",
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
