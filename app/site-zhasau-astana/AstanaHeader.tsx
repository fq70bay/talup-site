"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const navItems = [
  { label: "Қызметтер", href: "#services" },
  { label: "Баға", href: "#pricing" },
  { label: "Жобалар", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

export function AstanaHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(8,46,99,0.1)] bg-[#F7F7F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link aria-label="TalUp басты беті" className="flex items-center" href="/">
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
            WhatsApp
          </a>
        </div>
        <button
          aria-label={open ? "Жабу" : "Мәзір"}
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
          <div className="mx-auto mt-5 max-w-7xl">
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-4 text-sm font-semibold text-[#06351D]"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
