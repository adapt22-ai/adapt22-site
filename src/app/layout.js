import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteAnalytics from "../components/Analytics";
const production = process.env.VERCEL_ENV === "production";
export const metadata = {
  metadataBase: new URL("https://adapt22.ai"),
  title: {
    default: "adapt22 — Technology that moves with your business",
    template: "%s | adapt22",
  },
  description:
    "Founder-led technology consulting, custom software, applied AI, integrations, and fractional leadership. Build what your next chapter needs.",
  robots: { index: production, follow: production },
  openGraph: {
    type: "website",
    siteName: "adapt22",
    locale: "en_US",
    title: "adapt22 — Built for what comes next.",
    description:
      "Clear direction. Connected systems. Technology that moves with your business.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
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
              url: "https://adapt22.ai",
              email: "jackson@adapt22.ai",
              founder: { "@type": "Person", name: "Jackson McConnell" },
              description:
                "Technology consulting, custom software, fractional leadership, AI, modernization, and integrations.",
            }),
          }}
        />
      </body>
    </html>
  );
}
