"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const defaultNavItems = [
  { label: "Қызметтер", href: "#services" },
  { label: "Баға", href: "#pricing" },
  { label: "Жобалар", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

type AstanaHeaderProps = {
  ariaLabel?: string;
  ctaLabel?: string;
  languageLinks?: Array<{ active?: boolean; href: string; label: string }>;
  menuLabel?: string;
  closeLabel?: string;
  navItems?: Array<{ label: string; href: string }>;
  whatsappUrl: string;
};

export function AstanaHeader({
  ariaLabel = "TalUp басты беті",
  ctaLabel = "WhatsApp",
  languageLinks,
  menuLabel = "Мәзір",
  closeLabel = "Жабу",
  navItems = defaultNavItems,
  whatsappUrl,
}: AstanaHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(8,46,99,0.1)] bg-[#F7F7F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link aria-label={ariaLabel} className="flex items-center" href="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#0B2340] lg:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-[#C99B3C]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-4 text-sm font-semibold text-[#06351D] transition hover:bg-[#1DB954]"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {ctaLabel}
          </a>
        </div>
        <button
          aria-label={open ? closeLabel : menuLabel}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[rgba(8,46,99,0.14)] text-[#082E63] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[rgba(8,46,99,0.1)] bg-[#F7F7F5] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-base font-medium text-[#0B2340]">
            {navItems.map((item) => (
              <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          {languageLinks ? (
            <div className="mx-auto mt-5 flex max-w-7xl gap-2 border-t border-[rgba(8,46,99,0.1)] pt-5">
              {languageLinks.map((link) => (
                <a
                  className={`inline-flex h-9 min-w-11 items-center justify-center rounded-md border px-3 text-xs font-bold uppercase tracking-[0.08em] ${
                    link.active
                      ? "border-[#C99B3C] bg-[#C99B3C] text-white"
                      : "border-[rgba(8,46,99,0.16)] bg-transparent text-[#082E63]"
                  }`}
                  href={link.href}
                  key={link.label}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
          <div className="mx-auto mt-5 max-w-7xl">
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-4 text-sm font-semibold text-[#06351D]"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {ctaLabel}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
