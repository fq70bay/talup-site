"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedProjectPreview } from "@/components/AnimatedProjectPreview";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { getPrimaryContactLink } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import type { Translation } from "@/lib/types";

export function Hero({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();
  const contactUrl = getPrimaryContactLink(t.whatsappMessage);

  return (
    <section className="relative overflow-hidden bg-[#F7F7F5]" id="home">
      <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-[360px] max-w-4xl opacity-[0.08]">
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-[#082E63]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-[#C99B3C]" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-9 sm:min-h-[calc(100svh-72px)] sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-24">
        <motion.div
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C99B3C]">
            {t.hero.label}
          </p>
          <h1 className="mt-4 max-w-3xl text-[2.15rem] font-semibold leading-[1.08] text-[#071B33] sm:mt-6 sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#0B2340]/74 sm:mt-7 sm:text-lg sm:leading-8">
            {t.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            {contactUrl ? (
              <Button
                className="w-full sm:w-auto"
                href={contactUrl}
                rel="noopener noreferrer"
                target={contactUrl.startsWith("mailto:") ? undefined : "_blank"}
                variant={contactUrl.includes("wa.me") ? "whatsapp" : "primary"}
              >
                <span className="inline-flex items-center gap-2">
                  {contactUrl.includes("wa.me") ? <WhatsAppIcon className="h-4 w-4" /> : null}
                  {t.hero.primary}
                </span>
              </Button>
            ) : null}
            <Button className="w-full sm:w-auto" href="#projects" variant="secondary">
              <span className="inline-flex items-center gap-2">
                {t.hero.secondary}
                <ArrowUpRight size={16} />
              </span>
            </Button>
          </div>
          <p className="mt-10 hidden text-xs font-bold uppercase tracking-[0.18em] text-[#082E63]/48 sm:block">
            {t.hero.proof}
          </p>
        </motion.div>
        <motion.div
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          className="relative mx-auto w-full max-w-[610px] lg:max-w-[560px]"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute -left-5 -top-5 hidden h-24 w-24 border-l border-t border-[#C99B3C]/35 sm:block" />
          <AnimatedProjectPreview
            compact
            image={projects[0].image}
            liveBadge={t.hero.previewBadge}
            title={projects[0].title}
            url={projects[0].url}
          />
        </motion.div>
      </div>
    </section>
  );
}
