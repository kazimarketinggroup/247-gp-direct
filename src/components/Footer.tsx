import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { footerSections, siteConfig } from "@/lib/site";

export default function Footer() {
  const serviceSection = footerSections.find((s) => s.title === "SERVICE");
  const businessSection = footerSections.find((s) => s.title === "BUSINESS");
  const companySection = footerSections.find((s) => s.title === "COMPANY");
  const legalSection = footerSections.find((s) => s.title === "LEGAL");

  return (
    <footer className="mt-auto bg-brand-teal-dark text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Brand block and call card stack on mobile, split from lg. */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              <Logo variant="dark" />
            </Link>
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
          {/* SERVICE */}
          {serviceSection && (
            <nav
              aria-label={serviceSection.title}
              className="min-w-0 lg:col-start-1 lg:row-start-1 lg:row-span-2"
            >
              <h2 className="text-[11px] tracking-widest text-coral uppercase">
                {serviceSection.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {serviceSection.links.map((link) => (
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
          )}

          {/* BUSINESS */}
          {businessSection && (
            <nav
              aria-label={businessSection.title}
              className="min-w-0 lg:col-start-2 lg:row-start-1"
            >
              <h2 className="text-[11px] tracking-widest text-coral uppercase">
                {businessSection.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {businessSection.links.map((link) => (
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
          )}

          {/* COMPANY */}
          {companySection && (
            <nav
              aria-label={companySection.title}
              className="min-w-0 lg:col-start-3 lg:row-start-1"
            >
              <h2 className="text-[11px] tracking-widest text-coral uppercase">
                {companySection.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {companySection.links.map((link) => (
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
          )}

          {/* LEGAL */}
          {legalSection && (
            <nav
              aria-label={legalSection.title}
              className="min-w-0 lg:col-start-4 lg:row-start-1 lg:row-span-2"
            >
              <h2 className="text-[11px] tracking-widest text-coral uppercase">
                {legalSection.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {legalSection.links.map((link) => (
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
          )}

          {/* Trust & Assurance Badges */}
          <div className="sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:self-end pt-2 sm:pt-4 lg:pt-0">
            <div className="flex flex-wrap items-center gap-3">
              {/* Badge 1: GMC Registered Doctors */}
              <div
                title="GMC Registered Doctors"
                className="flex h-10 items-center justify-center rounded-lg bg-[#ced4d5] px-3.5 transition-opacity hover:opacity-95"
              >
                <Image
                  src="/images/home/gmc-registered-transparent.png"
                  alt="GMC Registered Doctors"
                  width={112}
                  height={28}
                  className="h-6 w-auto object-contain"
                />
              </div>

              {/* Badge 2: ICO Registered */}
              <div
                title="ICO Registered"
                className="flex h-10 items-center justify-center rounded-lg bg-[#ced4d5] px-4 transition-opacity hover:opacity-95"
              >
                <Image
                  src="/images/home/ico-registered.png"
                  alt="ICO Registered"
                  width={34}
                  height={22}
                  className="h-[18px] w-auto object-contain"
                />
              </div>

              {/* Badge 3: Fully qualified UK GPs */}
              <div className="flex h-10 items-center rounded-lg bg-[#ced4d5] px-3.5 text-left">
                <span className="text-[11px] font-semibold leading-[1.25] text-brand-teal-dark">
                  Fully qualified<br />UK GPs
                </span>
              </div>

              {/* Badge 4: GMC-registered UK GPs */}
              <div className="flex h-10 items-center rounded-lg bg-[#ced4d5] px-3.5 text-left">
                <span className="text-[11px] font-semibold leading-[1.25] text-brand-teal-dark">
                  GMC-registered<br />UK GPs
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          {/* Registration details and the emergency strapline share one row from lg. */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <p className="text-[11px] leading-relaxed text-pretty text-white/45">
              © {new Date().getFullYear()} 247 GP Direct Ltd. Company No. {siteConfig.companyNumber}
              · Registered in England &amp; Wales · Registered address: {siteConfig.registeredAddress}
              · ICO Reg No. {siteConfig.icoNumber}
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
