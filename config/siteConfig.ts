import type { Locale } from "@/lib/types";

export const siteConfig = {
  brandName: "TalUp Project",
  shortName: "TalUp",
  slogan: "RISE BEYOND LIMITS",
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
    label: "@fq_70bay",
    url: "https://www.instagram.com/fq_70bay",
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
