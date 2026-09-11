"use client";

import { BriefcaseBusiness, Layers2, PanelTop } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getWhatsAppLink } from "@/config/siteConfig";
import type { Translation } from "@/lib/types";

const icons = [PanelTop, BriefcaseBusiness, Layers2];

export function Services({ t }: { t: Translation }) {
  const reduceMotion = useReducedMotion();
  const whatsappUrl = getWhatsAppLink(t.whatsappMessage);

  return (
    <section className="border-t border-[rgba(8,46,99,0.08)] bg-white py-12 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>{t.services.label}</SectionLabel>
        <SectionTitle>{t.services.heading}</SectionTitle>
        {t.services.subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#0B2340]/68">
            {t.services.subtitle}
          </p>
        ) : null}
        <div className="mt-7 grid gap-4 sm:mt-10 md:grid-cols-3">
          {t.services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                className="flex flex-col rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-5 transition duration-200 hover:-translate-y-[3px] hover:border-[rgba(8,46,99,0.28)] md:min-h-[360px] md:p-6"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                key={item.title}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                viewport={{ once: true, margin: "-80px" }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              >
                <div className="mb-5 flex items-center justify-between md:mb-8">
                  <Icon aria-hidden="true" className="text-[#C99B3C]" size={22} strokeWidth={1.8} />
                  <span className="text-sm font-semibold text-[#082E63]/38">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#071B33]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#0B2340]/70 md:mt-4 md:leading-7">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm font-medium text-[#0B2340]/70 md:mt-6 md:space-y-3">
                  {item.features.map((feature) => (
                    <li className="flex items-center gap-3" key={feature}>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C99B3C]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[rgba(8,46,99,0.16)] bg-white px-4 text-sm font-bold text-[#082E63] transition duration-200 hover:border-[#082E63]/35 hover:bg-[#F7F7F5] md:mt-auto"
                  href={whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.services.orderCta}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
