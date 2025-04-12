'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200 shadow-sm">
      <nav className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
  <Image
    src="/logo.png"
    alt="Adapt22 Logo"
    width={50}
    height={50}
    priority
    className="transition-transform duration-200 lg:group-hover:scale-105"
  />
  <span className="text-3xl font-extrabold text-primary tracking-tight lg:group-hover:text-accent">
    Adapt22
  </span>
</Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-8 text-base font-medium text-gray-800">
          <li><Link href="/who-we-are" className="hover:text-accent">Who We Are</Link></li>
          <li><Link href="/what-we-do" className="hover:text-accent">What We Do</Link></li>

          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-accent">
              <span>More</span>
              <ChevronDown size={16} />
            </button>
            <ul className="absolute left-0 mt-5 w-44 bg-white/90 text-black border border-gray-200 rounded shadow-md z-50 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li><Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link></li>
              <li><Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link></li>
              <li><Link href="/faqs" className="block px-4 py-2 hover:bg-gray-100">FAQs</Link></li>
              <li><Link href="/testimonials" className="block px-4 py-2 hover:bg-gray-100">Testimonials</Link></li>
            </ul>
          </li>

          <li>
            <Link href="/book-a-call" className="ml-6 bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition">
              Book a Call
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col space-y-3 p-6 text-base font-medium text-gray-800 w-full">
  <li className="w-full">
    <Link href="/who-we-are" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-accent">
      Who We Are
    </Link>
  </li>
  <li className="w-full">
    <Link href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-accent">
      What We Do
    </Link>
  </li>
  <li className="w-full">
    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-accent">
      Contact
    </Link>
  </li>
  <li className="w-full">
    <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-accent">
      Careers
    </Link>
  </li>
  <li className="w-full">
    <Link href="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-accent">
      FAQs
    </Link>
  </li>
  <li className="w-full">
    <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left hover:text-accent">
      Testimonials
    </Link>
  </li>
  <li className="w-full">
    <Link
      href="/book-a-call"
      onClick={() => setIsMobileMenuOpen(false)}
      className="block text-center bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition mt-3"
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