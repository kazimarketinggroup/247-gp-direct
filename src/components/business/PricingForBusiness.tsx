import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionLabel from "@/components/SectionLabel";
import BusinessPricing from "@/components/business/BusinessPricing";
import { businessPage, howItWorksAssurances } from "@/lib/site";

export default function PricingForBusiness() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream">
        <Image
          src="/images/_business-subpages/Screenshot 2026-07-25 190912 1 (2).png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-10 object-cover object-right"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-cream via-cream/75 to-transparent lg:via-cream/45"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-cream"
        />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-xl">
            <SectionLabel>For Business</SectionLabel>
            <h1 className="title-50 mt-5 text-balance text-brand-teal">Pricing for Business</h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-pretty text-brand-teal/75 sm:text-base">
              Business membership pricing and options for organisations of different sizes.
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
              Plans for different organisations
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Business membership can be shaped around your headcount, workforce structure, and the level of access you want to offer.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Pricing may vary by the number of eligible people, family cover, implementation support, and reporting requirements.
            </p>
          </div>
          <div>
            <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
              Clear commercial conversations
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              We will provide a clear proposal explaining what is included, how employees are enrolled, and which support services are available.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/70">
              Business pricing and minimum member numbers are currently to be confirmed.
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

      <BusinessPricing />

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
