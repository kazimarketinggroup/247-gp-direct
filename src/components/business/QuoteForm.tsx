"use client";

import Link from "next/link";
import { useState } from "react";
import { businessPage } from "@/lib/site";

const FIELD =
  "w-full rounded-md border border-brand-teal/15 bg-white px-3.5 py-2.5 text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal/40 focus:outline-2 focus:outline-offset-1 focus:outline-coral";
const LABEL = "block text-xs text-brand-teal/70";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section
        id="quote"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <p className="text-xs text-brand-teal/55">Request a quote</p>
        <div className="mt-3 border-t border-coral/40 pt-6 sm:pt-8" />

        {/* Copy left, form right from lg; stacked below. */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="title-50 text-balance text-brand-teal">
              {businessPage.quoteTitle}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/70">
              {businessPage.quoteIntro}
            </p>
          </div>

          <div className="rounded-2xl bg-brand-teal/[0.04] p-6 sm:p-7">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                // No backend yet — say so rather than silently dropping it.
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="q-company" className={LABEL}>
                  Company name
                </label>
                <input
                  id="q-company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="eg. Kazi Marketing Group"
                  className={`mt-2 ${FIELD}`}
                />
              </div>

              {/* Pairs sit side by side from sm, stack on small phones. */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-phone" className={LABEL}>
                    Phone
                  </label>
                  <input
                    id="q-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+44"
                    className={`mt-2 ${FIELD}`}
                  />
                </div>
                <div>
                  <label htmlFor="q-email" className={LABEL}>
                    Work Email
                  </label>
                  <input
                    id="q-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Your email"
                    className={`mt-2 ${FIELD}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-contact" className={LABEL}>
                    Contact Person
                  </label>
                  <input
                    id="q-contact"
                    name="contact"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Company Name"
                    className={`mt-2 ${FIELD}`}
                  />
                </div>
                <div>
                  <label htmlFor="q-role" className={LABEL}>
                    Job Title
                  </label>
                  <input
                    id="q-role"
                    name="role"
                    type="text"
                    autoComplete="organization-title"
                    placeholder="Role"
                    className={`mt-2 ${FIELD}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="q-headcount" className={LABEL}>
                  Headcount
                </label>
                <select
                  id="q-headcount"
                  name="headcount"
                  required
                  defaultValue={businessPage.headcountOptions[0]}
                  className={`mt-2 ${FIELD}`}
                >
                  {businessPage.headcountOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex w-fit rounded-md bg-coral px-5 py-2.5 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                Request a quote
              </button>

              {/* aria-live so screen readers announce the result. */}
              <p aria-live="polite" className="min-h-5 text-xs text-brand-teal/70">
                {sent
                  ? "Quote form is not connected yet — please call the number above and we'll help straight away."
                  : ""}
              </p>
            </form>
          </div>
        </div>
      </section>

      <section
        id="brokers"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8"
      >
        <div className="flex flex-col items-center rounded-2xl bg-mint/50 px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-14">
          <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
            {businessPage.brokersTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/70">
            {businessPage.brokersBody}
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-md bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {businessPage.brokersCta}
          </Link>
        </div>
      </section>
    </>
  );
}
