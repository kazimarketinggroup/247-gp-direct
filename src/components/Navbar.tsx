"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Collapse the mobile panel if the viewport grows past the lg breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpen(false);
        setExpanded(null);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      {/* Utility bar — hidden on phones where space is tight. */}
      <div className="hidden bg-brand-teal text-white md:block">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`tel:${siteConfig.bookingLine.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              <span>24/7 booking line: {siteConfig.bookingLine}</span>
            </a>
            <span className="hidden text-white/70 lg:inline">
              {siteConfig.membersNote}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#faqs" className="transition-opacity hover:opacity-80">
              FAQs
            </Link>
            <Link href="#contact" className="transition-opacity hover:opacity-80">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-cream/95 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8 lg:py-4"
        >
          <Link
            href="/"
            onClick={closeAll}
            className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            <Image
              src="/images/home/logo.png"
              alt={`${siteConfig.name} home`}
              width={264}
              height={66}
              priority
              className="h-6 w-auto sm:h-7 lg:h-8"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] transition-colors hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral xl:px-3 xl:text-sm",
                    // No bold anywhere, so the current page is marked with a
                    // coral underline rather than a heavier weight.
                    pathname === item.href
                      ? "text-brand-teal underline decoration-coral decoration-2 underline-offset-8"
                      : "text-brand-teal/85",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="chevron-down"
                      className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                      strokeWidth={2}
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full w-60 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="rounded-xl border border-black/5 bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-brand-teal/80 transition-colors hover:bg-cream hover:text-brand-teal"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
              className="hidden items-center gap-1.5 text-sm text-brand-teal transition-opacity hover:opacity-75 lg:inline-flex"
            >
              <Icon name="phone" className="h-4 w-4 text-coral" />
              <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
            </a>

            <Link
              href="/pricing"
              onClick={closeAll}
              className="hidden rounded-md bg-coral px-4 py-2 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:inline-flex lg:px-5"
            >
              Join Now
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-teal/15 text-brand-teal transition-colors hover:bg-brand-teal/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral lg:hidden"
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
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile / tablet panel */}
        <div
          id="mobile-menu"
          className={cn(
            "overflow-hidden border-t border-black/5 bg-cream transition-[max-height] duration-300 ease-in-out lg:hidden",
            open ? "max-h-[calc(100dvh-4rem)] overflow-y-auto" : "max-h-0",
          )}
        >
          <ul className="mx-auto flex w-full max-w-7xl flex-col gap-0.5 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((c) => (c === item.label ? null : item.label))
                      }
                      aria-expanded={expanded === item.label}
                      className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-base text-brand-teal transition-colors hover:bg-brand-teal/5"
                    >
                      <span>{item.label}</span>
                      <Icon
                        name="chevron-down"
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform",
                          expanded === item.label && "rotate-180",
                        )}
                        strokeWidth={2}
                      />
                    </button>
                    <ul
                      className={cn(
                        "overflow-hidden pl-3 transition-[max-height] duration-300",
                        expanded === item.label ? "max-h-64" : "max-h-0",
                      )}
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-2.5 text-sm text-brand-teal/75 transition-colors hover:bg-brand-teal/5 hover:text-brand-teal"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base text-brand-teal transition-colors hover:bg-brand-teal/5",
                      pathname === item.href &&
                        "bg-brand-teal/5 border-l-2 border-coral",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            <li className="mt-2 flex flex-col gap-2 border-t border-black/5 pt-3">
              <a
                href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-base text-brand-teal"
              >
                <Icon name="phone" className="h-4 w-4 text-coral" />
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/pricing"
                onClick={closeAll}
                className="block rounded-md bg-coral px-5 py-3 text-center text-base text-white transition-colors hover:bg-coral-dark"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
