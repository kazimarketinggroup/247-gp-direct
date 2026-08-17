import SectionLabel from "@/components/SectionLabel";
import { steps } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      <SectionLabel>How it works</SectionLabel>

      <h2 className="mt-5 max-w-2xl text-2xl leading-tight font-bold tracking-tight text-balance text-brand-teal sm:text-3xl md:text-4xl">
        Three steps, from problem to answer
      </h2>

      <ol className="mt-9 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col">
            <span
              aria-hidden
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-teal text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base"
            >
              {step.number}
            </span>
            <h3 className="mt-5 text-base font-semibold text-brand-teal sm:text-lg">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
              {step.body}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-pretty text-brand-teal/50">
              {step.note}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-base font-medium text-coral sm:text-lg">
        And you keep your NHS GP. Nothing changes there.
      </p>
    </section>
  );
}
