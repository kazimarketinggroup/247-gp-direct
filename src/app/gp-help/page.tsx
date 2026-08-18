import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import GpHelpTable from "@/components/GpHelpTable";
import NotServicePanel from "@/components/NotServicePanel";
import SilkHero from "@/components/SilkHero";
import { clinicalTeamPage, familyPage, gpHelpPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Our GPs Can Help With — 247 GP Direct",
  description:
    "The everyday health questions and concerns our GPs can assess through the service, and what falls outside it.",
};

export default function GpHelpPage() {
  return (
    <>
      <SilkHero
        image="/images/gp-help/hero-silk.png"
        label={gpHelpPage.label}
        title={gpHelpPage.title}
        intro={gpHelpPage.intro}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <h2 className="title-50 text-balance text-brand-teal">
          {clinicalTeamPage.helpTitle}
        </h2>
        <div className="mt-8 sm:mt-10">
          <GpHelpTable />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <h2 className="title-50 text-balance text-brand-teal">
          {familyPage.notServiceTitle}
        </h2>
        <div className="mt-8 sm:mt-10">
          <NotServicePanel />
        </div>
      </section>

      <CallToAction />
    </>
  );
}
