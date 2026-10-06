import { contact } from "@/lib/content";

/** True while a content value still contains a [PLACEHOLDER]. */
export function isPlaceholder(value: string) {
  return /\[[^\]]+\]/.test(value);
}

export function formatPrice(amount: number) {
  return `$${amount.toLocaleString("en-SG")}`;
}

/** wa.me click-to-chat link with a pre-filled message. */
export function whatsappUrl(message = contact.whatsappMessage) {
  const digits = contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Accepts "user/event" or a full "https://cal.com/user/event" URL. */
export function normalizeCalLink(link: string) {
  return link
    .trim()
    .replace(/^https?:\/\/(app\.)?cal\.com\//i, "")
    .replace(/^\/+|\/+$/g, "");
}

export function calBookingUrl(link: string) {
  return `https://cal.com/${normalizeCalLink(link)}`;
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
