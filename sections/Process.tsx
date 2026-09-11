"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Translation } from "@/lib/types";

export function Process({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F7F7F5] pt-12 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>{t.process.label}</SectionLabel>
        <SectionTitle>{t.process.heading}</SectionTitle>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <motion.article
              className="border-t border-[rgba(8,46,99,0.18)] pt-5"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              key={step.title}
              transition={{ delay: index * 0.06, duration: 0.42 }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-tight text-[#071B33]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#0B2340]/68">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
