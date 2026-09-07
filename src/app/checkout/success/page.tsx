"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";

interface SessionDetails {
  id: string;
  payment_status: string;
  customer_email?: string;
  customer_name?: string;
  amount_total?: number;
  currency?: string;
  mode?: string;
  metadata?: {
    planId?: string;
    planName?: string;
  };
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [session, setSession] = useState<SessionDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    async function fetchSession() {
      try {
        const res = await fetch(`/api/checkout/session?session_id=${encodeURIComponent(sessionId as string)}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Unable to retrieve session details.");
        }
        setSession(data);
      } catch (err: unknown) {
        console.error("Error fetching session:", err);
        setError(err instanceof Error ? err.message : "Error retrieving session.");
      } finally {
        setLoading(false);
      }
    }

    fetchSession();
  }, [sessionId]);

  const formattedAmount =
    session?.amount_total != null
      ? `£${(session.amount_total / 100).toFixed(2)}`
      : null;

  const planName =
    session?.metadata?.planName ||
    (session?.metadata?.planId === "holiday" ? "Holiday Cover" : "Individual & Family Membership");

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Success Badge */}
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-brand-teal ring-8 ring-mint/40">
          <Icon name="check" className="h-8 w-8 text-brand-teal" strokeWidth={3} />
        </div>

        <span className="mt-6 inline-flex items-center rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-medium text-brand-teal">
          Payment Confirmed
        </span>

        <h1 className="title-50 mt-4 text-balance text-brand-teal">
          Welcome to 247 GP Direct
        </h1>
        <p className="mt-3 max-w-lg text-sm text-pretty text-brand-teal/70 sm:text-base">
          Thank you for joining. Your private GP cover is now active and ready to support you 24 hours a day, 365 days a year.
        </p>
      </div>

      {/* Payment Details Card */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-brand-teal/15 bg-white shadow-sm">
        <div className="border-b border-brand-teal/10 bg-brand-teal px-6 py-4 text-white sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs tracking-wider text-white/60 uppercase">Membership Plan</p>
              <p className="text-lg font-medium sm:text-xl">{planName}</p>
            </div>
            {formattedAmount && (
              <div className="text-right">
                <p className="text-xs tracking-wider text-white/60 uppercase">Amount Paid</p>
                <p className="text-xl font-medium sm:text-2xl text-white">{formattedAmount}</p>
              </div>
            )}
          </div>
        </div>

        <div className="divide-y divide-brand-teal/10 px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
            <span className="text-brand-teal/60">Status</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Active & Verified
            </span>
          </div>

          {session?.customer_email && (
            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-brand-teal/60">Confirmation sent to</span>
              <span className="font-medium text-brand-teal">{session.customer_email}</span>
            </div>
          )}

          {sessionId && (
            <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
              <span className="text-brand-teal/60">Reference ID</span>
              <span className="font-mono text-xs text-brand-teal/80 truncate max-w-[200px] sm:max-w-[300px]">
                {sessionId}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
            <span className="text-brand-teal/60">NHS GP Registration</span>
            <span className="font-medium text-brand-teal">Unchanged (You keep your NHS doctor)</span>
          </div>
        </div>
      </div>

      {/* What happens next */}
      <div className="mt-10">
        <h2 className="text-lg font-medium text-brand-teal">What happens next?</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-brand-teal/10 bg-cream p-5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-teal text-xs font-semibold text-white">
              1
            </span>
            <h3 className="mt-3 text-sm font-medium text-brand-teal">Check your email</h3>
            <p className="mt-1 text-xs text-brand-teal/70 leading-relaxed">
              We&apos;ve sent your membership welcome pack and your direct doctor dial-in number.
            </p>
          </div>

          <div className="rounded-xl border border-brand-teal/10 bg-cream p-5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-teal text-xs font-semibold text-white">
              2
            </span>
            <h3 className="mt-3 text-sm font-medium text-brand-teal">Access anytime</h3>
            <p className="mt-1 text-xs text-brand-teal/70 leading-relaxed">
              Book phone or video consultations 24/7 without waiting times or per-call charges.
            </p>
          </div>

          <div className="rounded-xl border border-brand-teal/10 bg-cream p-5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-teal text-xs font-semibold text-white">
              3
            </span>
            <h3 className="mt-3 text-sm font-medium text-brand-teal">Prescriptions & notes</h3>
            <p className="mt-1 text-xs text-brand-teal/70 leading-relaxed">
              Prescriptions sent to your nearest pharmacy and referral letters delivered directly.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-coral px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          <span>Return to Homepage</span>
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
        <Link
          href="/faqs"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-brand-teal/20 bg-white px-6 py-3 text-center text-sm font-medium text-brand-teal transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
        >
          View FAQs & Member Guides
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[50vh] max-w-3xl items-center justify-center px-4 py-20 text-center">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-teal border-t-transparent" />
            <p className="mt-4 text-sm text-brand-teal/70">Loading payment details...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
