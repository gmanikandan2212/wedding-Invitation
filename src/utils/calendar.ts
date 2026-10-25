import { weddingConfig } from "../config/weddingConfig";

/**
 * Generate a Google Calendar event link for the wedding
 */
export function getGoogleCalendarUrl(): string {
  // 20 Nov 2026 09:30 AM to 10:30 AM IST (UTC+5:30) is 04:00 to 05:00 UTC
  const startTimeUtc = "20261120T040000Z";
  const endTimeUtc = "20261120T050000Z";
  const title = encodeURIComponent(
    `Wedding: ${weddingConfig.couple.bride.fullName} & ${weddingConfig.couple.groom.fullName}`
  );
  const details = encodeURIComponent(
    `Holy Matrimony of ${weddingConfig.couple.bride.fullName} and ${weddingConfig.couple.groom.fullName} at ${weddingConfig.ceremony.venueName}, Karur. Reception to follow at ${weddingConfig.reception.venueName}.`
  );
  const location = encodeURIComponent(
    `${weddingConfig.ceremony.venueName}, ${weddingConfig.ceremony.city}`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTimeUtc}/${endTimeUtc}&details=${details}&location=${location}`;
}

/**
 * Download an .ics file for Apple Calendar, Outlook, and other calendar apps
 */
export function downloadIcsFile(): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Precilla and Manikandan//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:precilla-manikandan-wedding-20261120@karur",
    "DTSTAMP:20261023T000000Z",
    "DTSTART:20261120T040000Z",
    "DTEND:20261120T050000Z",
    `SUMMARY:Wedding: ${weddingConfig.couple.bride.fullName} & ${weddingConfig.couple.groom.fullName}`,
    `DESCRIPTION:Holy Matrimony of ${weddingConfig.couple.bride.fullName} and ${weddingConfig.couple.groom.fullName} at ${weddingConfig.ceremony.venueName}, Karur. Reception to follow at ${weddingConfig.reception.venueName}.`,
    `LOCATION:${weddingConfig.ceremony.venueName}, ${weddingConfig.ceremony.city}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Precilla_and_Manikandan_Wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generate a WhatsApp share message for sharing invitation
 */
export function getWhatsAppShareUrl(): string {
  const text = encodeURIComponent(
    `✨ Wedding Invitation ✨\n\nYou are cordially invited to the holy matrimony of\n${weddingConfig.couple.bride.fullName} & ${weddingConfig.couple.groom.fullName}\n\n🗓 Friday, 20 November 2026 at 9:30 AM\n📍 CSI Henry Little Memorial Church, Karur\n\nView the digital invitation:\n${typeof window !== "undefined" ? window.location.href : ""}`
  );
  return `https://api.whatsapp.com/send?text=${text}`;
}

/**
 * Generate a direct WhatsApp link to send personal wedding wishes to the family
 */
export function getWhatsAppWishUrl(phoneNumber: string = "9443246729"): string {
  const text = encodeURIComponent(
    `Dear Precilla & Michael,\n\nHearty congratulations on your wedding! Wishing you both a lifetime of love, eternal happiness, and God's richest blessings in your Holy Matrimony! 💐✨🙏`
  );
  return `https://wa.me/91${phoneNumber}?text=${text}`;
}

