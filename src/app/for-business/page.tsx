import type { Metadata } from "next";
import ForBusinessPage from "@/components/ForBusinessPage";

export const metadata: Metadata = {
  title: "For Business — 247 GP Direct",
  description:
    "Private GP access for employers and teams. Reduce absenteeism, support employee wellbeing, and launch a simple business healthcare benefit in days.",
};

export default function BusinessPage() {
  return <ForBusinessPage />;
}
