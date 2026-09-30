"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#screens", label: "Screens" },
  { href: "/#faq", label: "FAQ" },
];

// Solid white bar: the brandbook allows the primary logo on #FFFFFF only.
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" aria-label="SwapaPost home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/#download"
            className="hidden items-center gap-2 rounded-full bg-swap px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get the app
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy ring-1 ring-navy/15 transition-colors hover:bg-slate-light md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy/10 bg-white px-6 pb-5 pt-3 sm:px-10 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-navy/80 transition-colors hover:bg-slate-light hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-swap px-5 py-2.5 text-sm font-semibold text-navy"
            >
              Get the app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
