export type StripePlanId =
  | "holiday"
  | "family"
  | "sme-5"
  | "sme-10"
  | "sme-15"
  | "sme-20"
  | "sme-25"
  | "sme-50";

export interface StripePlanConfig {
  id: StripePlanId;
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
  isBusiness?: boolean;
  employees?: string;
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

export const STRIPE_PLANS: Record<StripePlanId, StripePlanConfig> = {
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
  "sme-5": {
    id: "sme-5",
    name: "Business Cover (Up to 5 employees)",
    badge: "Startup Tier",
    priceFormatted: "£140",
    periodFormatted: "/year",
    sub: "Billed annually on one invoice",
    description: "Unlimited 24/7 GP access for up to 5 staff including partners & dependent children.",
    unitAmount: 14000, // £140.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
    isBusiness: true,
    employees: "Up to 5 employees",
  },
  "sme-10": {
    id: "sme-10",
    name: "Business Cover (6–10 employees)",
    priceFormatted: "£175",
    periodFormatted: "/year",
    sub: "Billed annually · £17.50/employee equivalent",
    description: "Unlimited 24/7 GP access for 6–10 staff including full family cover for each employee.",
    unitAmount: 17500, // £175.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
    isBusiness: true,
    employees: "6–10 employees",
  },
  "sme-15": {
    id: "sme-15",
    name: "Business Cover (11–15 employees)",
    priceFormatted: "£225",
    periodFormatted: "/year",
    sub: "Billed annually · £15.00/employee equivalent",
    description: "Unlimited 24/7 GP access for 11–15 staff including full family cover for each employee.",
    unitAmount: 22500, // £225.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
    isBusiness: true,
    employees: "11–15 employees",
  },
  "sme-20": {
    id: "sme-20",
    name: "Business Cover (16–20 employees)",
    priceFormatted: "£275",
    periodFormatted: "/year",
    sub: "Billed annually · £13.75/employee equivalent",
    description: "Unlimited 24/7 GP access for 16–20 staff including full family cover for each employee.",
    unitAmount: 27500, // £275.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
    isBusiness: true,
    employees: "16–20 employees",
  },
  "sme-25": {
    id: "sme-25",
    name: "Business Cover (21–25 employees)",
    priceFormatted: "£325",
    periodFormatted: "/year",
    sub: "Billed annually · £13.00/employee equivalent",
    description: "Unlimited 24/7 GP access for 21–25 staff including full family cover for each employee.",
    unitAmount: 32500, // £325.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
    isBusiness: true,
    employees: "21–25 employees",
  },
  "sme-50": {
    id: "sme-50",
    name: "Business Cover (26–50 employees)",
    badge: "Popular SME Tier",
    priceFormatted: "£450",
    periodFormatted: "/year",
    sub: "Billed annually · £9.00/employee equivalent",
    description: "Unlimited 24/7 GP access for 26–50 staff including full family cover for each employee.",
    unitAmount: 45000, // £450.00
    currency: "gbp",
    mode: "subscription",
    interval: "year",
    isBusiness: true,
    employees: "26–50 employees",
  },
};

export function getStripePlan(planId: string): StripePlanConfig | null {
  const normalized = planId.toLowerCase().trim();
  if (normalized === "holiday" || normalized.includes("holiday")) {
    return STRIPE_PLANS.holiday;
  }
  if (normalized === "family" || normalized.includes("family") || normalized.includes("individual") || normalized.includes("sole")) {
    return STRIPE_PLANS.family;
  }
  if (STRIPE_PLANS[normalized as StripePlanId]) {
    return STRIPE_PLANS[normalized as StripePlanId];
  }
  return null;
}
