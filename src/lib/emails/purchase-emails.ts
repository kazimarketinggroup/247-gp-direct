interface WelcomeEmailParams {
  customerName?: string;
  customerEmail: string;
  planName: string;
  amountFormatted?: string;
  referenceId: string;
  isBusiness?: boolean;
  companyName?: string;
  dateFormatted?: string;
}

export function generateCustomerWelcomeEmail(params: WelcomeEmailParams): {
  subject: string;
  html: string;
} {
  const {
    customerName,
    planName,
    amountFormatted,
    referenceId,
    dateFormatted,
  } = params;

  const displayName = customerName?.trim() || "Customer";
  const currentDate =
    dateFormatted ||
    new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const subject = `Payment Confirmation & Account Activation Update – 247 GP Direct Ltd`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6; font-size: 14px;">
  
  <div style="max-width: 520px; margin: 0 auto; padding: 10px 0;">
    
    <!-- Logo 2 -->
    <div style="margin-bottom: 24px;">
      <span style="font-size: 24px; font-weight: 700; letter-spacing: -0.3px;">
        <span style="color: #E05A47;">247</span>&nbsp;<span style="color: #0A3A40;">GP Direct</span>
      </span>
    </div>

    <!-- Exact Client Copy -->
    <p style="margin: 0 0 14px 0;">
      Dear ${displayName},
    </p>

    <p style="margin: 0 0 18px 0;">
      Thank you for your payment! We are writing to confirm that we have successfully received your online transaction for your online GP services subscription.
    </p>

    <p style="margin: 0 0 6px 0; font-weight: 700; color: #0A3A40;">
      Transaction Details:
    </p>
    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; margin-bottom: 20px;">
      <tr>
        <td style="padding: 3px 0; color: #4b5563; width: 180px;"><strong>Date:</strong></td>
        <td style="padding: 3px 0; color: #111827;">${currentDate}</td>
      </tr>
      <tr>
        <td style="padding: 3px 0; color: #4b5563;"><strong>Transaction Reference / ID:</strong></td>
        <td style="padding: 3px 0; color: #111827; font-family: monospace;">${referenceId}</td>
      </tr>
      <tr>
        <td style="padding: 3px 0; color: #4b5563;"><strong>Amount Paid:</strong></td>
        <td style="padding: 3px 0; color: #111827;">${amountFormatted || "Confirmed"}</td>
      </tr>
      <tr>
        <td style="padding: 3px 0; color: #4b5563;"><strong>Service Plan:</strong></td>
        <td style="padding: 3px 0; color: #111827;">${planName}</td>
      </tr>
    </table>

    <p style="margin: 0 0 6px 0; font-weight: 700; color: #0A3A40;">
      What Happens Next?
    </p>
    <p style="margin: 0 0 10px 0;">
      Your online GP services are currently being provisioned. Your account and services will be fully active within the next 24 hours.
    </p>
    <p style="margin: 0 0 20px 0;">
      Once your account is active, you will receive a separate confirmation email containing your login details and instructions on how to access your care team and initiate consultations.
    </p>

    <p style="margin: 0 0 6px 0; font-weight: 700; color: #0A3A40;">
      Need Immediate Assistance?
    </p>
    <p style="margin: 0 0 8px 0;">
      If you have any urgent questions regarding your activation or billing, please do not hesitate to contact our support team:
    </p>
    <p style="margin: 0 0 20px 0; line-height: 1.8;">
      <strong>Email:</strong> <a href="mailto:support@247gpdirect.co.uk" style="color: #0A3A40;">support@247gpdirect.co.uk</a><br />
      <strong>Phone:</strong> 0330 520 0089<br />
      <strong>Operating Hours:</strong> Monday to Friday, 9:00 AM &ndash; 5:00 PM<br />
      <strong>Web:</strong> <a href="https://www.247gpdirect.co.uk" style="color: #0A3A40;">www.247gpdirect.co.uk</a>
    </p>

    <p style="margin: 0 0 16px 0;">
      Thank you for choosing 247 GP Direct Ltd. We look forward to supporting your healthcare needs.
    </p>

    <p style="margin: 0; line-height: 1.4;">
      Warm regards,<br />
      <strong>247 GP Direct Team</strong>
    </p>

  </div>
</body>
</html>
  `.trim();

  return { subject, html };
}

interface AdminAlertParams {
  customerName?: string;
  customerEmail: string;
  customerPhone?: string;
  planName: string;
  amountFormatted?: string;
  referenceId: string;
  companyName?: string;
  mode?: string;
}

export function generateAdminPurchaseAlertEmail(params: AdminAlertParams): {
  subject: string;
  html: string;
} {
  const {
    customerName,
    customerEmail,
    customerPhone,
    planName,
    amountFormatted,
    referenceId,
    companyName,
  } = params;

  const subject = `🚨 Action Required: New Member Purchase — ${customerName || customerEmail} (${planName})`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size: 14px; color: #111827; line-height: 1.5;">
  <div style="max-width: 500px; margin: 0 auto;">
    <p style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700;">
      <span style="color: #E05A47;">247</span> <span style="color: #0A3A40;">GP Direct</span> &mdash; New Purchase Alert
    </p>

    <div style="background-color: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 6px; margin-bottom: 16px; color: #991b1b; font-size: 13px;">
      <strong>Action Required:</strong> Provision customer access in portal within 24 hours.
    </div>

    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; margin-bottom: 16px;">
      <tr><td style="padding: 4px 0; color: #6b7280; width: 130px;">Customer Name:</td><td><strong>${customerName || "N/A"}</strong></td></tr>
      <tr><td style="padding: 4px 0; color: #6b7280;">Email:</td><td><a href="mailto:${customerEmail}">${customerEmail}</a></td></tr>
      ${customerPhone ? `<tr><td style="padding: 4px 0; color: #6b7280;">Phone:</td><td>${customerPhone}</td></tr>` : ""}
      ${companyName ? `<tr><td style="padding: 4px 0; color: #6b7280;">Company:</td><td>${companyName}</td></tr>` : ""}
      <tr><td style="padding: 4px 0; color: #6b7280;">Plan:</td><td><strong>${planName}</strong></td></tr>
      <tr><td style="padding: 4px 0; color: #6b7280;">Amount:</td><td>${amountFormatted || "Confirmed"}</td></tr>
      <tr><td style="padding: 4px 0; color: #6b7280;">Stripe Ref:</td><td style="font-family: monospace;">${referenceId}</td></tr>
    </table>

    <p style="font-size: 12px; color: #6b7280; margin: 0;">
      💡 Hit Reply to email <strong>${customerEmail}</strong> directly.
    </p>
  </div>
</body>
</html>
  `.trim();

  return { subject, html };
}
