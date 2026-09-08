import Link from "next/link";
import Icon from "@/components/Icon";
import { footerSections, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-teal-dark text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Brand block and call card stack on mobile, split from lg. */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <p className="text-lg tracking-tight">
              <span className="text-coral">247</span> GP Direct
            </p>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-white/65">
              Unlimited private GP appointments, 24 hours a day, 365 days a year.
              For you, your family, or your team.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
            className="inline-flex w-full max-w-xs items-center gap-3 rounded-xl bg-white/5 px-4 py-3.5 ring-1 ring-white/10 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:w-auto"
          >
            <span
              aria-hidden
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral"
            >
              <Icon name="phone" className="h-4 w-4 text-white" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] text-white/55">24/7 Booking Line</span>
              <span className="block text-base whitespace-nowrap">
                {siteConfig.phoneDisplay}
              </span>
            </span>
          </a>
        </div>

        {/* 1 col on phones → 2 on tablets → 4 on desktop. */}
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title} className="min-w-0">
              <h2 className="text-[11px] tracking-widest text-coral uppercase">
                {section.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm break-words text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          {/* Registration details and the emergency strapline share one row from lg. */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <p className="text-[11px] leading-relaxed text-pretty text-white/45">
              © {new Date().getFullYear()} 247 GP Direct Ltd. Company No. {siteConfig.companyNumber}
              · Registered in England &amp; Wales · Registered address: {siteConfig.registeredAddress} ·
              ICO Registration: (TBC) · CQC Registration: (TBC)
            </p>
            <p className="text-[11px] leading-relaxed text-white/45 lg:whitespace-nowrap">
              Not for emergencies call 999 or NHS 111
            </p>
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-pretty text-coral">
            This service is not a substitute for emergency medical care. If you
            or someone else is experiencing a medical emergency, call 999
            immediately. For urgent non-emergency medical advice, call NHS 111.
            247 GP Direct provides private GP consultations only and does not
            replace your NHS primary care registration.
          </p>
        </div>
      </div>
    </footer>
  );
}
