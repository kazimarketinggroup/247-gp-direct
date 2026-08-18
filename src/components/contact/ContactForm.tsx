"use client";

import { useState } from "react";
import { contactPage } from "@/lib/site";

const FIELD =
  "w-full rounded-md border border-brand-teal/15 bg-white px-3.5 py-2.5 text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal/40 focus:outline-2 focus:outline-offset-1 focus:outline-coral";
const LABEL = "block text-xs text-brand-teal/70";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-xl bg-white p-6 sm:p-7">
      <h2 className="text-xl text-brand-teal sm:text-2xl">
        {contactPage.formTitle}
      </h2>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={(e) => {
          // No backend yet — surface a clear notice instead of silently
          // doing nothing or pretending the message was delivered.
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <label htmlFor="contact-name" className={LABEL}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Enter username"
            className={`mt-2 ${FIELD}`}
          />
        </div>

        {/* Side by side from sm; stacked on small phones. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={LABEL}>
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44"
              className={`mt-2 ${FIELD}`}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={LABEL}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your email"
              className={`mt-2 ${FIELD}`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={LABEL}>
            Write about your company
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            required
            placeholder="Write here"
            className={`mt-2 resize-y ${FIELD}`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-fit rounded-md bg-coral px-5 py-2.5 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          Send Message
        </button>

        {/* aria-live so screen readers announce the result. */}
        <p aria-live="polite" className="min-h-5 text-xs text-brand-teal/70">
          {sent
            ? "Message form is not connected yet — please call the number above and we'll help straight away."
            : ""}
        </p>
      </form>
    </div>
  );
}
