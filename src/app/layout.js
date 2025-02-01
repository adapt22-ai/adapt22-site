// ✅ This file is a **server component** (No "use client" directive)
import "./globals.css"; // ✅ Ensure styles are applied globally
import Image from "next/image";
import ClientWrapper from "./ClientWrapper"; // Floating Calendly Button

export const metadata = {
  title: "Adapt22 | AI Automation",
  description: "AI solutions for SMBs — Without the Headache",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://assets.calendly.com/assets/external/widget.js" defer></script>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>

      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <header className="fixed w-full backdrop-blur-sm bg-white/10 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Adapt22 Logo" width={40} height={40} />
              <span className="text-xl font-bold text-cyan-400">Adapt22</span>
            </a>
            <ul className="flex space-x-6 list-none text-white font-semibold">
              <li><a href="/" className="hover:text-cyan-400">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-400">About</a></li>
              <li><a href="/solutions" className="hover:text-cyan-400">Solutions</a></li>
              <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
              <li><a href="/book-a-call" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md">Book a Call</a></li>
            </ul>
          </nav>
        </header>

        <main className="pt-20 flex-1">{children}</main>

        <footer className="bg-white/5 py-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>© {new Date().getFullYear()} Adapt22 | AI Automation</p>
          </div>
        </footer>

        <ClientWrapper />
      </body>
    </html>
  );
}
