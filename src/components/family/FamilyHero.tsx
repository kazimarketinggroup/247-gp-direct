import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { familyPage, howItWorksAssurances } from "@/lib/site";

export default function FamilyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <Image
        src="/images/family/hero-flowers.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-right opacity-45 sm:opacity-70 lg:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-cream via-cream/75 to-transparent lg:via-cream/45"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <SectionLabel>{familyPage.label}</SectionLabel>

          <h1 className="title-50 mt-5 text-balance text-brand-teal">
            {familyPage.title}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
            {familyPage.intro}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              See Plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-brand-teal/25 bg-white px-6 py-3 text-sm text-brand-teal transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Call to Ask a Question
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
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
        </div>
      </div>
    </section>
  );
}
