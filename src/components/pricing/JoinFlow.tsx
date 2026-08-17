"use client";

import { useState } from "react";
import { joinPlanOptions, joinSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function JoinFlow() {
  const [selected, setSelected] = useState("family");
  const current = joinPlanOptions.find((p) => p.id === selected);

  return (
    <section
      id="join"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <h2 className="title-50 text-balance text-brand-teal">
        Four steps, about three minutes
      </h2>

      {/* Step chips wrap instead of overflowing on narrow screens. */}
      <ol className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
        {joinSteps.map((step, i) => (
          <li key={step}>
            <span
              aria-current={i === 0 ? "step" : undefined}
              className={cn(
                "inline-flex rounded-md px-3 py-2 text-xs whitespace-nowrap sm:text-sm",
                i === 0
                  ? "bg-brand-teal text-white"
                  : "border border-brand-teal/15 bg-white text-brand-teal/70",
              )}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>

      <h3 className="mt-8 text-sm text-brand-teal sm:text-base">
        Choose your plan
      </h3>

      <div className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
        <fieldset className="flex flex-col gap-3">
          <legend className="sr-only">Choose your plan</legend>
          {joinPlanOptions.map((plan) => {
            const isSelected = selected === plan.id;
            return (
              <label
                key={plan.id}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-4 rounded-lg border bg-white px-4 py-3.5 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-coral sm:px-5",
                  isSelected
                    ? "border-brand-teal/40"
                    : "border-brand-teal/10 hover:border-brand-teal/25",
                )}
              >
                <span className="min-w-0">
                  <span className="block text-sm text-brand-teal">{plan.name}</span>
                  <span className="mt-0.5 block text-xs text-pretty text-brand-teal/60">
                    {plan.detail}
                  </span>
                </span>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  checked={isSelected}
                  onChange={() => setSelected(plan.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                    isSelected ? "border-brand-teal" : "border-brand-teal/30",
                  )}
                >
                  {isSelected && (
                    <span className="h-2 w-2 rounded-full bg-brand-teal" />
                  )}
                </span>
              </label>
            );
          })}
        </fieldset>

        <div className="rounded-xl bg-brand-teal p-5 text-white sm:p-6">
          <p className="text-[11px] tracking-widest text-white/55 uppercase">
            Your plan
          </p>
          <p className="mt-2 text-2xl text-balance sm:text-3xl">{current?.name}</p>
          <p className="mt-2 text-sm text-white/80">
            £ TBC a year renewing annually
          </p>
          <p className="mt-4 text-xs leading-relaxed text-pretty text-white/60">
            14 day cooling off period. This is not an emergency service — call
            999 or NHS 111 if it&apos;s urgent.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex rounded-md bg-coral px-5 py-2.5 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        Continue
      </button>
    </section>
  );
}
