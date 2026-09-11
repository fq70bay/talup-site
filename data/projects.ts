import type { Locale } from "@/lib/types";

export type Project = {
  id: string;
  title: string;
  category: string;
  url: string;
  displayUrl: string;
  image: string;
  live: boolean;
  tags: string[];
  description: Record<Locale, string>;
  details: Record<Locale, { goal: string; solution: string; result: string }>;
};

export const projects: Project[] = [
  {
    id: "metall-invest",
    title: "Metal Invest",
    category: "LANDING PAGE / BUSINESS WEBSITE",
    url: "https://metall-invest-zeta.vercel.app",
    displayUrl: "metall-invest-zeta.vercel.app",
    image: "/projects/metall-invest-full.webp",
    live: true,
    tags: ["KZ/RU", "Responsive", "WhatsApp"],
    description: {
      kz: "Инертті материалдар мен арнайы техника қызметіне арналған екі тілдегі коммерциялық сайт.",
      ru: "Двуязычный коммерческий сайт для услуг инертных материалов и спецтехники.",
    },
    details: {
      kz: {
        goal: "WhatsApp арқылы өтінім жинау.",
        solution: "KZ/RU + Responsive + WhatsApp.",
        result: "Жарнамаға дайын landing page.",
      },
      ru: {
        goal: "Собирать заявки через WhatsApp.",
        solution: "KZ/RU + Responsive + WhatsApp.",
        result: "Landing page, готовый к рекламе.",
      },
    },
  },
  {
    id: "farhat-teacher-portfolio",
    title: "Farhat Teacher Portfolio",
    category: "PORTFOLIO WEBSITE",
    url: "https://farhat-teacher-portfolio.vercel.app/",
    displayUrl: "farhat-teacher-portfolio.vercel.app",
    image: "/projects/farhat-teacher-portfolio-preview.png",
    live: true,
    tags: ["Portfolio", "Responsive", "Personal Brand"],
    description: {
      kz: "Қазақ тілі мен әдебиеті мұғаліміне арналған кәсіби жеке портфолио сайт.",
      ru: "Профессиональный персональный сайт-портфолио для учителя казахского языка и литературы.",
    },
    details: {
      kz: {
        goal: "Тәжірибе мен жетістіктерді бір жерде көрсету.",
        solution: "Көп бөлімді personal portfolio website.",
        result: "Дайын кәсіби жеке сайт.",
      },
      ru: {
        goal: "Показать опыт и достижения в одном месте.",
        solution: "Многораздельный personal portfolio website.",
        result: "Готовый профессиональный личный сайт.",
      },
    },
  },
];
