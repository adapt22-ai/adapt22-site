// ✅ This file is a **server component** (No "use client" directive)
import "./globals.css"; // Ensure the correct path
import Image from "next/image"; // Import Next.js image optimization
import ClientWrapper from "./ClientWrapper"; // Ensure this file exists!

// 1) Metadata for SEO and browser tab title
export const metadata = {
  title: "Adapt22 | AI Automation",
  description: "AI solutions for SMBs — Without the Headache",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Calendly script for faster loading */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>

      <body className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="fixed w-full backdrop-blur-sm bg-white/10 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Adapt22 Logo" width={40} height={40} />
              <span className="text-xl font-bold text-cyan-400">Adapt22</span>
            </a>
            <ul className="flex space-x-6 list-none text-white font-semibold">
              <li><a href="/" className="hover:text-cyan-400 transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-400 transition-colors duration-200">About</a></li>
              <li><a href="/solutions" className="hover:text-cyan-400 transition-colors duration-200">Solutions</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
              <li><a href="/book-a-call" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors duration-200">Book a Call</a></li>
            </ul>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="pt-20 flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-white/5 py-6 mt-10 border-t border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Adapt22 | AI Automation – Without the Headache
            </p>
          </div>
        </footer>

        {/* Floating Calendly Button (Now correctly implemented) */}
        <ClientWrapper calendlyUrl="https://calendly.com/jackson-adapt22/discoverycall" />
      </body>
    </html>
  );
}
