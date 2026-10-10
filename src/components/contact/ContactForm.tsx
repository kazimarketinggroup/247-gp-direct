"use client";

import { useState } from "react";
import { contactPage } from "@/lib/site";

const FIELD =
  "w-full rounded-md border border-brand-teal/15 bg-white px-3.5 py-2.5 text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal/40 focus:outline-2 focus:outline-offset-1 focus:outline-coral";
const LABEL = "block text-xs text-brand-teal/70";

export default function ContactForm() {
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
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSent(true);
      form.reset();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 sm:p-7">
      <h2 className="text-xl text-brand-teal sm:text-2xl">
        {contactPage.formTitle}
      </h2>

      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
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
            placeholder="Your full name"
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
              placeholder="Your email address"
              className={`mt-2 ${FIELD}`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={LABEL}>
            Message / Enquiry
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            required
            placeholder="How can our clinical team help you?"
            className={`mt-2 resize-y ${FIELD}`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-fit items-center gap-2 rounded-md bg-coral px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {sent && (
          <p
            aria-live="polite"
            className="rounded-md bg-mint/50 p-3 text-xs font-medium text-brand-teal"
          >
            ✓ Thank you! Your message has been sent to our office team. We will be in touch shortly.
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
  );
}
