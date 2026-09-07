import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getStripePlan } from "@/lib/stripe-plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe secret key is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { planId, name, email, phone } = body;

    if (!planId) {
      return NextResponse.json(
        { error: "Missing planId parameter." },
        { status: 400 }
      );
    }

    const plan = getStripePlan(planId);
    if (!plan) {
      return NextResponse.json(
        { error: `Invalid plan specified: "${planId}". Expected "holiday" or "family".` },
        { status: 400 }
      );
    }

    // Clean attendee inputs
    const cleanName = typeof name === "string" ? name.trim().slice(0, 120) : "";
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase().slice(0, 200) : "";
    const cleanPhone = typeof phone === "string" ? phone.trim().slice(0, 40) : "";

    // Create Stripe PaymentIntent for the in-website modal checkout
    const intent = await stripe.paymentIntents.create({
      amount: plan.unitAmount,
      currency: plan.currency,
      receipt_email: cleanEmail && cleanEmail.includes("@") ? cleanEmail : undefined,
      description: `247 GP Direct — ${plan.name}`,
      automatic_payment_methods: { enabled: true },
      metadata: {
        planId: plan.id,
        planName: plan.name,
        customerName: cleanName,
        customerEmail: cleanEmail,
        customerPhone: cleanPhone,
        service: "247 GP Direct Private Medical Cover",
      },
    });

    if (!intent.client_secret) {
      return NextResponse.json(
        { error: "Stripe did not return a client secret." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      clientSecret: intent.client_secret,
      paymentIntentId: intent.id,
      amountPence: plan.unitAmount,
      currency: plan.currency,
      plan: {
        id: plan.id,
        name: plan.name,
        priceFormatted: plan.priceFormatted,
        periodFormatted: plan.periodFormatted,
        sub: plan.sub,
        description: plan.description,
      },
    });
  } catch (err: unknown) {
    console.error("Stripe PaymentIntent Error:", err);
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
