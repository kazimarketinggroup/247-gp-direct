import Image from "next/image";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { howItWorksAssurances } from "@/lib/site";

export default function JourneyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* Feather artwork sits to the right on desktop; on mobile it fades out
          behind the text so the copy keeps its contrast. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full lg:w-3/5">
        <Image
          src="/images/how-it-works/hero-feathers.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-left opacity-40 sm:opacity-60 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent lg:via-cream/40" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <SectionLabel>How it works</SectionLabel>

          <h1 className="mt-5 text-3xl leading-[1.1] font-bold tracking-tight text-balance text-brand-teal sm:text-4xl md:text-5xl">
            Join in three minutes.
            <br className="hidden sm:block" />{" "}
            <span className="sm:inline">Use it the same night.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
            No app to download, no account to remember. A phone number and a
            membership number is all it takes.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {howItWorksAssurances.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-brand-teal/80"
              >
                <span
                  aria-hidden
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal"
                >
                  <Icon name="check" className="h-3 w-3 text-white" strokeWidth={3} />
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
