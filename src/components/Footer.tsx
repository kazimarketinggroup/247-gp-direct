import Link from "next/link";
import { footerSections, siteConfig } from "@/lib/site";

const socials = [
  { label: "Twitter", href: "#twitter", path: "M18 4l-12 16M6 4l12 16" },
  { label: "LinkedIn", href: "#linkedin", path: "M6 9v9M6 5v.5M11 18v-5a3 3 0 016 0v5" },
  { label: "Facebook", href: "#facebook", path: "M15 4h-2a3 3 0 00-3 3v3H8v3h2v7M8 13h6" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* 1 col on phones → 2 on tablets → 4 on desktop. */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-base font-bold text-white"
              >
                24
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-pretty text-slate-600">
              {siteConfig.description}
            </p>
            <ul className="mt-5 flex flex-wrap items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:border-teal-600 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d={social.path} />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title} className="min-w-0">
              <h2 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
                {section.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm break-words text-slate-600 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center sm:mt-12 sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 sm:text-sm">
            Regulated by the Care Quality Commission
          </p>
        </div>
      </div>
    </footer>
  );
}
