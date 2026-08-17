import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const assurances = [
  "CQC-registered",
  "GMC-registered UK GPs",
  "Data secured to NHS standards",
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-cream">
      {/* Decorative texture — sits behind content, never intercepts clicks. */}
      <Image
        src="/images/home/hero-texture.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover opacity-60"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/15 bg-white/70 px-3 py-1.5 text-[11px] text-brand-teal sm:text-xs">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
              24 hours · 365 days · UK-qualified GPs
            </span>

            <h1 className="mt-5 title-50 text-balance text-brand-teal xl:text-[3.5rem]">
              See a GP in minutes.
              <br className="hidden sm:block" />{" "}
              <span className="sm:inline">Any time, day or night.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base lg:text-lg">
              Unlimited private GP appointments by phone or video, 24/7, 365 days
              a year for you and your family. Keep your NHS GP.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-base"
              >
                View Plans
              </Link>
              <Link
                href="#business"
                className="inline-flex items-center justify-center rounded-md border border-brand-teal/25 bg-white/80 px-6 py-3 text-sm text-brand-teal transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:text-base"
              >
                Cover My Team
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              <Image
                src="/images/home/group_profiles.png"
                alt=""
                aria-hidden
                width={96}
                height={32}
                className="h-8 w-auto shrink-0"
              />
              <p className="text-xs text-brand-teal/70 sm:text-sm">
                Trusted by thousands of patients across the UK (TBC)
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-brand-teal/10 pt-5">
              {assurances.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-[11px] text-brand-teal/70 sm:text-xs"
                >
                  <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-coral" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Aspect box keeps the photo from ever overflowing its column. */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-teal/5 shadow-lg sm:aspect-[16/11] lg:aspect-[4/3]">
            <Image
              src="/images/home/hero-family.png"
              alt="A mother and her young daughter attending an online GP video consultation from home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
