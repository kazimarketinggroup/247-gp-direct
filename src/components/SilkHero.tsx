import Image from "next/image";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { howItWorksAssurances } from "@/lib/site";

/**
 * Left-aligned hero over a pale silk backdrop. Shared by the
 * What's Included and What Our GPs Can Help With pages.
 */
export default function SilkHero({
  image,
  label,
  title,
  intro,
}: {
  image: string;
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-right"
      />
      {/* Keeps the copy legible over the artwork and fades into the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-cream via-cream/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-cream"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <SectionLabel>{label}</SectionLabel>

          <h1 className="title-50 mt-5 text-balance text-brand-teal">{title}</h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
            {intro}
          </p>

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
