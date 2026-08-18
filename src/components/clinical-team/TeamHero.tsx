import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { clinicalTeamPage, howItWorksAssurances } from "@/lib/site";

export default function TeamHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <Image
        src="/images/clinical-team/hero-mesh.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover"
      />
      {/* Fades the mesh into the page background below it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-cream"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionLabel>{clinicalTeamPage.label}</SectionLabel>

        <h1 className="title-50 mx-auto mt-6 max-w-xl text-balance text-brand-teal">
          {clinicalTeamPage.title}
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
          {clinicalTeamPage.intro}
        </p>

        {/* Stacks full-width on phones, sits inline from sm. */}
        <div className="mx-auto mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="/family"
            className="inline-flex items-center justify-center rounded-md bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            For You &amp; Your Family
          </Link>
          <Link
            href="/#business"
            className="inline-flex items-center justify-center rounded-md border border-brand-teal/25 bg-white px-6 py-3 text-sm text-brand-teal transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            For Business
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
    </section>
  );
}
