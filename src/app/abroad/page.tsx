import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import SilkHero from "@/components/SilkHero";
import SupportCards from "@/components/SupportCards";
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

      <CallToAction />
    </>
  );
}
