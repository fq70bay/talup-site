import type { Dispatch, SetStateAction } from "react";
import { localeLabels } from "@/config/siteConfig";
import type { Locale } from "@/lib/types";

export function LanguageSwitcher({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}) {
  return (
    <div className="flex rounded-md border border-[rgba(8,46,99,0.14)] bg-white p-1">
      {(["kz", "ru"] as Locale[]).map((item) => (
        <button
          aria-pressed={locale === item}
          className={`h-8 rounded px-3 text-xs font-bold transition ${
            locale === item ? "bg-[#082E63] text-white" : "text-[#0B2340] hover:text-[#C99B3C]"
          }`}
          key={item}
          onClick={() => setLocale(item)}
          type="button"
        >
          {localeLabels[item]}
        </button>
      ))}
    </div>
  );
}
