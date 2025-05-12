'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg bg-black/70 border-b border-border shadow-sm">
      <nav className="max-w-screen-xl mx-auto px-6 h-[140px] flex items-center justify-between overflow-hidden">
        {/* Logo */}
        <Link href="/" className="group">
  <div className="relative transition-transform duration-200 lg:group-hover:scale-105">
    {/* Primary Dark Logo */}
    <Image
      src="/A22-pD.png"
      alt="Adapt22 Logo PD"
      width={500}
      height={140}
      priority
      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
    />
    {/* Primary Light Logo (overlapping) */}
    <Image
      src="/A22-pL.png"
      alt="Adapt22 Logo PL"
      width={500}
      height={140}
      priority
      className="object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  </div>
</Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-8 text-base font-medium text-textPrimary">
          <li><Link href="/who-we-are" className="hover:text-primaryLight">Who We Are</Link></li>
          <li><Link href="/what-we-do" className="hover:text-primaryLight">What We Do</Link></li>

          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-primaryLight">
              <span>More</span>
              <ChevronDown size={16} />
            </button>
            <ul className="absolute left-0 mt-5 w-52 bg-background/90 text-textPrimary border border-border rounded shadow-md z-50 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link href="/contact" className="block px-4 py-2 hover:bg-surface">Contact</Link></li>
              <li><Link href="/careers" className="block px-4 py-2 hover:bg-surface">Careers</Link></li>
              <li><Link href="/faqs" className="block px-4 py-2 hover:bg-surface">FAQs</Link></li>
              <li><Link href="/testimonials" className="block px-4 py-2 hover:bg-surface">Testimonials</Link></li>
              <li><Link href="/industries" className="block px-4 py-2 hover:bg-surface">Industries We Serve</Link></li>
            </ul>
          </li>

          <li>
            <Link
              href="/demo"
              className="ml-2 bg-primaryDark hover:brightness-110 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Try Our Demo
            </Link>
          </li>
          <li>
            <Link
              href="/book-a-call"
              className="ml-2 bg-primaryLight hover:brightness-110 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Book a Call
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-primaryDark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-md">
          <ul className="flex flex-col space-y-3 p-6 text-base font-medium text-textPrimary w-full">
            <li><Link href="/who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">Who We Are</Link></li>
            <li><Link href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">What We Do</Link></li>
            <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">Contact</Link></li>
            <li><Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">Careers</Link></li>
            <li><Link href="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">FAQs</Link></li>
            <li><Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">Testimonials</Link></li>
            <li><Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-primaryLight">Industries We Serve</Link></li>
            <li>
              <Link
                href="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-primaryLight hover:brightness-110 text-black px-6 py-3 rounded-full font-semibold transition"
              >
                Try Our Demo
              </Link>
            </li>
            <li>
              <Link
                href="/book-a-call"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-primaryDark hover:bg-[#013c35] text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Book a Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}