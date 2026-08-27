import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import { businessPage, howItWorksAssurances } from "@/lib/site";

export default function WhatYourTeamGets() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream">
        <Image
          src="/images/_business-subpages/Screenshot 2026-07-25 190912 1.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-right"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-cream via-cream/75 to-transparent lg:via-cream/45"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-cream"
        />

        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <SectionLabel>For Business</SectionLabel>
            <h1 className="title-50 mt-5 max-w-lg text-balance text-brand-teal">
              What your team gets
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
              A practical business benefit that helps your people access GP support when they need it.
            </p>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
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

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.7fr)] lg:gap-16 lg:px-8 lg:py-20">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              For every eligible employee
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Employees receive access instructions, a clear member journey, and a private route to remote GP support. The service is designed to be easy to understand and use from work or home.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Support may include symptom discussions, general medical advice, treatment questions, and guidance on next steps.
            </p>
          </div>

          <div>
            <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              A benefit that supports real life
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Employees can use the service for themselves and, depending on the plan, eligible family members. This makes the benefit relevant beyond the working day.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Eligibility, family access, consultation limits, and clinical scope will be confirmed in the final business plan.
            </p>
          </div>
        </div>

        <aside className="flex flex-col justify-between rounded-lg bg-brand-teal p-6 text-white sm:p-8">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-coral">Need help</p>
            <h2 className="mt-3 text-2xl leading-tight text-balance sm:text-3xl">
              Tell us about your organisation
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-pretty text-white/75">
              Tell us about your organisation and we will explain the next steps for business cover.
            </p>
          </div>
          <Link
            href="/business#quote"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-coral px-5 py-3 text-xs text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            Request a Quote
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </Link>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              What your team gets
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-pretty text-brand-teal/70">
              {businessPage.teamIntro}
            </p>
            <ul className="mt-7 flex flex-col gap-2">
              {businessPage.teamItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white/55 px-3 py-2.5 text-sm text-brand-teal/85"
                >
                  <Icon name="check" className="h-4 w-4 shrink-0 text-brand-teal" strokeWidth={2} />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mint p-4 sm:p-6 lg:aspect-[4/3]">
            <div className="relative h-full overflow-hidden rounded-md">
              <Image
                src="/images/_business-subpages/Group 11011.png"
                alt="Colleagues gathered around a laptop in a bright office"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="flex flex-col items-center rounded-lg bg-mint/50 px-5 py-12 text-center sm:px-8 sm:py-14">
          <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
            {businessPage.brokersTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-brand-teal/70">
            {businessPage.brokersBody}
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-coral px-5 py-3 text-xs text-white transition-colors hover:bg-coral-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {businessPage.brokersCta}
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
