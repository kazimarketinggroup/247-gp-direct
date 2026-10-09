"use client";

import { useState } from "react";
import Icon, { type IconName } from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { included, steps } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  const [mobileTab, setMobileTab] = useState<"steps" | "included">("steps");

  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center">
        <SectionLabel>How it works &amp; Subscription</SectionLabel>
        <h2 className="mt-4 max-w-2xl title-50 text-balance text-brand-teal sm:mt-5">
          Three simple steps. All included in your subscription.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/70 sm:text-base">
          Unlimited private GP appointments with no per-call fees. Keep your NHS GP with zero hassle.
        </p>

        {/* Mobile-Only Segmented Switcher (drastically reduces vertical scroll drag on phones) */}
        <div className="mt-6 flex justify-center md:hidden">
          <div className="inline-flex rounded-full bg-mint/80 p-1 ring-1 ring-brand-teal/15 shadow-inner">
            <button
              type="button"
              onClick={() => setMobileTab("steps")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                mobileTab === "steps"
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-brand-teal/75 hover:text-brand-teal",
              )}
            >
              3 Simple Steps
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("included")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                mobileTab === "included"
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-brand-teal/75 hover:text-brand-teal",
              )}
            >
              What&apos;s Included (8)
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PART 1: 3 STEPS HOW IT WORKS
          (Visible on md+ always; on mobile conditionally when mobileTab === 'steps')
          ========================================================================= */}
      <div className={cn("mt-6 sm:mt-10 md:block", mobileTab !== "steps" && "hidden md:block")}>
        <div className="mb-4 flex items-center justify-between md:mb-6">
          <span className="text-xs font-semibold tracking-wider text-brand-teal/60 uppercase">
            Step-by-step process
          </span>
          <span className="hidden text-xs text-brand-teal/50 md:inline">
            Fast callback · No wait times
          </span>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col rounded-2xl border border-brand-teal/10 bg-white p-5 shadow-xs transition-shadow hover:shadow-sm sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal text-sm font-semibold text-white sm:h-11 sm:w-11"
                >
                  {step.number}
                </span>
                <span className="text-[11px] font-medium tracking-wider text-coral uppercase">
                  Step {step.number}
                </span>
              </div>

              <h3 className="mt-4 text-base font-medium text-brand-teal sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-pretty text-brand-teal/75 sm:text-sm">
                {step.body}
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-pretty text-brand-teal/50">
                {step.note}
              </p>
            </li>
          ))}
        </ol>

        {/* Mobile button to toggle over to What's Included */}
        <div className="mt-4 text-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileTab("included")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-coral hover:underline"
          >
            <span>See everything included in your annual membership</span>
            <Icon name="arrow-right" className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          PART 2: WHAT'S INCLUDED IN THE ANNUAL SUBSCRIPTION
          (Visible on md+ always; on mobile conditionally when mobileTab === 'included')
          ========================================================================= */}
      <div className={cn("mt-8 border-t border-brand-teal/10 pt-6 sm:mt-12 sm:pt-10 md:block", mobileTab !== "included" && "hidden md:block")}>
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between md:mb-6">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-brand-teal uppercase sm:text-base">
              Included in your annual subscription
            </h3>
            <p className="text-xs text-brand-teal/65">
              One flat fee covers every appointment, prescription dispatch, and family member.
            </p>
          </div>
          <span className="hidden rounded-full bg-mint px-3 py-1 text-xs font-medium text-brand-teal lg:inline">
            Zero per-call fees ever
          </span>
        </div>

        {/* Compact grid on mobile (2 cols), expanding to 4 cols on desktop */}
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {included.map((item) => (
            <li
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-brand-teal/10 bg-white p-3.5 transition-all hover:border-brand-teal/20 hover:shadow-sm sm:p-5"
            >
              <div>
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mint text-brand-teal sm:h-9 sm:w-9"
                >
                  <Icon name={item.icon as IconName} className="h-4 w-4" />
                </span>
                <h4 className="mt-2.5 text-xs font-medium text-brand-teal sm:text-sm">
                  {item.title}
                </h4>
                <p className="mt-1 text-[11px] leading-relaxed text-pretty text-brand-teal/70 sm:text-xs">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile button to toggle back to Steps */}
        <div className="mt-4 text-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileTab("steps")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-coral hover:underline"
          >
            <span>Review the 3-step consultation process</span>
            <Icon name="arrow-right" className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Strapline reassurance */}
      <div className="mt-8 rounded-xl bg-mint/50 px-4 py-3 text-center sm:mt-10 sm:py-3.5">
        <p className="text-xs font-medium text-brand-teal sm:text-sm">
          Keep your NHS GP with no de-registration.{" "}
          <span className="text-coral">247 GP Direct works seamlessly alongside your NHS surgery.</span>
        </p>
      </div>
    </section>
  );
}
