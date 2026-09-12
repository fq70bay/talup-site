import type { Locale } from "@/lib/types";

export const siteConfig = {
  brandName: "TalUp Project",
  shortName: "TalUp",
  slogan: "RISE BEYOND LIMITS",
  url: "https://talup-site.vercel.app",
  seoTitle: "TalUp — Астанада сайт жасау | Landing Page, бизнес сайт, портфолио",
  seoDescription:
    "TalUp — Астана және Қазақстан бойынша бизнеске арналған сайттар жасайтын web studio. Landing page, бизнес сайт, портфолио, KZ/RU, mobile responsive және WhatsApp интеграциясы.",
  email: "farhatqazaq@gmail.com",
  phone: {
    label: "+7 776 748 41 14",
    href: "tel:+77767484114",
  },
  whatsapp: {
    label: "+7 776 748 41 14",
    number: "77767484114",
    url: "https://wa.me/77767484114",
  },
  instagram: {
    label: "@talupstudio",
    url: "https://www.instagram.com/talupstudio/",
  },
};

export function getWhatsAppLink(message: string) {
  return `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
}

export function getEmailLink() {
  return siteConfig.email ? `mailto:${siteConfig.email}` : null;
}

export function getPrimaryContactLink(message: string) {
  return getWhatsAppLink(message) ?? getEmailLink();
}

export const localeLabels: Record<Locale, string> = {
  kz: "KZ",
  ru: "RU",
};
