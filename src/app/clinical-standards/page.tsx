import type { Metadata } from "next";
import StandardsHero from "@/components/clinical-standards/StandardsHero";
import StandardsList from "@/components/clinical-standards/StandardsList";

export const metadata: Metadata = {
  title: "Clinical standards & governance — 247 GP Direct",
  description:
    "A real medical service, governed like one. How our GPs are vetted, how consultations are audited, and how complaints, data and indemnity are handled.",
};

export default function ClinicalStandardsPage() {
  return (
    <>
      <StandardsHero />
      <StandardsList />
    </>
  );
}
