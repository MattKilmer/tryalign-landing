"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-3 h-3 rounded-full bg-cream" />
          </div>
          <span className="font-display text-xl font-semibold text-ink tracking-tight">
            Align
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm text-ink-secondary hover:text-primary transition-colors duration-200"
          >
            How it works
          </a>
          <a
            href="#sample"
            className="text-sm text-ink-secondary hover:text-primary transition-colors duration-200"
          >
            Sample
          </a>
          <a
            href="#safety"
            className="text-sm text-ink-secondary hover:text-primary transition-colors duration-200"
          >
            Trust &amp; safety
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-cream text-sm font-medium hover:bg-primary-dark transition-colors duration-200 shadow-[0_2px_8px_rgba(42,157,143,0.25)]"
          >
            Get the app
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-sand transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-xl ${
          menuOpen ? "max-h-64 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-ink-secondary hover:text-primary py-2 transition-colors"
          >
            How it works
          </a>
          <a
            href="#sample"
            onClick={() => setMenuOpen(false)}
            className="text-ink-secondary hover:text-primary py-2 transition-colors"
          >
            Sample
          </a>
          <a
            href="#safety"
            onClick={() => setMenuOpen(false)}
            className="text-ink-secondary hover:text-primary py-2 transition-colors"
          >
            Trust &amp; safety
          </a>
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-cream text-sm font-medium mt-1"
          >
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
}
