"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import type { Translation } from "@/lib/types";

export function About({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-14 sm:py-16" id="about">
      <motion.div
        className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-semibold leading-tight text-[#071B33] sm:text-4xl">
          {t.about.heading}
        </h2>
        <div className="max-w-2xl">
          <div className="space-y-3 text-base leading-7 text-[#0B2340]/72">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#C99B3C]">
            {siteConfig.slogan}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
