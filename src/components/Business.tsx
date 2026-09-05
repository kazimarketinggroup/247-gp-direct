import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export default function Business() {
  return (
    <section
      id="business"
      className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
    >
      {/* Image first on mobile, second column on desktop. */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-brand-teal/5 sm:aspect-[16/9] lg:aspect-[4/3]">
          <Image
            src="/images/home/business-doctor.png"
            alt="A GP speaking with a patient during a video consultation from their consulting room"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start">
          <SectionLabel>For Business</SectionLabel>

          <h2 className="mt-5 max-w-xl title-50 text-balance text-brand-teal">
            Looking after your team?
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
            Sickness absence costs the average UK employer 6.5 working days per
            employee per year. Give your team unlimited 24/7 GP access for less
            than the cost of a single day&apos;s absence.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
            Simple per-employee pricing. Rollout in days.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/business"
              className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-base"
            >
              Explore Business Cover
            </Link>
            <Link
              href="/business/request-a-quote"
              className="inline-flex items-center justify-center rounded-md px-2 py-3 text-sm text-brand-teal underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:px-4 sm:text-base"
            >
              Request Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
