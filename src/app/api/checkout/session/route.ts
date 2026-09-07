import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id query parameter." },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe secret key is not configured." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      id: session.id,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email || session.customer_email,
      customer_name: session.customer_details?.name,
      amount_total: session.amount_total,
      currency: session.currency,
      mode: session.mode,
      metadata: session.metadata,
      created: session.created,
    });
  } catch (err: unknown) {
    console.error("Error retrieving checkout session:", err);
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
