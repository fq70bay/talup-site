"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getWhatsAppLink } from "@/config/siteConfig";
import type { Translation } from "@/lib/types";

export function Pricing({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-[rgba(8,46,99,0.08)] bg-[#F7F7F5] py-14 sm:py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionLabel>{t.pricing.label}</SectionLabel>
          <SectionTitle>{t.pricing.heading}</SectionTitle>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#0B2340]/68">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {t.pricing.plans.map((plan, index) => {
            const highlighted = plan.name === "BUSINESS";
            const whatsappUrl = getWhatsAppLink(plan.message);

            return (
              <motion.article
                className={`flex h-full flex-col rounded-lg border bg-white p-5 transition duration-200 hover:-translate-y-[3px] sm:p-6 ${
                  highlighted
                    ? "border-[#C99B3C]/70 ring-1 ring-[#C99B3C]/35"
                    : "border-[rgba(8,46,99,0.12)]"
                }`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                key={plan.name}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true, margin: "-80px" }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              >
                <div className="flex min-h-7 items-start justify-between gap-3">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C99B3C]">
                    {plan.name}
                  </p>
                  {plan.badge ? (
                    <span className="rounded border border-[#C99B3C]/35 bg-[#C99B3C]/10 px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#071B33]">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 text-4xl font-semibold tracking-normal text-[#071B33]">
                  {plan.price}
                </p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-[#0B2340]/70">
                  {plan.description}
                </p>

                <ul className="mt-5 flex-1 space-y-3 text-sm font-medium text-[#0B2340]/74">
                  {plan.includes.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#C99B3C]"
                        size={16}
                        strokeWidth={2}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-6 w-full gap-2 px-4 ${
                    highlighted ? "" : "border-[#C99B3C]/45 text-[#071B33] hover:bg-[#C99B3C] hover:text-white"
                  }`}
                  href={whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  variant={highlighted ? "whatsapp" : "secondary"}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {plan.cta}
                </Button>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-6 text-[#0B2340]/58">
          {t.pricing.note}
        </p>
      </div>
    </section>
  );
}
