import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";
import AudienceCards from "@/components/family/AudienceCards";
import FamilyDetails from "@/components/family/FamilyDetails";
import FamilyFaq from "@/components/family/FamilyFaq";
import FamilyHero from "@/components/family/FamilyHero";
import IncludedSelector from "@/components/family/IncludedSelector";
import SectionNav from "@/components/family/SectionNav";

export const metadata: Metadata = {
  title: "For You & Your Family — 247 GP Direct",
  description:
    "A GP for your family, whenever you need one. Unlimited appointments by phone or video, 24 hours a day, on one annual subscription.",
};

export default function FamilyPage() {
  return (
    <>
      <FamilyHero />
      <SectionNav />
      <AudienceCards />
      <IncludedSelector />
      <FamilyDetails />
      <section id="plans" className="scroll-mt-24">
        <Pricing showHeading={false} />
      </section>
      <FamilyFaq />
      <CallToAction />
    </>
  );
}
