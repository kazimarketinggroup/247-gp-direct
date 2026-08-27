import type { Metadata } from "next";
import BusinessDetailPage from "@/components/business/BusinessDetailPage";

export const metadata: Metadata = {
  title: "Brokers & Partners — 247 GP Direct",
  description: "Information for brokers and partners interested in offering 247 GP Direct.",
};

export default function BrokersPartnersPage() {
  return <BusinessDetailPage kind="brokers" />;
}
