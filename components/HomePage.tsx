"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/types";
import { defaultLocale, locales } from "@/locales";
import { About } from "@/sections/About";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { Process } from "@/sections/Process";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { WhyTalup } from "@/sections/WhyTalup";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [ready, setReady] = useState(false);
  const t = useMemo(() => locales[locale], [locale]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedLocale = window.localStorage.getItem("talup-locale");
      if (storedLocale === "kz" || storedLocale === "ru") {
        setLocale(storedLocale);
      }
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }
    window.localStorage.setItem("talup-locale", locale);
    document.documentElement.lang = locale === "kz" ? "kk" : "ru";
  }, [locale, ready]);

  return (
    <>
      <Header locale={locale} setLocale={setLocale} t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Pricing t={t} />
        <Projects locale={locale} t={t} />
        <WhyTalup t={t} />
        <Process t={t} />
        <About t={t} />
        <FinalCTA t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppButton message={t.whatsappMessage} />
    </>
  );
}
