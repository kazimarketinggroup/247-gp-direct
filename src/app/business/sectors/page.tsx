import type { Metadata } from "next";
import BusinessDetailPage from "@/components/business/BusinessDetailPage";

export const metadata: Metadata = {
  title: "Sectors We Work With — 247 GP Direct",
  description: "Explore how private GP access can support teams across different sectors.",
};

export default function SectorsPage() {
  return <BusinessDetailPage kind="sectors" />;
}
