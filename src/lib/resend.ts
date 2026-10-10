import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY?.trim();

if (!resendApiKey && process.env.NODE_ENV !== "production") {
  console.warn("⚠️ RESEND_API_KEY is not set in environment variables.");
}

export const resend = new Resend(resendApiKey || "re_dummy_for_build");

export const EMAIL_FROM =
  process.env.RESEND_FROM_EMAIL || "247 GP Direct <support@support.247gpdirect.co.uk>";

export const SUPPORT_EMAIL =
  process.env.SUPPORT_EMAIL || "support@247gpdirect.co.uk";

// Where admin alerts for new purchases and inquiries are sent
export const ADMIN_NOTIFICATION_EMAIL =
  process.env.ADMIN_NOTIFICATION_EMAIL || process.env.SUPPORT_EMAIL || "support@247gpdirect.co.uk";
