"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile panel is open so the page behind stays put.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the panel if the viewport grows past the lg breakpoint while it is open.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
      >
        <Link
          href="#home"
          className="flex min-w-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 sm:gap-2.5"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white sm:h-9 sm:w-9 sm:text-base"
          >
            24
          </span>
          <span className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop links — hidden below lg where the hamburger takes over. */}
        <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 xl:text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#book"
            className="hidden rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:inline-flex lg:px-5 xl:text-base"
          >
            Book now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 lg:hidden"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile / tablet panel. Max-height keeps it scrollable on short landscape screens. */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-[calc(100dvh-3.5rem)] overflow-y-auto" : "max-h-0",
        )}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <Link
              href="#book"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-teal-600 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
