export interface StripePlanConfig {
  id: "holiday" | "family";
  name: string;
  badge?: string;
  priceFormatted: string;
  periodFormatted: string;
  sub: string;
  description: string;
  unitAmount: number; // in pence (e.g. £30.00 = 3000)
  currency: "gbp";
  mode: "payment" | "subscription";
  interval?: "year" | "month";
}

export const STRIPE_PLANS: Record<string, StripePlanConfig> = {
  holiday: {
    id: "holiday",
    name: "Holiday Cover",
    priceFormatted: "£30",
    periodFormatted: "one-off",
    sub: "Per trip · 15 days abroad",
    description: "15 days of medical advice with a UK-qualified GP while you're abroad.",
    unitAmount: 3000, // £30.00
    currency: "gbp",
    mode: "payment",
  },
  family: {
    id: "family",
    name: "Individual & Family Membership",
    badge: "Most popular",
    priceFormatted: "£100",
    periodFormatted: "/year",
    sub: "a year · £8.33 a month equivalent",
    description: "Unlimited 24/7 GP consultations for you, your partner, and dependent children.",
    unitAmount: 10000, // £100.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
  },
};

export function getStripePlan(planId: string): StripePlanConfig | null {
  const normalized = planId.toLowerCase().trim();
  if (normalized === "holiday" || normalized.includes("holiday")) {
    return STRIPE_PLANS.holiday;
  }
  if (normalized === "family" || normalized.includes("family") || normalized.includes("individual")) {
    return STRIPE_PLANS.family;
  }
  return STRIPE_PLANS[normalized] || null;
}
