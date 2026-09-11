"use client";

import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { getPrimaryContactLink } from "@/config/siteConfig";
import type { Locale, Translation } from "@/lib/types";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const navItems = [
  { key: "home", href: "#home" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Header({
  locale,
  setLocale,
  t,
}: {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  t: Translation;
}) {
  const [open, setOpen] = useState(false);
  const contactUrl = getPrimaryContactLink(t.whatsappMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(8,46,99,0.1)] bg-[#F7F7F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a aria-label="TalUp Project" className="flex items-center" href="#home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#0B2340] lg:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-[#C99B3C]" href={item.href} key={item.key}>
              {t.header.nav[item.key]}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} setLocale={setLocale} />
          {contactUrl ? (
            <a
              className={`inline-flex min-h-10 items-center gap-2 rounded-md border px-4 text-sm font-semibold transition ${
                contactUrl.includes("wa.me")
                  ? "border-[#25D366] bg-[#25D366] text-[#06351D] hover:bg-[#1DB954]"
                  : "border-[#C99B3C] bg-[#C99B3C] text-white hover:bg-[#b58a32]"
              }`}
              href={contactUrl}
              rel="noopener noreferrer"
              target={contactUrl.startsWith("mailto:") ? undefined : "_blank"}
            >
              {contactUrl.includes("wa.me") ? <WhatsAppIcon className="h-4 w-4" /> : null}
              {t.header.cta}
            </a>
          ) : null}
        </div>
        <button
          aria-label={open ? t.header.close : t.header.menu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[rgba(8,46,99,0.14)] text-[#082E63] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[rgba(8,46,99,0.1)] bg-[#F7F7F5] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-base font-medium">
            {navItems.map((item) => (
              <a href={item.href} key={item.key} onClick={() => setOpen(false)}>
                {t.header.nav[item.key]}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between gap-4">
            <LanguageSwitcher locale={locale} setLocale={setLocale} />
            {contactUrl ? (
              <a
                className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-4 text-sm font-semibold ${
                  contactUrl.includes("wa.me")
                    ? "border-[#25D366] bg-[#25D366] text-[#06351D]"
                    : "border-[#C99B3C] bg-[#C99B3C] text-white"
                }`}
                href={contactUrl}
                rel="noopener noreferrer"
                target={contactUrl.startsWith("mailto:") ? undefined : "_blank"}
              >
                {contactUrl.includes("wa.me") ? <WhatsAppIcon className="h-4 w-4" /> : null}
                {t.header.cta}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
