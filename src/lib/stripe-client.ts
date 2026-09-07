import { loadStripe } from "@stripe/stripe-js";

const publishableKey = (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")
  .trim()
  .replace(/^["']|["']$/g, "");

export const stripePromise = loadStripe(publishableKey);
