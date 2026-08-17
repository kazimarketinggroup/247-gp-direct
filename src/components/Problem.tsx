import SectionLabel from "@/components/SectionLabel";
import { problemStats } from "@/lib/site";

export default function Problem() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="rounded-2xl bg-mint px-5 py-10 sm:rounded-3xl sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <SectionLabel>The problem</SectionLabel>

        <h2 className="mt-5 max-w-3xl text-2xl leading-tight font-bold tracking-tight text-balance text-brand-teal sm:text-3xl md:text-4xl">
          Getting a GP appointment has never been harder.
        </h2>

        {/* Stacks on phones, 3-up from md. Dividers only where columns sit side by side. */}
        <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-brand-teal/10 pt-8 sm:mt-10 md:grid-cols-3 md:gap-0">
          {problemStats.map((stat, i) => (
            <div
              key={stat.value}
              className={
                i > 0
                  ? "md:border-l md:border-brand-teal/10 md:pl-6 lg:pl-8"
                  : "md:pr-6 lg:pr-8"
              }
            >
              <dt className="text-xl font-bold text-brand-teal sm:text-2xl lg:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
                {stat.body}
              </dd>
              <dd className="mt-3 text-[11px] leading-relaxed text-brand-teal/45">
                {stat.source}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/80 sm:mt-10 sm:text-base">
          For a parent at 9pm with a poorly child, two weeks isn&apos;t a waiting
          time. It&apos;s a fortnight of worry.
        </p>
      </div>
    </section>
  );
}
