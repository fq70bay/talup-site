import type { Metadata } from "next";
import { AnimatedProjectPreview } from "@/components/AnimatedProjectPreview";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import { ru } from "@/locales/ru";
import { Footer } from "@/sections/Footer";
import { AstanaHeader } from "../../site-zhasau-astana/AstanaHeader";

const pageUrl = `${siteConfig.url}/ru/sozdanie-saitov-astana`;
const kkPageUrl = `${siteConfig.url}/site-zhasau-astana`;
const whatsappMessage = "Здравствуйте! Хочу узнать подробнее о создании сайта в Астане через TalUp.";

export const metadata: Metadata = {
  title: "Создание сайтов в Астане — от 79 000 ₸ | TalUp",
  description:
    "Создание сайтов в Астане для бизнеса и специалистов. Landing page, бизнес-сайты и портфолио от 79 000 ₸. Адаптивная версия, WhatsApp, KZ/RU и запуск сайта.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "kk-KZ": kkPageUrl,
      "ru-KZ": pageUrl,
      "x-default": kkPageUrl,
    },
  },
  openGraph: {
    title: "Создание сайтов в Астане | TalUp",
    description: "Landing page, бизнес-сайты и портфолио от 79 000 ₸. Адаптивно, WhatsApp и запуск под ключ.",
    url: pageUrl,
    siteName: "TalUp",
    locale: "ru_KZ",
    alternateLocale: "kk_KZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Создание сайтов в Астане | TalUp",
    description: "Landing page, бизнес-сайты и портфолио от 79 000 ₸. Адаптивно, WhatsApp и запуск под ключ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#pricing" },
  { label: "Проекты", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

const siteTypes = [
  {
    title: "Landing Page",
    text: "Одностраничный сайт для продвижения одной услуги, продукта или предложения.",
  },
  {
    title: "Бизнес-сайт",
    text: "Сайт для презентации компании, услуг и преимуществ.",
  },
  {
    title: "Портфолио",
    text: "Профессиональный персональный сайт для специалиста, преподавателя или фрилансера.",
  },
];

const pricePlans = [
  {
    name: "START",
    price: "79 000 ₸",
    text: "Для портфолио, сайта-визитки или небольшого персонального сайта.",
    cta: "Выбрать START",
    message: "Здравствуйте! Хочу заказать сайт по пакету TalUp START.",
    includes: [
      "1–3 основных раздела",
      "Портфолио или визитка",
      "Адаптивная версия",
      "WhatsApp / контакты",
      "Публикация сайта",
    ],
  },
  {
    name: "BUSINESS",
    price: "129 000 ₸",
    text: "Для полноценного бизнес-лендинга или сайта услуг.",
    cta: "Выбрать BUSINESS",
    message: "Здравствуйте! Хочу заказать сайт по пакету TalUp BUSINESS.",
    badge: "ПОПУЛЯРНЫЙ",
    includes: [
      "4–6 основных разделов",
      "Услуги и преимущества",
      "Интеграция WhatsApp",
      "Адаптивная версия",
      "Базовое SEO",
      "Публикация сайта",
    ],
  },
  {
    name: "PRO",
    price: "179 000 ₸",
    text: "Для проектов с двумя языками, большим количеством блоков и расширенным функционалом.",
    cta: "Выбрать PRO",
    message: "Здравствуйте! Хочу заказать сайт по пакету TalUp PRO.",
    includes: [
      "KZ / RU",
      "6+ разделов",
      "Расширенный функционал",
      "Интеграция WhatsApp",
      "Адаптивная версия",
      "Помощь с подключением домена",
      "Базовое SEO",
    ],
  },
];

const advantages = [
  {
    title: "Адаптивный сайт",
    text: "Корректно работает на телефоне, планшете и компьютере.",
  },
  {
    title: "WhatsApp",
    text: "Клиент может написать вам в один клик.",
  },
  {
    title: "KZ / RU",
    text: "При необходимости создаём двуязычную версию сайта.",
  },
  {
    title: "Готов к запуску",
    text: "Публикуем сайт и проверяем его работу перед передачей.",
  },
];

const process = [
  ["01", "Обсуждение", "Определяем задачу, аудиторию и тип сайта."],
  ["02", "Структура", "Планируем разделы, контент и путь пользователя."],
  ["03", "Разработка", "Создаём дизайн и реализуем сайт."],
  ["04", "Запуск", "Публикуем сайт и проверяем его работу."],
];

const faqs = [
  {
    question: "Сколько стоит создание сайта в Астане?",
    answer:
      "Стоимость сайта в TalUp начинается от 79 000 ₸. Итоговая цена зависит от объёма и функционала проекта.",
  },
  {
    question: "Сколько времени занимает создание landing page?",
    answer:
      "Срок зависит от объёма проекта и готовности контента. Точный срок определяем после обсуждения задачи.",
  },
  {
    question: "Будет ли сайт работать на телефоне?",
    answer: "Да. Все сайты создаются адаптивными для смартфонов, планшетов и компьютеров.",
  },
  {
    question: "Можно сделать сайт на казахском и русском языках?",
    answer: "Да. В пакете PRO доступна версия KZ / RU.",
  },
  {
    question: "Помогаете подключить домен?",
    answer: "Да. Помогаем подключить домен и опубликовать готовый сайт.",
  },
];

const caseCopy: Record<string, { type: string; text: string; imageAlt: string }> = {
  "metall-invest": {
    type: "Commercial landing page",
    text: "Коммерческий сайт для компании, занимающейся инертными материалами и услугами спецтехники.",
    imageAlt: "Превью сайта Metal Invest",
  },
  "farhat-teacher-portfolio": {
    type: "Personal portfolio website",
    text: "Персональный профессиональный сайт-портфолио для преподавателя.",
    imageAlt: "Превью сайта-портфолио Farhat Teacher Portfolio",
  },
};

const footerLinks = [
  { href: "/", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Цены" },
  { href: "#cases", label: "Проекты" },
];

function SectionHeading({ children }: { children: string }) {
  return <h2 className="text-3xl font-semibold leading-tight text-[#071B33] sm:text-4xl">{children}</h2>;
}

export default function RussianAstanaWebsiteDevelopmentPage() {
  const whatsappUrl = getWhatsAppLink(whatsappMessage);
  const pageProjects = projects.filter((project) => project.id in caseCopy);

  return (
    <>
      <AstanaHeader
        ariaLabel="TalUp главная"
        closeLabel="Закрыть"
        ctaLabel="Начать проект"
        languageLinks={[
          { href: "/site-zhasau-astana", label: "KZ" },
          { active: true, href: "/ru/sozdanie-saitov-astana", label: "RU" },
        ]}
        menuLabel="Меню"
        navItems={navItems}
        whatsappUrl={whatsappUrl}
      />
      <main className="bg-[#F7F7F5] text-[#0B2340]" lang="ru">
        <section className="border-b border-[rgba(8,46,99,0.08)] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#C99B3C]">
                TALUP • WEB STUDIO
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#071B33] sm:text-5xl lg:text-6xl">
                Создание сайтов в Астане
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0B2340]/72">
                Создаём современные сайты для бизнеса, сферы услуг и специалистов.
              </p>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[#0B2340]/72">
                Адаптивно для телефона и компьютера, с WhatsApp и готовностью к запуску.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2" href={whatsappUrl} rel="noopener noreferrer" target="_blank" variant="whatsapp">
                  <WhatsAppIcon className="h-4 w-4" />
                  Заказать сайт в WhatsApp
                </Button>
                <Button href="#cases" variant="secondary">
                  Посмотреть проекты
                </Button>
              </div>
              <p className="mt-5 text-sm font-semibold text-[#0B2340]/55">
                от 79 000 ₸ • Адаптивно • WhatsApp • KZ / RU
              </p>
            </div>
            <div className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-3">
              <div className="grid gap-3">
                {pageProjects.map((project) => (
                  <AnimatedProjectPreview
                    displayUrl={project.displayUrl}
                    flush
                    image={project.image}
                    imageAlt={caseCopy[project.id].imageAlt}
                    imageMode="cover"
                    key={project.id}
                    liveBadge="LIVE PROJECT ↗"
                    title={project.title}
                    url={project.url}
                    variant="card"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16" id="services">
          <div className="mx-auto max-w-7xl">
            <SectionHeading>Какие сайты мы создаём?</SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {siteTypes.map((item, index) => (
                <article
                  className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-5 transition duration-200 hover:-translate-y-[3px] hover:border-[rgba(201,155,60,0.45)]"
                  key={item.title}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[#071B33]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(8,46,99,0.08)] bg-white px-5 py-12 sm:px-8 sm:py-16" id="pricing">
          <div className="mx-auto max-w-7xl">
            <SectionHeading>Стоимость создания сайта</SectionHeading>
            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {pricePlans.map((plan) => {
                const highlighted = plan.name === "BUSINESS";

                return (
                  <article
                    className={`flex h-full flex-col rounded-lg border p-5 transition duration-200 hover:-translate-y-[3px] sm:p-6 ${
                      highlighted
                        ? "border-[#C99B3C]/70 bg-white ring-1 ring-[#C99B3C]/35"
                        : "border-[rgba(8,46,99,0.12)] bg-[#F7F7F5]"
                    }`}
                    key={plan.name}
                  >
                    <div className="flex min-h-7 items-start justify-between gap-3">
                      <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C99B3C]">
                        {plan.name}
                      </h3>
                      {plan.badge ? (
                        <span className="rounded border border-[#C99B3C]/35 bg-[#C99B3C]/10 px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#071B33]">
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-5 text-4xl font-semibold text-[#071B33]">{plan.price}</p>
                    <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{plan.text}</p>
                    <ul className="mt-5 flex-1 space-y-2.5 text-sm font-medium text-[#0B2340]/74">
                      {plan.includes.map((item) => (
                        <li className="flex gap-2.5" key={item}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C99B3C]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-6 w-full gap-2 ${
                        highlighted
                          ? ""
                          : "border-[#C99B3C]/45 text-[#071B33] hover:bg-[#C99B3C] hover:text-white"
                      }`}
                      href={getWhatsAppLink(plan.message)}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant={highlighted ? "whatsapp" : "secondary"}
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {plan.cta}
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading>Почему выбирают TalUp?</SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item, index) => (
                <article className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-5" key={item.title}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#071B33]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(8,46,99,0.08)] bg-white px-5 py-12 sm:px-8 sm:py-16" id="cases">
          <div className="mx-auto max-w-7xl">
            <SectionHeading>Наши работы</SectionHeading>
            <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-2">
              {pageProjects.map((project) => (
                <article
                  className="flex h-full flex-col overflow-hidden rounded-lg border border-[rgba(8,46,99,0.14)] bg-[#F7F7F5] transition duration-200 hover:-translate-y-[3px] hover:border-[rgba(201,155,60,0.45)]"
                  key={project.id}
                >
                  <AnimatedProjectPreview
                    displayUrl={project.displayUrl}
                    flush
                    image={project.image}
                    imageAlt={caseCopy[project.id].imageAlt}
                    imageMode="cover"
                    liveBadge="LIVE PROJECT ↗"
                    title={project.title}
                    url={project.url}
                    variant="card"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                      {caseCopy[project.id].type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[#071B33]">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#0B2340]/70">
                      {caseCopy[project.id].text}
                    </p>
                    <Button
                      className="mt-5 w-full border-[#C99B3C]/45 text-[#071B33] hover:bg-[#C99B3C] hover:text-white sm:w-fit"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      Открыть сайт ↗
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading>Как мы создаём сайт?</SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {process.map(([number, title, text]) => (
                <article className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-5" key={number}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">{number}</p>
                  <h3 className="mt-3 text-lg font-semibold text-[#071B33]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#0B2340]/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(8,46,99,0.08)] bg-white px-5 py-12 sm:px-8 sm:py-16" id="faq">
          <div className="mx-auto max-w-4xl">
            <SectionHeading>Часто задаваемые вопросы</SectionHeading>
            <div className="mt-7 divide-y divide-[rgba(8,46,99,0.1)] rounded-lg border border-[rgba(8,46,99,0.12)] bg-[#F7F7F5]">
              {faqs.map((faq, index) => (
                <details className="group p-5" key={faq.question} open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#071B33]">
                    <span>{faq.question}</span>
                    <span className="text-xl leading-none text-[#C99B3C] group-open:hidden" aria-hidden="true">
                      +
                    </span>
                    <span className="hidden text-xl leading-none text-[#C99B3C] group-open:inline" aria-hidden="true">
                      −
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071B33] px-5 py-12 text-white sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="whitespace-pre-line text-3xl font-semibold leading-tight sm:text-4xl">
                Нужен сайт в Астане?{"\n"}Обсудим ваш проект.
              </h2>
              <p className="mt-4 max-w-2xl whitespace-pre-line text-base leading-7 text-white/72">
                Расскажите, какой сайт вам нужен —{"\n"}подберём подходящий пакет и предложим решение.
              </p>
            </div>
            <Button className="w-full gap-2 sm:w-auto" href={whatsappUrl} rel="noopener noreferrer" target="_blank" variant="whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              Написать в WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer bottomLinks={footerLinks} t={ru} />
      <WhatsAppButton message={whatsappMessage} />
    </>
  );
}
