"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, company } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-digital-blue-100/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-digital-blue-500">
          {company.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text-primary hover:text-digital-blue-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/waitlist" className="text-sm font-medium text-text-primary hover:text-digital-blue-500">
            Sign In
          </Link>
          <Link
            href="/waitlist"
            className="rounded-lg bg-digital-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-digital-blue-600 transition-colors"
          >
            Join Private Beta
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-digital-blue-100 bg-white px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-text-primary py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-lg bg-digital-blue-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Join Private Beta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
