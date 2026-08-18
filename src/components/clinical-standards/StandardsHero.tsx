import Image from "next/image";
import Icon from "@/components/Icon";
import { clinicalStandardsPage, howItWorksAssurances } from "@/lib/site";

export default function StandardsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <Image
        src="/images/clinical-standards/hero-clouds.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-bottom"
      />
      {/* Fades the cloudscape into the page background below it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-cream"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <span className="inline-flex rounded-md bg-brand-teal/[0.06] px-3 py-1.5 text-[11px] text-brand-teal sm:text-xs">
          {clinicalStandardsPage.label}
        </span>

        <h1 className="title-50 mx-auto mt-6 max-w-2xl text-balance text-brand-teal">
          {clinicalStandardsPage.title}
        </h1>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:mt-8">
          {howItWorksAssurances.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[11px] text-brand-teal/75 sm:text-xs"
            >
              <span
                aria-hidden
                className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-teal"
              >
                <Icon name="check" className="h-2.5 w-2.5 text-white" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-relaxed text-pretty text-brand-teal/75 sm:mt-8 sm:text-base">
          {clinicalStandardsPage.intro}
        </p>
      </div>
    </section>
  );
}
