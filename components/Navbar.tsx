'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-abete-dark/90 backdrop-blur-md py-3 shadow-alpine-lg border-b border-white/10'
          : 'bg-gradient-to-b from-abete-dark/80 via-abete-dark/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/icon.svg"
              alt="Logo Tour Felici"
              className="w-10 h-10 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide block leading-none">
                Tour Felici
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ocra-light font-medium block mt-1">
                Dolomiti · since 1984
              </span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-dolomia-light">
            <Link
              href="/"
              className="text-white hover:text-ocra transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-ocra"
            >
              Home
            </Link>
            <Link
              href="#servizi-ambientali"
              className="hover:text-ocra transition-colors py-1"
            >
              Servizi per l'Ambiente
            </Link>
            <Link
              href="/guide-alpine"
              className="hover:text-ocra transition-colors py-1"
            >
              Guide Alpine
            </Link>
            <Link
              href="#pilastri"
              className="hover:text-ocra transition-colors py-1"
            >
              I 6 Pilastri
            </Link>
            <Link
              href="#sostenibilita"
              className="hover:text-ocra transition-colors py-1"
            >
              Trasparenza Green
            </Link>
            <Link
              href="#newsletter"
              className="hover:text-ocra transition-colors py-1"
            >
              Bollettino
            </Link>
          </nav>

          {/* Actions & Language Selector */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center rounded-full border border-white/20 px-2 py-1 text-xs text-dolomia-light bg-black/20">
              <span className="font-bold text-ocra px-1.5 cursor-pointer">IT</span>
              <span className="text-white/40">|</span>
              <span className="hover:text-white px-1.5 cursor-pointer transition-colors">DE</span>
              <span className="text-white/40">|</span>
              <span className="hover:text-white px-1.5 cursor-pointer transition-colors">EN</span>
            </div>

            <Link
              href="/guide-alpine"
              className="bg-ocra hover:bg-ocra-light text-abete-dark font-semibold text-xs uppercase tracking-wider py-2.5 px-5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Esperienze in Quota</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 pb-4 bg-abete-dark/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white font-medium hover:text-ocra transition-colors"
            >
              Home
            </Link>
            <Link
              href="#servizi-ambientali"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-dolomia-light hover:text-ocra transition-colors"
            >
              Servizi per l'Ambiente
            </Link>
            <Link
              href="/guide-alpine"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-dolomia-light hover:text-ocra transition-colors"
            >
              Guide Alpine
            </Link>
            <Link
              href="#pilastri"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-dolomia-light hover:text-ocra transition-colors"
            >
              I 6 Pilastri
            </Link>
            <Link
              href="#sostenibilita"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-dolomia-light hover:text-ocra transition-colors"
            >
              Trasparenza Green
            </Link>
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-xs text-dolomia">Lingua: IT / DE / EN</span>
              <Link
                href="/guide-alpine"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-ocra text-abete-dark font-semibold text-xs py-2 px-4 rounded-full"
              >
                Guide Alpine
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
