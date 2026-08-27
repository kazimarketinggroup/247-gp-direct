import type { Metadata } from "next";
import PricingForBusiness from "@/components/business/PricingForBusiness";

export const metadata: Metadata = {
  title: "Pricing for Business — 247 GP Direct",
  description:
    "Business membership pricing and options for organisations of different sizes.",
};

export default function PricingForBusinessPage() {
  return <PricingForBusiness />;
}
