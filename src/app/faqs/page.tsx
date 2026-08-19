import type { Metadata } from "next";
import SilkHero from "@/components/SilkHero";
import FaqBrowser from "@/components/faqs/FaqBrowser";
import { faqsPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs — 247 GP Direct",
  description:
    "Everything people ask before joining: cover, using the service, clinical scope, prescriptions, billing and employer questions.",
};

export default function FaqsPage() {
  return (
    <>
      <SilkHero
        image="/images/faqs/hero-marble.png"
        label={faqsPage.label}
        title={faqsPage.title}
        intro={faqsPage.intro}
      />
      <FaqBrowser />
    </>
  );
}
