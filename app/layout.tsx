import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalUp Project — Сайттар және цифрлық шешімдер",
  description:
    "TalUp Project — бизнеске және мамандарға арналған заманауи Landing Page, бизнес сайттар және портфолио сайттар.",
  openGraph: {
    title: "TalUp Project — Сайттар және цифрлық шешімдер",
    description:
      "Бизнеске және мамандарға арналған заманауи Landing Page, бизнес сайттар және портфолио сайттар.",
    url: "https://talup-project.vercel.app",
    siteName: "TalUp Project",
    locale: "kk_KZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
