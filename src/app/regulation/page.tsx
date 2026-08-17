import type { Metadata } from "next";
import RegulatorList from "@/components/regulation/RegulatorList";
import WiderObligations from "@/components/regulation/WiderObligations";

export const metadata: Metadata = {
  title: "Regulation & Compliance — 247 GP Direct",
  description:
    "Who regulates us and what that actually means. The bodies involved, what each one covers, and the legal obligations attached.",
};

export default function RegulationPage() {
  return (
    <>
      <RegulatorList />
      <WiderObligations />
    </>
  );
}
