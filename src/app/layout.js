// ✅ Adapt22 Full Layout - Upgraded Design
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import ClientWrapper from "./ClientWrapper";
import Script from "next/script";

export const metadata = {
  title: "Adapt22 | AI & Automation for SMBs",
  description: "Smart AI solutions for trades, construction, and service businesses. Book your free consultation now.",
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
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        {/* Header */}
        <header className="fixed w-full z-50 backdrop-blur-lg bg-black/80 border-b border-white/10 shadow-sm">
          <nav className="max-w-screen-xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Adapt22 Logo"
                width={50}
                height={50}
                priority
              />
              <span className="text-2xl font-bold text-primary tracking-tight">Adapt22</span>
            </Link>
            <ul className="hidden md:flex items-center space-x-8 text-base font-medium text-white">
              <li><Link href="/who-we-are" className="hover:text-accent">Who We Are</Link></li>
              <li><Link href="/what-we-do" className="hover:text-accent">What We Do</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-accent">Careers</Link></li>
              <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent">Testimonials</Link></li>
              <li>
                <Link
                  href="/book-a-call"
                  className="bg-primary hover:bg-opacity-80 text-black px-5 py-2 rounded-full font-semibold transition duration-200"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 pt-28 px-6 md:px-10">{children}</main>

        {/* Footer */}
        <footer className="bg-black/70 border-t border-white/10 py-14 text-gray-400 mt-10">
          <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Adapt22</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                AI & automation solutions built for SMBs in the trades, retail, field services, and construction industries. We help businesses implement modern tech — without the headache.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/who-we-are" className="hover:text-accent">Who We Are</Link></li>
                <li><Link href="/what-we-do" className="hover:text-accent">What We Do</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-accent">Careers</Link></li>
                <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
                <li><Link href="/testimonials" className="hover:text-accent">Testimonials</Link></li>
                <li><Link href="/book-a-call" className="hover:text-accent font-semibold">Book a Call</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-accent">Terms of Service</Link></li>
                <li><a href="mailto:jackson@adapt22.ai" className="hover:text-accent">jackson@adapt22.ai</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-xs text-gray-600 mt-10">
            © {new Date().getFullYear()} Adapt22.ai. All rights reserved.
          </div>
        </footer>

        {/* Calendly Floating Button */}
        <ClientWrapper calendlyUrl="https://calendly.com/jackson-adapt22/discoverycall" />
      </body>
    </html>
  );
}
