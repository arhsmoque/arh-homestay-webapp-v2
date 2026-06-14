type InquiryMode = "stay" | "event" | "corporate";

type WhatsappInquiry = {
  mode: InquiryMode;
  date: string;
  pax: string;
  cars?: string;
  packageName?: string;
  eventType?: string;
  setupNeeds?: string;
  questions?: string;
};

export function buildWhatsappMessage(inquiry: WhatsappInquiry): string {
  const lines = [
    "Hi, I want to check availability.",
    "",
    `Purpose: ${inquiry.mode}`,
    `Date: ${inquiry.date}`,
    `Pax: ${inquiry.pax}`
  ];

  if (inquiry.cars) lines.push(`Cars: ${inquiry.cars}`);
  if (inquiry.packageName) lines.push(`Package: ${inquiry.packageName}`);
  if (inquiry.eventType) lines.push(`Event type: ${inquiry.eventType}`);
  if (inquiry.setupNeeds) lines.push(`Setup needs: ${inquiry.setupNeeds}`);
  if (inquiry.questions) lines.push(`Questions: ${inquiry.questions}`);

  return lines.join("\n");
}
