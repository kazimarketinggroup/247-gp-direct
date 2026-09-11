import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Icon from "@/components/Icon";
import SilkHero from "@/components/SilkHero";
import SupportCards from "@/components/SupportCards";
import CheckoutButton from "@/components/pricing/CheckoutButton";
import { abroadPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Using the Service Abroad — 247 GP Direct",
  description:
    "How members may use 247 GP Direct while travelling, and where the service has limits.",
};

export default function AbroadPage() {
  return (
    <>
      <SilkHero
        image="/images/abroad/hero-swoop.png"
        label={abroadPage.label}
        title={abroadPage.title}
        intro={abroadPage.intro}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Prose left, member-line card right from lg; stacked below. */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
          <div className="flex flex-col gap-10 sm:gap-12">
            {abroadPage.blocks.map((block) => (
              <div key={block.title}>
                <h2 className="text-2xl leading-tight text-balance text-brand-teal sm:text-3xl">
                  {block.title}
                </h2>
                <div className="mt-5 flex flex-col gap-4">
                  {block.paragraphs.map((para) => (
                    <p
                      key={para.slice(0, 28)}
                      className="max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/75"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Only the member-line card appears in this design. */}
          <SupportCards className="lg:flex-col" showEmergency={false} />
        </div>
      </section>

      {/* Holiday Package Spotlight Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-brand-teal p-6 text-white sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <span className="inline-flex items-center rounded-full bg-coral px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                Holiday Package
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                30 Days Medical Advice with a UK GP Abroad
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Going on holiday or traveling overseas? Speak with a GMC-registered UK GP 24 hours a day by phone or video whenever you or your travel companion feel unwell.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-coral shrink-0" strokeWidth={3} />
                  <span>Unlimited appointments during 30 days</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-coral shrink-0" strokeWidth={3} />
                  <span>24/7 UK doctors on phone or video</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-coral shrink-0" strokeWidth={3} />
                  <span>Advice on local pharmacy &amp; medication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-coral shrink-0" strokeWidth={3} />
                  <span>No medical questionnaire required</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-6 text-center backdrop-blur-xs ring-1 ring-white/15 lg:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                One-Off Trip Cover
              </span>
              <p className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-white">£30</span>
                <span className="text-sm text-white/70">/ 30 days</span>
              </p>
              <p className="mt-2 text-xs text-white/80">
                Per trip · Cover starts when you need it
              </p>

              <div className="mt-6 w-full">
                <CheckoutButton planId="holiday" featured={true}>
                  Get Holiday Cover (£30)
                </CheckoutButton>
              </div>

              <p className="mt-3 text-[11px] text-white/60">
                Instant confirmation and booking telephone number sent via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
