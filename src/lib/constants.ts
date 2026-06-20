export const BRAND = "gila";

/** Set in `.env`: VITE_BOOKING_URL (Calendly, etc.) or VITE_CONTACT_EMAIL */
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL?.trim() ?? "";
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? "";

export const CONSULT_URL =
  BOOKING_URL ||
  (CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("gila consultation")}` : "");

export const CTA_LABEL = "Book a consult";
export const CTA_LABEL_HERO = "Book a consult";
export const CTA_LABEL_SECONDARY = "Talk to an expert";

export const images = {
  hero: "/hero.png",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Programmes", href: "#programs" },
  { label: "Experts", href: "#experts" },
  { label: "FAQs", href: "#faq" },
];

export const hasConsultLink = Boolean(CONSULT_URL);

export function consultHref(fallback = "#consult") {
  return hasConsultLink ? CONSULT_URL : fallback;
}
