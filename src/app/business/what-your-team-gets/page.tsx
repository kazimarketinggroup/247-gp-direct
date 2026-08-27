import type { Metadata } from "next";
import WhatYourTeamGets from "@/components/business/WhatYourTeamGets";

export const metadata: Metadata = {
  title: "What Your Team Gets — 247 GP Direct",
  description:
    "See how 247 GP Direct gives employees and their families practical access to private GP support.",
};

export default function WhatYourTeamGetsPage() {
  return <WhatYourTeamGets />;
}
