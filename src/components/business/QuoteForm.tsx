"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { businessPage } from "@/lib/site";

const FIELD =
  "w-full rounded-md border border-brand-teal/15 bg-white px-3.5 py-2.5 text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal/40 focus:outline-2 focus:outline-offset-1 focus:outline-coral";
const LABEL = "block text-xs text-brand-teal/70";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      role: formData.get("role"),
      headcount: selectedHeadcount,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit quote request.");
      }

      setSent(true);
      form.reset();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred submitting your quote. Please call our team."
      );
    } finally {
      setLoading(false);
    }
  }
  const [selectedHeadcount, setSelectedHeadcount] = useState(
    businessPage.headcountOptions[1] || businessPage.headcountOptions[0]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const headcountParam = params.get("headcount");
      if (headcountParam) {
        const normalize = (s: string) => s.toLowerCase().replace(/[–—\s-]/g, "");
        const match = businessPage.headcountOptions.find(
          (opt) =>
            normalize(opt) === normalize(headcountParam) ||
            normalize(headcountParam).includes(normalize(opt)) ||
            normalize(opt).includes(normalize(headcountParam))
        );
        if (match) {
          setSelectedHeadcount(match);
        }
      }
    }
  }, []);

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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                  value={selectedHeadcount}
                  onChange={(e) => setSelectedHeadcount(e.target.value)}
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
                disabled={loading}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-md bg-coral px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Request a quote"}
              </button>

              {sent && (
                <p
                  aria-live="polite"
                  className="rounded-md bg-mint/50 p-3 text-xs font-medium text-brand-teal"
                >
                  ✓ Thank you! Your quote request has been sent to our business team. We will reply within 1 working day.
                </p>
              )}

              {error && (
                <p
                  aria-live="assertive"
                  className="rounded-md bg-red-50 p-3 text-xs font-medium text-red-700"
                >
                  {error}
                </p>
              )}
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
