import type { Metadata } from "next";
import RegulatorList from "@/components/regulation/RegulatorList";
import WiderObligations from "@/components/regulation/WiderObligations";

export const metadata: Metadata = {
  title: "How we keep your care and data protected — 247 GP Direct",
  description:
    "Clinical governance is how we run the service day to day. This page sets out the standards our doctors, pharmacies and data handling are held to, and the legal obligations attached.",
};

export default function RegulationPage() {
  return (
    <>
      <RegulatorList />
      <WiderObligations />
    </>
  );
}
