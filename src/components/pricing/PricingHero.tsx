import Image from "next/image";

export default function PricingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <Image
        src="/images/pricing/hero-blossom.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-right opacity-50 sm:opacity-75 lg:opacity-100"
      />
      {/* Keeps the heading legible where it overlaps the blossom. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream/80 via-cream/40 to-cream"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="title-50 mx-auto max-w-2xl text-balance text-brand-teal">
          One price a year. Everything included.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/70 sm:text-base">
          No medical questionnaire, no per-call charges, and a 14-day cooling-off
          period in full.
        </p>
      </div>
    </section>
  );
}
