import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: "24/7", label: "Always open" },
  { value: "< 15 min", label: "Average wait" },
  { value: "50k+", label: "Consultations" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Single column on mobile/tablet, two columns from lg up. */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800 sm:text-sm">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600"
              />
              Registered GPs online right now
            </span>

            {/* Fluid type: steps up at each breakpoint, wraps cleanly at 320px. */}
            <h1 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-balance text-slate-900 sm:mt-5 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              {siteConfig.tagline}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-slate-600 sm:mt-5 sm:text-lg lg:text-lg xl:text-xl">
              {siteConfig.description}
            </p>

            {/* Buttons stack full-width on small phones, sit inline from sm up. */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Link
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:px-7"
              >
                Book a consultation
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:px-7"
              >
                How it works
              </Link>
            </div>

            <dl className="mt-10 grid w-full grid-cols-3 gap-3 border-t border-slate-200 pt-6 sm:gap-6 sm:pt-8 lg:max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Aspect-ratio box keeps the image from ever overflowing its column. */}
          <div className="relative w-full">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-teal-100 shadow-xl ring-1 ring-slate-900/5 sm:aspect-[16/10] sm:max-w-xl sm:rounded-3xl lg:max-w-none">
              <Image
                src="/hero.svg"
                alt="A patient speaking with a doctor during an online video consultation"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating card is hidden on the narrowest screens to avoid crowding. */}
            <div className="absolute -bottom-4 left-1/2 hidden w-[min(20rem,90%)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:block lg:-bottom-6 lg:left-auto lg:right-6 lg:translate-x-0">
              <p className="text-sm font-semibold text-slate-900">
                Dr. Amina Rahman
              </p>
              <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                GMC registered · Available now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
