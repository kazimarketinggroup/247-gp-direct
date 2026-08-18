import Image from "next/image";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { howItWorksAssurances } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Hero over a pale artwork backdrop. Shared by the What's Included,
 * What Our GPs Can Help With, Cover for Your Family, Prescriptions
 * and Keeping Your NHS GP pages.
 */
export default function SilkHero({
  image,
  label,
  title,
  intro,
  /** Prescriptions centres its hero; the others are left-aligned. */
  align = "left",
}: {
  image: string;
  label: string;
  title: string;
  intro: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className={cn(
          "pointer-events-none -z-10 object-cover",
          centered ? "object-center" : "object-right",
        )}
      />
      {/* Keeps the copy legible over the artwork and fades into the page. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          centered
            ? "bg-cream/70"
            : "bg-gradient-to-r from-cream via-cream/70 to-transparent",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-cream"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div
          className={cn(
            centered ? "mx-auto max-w-2xl text-center" : "max-w-xl",
          )}
        >
          <SectionLabel>{label}</SectionLabel>

          <h1 className="title-50 mt-5 text-balance text-brand-teal">{title}</h1>

          <p
            className={cn(
              "mt-5 text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base",
              centered ? "mx-auto max-w-lg" : "max-w-md",
            )}
          >
            {intro}
          </p>

          <ul
            className={cn(
              "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2",
              centered && "justify-center",
            )}
          >
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
