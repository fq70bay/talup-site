"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import type { Translation } from "@/lib/types";

export function FinalCTA({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();
  const whatsappUrl = siteConfig.whatsapp.url;

  return (
    <section className="bg-[#071B33] py-12 text-white sm:py-14" id="contact">
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="whitespace-pre-line text-3xl font-semibold leading-tight sm:text-4xl">
              {t.cta.heading}
            </h2>
            <p className="mt-4 max-w-2xl whitespace-pre-line text-base leading-7 text-white/72 sm:leading-7">
              {t.cta.text}
            </p>
          </div>
          <div className="lg:min-w-64">
            <Button
              className="w-full gap-2 px-6 sm:w-auto"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="whatsapp"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              {t.cta.button}
            </Button>
            <p className="mt-3 text-center text-sm text-white/55 lg:text-left">{t.cta.note}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
