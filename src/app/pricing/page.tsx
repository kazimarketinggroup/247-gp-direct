import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";
import CanceledAlert from "@/components/pricing/CanceledAlert";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingHero from "@/components/pricing/PricingHero";

export const metadata: Metadata = {
  title: "Pricing — 247 GP Direct",
  description:
    "One price a year, everything included. No medical questionnaire and no per-call charges.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <CanceledAlert />
      <Pricing showHeading={false} />
      <ComparisonTable />
      <CallToAction />
    </>
  );
}
