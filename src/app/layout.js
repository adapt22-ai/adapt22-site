// ✅ Adapt22 Full Layout - Upgraded Design — Revamped Header + Footer
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ClientWrapper from "./ClientWrapper";
import { ChevronDown } from "lucide-react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Adapt22 | AI & Automation for SMBs",
  description:
    "Smart AI solutions for trades, construction, and service businesses. Book your free consultation now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <Script id="calendly-inline-widget" strategy="lazyOnload">
          {`
    window.addEventListener('load', function() {
      Calendly.initBadgeWidget({
        url: 'https://calendly.com/jackson-adapt22/discoverycall',
        text: 'Book a Call',
        color: '#ffffff',
        textColor: '#000000',
        branding: false
      });
    });
  `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        {/* Header */}
        <header className="fixed w-full z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200 shadow-sm">
          <nav className="max-w-screen-xl mx-auto px-6 py-5 flex items-center space-x-10">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo.png"
                alt="Adapt22 Logo"
                width={50}
                height={50}
                priority
                className="transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-3xl font-extrabold text-primary tracking-tight group-hover:text-accent">
                Adapt22
              </span>
            </Link>

            {/* Divider */}
            <div className="h-10 border-l border-gray-400" />

            {/* Navigation */}
            <ul className="flex items-center space-x-8 text-base font-medium text-gray-800">
              <li>
                <Link href="/who-we-are" className="hover:text-accent">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-accent">
                  What We Do
                </Link>
              </li>

              {/* Dropdown Menu */}
              <li className="relative group">
                <button className="flex items-center space-x-1 hover:text-accent">
                  <span>More</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                <ul className="absolute left-0 mt-5 w-44 bg-white/90 text-black border border-gray-200 rounded shadow-md z-50 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <li>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/testimonials"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/book-a-call"
                  className="ml-6 bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 pt-32 px-6 md:px-10">{children}</main>

        {/* Footer */}
        <footer className="bg-[#0c1b16] border-t border-black text-gray-400 py-12 px-6">
          <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {/* Left: About Text */}
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Adapt22</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                AI & automation solutions built for SMBs in the trades, retail,
                field services, and construction industries. We help businesses
                implement modern tech — without the headache.
              </p>
            </div>

            {/* Middle: Quick Links (2 Columns) */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <Link
                  href="/book-a-call"
                  className="hover:text-accent font-semibold"
                >
                  Book a Call
                </Link>
                <Link href="/careers" className="hover:text-accent">
                  Careers
                </Link>
                <Link href="/who-we-are" className="hover:text-accent">
                  Who We Are
                </Link>
                <Link href="/faqs" className="hover:text-accent">
                  FAQs
                </Link>
                <Link href="/what-we-do" className="hover:text-accent">
                  What We Do
                </Link>
                <Link href="/testimonials" className="hover:text-accent">
                  Testimonials
                </Link>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </div>
            </div>

            {/* Right: Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="hover:text-accent">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-accent">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-xs text-gray-600 mt-10">
            © {new Date().getFullYear()} Adapt22.ai. All rights reserved.
          </div>
        </footer>

        {/* Calendly Floating Button */}
        <ClientWrapper calendlyUrl="https://calendly.com/jackson-adapt22/discoverycall" />

        {/* ✅ Vercel Analytics */}
        <Analytics />

        {/* ✅ Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
