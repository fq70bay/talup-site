"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getWhatsAppLink } from "@/config/siteConfig";
import type { Translation } from "@/lib/types";

export function PriceCTA({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();
  const whatsappUrl = getWhatsAppLink(t.priceCta.message);

  return (
    <section className="bg-white py-14 sm:py-16">
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        transition={{ duration: 0.48 }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <div className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-[#F7F7F5] p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <SectionLabel>{t.priceCta.label}</SectionLabel>
            <h2 className="text-2xl font-semibold leading-tight text-[#071B33] sm:text-3xl">
              {t.priceCta.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#0B2340]/70">
              {t.priceCta.text}
            </p>
            <p className="mt-4 text-sm font-medium text-[#0B2340]/50">{t.priceCta.note}</p>
          </div>
          <div className="mt-7 lg:mt-0">
            <Button
              className="w-full gap-2 px-6 sm:w-auto"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.priceCta.button}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
