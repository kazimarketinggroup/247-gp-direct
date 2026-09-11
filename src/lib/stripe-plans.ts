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

export interface PromoConfig {
  code: string;
  discountAmount: number; // in pence, e.g. 2500 = £25
  finalPriceFormatted: string; // "£75"
  label: string;
}

export const PROMO_CODES: Record<string, PromoConfig> = {
  PROMO75: {
    code: "PROMO75",
    discountAmount: 2500,
    finalPriceFormatted: "£75",
    label: "Launch Promo: £25 off (Now £75/year)",
  },
};

export function getPromoDiscount(code?: string): PromoConfig | null {
  if (!code) return null;
  const clean = code.trim().toUpperCase();
  return PROMO_CODES[clean] || null;
}

export const STRIPE_PLANS: Record<string, StripePlanConfig> = {
  holiday: {
    id: "holiday",
    name: "Holiday Cover",
    priceFormatted: "£30",
    periodFormatted: "one-off",
    sub: "Per trip · 30 days abroad",
    description: "30 days of medical advice with a UK-qualified GP while you're abroad.",
    unitAmount: 3000, // £30.00
    currency: "gbp",
    mode: "payment",
  },
  family: {
    id: "family",
    name: "Individual & Sole Trader (Family Package)",
    badge: "Includes Family",
    priceFormatted: "£100",
    periodFormatted: "/year",
    sub: "a year · £8.33 a month equivalent",
    description: "Unlimited 24/7 GP consultations for you, your partner, and dependent children. Covers sole traders.",
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
