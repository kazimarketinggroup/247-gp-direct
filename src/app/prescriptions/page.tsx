import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import SilkHero from "@/components/SilkHero";
import Pathway from "@/components/prescriptions/Pathway";
import PrescriptionDetails from "@/components/prescriptions/PrescriptionDetails";
import { prescriptionsPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prescriptions — 247 GP Direct",
  description:
    "Where a GP judges medication to be appropriate, they can issue a private prescription electronically during or immediately after your consultation.",
};

export default function PrescriptionsPage() {
  return (
    <>
      <SilkHero
        image="/images/prescriptions/hero-petals.png"
        label={prescriptionsPage.label}
        title={prescriptionsPage.title}
        intro={prescriptionsPage.intro}
        align="center"
      />
      <Pathway />
      <PrescriptionDetails />
      <CallToAction />
    </>
  );
}
