import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  const webhookSecret = (process.env.STRIPE_WEBHOOK_SECRET || "")
    .trim()
    .replace(/^["']|["']$/g, "");

  let event: Stripe.Event;

  try {
    if (webhookSecret && signature) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      // In development or before webhook secret is added
      console.warn(
        "⚠️ STRIPE_WEBHOOK_SECRET or stripe-signature missing. Parsing event unverified."
      );
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Webhook signature verification failed";
    console.error("❌ Stripe Webhook Error:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  // Handle relevant Stripe events
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("✅ PaymentIntent succeeded:", {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        customerEmail: paymentIntent.receipt_email || paymentIntent.metadata?.customerEmail,
        planId: paymentIntent.metadata?.planId,
        customerName: paymentIntent.metadata?.customerName,
      });
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.warn("⚠️ PaymentIntent failed:", {
        id: paymentIntent.id,
        lastPaymentError: paymentIntent.last_payment_error?.message,
      });
      break;
    }

    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("✅ Checkout Session completed:", {
        id: session.id,
        amountTotal: session.amount_total,
        customerEmail: session.customer_details?.email,
      });
      break;
    }

    default:
      console.log(`ℹ️ Received unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
