import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  keywords: [
    "сайт жасау",
    "сайт жасау Астана",
    "сайт жасау Қазақстан",
    "бизнес сайт",
    "landing page",
    "лендинг жасау",
    "портфолио сайт",
    "қазақша сайт",
    "орысша сайт",
    "web studio Astana",
    "TalUp",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TalUp — Бизнеске арналған сайттар",
    description:
      "Landing page, бизнес сайт және портфолио. KZ/RU, mobile responsive және WhatsApp интеграциясы.",
    url: "/",
    siteName: "TalUp",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TalUp — Бизнеске арналған сайттар",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalUp — Бизнеске арналған сайттар",
    description:
      "Landing page, бизнес сайт және портфолио. KZ/RU, mobile responsive және WhatsApp интеграциясы.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon",
  },
  verification: {
    google: "aDFu4EVsgSMSpV1nDcNMU_9_KAwMxnxU_dq_ivLDxEE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}
