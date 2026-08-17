import type { Metadata } from "next";
import ArticleGrid from "@/components/health-hub/ArticleGrid";
import FeaturedArticle from "@/components/health-hub/FeaturedArticle";
import GovernanceCta from "@/components/GovernanceCta";
import HubHero from "@/components/health-hub/HubHero";

export const metadata: Metadata = {
  title: "Health Hub — 247 GP Direct",
  description:
    "Plain guidance, reviewed by clinicians. Every article carries a named clinical reviewer and a last-reviewed date.",
};

export default function HealthHubPage() {
  return (
    <>
      <HubHero />
      <FeaturedArticle />
      <ArticleGrid />
      <GovernanceCta />
    </>
  );
}
