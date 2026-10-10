import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";
import {
  resend,
  EMAIL_FROM,
  SUPPORT_EMAIL,
  ADMIN_NOTIFICATION_EMAIL,
} from "@/lib/resend";
import {
  generateCustomerWelcomeEmail,
  generateAdminPurchaseAlertEmail,
} from "@/lib/emails/purchase-emails";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handlePurchaseFulfillment(details: {
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  planName?: string;
  companyName?: string;
  amountFormatted?: string;
  referenceId: string;
  isBusiness?: boolean;
}) {
  const { customerEmail } = details;
  if (!customerEmail || !customerEmail.includes("@")) {
    console.warn("⚠️ No customer email found for purchase fulfillment, skipping email.");
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn("⚠️ RESEND_API_KEY is not set. Skipping Resend dispatch.");
    return;
  }

  const planName = details.planName || "247 GP Direct Healthcare Plan";

  // 1. Send Customer Welcome Confirmation
  try {
    const customerContent = generateCustomerWelcomeEmail({
      customerName: details.customerName,
      customerEmail,
      planName,
      amountFormatted: details.amountFormatted,
      referenceId: details.referenceId,
      isBusiness: details.isBusiness,
      companyName: details.companyName,
    });

    const customerRes = await resend.emails.send({
      from: EMAIL_FROM,
      to: [customerEmail],
      replyTo: SUPPORT_EMAIL,
      subject: customerContent.subject,
      html: customerContent.html,
    });

    console.log("✉️ Customer welcome email dispatched:", customerRes);
  } catch (err: unknown) {
    console.error("❌ Failed to send customer welcome email:", err);
  }

  // 2. Send Action Alert to Admin / Support Team (to issue codes & send PDF)
  try {
    const adminContent = generateAdminPurchaseAlertEmail({
      customerName: details.customerName,
      customerEmail,
      customerPhone: details.customerPhone,
      planName,
      amountFormatted: details.amountFormatted,
      referenceId: details.referenceId,
      companyName: details.companyName,
    });

    const adminRes = await resend.emails.send({
      from: EMAIL_FROM,
      to: [ADMIN_NOTIFICATION_EMAIL],
      replyTo: customerEmail, // hitting reply opens communication with the new customer
      subject: adminContent.subject,
      html: adminContent.html,
    });

    console.log("🚨 Admin purchase notification dispatched:", adminRes);
  } catch (err: unknown) {
    console.error("❌ Failed to send admin purchase notification:", err);
  }
}

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
      const metadata = paymentIntent.metadata || {};
      const customerEmail =
        paymentIntent.receipt_email || metadata.customerEmail;
      const customerName = metadata.customerName;
      const customerPhone = metadata.customerPhone;
      const planName = metadata.planName;
      const companyName = metadata.companyName;
      const isBusiness = metadata.isBusiness === "true";
      const amountFormatted = `£${(paymentIntent.amount / 100).toFixed(2)}`;

      console.log("✅ PaymentIntent succeeded:", {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        customerEmail,
        customerName,
        planName,
      });

      // Trigger automatic welcome email & admin alert
      await handlePurchaseFulfillment({
        customerName,
        customerEmail,
        customerPhone,
        planName,
        companyName,
        amountFormatted,
        referenceId: paymentIntent.id,
        isBusiness,
      });

      break;
    }

    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata || {};
      const customerEmail =
        session.customer_details?.email || metadata.customerEmail;
      const customerName =
        session.customer_details?.name || metadata.customerName;
      const customerPhone =
        session.customer_details?.phone || metadata.customerPhone;
      const planName = metadata.planName;
      const companyName = metadata.companyName;
      const isBusiness = metadata.isBusiness === "true";
      const amountFormatted =
        session.amount_total != null
          ? `£${(session.amount_total / 100).toFixed(2)}`
          : undefined;

      console.log("✅ Checkout Session completed:", {
        id: session.id,
        amountTotal: session.amount_total,
        customerEmail,
        customerName,
      });

      // Trigger automatic welcome email & admin alert
      await handlePurchaseFulfillment({
        customerName,
        customerEmail,
        customerPhone,
        planName,
        companyName,
        amountFormatted,
        referenceId: session.id,
        isBusiness,
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

    default:
      console.log(`ℹ️ Received event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
