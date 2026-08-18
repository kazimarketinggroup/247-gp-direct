import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import SilkHero from "@/components/SilkHero";
import SupportCards from "@/components/SupportCards";
import IncludedSelector from "@/components/family/IncludedSelector";
import { whatsIncludedPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "What's Included — 247 GP Direct",
  description:
    "See what your 247 GP Direct membership includes, from 24/7 access to practical support by phone or video.",
};

export default function WhatsIncludedPage() {
  return (
    <>
      <SilkHero
        image="/images/whats-included/hero-silk.png"
        label={whatsIncludedPage.label}
        title={whatsIncludedPage.title}
        intro={whatsIncludedPage.intro}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Prose left, member-line card right from lg; stacked below. */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-12">
          <div>
            <h2 className="title-50 text-balance text-brand-teal">
              {whatsIncludedPage.membershipTitle}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {whatsIncludedPage.membershipParagraphs.map((para) => (
                <p
                  key={para.slice(0, 28)}
                  className="max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/75"
                >
                  {para}
                </p>
              ))}
            </div>

            <h2 className="title-50 mt-12 text-balance text-brand-teal sm:mt-14">
              {whatsIncludedPage.includedTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-pretty text-brand-teal/75">
              {whatsIncludedPage.includedIntro}
            </p>
          </div>

          {/* Only the member-line card is in this design, not the emergency one. */}
          <SupportCards className="lg:flex-col" showEmergency={false} />
        </div>

        <div className="mt-10 sm:mt-12">
          <IncludedSelector showHeading={false} image={whatsIncludedPage.image} />
        </div>
      </section>

      <CallToAction />
    </>
  );
}
