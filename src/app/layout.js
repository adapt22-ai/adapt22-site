// layout.js

// 1) Next.js can use this metadata for SEO, tab title, etc.
export const metadata = {
  title: "Adapt22 | AI Automation",
  description: "AI solutions for SMBs — Without the Headache",
};

// 2) This is the RootLayout component that wraps every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* HEADER (Navigation) */}
        <header className="fixed w-full backdrop-blur-sm bg-white/10 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Left side: your brand name or logo */}
            <div className="text-xl font-bold text-cyan-400">
              Adapt22
            </div>

            {/* Right side: nav links */}
            <ul className="flex space-x-6 list-none text-white font-semibold">
              <li>
                <a href="/" className="hover:text-cyan-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-cyan-400">
                  About
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-cyan-400">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* MAIN CONTENT (children) */}
        {/* pt-20 so content isn't hidden behind the fixed header */}
        <main className="pt-20 flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-white/5 py-6 mt-10">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Adapt22 | AI Automation – Without the Headache
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
