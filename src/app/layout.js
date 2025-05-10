// ✅ Adapt22 | Unified Layout with GTM, Cleaned Scripts
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/Header";
import { Suspense } from "react";
import AnalyticsWrapper from "../components/AnalyticsWrapper";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adapt22 | AI & Automation for SMBs",
  description: "Smart AI solutions for trades, construction, and service businesses. Book your free consultation now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <Script id="calendly-inline-widget" strategy="lazyOnload">
          {`
            window.addEventListener('load', function() {
              Calendly.initBadgeWidget({
  url: 'https://calendly.com/jackson-adapt22/discoverycall',
  text: 'Book a Call',
  color: '#014E44',       // ✅ New brand primaryDark
  textColor: '#ffffff',
  branding: false
});
            });
          `}
        </Script>

        {/* ✅ Google Tag Manager (HEAD) */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMNN5G7G');
          `}
        </Script>
      </head>

      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-textPrimary font-sans`}>
  {/* ✅ Google Tag Manager (noscript) */}
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-KMNN5G7G"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    ></iframe>
  </noscript>

  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
    <Header />
    <main className="flex-1 pt-32 px-6 md:px-10">{children}</main>

    <footer className="bg-surface border-t border-border text-textPrimary py-8 px-6">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">Adapt22</h3>
          <p className="text-sm leading-relaxed textMuted">
            AI & automation solutions built for SMBs in the trades, retail,
            field services, construction, and medical industries. We help
            businesses implement modern tech — without the headache.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <Link href="/book-a-call" className="hover:text-primaryLight font-semibold">Book a Call</Link>
            <Link href="/demo" className="hover:text-primaryLight font-semibold">Try Our Demo</Link>
            <Link href="/careers" className="hover:text-accent-aqua">Careers</Link>
            <Link href="/who-we-are" className="hover:text-accent-aqua">Who We Are</Link>
            <Link href="/faqs" className="hover:text-accent-aqua">FAQs</Link>
            <Link href="/what-we-do" className="hover:text-accent-aqua">What We Do</Link>
            <Link href="/testimonials" className="hover:text-accent-aqua">Testimonials</Link>
            <Link href="/industries" className="hover:text-accent-aqua">Industries We Serve</Link>
            <Link href="/contact" className="hover:text-accent-aqua">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-accent-aqua">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-accent-aqua">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs textMuted mt-6">
        © {new Date().getFullYear()} Adapt22.ai. All rights reserved.
      </div>
    </footer>

    <ClientWrapper calendlyUrl="https://calendly.com/jackson-adapt22/discoverycall" />
    <Analytics />
    <SpeedInsights />

    <Suspense fallback={null}>
      <AnalyticsWrapper />
    </Suspense>
  </ThemeProvider>
</body>
    </html>
  );
}