import type { Metadata } from "next";
import BusinessDetailPage from "@/components/business/BusinessDetailPage";

export const metadata: Metadata = {
  title: "Utilisation Reporting — 247 GP Direct",
  description: "Learn how employers may receive high-level information about benefit usage.",
};

export default function UtilisationReportingPage() {
  return <BusinessDetailPage kind="utilisation" />;
}
