"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/guide", label: "Guide Alpine" },
  { href: "/natura", label: "Natura" },
  { href: "/storia", label: "Storia" },
  { href: "/agricoltura", label: "Agricoltura" },
  { href: "/cultura", label: "Cultura" },
  { href: "/ripopolamento", label: "Ripopolamento" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neve/95 backdrop-blur-md border-b border-dolomia">
      <div className="container-main py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">
            ⛰️
          </span>
          <div>
            <p className="font-serif text-xl text-abete leading-none">
              Tour Felici
            </p>
            <p className="text-[10px] tracking-[0.2em] text-roccia uppercase">
              Dolomiti · since 1984
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ardesia hover:text-abete transition-colors
                relative after:absolute after:bottom-[-4px] after:left-0
                after:w-0 after:h-0.5 after:bg-ocra after:transition-all
                hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/guide" className="hidden sm:inline-block btn-primary text-sm">
            Prenota
          </Link>
          <button
            className="lg:hidden p-2 text-abete"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <MobileMenu
          items={navItems}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}