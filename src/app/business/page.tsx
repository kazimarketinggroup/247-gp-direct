import type { Metadata } from "next";
import SectionNav from "@/components/SectionNav";
import BusinessCase from "@/components/business/BusinessCase";
import BusinessFaq from "@/components/business/BusinessFaq";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessPricing from "@/components/business/BusinessPricing";
import QuoteForm from "@/components/business/QuoteForm";
import TeamGets from "@/components/business/TeamGets";
import { businessPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Business — 247 GP Direct",
  description:
    "Give every employee unlimited 24/7 access to a UK GP for less than the cost of a single day's absence.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <SectionNav sections={businessPage.sections} />
      <BusinessCase />
      <TeamGets />
      <BusinessPricing />
      <BusinessFaq />
      <QuoteForm />
    </>
  );
}
