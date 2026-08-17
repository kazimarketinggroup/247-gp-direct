import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import JourneyHero from "@/components/how-it-works/JourneyHero";
import JourneyNotes from "@/components/how-it-works/JourneyNotes";
import JourneySteps from "@/components/how-it-works/JourneySteps";

export const metadata: Metadata = {
  title: "How it works — 247 GP Direct",
  description:
    "Join in three minutes and use it the same night. No app to download, no account to remember — a phone number and a membership number is all it takes.",
};

export default function HowItWorksPage() {
  return (
    <>
      <JourneyHero />
      <JourneySteps />
      <JourneyNotes />
      <CallToAction />
    </>
  );
}
