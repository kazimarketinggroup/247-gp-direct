import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { planAssurances, plans } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Pricing({
  /** The pricing page carries its own hero heading, so it hides this one. */
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
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
          <SectionLabel>Simple pricing</SectionLabel>
          <h2 className="title-50 mt-5 max-w-2xl text-balance text-brand-teal">
            One annual fee. No hidden charges.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-pretty text-brand-teal/65 sm:text-base">
            Prices shown are indicative pending final client confirmation.
          </p>
        </div>
      )}

      {/* Featured card lifts only from lg, where all three sit in one row. */}
      <div
        className={cn(
          "mx-auto grid max-w-md grid-cols-1 items-start gap-5 sm:max-w-xl md:max-w-none md:grid-cols-2 lg:gap-6",
          showHeading && "mt-10 sm:mt-12",
        )}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
              plan.featured
                ? "bg-brand-teal text-white shadow-xl lg:-mt-4 lg:pb-9"
                : "border border-brand-teal/10 bg-white",
            )}
          >
            {plan.badge && (
              <span className="absolute -top-3 right-5 rounded-full bg-coral px-3 py-1 text-[11px] whitespace-nowrap text-white sm:right-6">
                {plan.badge}
              </span>
            )}

            <p
              className={cn(
                "text-[11px] tracking-widest uppercase",
                plan.featured ? "text-white/60" : "text-brand-teal/50",
              )}
            >
              {plan.name}
            </p>

            <p className="mt-4 flex items-baseline gap-1">
              <span
                className={cn(
                  "text-3xl tracking-tight sm:text-4xl",
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
              href="/pricing#join"
              className={cn(
                "mt-7 block rounded-md px-5 py-3 text-center text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral",
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
