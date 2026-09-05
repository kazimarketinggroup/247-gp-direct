import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutPromise from "@/components/about/AboutPromise";

export const metadata: Metadata = {
  title: "About — 247 GP Direct",
  description:
    "247 GP Direct exists because access to a GP has become the hardest part of ordinary healthcare — not the medicine, the appointment.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPromise />
    </>
  );
}
