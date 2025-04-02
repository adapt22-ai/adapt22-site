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
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Header */}
        <header className="fixed w-full z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-full">
                <Image
                  src="/logo.png"
                  alt="Adapt22 Logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-cyan-400 tracking-tight">
                Adapt22
              </span>
            </Link>
            <ul className="flex items-center space-x-6 text-sm font-medium text-white text-base">
  <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
  <li><Link href="/about" className="hover:text-cyan-400">About</Link></li>
  <li><Link href="/what-we-do" className="hover:text-cyan-400">What We Do</Link></li>
  <li><Link href="/careers" className="hover:text-cyan-400">Careers</Link></li>
  <li><Link href="/faq" className="hover:text-cyan-400">FAQ</Link></li>
  <li><Link href="/testimonials" className="hover:text-cyan-400">Testimonials</Link></li>
  <li>
    <Link
      href="/book-a-call"
      className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl shadow-sm transition-all duration-200"
    >
      Book a Call
    </Link>
  </li>
</ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-24 px-4 md:px-8">{children}</main>

        {/* Footer */}
        <footer className="bg-white/5 border-t border-white/10 py-10 text-gray-400">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Adapt22</h3>
              <p className="text-sm leading-relaxed">
                AI & automation solutions built for SMBs in the trades, retail, field services, and construction industries.
                We help businesses implement modern tech — without the headache.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-cyan-400">About</Link></li>
                <li><Link href="/what-we-do" className="hover:text-cyan-400">What We Do</Link></li>
                <li><Link href="/careers" className="hover:text-cyan-400">Careers</Link></li>
                <li><Link href="/faq" className="hover:text-cyan-400">FAQ</Link></li>
                <li><Link href="/testimonials" className="hover:text-cyan-400">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400">Contact</Link></li>
                <li><Link href="/book-a-call" className="hover:text-cyan-400 font-semibold">Book a Call</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-cyan-400">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-cyan-400">Terms of Service</Link></li>
                <li><a href="mailto:jackson@adapt22.ai" className="hover:text-cyan-400">jackson@adapt22.ai</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-8">
            © {new Date().getFullYear()} Adapt22.ai. All rights reserved.
          </div>
        </footer>

        {/* Calendly Button */}
        <ClientWrapper calendlyUrl="https://calendly.com/jackson-adapt22/discoverycall" />
      </body>
    </html>
  );
}
