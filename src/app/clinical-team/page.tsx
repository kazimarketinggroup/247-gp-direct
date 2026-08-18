import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import TeamHelp from "@/components/clinical-team/TeamHelp";
import TeamHero from "@/components/clinical-team/TeamHero";
import TeamRoster from "@/components/clinical-team/TeamRoster";

export const metadata: Metadata = {
  title: "Meet the Clinical Team — 247 GP Direct",
  description:
    "The GPs behind the phone line. Every consultation is with a GMC-registered doctor practising in the UK.",
};

export default function ClinicalTeamPage() {
  return (
    <>
      <TeamHero />
      <TeamRoster />
      <TeamHelp />
      <CallToAction />
    </>
  );
}
