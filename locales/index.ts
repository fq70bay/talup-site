import type { Locale, Translation } from "@/lib/types";
import { kz } from "./kz";
import { ru } from "./ru";

export const locales: Record<Locale, Translation> = {
  kz,
  ru,
};

export const defaultLocale: Locale = "kz";
