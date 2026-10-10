import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_FROM, SUPPORT_EMAIL, ADMIN_NOTIFICATION_EMAIL } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim().slice(0, 120);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 200);
    const cleanPhone = phone ? String(phone).trim().slice(0, 50) : "Not provided";
    const cleanMessage = String(message).trim().slice(0, 2000);

    // Send email to team / support
    const result = await resend.emails.send({
      from: EMAIL_FROM,
      to: [ADMIN_NOTIFICATION_EMAIL],
      replyTo: cleanEmail,
      subject: `📩 New Website Enquiry from ${cleanName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; padding: 20px; color: #1f2937;">
          <h2 style="color: #0A3A40; margin-top: 0;">New Contact Form Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td><td>${cleanName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td><td>${cleanPhone}</td></tr>
          </table>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; border-left: 4px solid #0A3A40;">
            <strong>Message:</strong><br/>
            <p style="white-space: pre-wrap; margin: 8px 0 0 0;">${cleanMessage}</p>
          </div>
          <p style="font-size: 12px; color: #9ca3af; margin-top: 20px;">
            You can reply directly to this email to respond to ${cleanName}.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend contact error:", result.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or call us." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
