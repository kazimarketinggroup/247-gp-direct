"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import CheckoutButton from "@/components/pricing/CheckoutButton";
import { planAssurances, plans, smePlans } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Pricing({
  /** The pricing page carries its own hero heading, so it hides this one. */
  showHeading = true,
  defaultTab = "personal",
}: {
  showHeading?: boolean;
  defaultTab?: "personal" | "business";
}) {
  const [activeTab, setActiveTab] = useState<"personal" | "business">(defaultTab);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam === "business" || tabParam === "sme") {
        setActiveTab("business");
      } else if (tabParam === "personal" || tabParam === "family") {
        setActiveTab("personal");
      }
    }
  }, []);

  return (
    <section
      id="pricing"
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        showHeading ? "py-10 sm:py-14 lg:py-20" : "pb-10 sm:pb-14",
      )}
    >
      {showHeading && (
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Transparent pricing</SectionLabel>
          <h2 className="title-50 mt-5 max-w-2xl text-balance text-brand-teal">
            One flat fee. No hidden charges.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-pretty text-brand-teal/65 sm:text-base">
            Private 24/7 UK GP care for individuals, families, sole traders, and SME businesses.
          </p>
        </div>
      )}

      {/* Plan Segment Toggle: Personal & Sole Trader vs SME & Business */}
      <div className="mt-8 flex justify-center sm:mt-10">
        <div className="inline-flex rounded-full bg-mint/80 p-1.5 ring-1 ring-brand-teal/15 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab("personal")}
            className={cn(
              "rounded-full px-5 py-2 text-xs font-medium transition-all sm:text-sm",
              activeTab === "personal"
                ? "bg-brand-teal text-white shadow-md"
                : "text-brand-teal/70 hover:text-brand-teal",
            )}
          >
            Personal, Sole Trader &amp; Family
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("business")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-medium transition-all sm:text-sm",
              activeTab === "business"
                ? "bg-brand-teal text-white shadow-md"
                : "text-brand-teal/70 hover:text-brand-teal",
            )}
          >
            <span>SME &amp; Business Cover</span>
            <span className="rounded-full bg-coral px-2 py-0.5 text-[10px] font-semibold text-white">
              From £150
            </span>
          </button>
        </div>
      </div>

      {/* TAB 1: Personal, Sole Trader & Family */}
      {activeTab === "personal" && (
        <>
          {/* Promo code launch banner */}
          <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-center sm:px-6">
            <p className="text-xs font-medium text-brand-teal sm:text-sm">
              <span className="mr-2 inline-flex items-center rounded-md bg-coral px-2 py-0.5 text-[11px] font-bold text-white uppercase">
                Launch Promo
              </span>
              Get the Individual &amp; Sole Trader family plan for{" "}
              <strong className="font-bold text-coral">£75/year</strong> (was £100) with promo code{" "}
              <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs font-bold text-brand-teal shadow-xs">
                PROMO75
              </code>{" "}
              at checkout.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-1 items-start gap-5 sm:max-w-xl md:max-w-none md:grid-cols-2 lg:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
                  plan.featured
                    ? "bg-brand-teal text-white shadow-xl lg:-mt-2 lg:pb-9"
                    : "border border-brand-teal/15 bg-white shadow-sm",
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 right-5 rounded-full bg-coral px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-white sm:right-6">
                    {plan.badge}
                  </span>
                )}

                <p
                  className={cn(
                    "text-[11px] tracking-widest uppercase font-semibold",
                    plan.featured ? "text-white/70" : "text-brand-teal/60",
                  )}
                >
                  {plan.name}
                </p>

                <p className="mt-4 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "text-3xl font-bold tracking-tight sm:text-4xl",
                      plan.featured ? "text-white" : "text-brand-teal",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-white/60" : "text-brand-teal/50",
                    )}
                  >
                    {plan.period}
                  </span>
                  {plan.id === "family" && (
                    <span className="ml-2 rounded bg-coral/20 px-2 py-0.5 text-[11px] font-semibold text-coral">
                      Promo: £75
                    </span>
                  )}
                </p>

                <p
                  className={cn(
                    "mt-1 text-xs",
                    plan.featured ? "text-white/60" : "text-brand-teal/55",
                  )}
                >
                  {plan.sub}
                </p>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    plan.featured ? "text-white/85" : "text-brand-teal/75",
                  )}
                >
                  {plan.covers}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Icon
                        name="check"
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.featured ? "text-coral" : "text-brand-teal/60",
                        )}
                        strokeWidth={2.5}
                      />
                      <span
                        className={cn(
                          "text-sm text-pretty",
                          plan.featured ? "text-white/90" : "text-brand-teal/80",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <CheckoutButton planId={plan.id} featured={plan.featured}>
                    {plan.cta}
                  </CheckoutButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setActiveTab("business")}
              className="text-xs font-medium text-brand-teal/75 underline-offset-4 hover:text-coral hover:underline sm:text-sm"
            >
              Employing a team? View our SME packages starting from £150/year →
            </button>
          </div>
        </>
      )}

      {/* TAB 2: SME & Business Plans */}
      {activeTab === "business" && (
        <div className="mt-8">
          <div className="mb-6 rounded-xl bg-mint/50 p-4 text-center sm:p-5">
            <p className="text-xs text-brand-teal/80 sm:text-sm">
              <strong className="font-semibold text-brand-teal">SME Healthcare Benefit:</strong> Give your team 24/7 private GP appointments on one simple company invoice.
              Every tier includes <span className="font-semibold text-coral">full family cover</span> for your employees&apos; partners and dependent children.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {smePlans.map((plan) => (
              <div
                key={plan.band}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
                  plan.featured
                    ? "bg-brand-teal text-white shadow-xl lg:-mt-2 lg:pb-8 ring-2 ring-coral"
                    : "border border-brand-teal/15 bg-white shadow-sm",
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 right-4 rounded-full bg-coral px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-white sm:right-6">
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
                      plan.featured ? "bg-white/15 text-white" : "bg-mint text-brand-teal",
                    )}
                  >
                    {plan.employees}
                  </span>
                </div>

                <p className="mt-4 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-3xl font-bold tracking-tight sm:text-4xl",
                      plan.featured ? "text-white" : "text-brand-teal",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.featured ? "text-white/60" : "text-brand-teal/50",
                    )}
                  >
                    {plan.period}
                  </span>
                </p>

                <p
                  className={cn(
                    "mt-1 text-xs",
                    plan.featured ? "text-white/65" : "text-brand-teal/60",
                  )}
                >
                  {plan.sub}
                </p>

                <p
                  className={cn(
                    "mt-3 text-xs leading-relaxed sm:text-sm",
                    plan.featured ? "text-white/85" : "text-brand-teal/75",
                  )}
                >
                  {plan.covers}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Icon
                        name="check"
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          plan.featured ? "text-coral" : "text-brand-teal/60",
                        )}
                        strokeWidth={2.5}
                      />
                      <span
                        className={cn(
                          "text-xs leading-relaxed text-pretty",
                          plan.featured ? "text-white/90" : "text-brand-teal/80",
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link
                    href={`/business/request-a-quote?headcount=${encodeURIComponent(plan.band)}`}
                    className={cn(
                      "inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm",
                      plan.featured
                        ? "bg-coral text-white hover:bg-coral-dark focus-visible:outline-coral"
                        : "border border-brand-teal/20 bg-mint/40 text-brand-teal hover:bg-brand-teal hover:text-white focus-visible:outline-brand-teal",
                    )}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/business/pricing"
              className="text-xs font-medium text-brand-teal/75 underline-offset-4 hover:text-coral hover:underline sm:text-sm"
            >
              Want to see full corporate specs and rollout timelines? Explore Business Details →
            </Link>
          </div>
        </div>
      )}

      {/* Assurances footer */}
      <div className="mt-10 border-t border-brand-teal/10 pt-8">
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {planAssurances.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs leading-relaxed text-pretty text-brand-teal/60"
            >
              <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral" strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
