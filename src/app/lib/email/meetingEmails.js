import nodemailer from "nodemailer";

function normalizeSmtpPass(pass) {
  return String(pass || "").replace(/[\s-]/g, "");
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = normalizeSmtpPass(process.env.SMTP_PASS);

  if (!user || !pass) {
    throw new Error("SMTP credentials are missing.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

function getFromAddress() {
  return (
    process.env.SMTP_FROM?.replace(/^["']|["']$/g, "") ||
    process.env.SMTP_USER
  );
}

function getAdminRecipients(userEmail) {
  const raw =
    process.env.MAIN_ENQUIRY_RECIPIENTS ||
    process.env.LEAD_NOTIFICATION_EMAILS ||
    process.env.GOOGLE_CALENDAR_ID ||
    "";

  const recipients = raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  const unique = [...new Set(recipients)];

  return unique.filter((recipient) => recipient !== userEmail.toLowerCase());
}

function formatMeetingTime(startDateTime, timeZone) {
  const normalized = startDateTime.length === 16 ? `${startDateTime}:00` : startDateTime;

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone,
  }).format(new Date(normalized));
}

function buildMeetingEmailHtml({
  title,
  greeting,
  body,
  meetLink,
  meetingTime,
}) {
  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,sans-serif;color:#111827;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg,#05070D,#111827);padding:28px 32px;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#ff6a00;">Base2Brand</p>
                <h1 style="margin:0;font-size:26px;color:#ffffff;">${title}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;font-size:16px;">${greeting}</p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">${body}</p>
                <p style="margin:0 0 16px;font-size:15px;"><strong>When:</strong> ${meetingTime}</p>
                ${
                  meetLink
                    ? `<p style="margin:0 0 24px;font-size:15px;"><a href="${meetLink}" style="display:inline-block;padding:14px 22px;background:#ff6a00;color:#000000;text-decoration:none;border-radius:12px;font-weight:700;">Join Google Meet</a></p>`
                    : ""
                }
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

async function sendEmail({ to, subject, html, label }) {
  const transporter = getTransporter();

  const info = await transporter.sendMail({
    from: getFromAddress(),
    to,
    subject,
    html,
    text: html.replace(/<[^>]+>/g, " "),
  });

  console.info(`Meeting email sent [${label}]`, {
    to,
    messageId: info.messageId,
    accepted: info.accepted,
  });
}

export async function sendMeetingConfirmationEmails({
  firstName,
  lastName,
  email,
  phone,
  meetLink,
  startDateTime,
  timeZone,
}) {
  const fullName = `${firstName} ${lastName}`.trim();
  const meetingTime = formatMeetingTime(startDateTime, timeZone);
  const adminRecipients = getAdminRecipients(email);

  const jobs = [
    sendEmail({
      label: "meeting-user",
      to: email,
      subject: "Your Base2Brand Call Is Confirmed",
      html: buildMeetingEmailHtml({
        title: "Your call is confirmed",
        greeting: `Hi ${firstName},`,
        body: "Thanks for booking a call with Base2Brand. Your Google Meet link is below.",
        meetLink,
        meetingTime,
      }),
    }),
    ...adminRecipients.map((recipient, index) =>
      sendEmail({
        label: `meeting-admin-${index + 1}`,
        to: recipient,
        subject: `[MEETING] New Call Booked — ${fullName}`,
        html: buildMeetingEmailHtml({
          title: "New call booking",
          greeting: "Hello team,",
          body: `${fullName} (${email}) booked a call.${phone ? ` Phone: ${phone}` : ""}`,
          meetLink,
          meetingTime,
        }),
      }),
    ),
  ];

  const results = await Promise.allSettled(jobs);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const label =
        index === 0 ? "meeting-user" : `meeting-admin-${index}`;
      console.error(`Meeting email failed [${label}]:`, result.reason);
    }
  });

  const failed = results.filter((result) => result.status === "rejected");
  if (failed.length === results.length) {
    throw failed[0].reason;
  }
}
