import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_FROM, SUPPORT_EMAIL, ADMIN_NOTIFICATION_EMAIL } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { company, phone, email, contact, role, headcount, notes } = body;

    if (!company || !email) {
      return NextResponse.json(
        { error: "Company name and email are required." },
        { status: 400 }
      );
    }

    const cleanCompany = String(company).trim().slice(0, 150);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 200);
    const cleanPhone = phone ? String(phone).trim().slice(0, 50) : "Not provided";
    const cleanContact = contact ? String(contact).trim().slice(0, 120) : "Not specified";
    const cleanRole = role ? String(role).trim().slice(0, 100) : "Not specified";
    const cleanHeadcount = headcount ? String(headcount).trim().slice(0, 100) : "Not specified";
    const cleanNotes = notes ? String(notes).trim().slice(0, 2000) : "None";

    // 1. Send Lead Notification to Sales/Support Team
    const result = await resend.emails.send({
      from: EMAIL_FROM,
      to: [ADMIN_NOTIFICATION_EMAIL],
      replyTo: cleanEmail,
      subject: `💼 New Business Healthcare Quote Request: ${cleanCompany} (${cleanHeadcount})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; padding: 20px; color: #1f2937;">
          <h2 style="color: #0A3A40; margin-top: 0;">New Business Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; color: #6b7280; width: 140px;"><strong>Company:</strong></td><td><strong>${cleanCompany}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;"><strong>Contact Person:</strong></td><td>${cleanContact} (${cleanRole})</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;"><strong>Work Email:</strong></td><td><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;"><strong>Phone:</strong></td><td>${cleanPhone}</td></tr>
            <tr><td style="padding: 6px 0; color: #6b7280;"><strong>Headcount / Team:</strong></td><td><span style="background: #e6f4f1; color: #0A3A40; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${cleanHeadcount}</span></td></tr>
          </table>
          ${
            cleanNotes !== "None"
              ? `<div style="background-color: #f3f4f6; padding: 14px; border-radius: 6px; margin-bottom: 20px;">
                  <strong>Additional Notes:</strong><br/>
                  <p style="white-space: pre-wrap; margin: 6px 0 0 0;">${cleanNotes}</p>
                </div>`
              : ""
          }
          <p style="font-size: 13px; color: #6b7280;">
            Reply directly to this email to contact ${cleanContact} at ${cleanCompany}.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend quote email error:", result.error);
      return NextResponse.json(
        { error: "Failed to dispatch quote request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
