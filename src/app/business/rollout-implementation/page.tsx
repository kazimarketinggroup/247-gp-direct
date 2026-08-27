import type { Metadata } from "next";
import BusinessDetailPage from "@/components/business/BusinessDetailPage";

export const metadata: Metadata = {
  title: "Rollout & Implementation — 247 GP Direct",
  description: "Understand how a business membership can be introduced clearly and simply to your team.",
};

export default function RolloutImplementationPage() {
  return <BusinessDetailPage kind="rollout" />;
}
