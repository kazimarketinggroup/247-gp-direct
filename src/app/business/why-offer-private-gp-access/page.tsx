import type { Metadata } from "next";
import WhyOfferPrivateGpAccess from "@/components/business/WhyOfferPrivateGpAccess";

export const metadata: Metadata = {
  title: "Why Offer Private GP Access — 247 GP Direct",
  description:
    "Understand the business case for giving employees practical access to private GP support.",
};

export default function WhyOfferPrivateGpAccessPage() {
  return <WhyOfferPrivateGpAccess />;
}
