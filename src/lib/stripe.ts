import Stripe from "stripe";

const rawKey = process.env.STRIPE_SECRET_KEY || "";
const stripeSecretKey = rawKey.trim().replace(/^["']|["']$/g, "");

if (!stripeSecretKey && process.env.NODE_ENV === "production") {
  console.warn("⚠️ STRIPE_SECRET_KEY is not defined in environment variables.");
}

export const stripe = new Stripe(stripeSecretKey, {
  typescript: true,
});
