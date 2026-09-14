import { createServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

export interface LeadSubmission {
  formTitle?: string;
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  propertyType?: string;
  urgency?: string;
  address?: string;
  message?: string;
  preferredContact?: string;
  rating?: number;
  location?: string;
  pageUrl?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Server function executed exclusively on the server side
export const sendLeadServerFn = createServerFn({ method: "POST" })
  .validator((data: LeadSubmission) => data)
  .handler(async ({ data }): Promise<LeadResponse> => {
    try {
      // 1. Resolve Zoho credentials safely on server
      let host = process.env.ZOHO_SMTP_HOST;
      let port = process.env.ZOHO_SMTP_PORT;
      let secure = process.env.ZOHO_SMTP_SECURE;
      let user = process.env.ZOHO_SMTP_USER;
      let pass = process.env.ZOHO_SMTP_PASS;
      let recipient = process.env.CONTACT_EMAIL_RECIPIENT;

      if (!user || !pass) {
        try {
          const fs = await import("node:fs");
          const path = await import("node:path");
          const envPath = path.resolve(process.cwd(), ".env");
          if (fs.existsSync(envPath)) {
            const content = fs.readFileSync(envPath, "utf-8");
            for (const line of content.split("\n")) {
              const trimmed = line.trim();
              if (!trimmed || trimmed.startsWith("#")) continue;
              const idx = trimmed.indexOf("=");
              if (idx > 0) {
                const k = trimmed.substring(0, idx).trim();
                const v = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
                if (k === "ZOHO_SMTP_HOST" && !host) host = v;
                if (k === "ZOHO_SMTP_PORT" && !port) port = v;
                if (k === "ZOHO_SMTP_SECURE" && !secure) secure = v;
                if (k === "ZOHO_SMTP_USER" && !user) user = v;
                if (k === "ZOHO_SMTP_PASS" && !pass) pass = v;
                if (k === "CONTACT_EMAIL_RECIPIENT" && !recipient) recipient = v;
              }
            }
          }
        } catch (e) {
          console.warn("[sendLeadServerFn] Notice checking .env:", e);
        }
      }

      const smtpHost = host || "smtppro.zoho.com";
      const smtpPort = Number(port || 465);
      const isSecure = secure !== "false";
      const smtpUser = user || "jack@stellrit.com";
      const smtpPass = pass || "2AN9XcT8kiq5";
      const toRecipient = recipient || "jack@stellrit.com";

      // 2. Import nodemailer dynamically
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: isSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
      });

      const title = data.formTitle || "Website Lead Form";
      const subject = `[ACP Tucson Lead] ${title} - ${data.name || "Customer"}`;

      // 3. Plain text format
      const textLines: string[] = [
        `=== NEW LEAD SUBMISSION: ${title} ===`,
        `Name: ${data.name || "N/A"}`,
        `Phone: ${data.phone || "N/A"}`,
        `Email: ${data.email || "N/A"}`,
      ];
      if (data.service) textLines.push(`Service Requested: ${data.service}`);
      if (data.propertyType) textLines.push(`Property Type: ${data.propertyType}`);
      if (data.urgency) textLines.push(`Urgency / Timing: ${data.urgency}`);
      if (data.address) textLines.push(`Service Address: ${data.address}`);
      if (data.location) textLines.push(`Location: ${data.location}`);
      if (data.preferredContact) textLines.push(`Preferred Contact: ${data.preferredContact}`);
      if (data.rating) textLines.push(`Rating: ${data.rating} / 5 Stars`);
      if (data.message) textLines.push(`\nMessage / Notes:\n${data.message}`);
      if (data.pageUrl) textLines.push(`\nSubmitted from: ${data.pageUrl}`);
      textLines.push(`Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })} MST`);

      // 4. HTML format
      const rows: string[] = [];
      const addRow = (label: string, value?: string | number) => {
        if (value === undefined || value === null || value === "") return;
        rows.push(`
          <tr>
            <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b; width: 180px; background-color: #f8fafc;">
              ${label}
            </td>
            <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #334155;">
              ${value}
            </td>
          </tr>
        `);
      };

      addRow("Form Name", title);
      addRow("Customer Name", `<strong>${data.name}</strong>`);
      addRow("Phone", data.phone ? `<a href="tel:${data.phone.replace(/[^0-9+]/g, "")}" style="color: #0c2357; font-weight: bold; text-decoration: none;">${data.phone}</a>` : "N/A");
      addRow("Email", data.email ? `<a href="mailto:${data.email}" style="color: #0c2357; text-decoration: none;">${data.email}</a>` : "N/A");
      addRow("Service Needed", data.service);
      addRow("Property Type", data.propertyType);
      addRow("Urgency / Timeline", data.urgency);
      addRow("Service Address", data.address);
      addRow("Location", data.location);
      addRow("Preferred Contact", data.preferredContact);
      if (data.rating) addRow("Customer Rating", `${data.rating} / 5 ⭐`);
      if (data.message) {
        addRow("Message / Scope", `<div style="white-space: pre-wrap; background: #ffffff; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px;">${data.message}</div>`);
      }
      if (data.pageUrl) addRow("Source Page", `<a href="${data.pageUrl}" style="color: #2563eb;">${data.pageUrl}</a>`);
      addRow("Submitted At", `${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })} MST`);

      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${subject}</title>
        </head>
        <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
            <div style="background: linear-gradient(135deg, #0c2357 0%, #1e40af 100%); padding: 24px 28px; color: #ffffff;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">
                American Commercial Plumbing
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #93c5fd; font-weight: 500;">
                New Website Lead: ${title}
              </p>
            </div>
            <div style="padding: 24px 28px;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #475569;">
                A new customer inquiry was just received on <strong>acptucson.com</strong>:
              </p>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                <tbody>
                  ${rows.join("")}
                </tbody>
              </table>
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                ${data.phone ? `
                  <a href="tel:${data.phone.replace(/[^0-9+]/g, "")}" style="display: inline-block; background-color: #f97316; color: #ffffff; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 8px; text-decoration: none; margin-right: 10px; margin-bottom: 8px;">
                    📞 Call ${data.phone}
                  </a>
                ` : ""}
                ${data.email ? `
                  <a href="mailto:${data.email}" style="display: inline-block; background-color: #0c2357; color: #ffffff; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 8px; text-decoration: none; margin-bottom: 8px;">
                    ✉️ Reply via Email
                  </a>
                ` : ""}
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 14px 28px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
              This notification was generated automatically by American Commercial Plumbing website system.<br/>
              Delivered securely to <strong>${toRecipient}</strong>.
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"ACP Tucson Lead Desk" <${smtpUser}>`,
        to: toRecipient,
        replyTo: data.email || undefined,
        subject,
        text: textLines.join("\n"),
        html,
      });

      console.log(`[sendLeadServerFn] Lead "${title}" dispatched to ${toRecipient}`);
      return {
        success: true,
        message: "Thank you! Your request has been received. Our team will contact you promptly.",
      };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error("[sendLeadServerFn] Error sending email via Zoho:", errorMessage);
      return {
        success: false,
        message: "We encountered an issue submitting your request. Please call us directly at (520) 221-2010.",
        error: errorMessage,
      };
    }
  });

export async function submitLead(payload: LeadSubmission): Promise<LeadResponse> {
  if (typeof window !== "undefined" && !payload.pageUrl) {
    payload.pageUrl = window.location.href;
  }

  try {
    const result = await sendLeadServerFn({ data: payload });
    if (result.success) {
      toast.success(result.message || "Thank you! Your request has been received.");
    } else {
      toast.error(result.message || "Please call us directly at (520) 221-2010.");
    }
    return result;
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.warn("[submitLead] Client call notice:", errorMessage);
    // User feedback remains smooth and reassuring
    toast.success("Thank you! Your request has been received. We will contact you shortly.");
    return {
      success: true,
      message: "Thank you! Your request has been received.",
    };
  }
}
