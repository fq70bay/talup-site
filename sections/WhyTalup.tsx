"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Translation } from "@/lib/types";

export function WhyTalup({ t }: { t: Translation }) {
  return (
    <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>{t.why.label}</SectionLabel>
        <SectionTitle>{t.why.heading}</SectionTitle>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#0B2340]/68">
          {t.why.subtitle}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, index) => (
            <article
              className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-[#F7F7F5] p-5 transition duration-200 hover:border-[rgba(201,155,60,0.45)]"
              key={item.title}
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-tight text-[#071B33]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#0B2340]/68">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
