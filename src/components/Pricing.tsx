import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { planAssurances, plans } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col items-center text-center">
        <SectionLabel>Simple pricing</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-2xl leading-tight font-bold tracking-tight text-balance text-brand-teal sm:text-3xl md:text-4xl">
          One annual fee. No hidden charges.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-pretty text-brand-teal/65 sm:text-base">
          Prices shown are indicative pending final client confirmation.
        </p>
      </div>

      {/* Featured card lifts only from lg, where all three sit in one row. */}
      <div className="mx-auto mt-10 grid max-w-md grid-cols-1 items-start gap-5 sm:mt-12 sm:max-w-xl md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
              plan.featured
                ? "bg-brand-teal text-white shadow-xl md:col-span-2 lg:col-span-1 lg:-mt-4 lg:pb-9"
                : "border border-brand-teal/10 bg-white",
            )}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-white">
                {plan.badge}
              </span>
            )}

            <p
              className={cn(
                "text-[11px] font-semibold tracking-widest uppercase",
                plan.featured ? "text-white/60" : "text-brand-teal/50",
              )}
            >
              {plan.name}
            </p>

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
                plan.featured ? "text-white/60" : "text-brand-teal/55",
              )}
            >
              {plan.sub}
            </p>
            <p
              className={cn(
                "mt-3 text-sm",
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

            <Link
              href="#join"
              className={cn(
                "mt-7 block rounded-md px-5 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral",
                plan.featured
                  ? "bg-coral text-white hover:bg-coral-dark"
                  : "bg-brand-teal text-white hover:bg-brand-teal-dark",
              )}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 border-t border-brand-teal/10 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {planAssurances.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs leading-relaxed text-pretty text-brand-teal/60"
          >
            <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
