"use client";
import Link from "@/components/RouteLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Mark from "./Mark";
const links = [
  ["Services", "/services"],
  ["Our approach", "/approach"],
  ["About", "/about"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    function key(e) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="adapt22 home">
        <Mark />
        <span>adapt22</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
        onClick={() => setOpen(false)}
      >
        {links.map(([label, href]) => (
          <Link
            href={href}
            key={href}
            aria-current={path.startsWith(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nav-cta"
          aria-current={path === "/contact" ? "page" : undefined}
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
