"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { businessPage, howItWorksAssurances, siteConfig } from "@/lib/site";

const fieldClass =
  "w-full rounded-md border border-brand-teal/15 bg-white px-3.5 py-2.5 text-xs text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal/40 focus:outline-2 focus:outline-offset-1 focus:outline-coral";
const labelClass = "block text-[11px] text-brand-teal/70";

export default function RequestQuote() {
  const [sent, setSent] = useState(false);
  const [selectedHeadcount, setSelectedHeadcount] = useState(businessPage.pricingRows[0].band);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const headcountParam = params.get("headcount");
      if (headcountParam) {
        const match = businessPage.pricingRows.find(
          (r) => r.band.toLowerCase() === headcountParam.toLowerCase()
        );
        if (match) {
          setSelectedHeadcount(match.band);
        }
      }
    }
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream">
        <Image
          src="/images/_business-subpages/Screenshot 2026-07-25 190912 1 (3).png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-right"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-cream via-cream/75 to-transparent lg:via-cream/45"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-cream"
        />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <SectionLabel>For Business</SectionLabel>
            <h1 className="title-50 mt-5 text-balance text-brand-teal">Request a Quote</h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
              Tell us about your organisation and we will explain the next steps for business cover.
            </p>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {howItWorksAssurances.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[11px] text-brand-teal/75 sm:text-xs"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-teal"
                  >
                    <Icon name="check" className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mint/35">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-10 lg:px-8 lg:py-20">
          <div>
            <h2 className="max-w-sm text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              Six fields.<br />
              One conversation.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/70">
              We reply within one working day with indicative pricing for your headcount.
            </p>

            <form
              className="mt-7 rounded-lg bg-white/45 p-5 sm:p-7"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="quote-company" className={labelClass}>Company name</label>
                <input id="quote-company" name="company" required placeholder="eg. Kazi Marketing Group" className={`mt-2 ${fieldClass}`} />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-phone" className={labelClass}>Phone</label>
                  <input id="quote-phone" name="phone" type="tel" placeholder="+44" className={`mt-2 ${fieldClass}`} />
                </div>
                <div>
                  <label htmlFor="quote-email" className={labelClass}>Work Email</label>
                  <input id="quote-email" name="email" type="email" required placeholder="Your email" className={`mt-2 ${fieldClass}`} />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-contact" className={labelClass}>Contact Person</label>
                  <input id="quote-contact" name="contact" required placeholder="Contact name" className={`mt-2 ${fieldClass}`} />
                </div>
                <div>
                  <label htmlFor="quote-role" className={labelClass}>Job Title</label>
                  <input id="quote-role" name="role" placeholder="Role" className={`mt-2 ${fieldClass}`} />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="quote-headcount" className={labelClass}>Headcount</label>
                <select
                  id="quote-headcount"
                  name="headcount"
                  required
                  value={selectedHeadcount}
                  onChange={(e) => setSelectedHeadcount(e.target.value)}
                  className={`mt-2 ${fieldClass}`}
                >
                  {businessPage.pricingRows.map((row) => (
                    <option key={row.band} value={row.band}>
                      {row.band} employees {row.price !== "Bespoke" ? `(${row.price}/year)` : "(Bespoke quote)"}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex rounded-md bg-coral px-5 py-2.5 text-xs text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                Request a quote
              </button>
              <p aria-live="polite" className="mt-3 min-h-5 text-xs text-brand-teal/70">
                {sent ? "Thanks. We will be in touch within one working day." : ""}
              </p>
            </form>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-lg bg-brand-teal p-6 text-white sm:p-8">
              <h2 className="text-xl text-white sm:text-2xl">Company details</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/80">
                <strong>Company registration no.</strong> {siteConfig.companyNumber}<br />
                <strong>Registered office:</strong> {siteConfig.registeredAddress}<br />
                <strong>ICO registration no.</strong> ZA000000 (to be confirmed)
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/80">
                <strong>Complaints:</strong> named contact and response timescales are set out in our complaints procedure.
              </p>
            </div>
            <div className="rounded-lg bg-coral p-6 text-white sm:p-8">
              <h2 className="text-xl text-white sm:text-2xl">What this service is not</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/90">
                This is not an emergency service. If someone is seriously unwell or you think their life is at risk, call 999. For urgent advice, call NHS 111.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/90">
                Our GPs cannot prescribe controlled drugs, cannot issue NHS prescriptions, cannot carry out physical examinations, tests or scans, and cannot issue fit notes for NHS purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-4 pb-12 sm:grid-cols-3 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <ContactCard
            title="Members"
            subtitle="book an appointment"
            body="Answered 24 hours a day, every day of the year. Have your membership number ready."
            href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
            label={siteConfig.phoneDisplay}
          />
          <ContactCard
            title="General enquiries"
            subtitle="Talk before deciding"
            body="Use the form and we'll reply within one working day."
            href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
            label={siteConfig.phoneDisplay}
          />
          <ContactCard
            title="Business enquiries"
            subtitle="SME plan for your employees"
            body="Cover for a workforce, broker and partner arrangements."
            href="/business/request-a-quote"
            label="Request a quote"
            hideArrow
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  title,
  subtitle,
  body,
  href,
  label,
  hideArrow = false,
}: {
  title: string;
  subtitle?: string;
  body: string;
  href: string;
  label: string;
  /** The quote card's button is a plain label in the design. */
  hideArrow?: boolean;
}) {
  return (
    <div className="flex min-h-52 flex-col rounded-lg bg-white/65 p-5 sm:p-6">
      <h2 className="text-xl text-brand-teal">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-brand-teal">{subtitle}</p>}
      <p className="mt-8 text-sm leading-relaxed text-pretty text-brand-teal/75">{body}</p>
      <Link
        href={href}
        className="mt-auto inline-flex w-fit items-center gap-2 rounded-md bg-coral px-5 py-2.5 text-xs text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        {label}
        {!hideArrow && <Icon name="arrow-right" className="h-3.5 w-3.5" />}
      </Link>
    </div>
  );
}
