// ✅ Adapt22 | Unified Layout from GitHub + Green Theme + Demo Link Fixes
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/Header";
import { Suspense } from "react";
import GoogleAnalytics from "../components/GoogleAnalytics";
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <Script id="calendly-inline-widget" strategy="lazyOnload">
          {`
            window.addEventListener('load', function() {
              Calendly.initBadgeWidget({
                url: 'https://calendly.com/jackson-adapt22/discoverycall',
                text: 'Book a Call',
                color: '#19724d',
                textColor: '#ffffff',
                branding: false
              });
            });
          `}
        </Script>

        {/* ✅ Meta domain verification for Facebook/Meta */}
        <meta name="facebook-domain-verification" content="idjvwyb1kbhfmqjt9o98hsopbkgu41" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#f3f5f3] text-gray-900 font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />

          <main className="flex-1 pt-32 px-6 md:px-10">{children}</main>

          <footer className="bg-[#0c1b16] border-t border-black text-gray-300 py-8 px-6">
  <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
    {/* Left: About Text */}
    <div>
      <h3 className="text-white font-bold text-lg mb-2">Adapt22</h3>
      <p className="text-sm leading-relaxed text-gray-400">
        AI & automation solutions built for SMBs in the trades, retail,
        field services, construction, and medical industries. We help
        businesses implement modern tech — without the headache.
      </p>
    </div>

    {/* Middle: Quick Links (2 Columns) */}
    <div>
      <h4 className="text-white font-semibold mb-3">Quick Links</h4>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
        <Link href="/book-a-call" className="hover:text-accent font-semibold">Book a Call</Link>
        <Link href="/demo" className="hover:text-accent font-semibold">Try Our Demo</Link>
        <Link href="/careers" className="hover:text-accent">Careers</Link>
        <Link href="/who-we-are" className="hover:text-accent">Who We Are</Link>
        <Link href="/faqs" className="hover:text-accent">FAQs</Link>
        <Link href="/what-we-do" className="hover:text-accent">What We Do</Link>
        <Link href="/testimonials" className="hover:text-accent">Testimonials</Link>
        <Link href="/industries" className="hover:text-accent">Industries We Serve</Link>
        <Link href="/contact" className="hover:text-accent">Contact</Link>
      </div>
    </div>

    {/* Right: Legal */}
    <div>
      <h4 className="text-white font-semibold mb-3">Legal</h4>
      <ul className="space-y-1 text-sm">
        <li><Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
        <li><Link href="/terms-of-service" className="hover:text-accent">Terms of Service</Link></li>
      </ul>
    </div>
  </div>

  <div className="text-center text-xs text-gray-500 mt-6">
    © {new Date().getFullYear()} Adapt22.ai. All rights reserved.
  </div>
</footer>

          <ClientWrapper calendlyUrl="https://calendly.com/jackson-adapt22/discoverycall" />

          <Analytics />
          <SpeedInsights />

          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-DTF5YPEVHQ" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DTF5YPEVHQ', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
          <Script id="meta-pixel-init" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '910661677810454');
    fbq('track', 'PageView');
  `}
</Script>

<noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src="https://www.facebook.com/tr?id=910661677810454&ev=PageView&noscript=1"
  />
</noscript>

          <Suspense fallback={null}>
            <AnalyticsWrapper />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}