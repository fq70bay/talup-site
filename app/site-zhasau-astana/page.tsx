import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import { kz } from "@/locales/kz";
import { Footer } from "@/sections/Footer";

const pageUrl = `${siteConfig.url}/site-zhasau-astana`;
const whatsappMessage = "Сәлеметсіз бе! Астанада сайт жасау бойынша ақпарат алғым келеді.";

export const metadata: Metadata = {
  title: "Астанада сайт жасау — бағасы 79 000 ₸-ден | TalUp",
  description:
    "Астанада бизнеске және мамандарға сайт жасау. Landing page, бизнес сайт, портфолио. Бағасы 79 000 ₸-ден. Mobile, WhatsApp, KZ/RU және жариялау.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Астанада сайт жасау | TalUp",
    description: "Landing page, бизнес сайт және портфолио. 79 000 ₸-ден бастап.",
    url: pageUrl,
    siteName: "TalUp",
    locale: "kk_KZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Астанада сайт жасау | TalUp",
    description: "Landing page, бизнес сайт және портфолио. 79 000 ₸-ден бастап.",
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

const siteTypes = [
  {
    title: "Landing Page",
    text: "Бір өнімді немесе қызметті сатуға арналған бір беттік сайт.",
  },
  {
    title: "Бизнес сайт",
    text: "Компания, қызметтер және артықшылықтарды көрсететін сайт.",
  },
  {
    title: "Портфолио",
    text: "Маман, мұғалім немесе фрилансерге арналған кәсіби жеке сайт.",
  },
];

const pricePlans = [
  {
    name: "START",
    price: "79 000 ₸",
    text: "Портфолио, визитка және шағын сайт.",
    message: "Сәлеметсіз бе! TalUp START пакеті бойынша сайт жасатқым келеді.",
  },
  {
    name: "BUSINESS",
    price: "129 000 ₸",
    text: "Толық бизнес landing page.",
    message: "Сәлеметсіз бе! TalUp BUSINESS пакеті бойынша сайт жасатқым келеді.",
  },
  {
    name: "PRO",
    price: "179 000 ₸",
    text: "KZ/RU, көбірек блок және кеңейтілген функционал.",
    message: "Сәлеметсіз бе! TalUp PRO пакеті бойынша сайт жасатқым келеді.",
  },
];

const advantages = [
  {
    title: "Мобильге бейім",
    text: "Сайт телефонда, планшетте және компьютерде дұрыс жұмыс істейді.",
  },
  {
    title: "WhatsApp интеграциясы",
    text: "Клиент сізге бір батырмамен жаза алады.",
  },
  {
    title: "KZ / RU",
    text: "Қажет болса екі тілде жасаймыз.",
  },
  {
    title: "Іске қосуға дайын",
    text: "Сайтты жариялап, жұмысын тексеріп береміз.",
  },
];

const process = [
  ["01", "Талқылау", "Мақсат пен қажетті сайт түрін анықтаймыз."],
  ["02", "Құрылым", "Бөлімдер мен контентті жоспарлаймыз."],
  ["03", "Жасау", "Дизайн және сайтты әзірлейміз."],
  ["04", "Жариялау", "Сайтты интернетке шығарып, тексереміз."],
];

const faqs = [
  {
    question: "Сайт жасау қанша тұрады?",
    answer:
      "TalUp-та сайт бағасы 79 000 ₸-ден басталады. Нақты баға сайт көлемі мен функционалына байланысты.",
  },
  {
    question: "Landing page қанша уақытта дайын болады?",
    answer:
      "Жобаның көлеміне және контенттің дайындығына байланысты. Нақты мерзімді тапсырманы талқылағаннан кейін айтамыз.",
  },
  {
    question: "Сайт телефонда жұмыс істей ме?",
    answer: "Иә. Барлық сайт mobile responsive болып жасалады.",
  },
  {
    question: "Қазақша және орысша сайт жасауға бола ма?",
    answer: "Иә. PRO пакетінде KZ/RU екі тілдік нұсқа жасауға болады.",
  },
  {
    question: "Домен қосуға көмектесесіз бе?",
    answer: "Иә. Доменді сайтқа қосуға және жариялауға көмектесеміз.",
  },
];

const caseCopy: Record<string, { type: string; text: string }> = {
  "metall-invest": {
    type: "Commercial landing page",
    text: "Инертті материалдар мен арнайы техника қызметіне арналған коммерциялық сайт.",
  },
  "farhat-teacher-portfolio": {
    type: "Personal portfolio website",
    text: "Мұғалімнің тәжірибесі, жетістіктері және байланысын көрсететін жеке портфолио.",
  },
};

export default function AstanaWebsiteDevelopmentPage() {
  const whatsappUrl = getWhatsAppLink(whatsappMessage);
  const pageProjects = projects.filter((project) => project.id in caseCopy);

  return (
    <>
      <main className="bg-[#F7F7F5] text-[#0B2340]">
        <header className="border-b border-[rgba(8,46,99,0.1)] bg-[#F7F7F5]/95">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
            <Link className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#071B33]" href="/">
              TalUp
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-[#0B2340]/72 md:flex">
              <a className="transition hover:text-[#C99B3C]" href="#pricing">
                Баға
              </a>
              <a className="transition hover:text-[#C99B3C]" href="#cases">
                Жобалар
              </a>
              <a className="transition hover:text-[#C99B3C]" href="#faq">
                FAQ
              </a>
            </nav>
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-4 text-sm font-semibold text-[#06351D] transition hover:bg-[#1DB954]"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </header>

        <section className="border-b border-[rgba(8,46,99,0.08)] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#C99B3C]">
                TALUP • WEB STUDIO
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#071B33] sm:text-5xl lg:text-6xl">
                Астанада сайт жасау
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0B2340]/72">
                Бизнеске, қызмет көрсетуге және жеке мамандарға арналған заманауи сайттар
                жасаймыз.
              </p>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[#0B2340]/72">
                Қазақша және орысша, мобильге бейімделген, WhatsApp өтінімімен және іске
                қосуға дайын.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="gap-2" href={whatsappUrl} rel="noopener noreferrer" target="_blank" variant="whatsapp">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp арқылы тапсырыс беру
                </Button>
                <Button href="#cases" variant="secondary">
                  Жобаларды көру
                </Button>
              </div>
              <p className="mt-5 text-sm font-semibold text-[#0B2340]/55">
                79 000 ₸-ден • KZ / RU • Mobile • WhatsApp
              </p>
            </div>
            <div className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-3">
              <div className="grid gap-3">
                {pageProjects.map((project) => (
                  <a
                    className="group block overflow-hidden rounded-md border border-[rgba(8,46,99,0.1)] bg-[#F7F7F5]"
                    href={project.url}
                    key={project.id}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#071B33]">
                      <Image
                        alt={`${project.title} сайтының preview суреті`}
                        className="h-full w-full object-cover object-left-top transition duration-200 group-hover:scale-[1.015]"
                        height={900}
                        src={project.image}
                        width={1440}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-[#071B33]">Қандай сайттар жасаймыз?</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {siteTypes.map((item) => (
                <article className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-5" key={item.title}>
                  <h3 className="text-xl font-semibold text-[#071B33]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(8,46,99,0.08)] bg-white px-5 py-14 sm:px-8 sm:py-16" id="pricing">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-[#071B33]">Сайт жасау бағасы</h2>
            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {pricePlans.map((plan) => (
                <article className="flex h-full flex-col rounded-lg border border-[rgba(8,46,99,0.12)] bg-[#F7F7F5] p-5" key={plan.name}>
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C99B3C]">{plan.name}</h3>
                  <p className="mt-4 text-4xl font-semibold text-[#071B33]">{plan.price}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#0B2340]/70">{plan.text}</p>
                  <Button className="mt-6 w-full gap-2" href={getWhatsAppLink(plan.message)} rel="noopener noreferrer" target="_blank" variant="whatsapp">
                    <WhatsAppIcon className="h-4 w-4" />
                    {plan.name} таңдау
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-[#071B33]">
              TalUp-пен сайт жасаудың артықшылықтары
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <article className="rounded-lg border border-[rgba(8,46,99,0.12)] bg-white p-5" key={item.title}>
                  <h3 className="text-lg font-semibold text-[#071B33]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgba(8,46,99,0.08)] bg-white px-5 py-14 sm:px-8 sm:py-16" id="cases">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-[#071B33]">Жасалған сайттар</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              {pageProjects.map((project) => (
                <article className="overflow-hidden rounded-lg border border-[rgba(8,46,99,0.12)] bg-[#F7F7F5]" key={project.id}>
                  <a href={project.url} rel="noopener noreferrer" target="_blank">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#071B33]">
                      <Image
                        alt={`${project.title} жобасының screenshot preview суреті`}
                        className="h-full w-full object-cover object-left-top"
                        height={900}
                        src={project.image}
                        width={1440}
                      />
                    </div>
                  </a>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                      {caseCopy[project.id].type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[#071B33]">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#0B2340]/70">
                      {caseCopy[project.id].text}
                    </p>
                    <a
                      className="mt-4 inline-flex text-sm font-semibold text-[#082E63] underline-offset-4 hover:underline"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Сайтты ашу ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold text-[#071B33]">Сайтты қалай жасаймыз?</h2>
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

        <section className="border-y border-[rgba(8,46,99,0.08)] bg-white px-5 py-14 sm:px-8 sm:py-16" id="faq">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold text-[#071B33]">Жиі қойылатын сұрақтар</h2>
            <div className="mt-7 divide-y divide-[rgba(8,46,99,0.1)] rounded-lg border border-[rgba(8,46,99,0.12)] bg-[#F7F7F5]">
              {faqs.map((faq) => (
                <details className="group p-5" key={faq.question}>
                  <summary className="cursor-pointer list-none text-base font-semibold text-[#071B33]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#0B2340]/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071B33] px-5 py-14 text-white sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Астанада сайт керек пе?
              </h2>
              <p className="mt-4 max-w-2xl whitespace-pre-line text-base leading-7 text-white/72">
                Жобаңызды қысқаша айтып беріңіз —{"\n"}қай пакет сәйкес келетінін және қалай іске
                асыратынымызды айтамыз.
              </p>
            </div>
            <Button className="w-full gap-2 sm:w-auto" href={whatsappUrl} rel="noopener noreferrer" target="_blank" variant="whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp арқылы жазу
            </Button>
          </div>
        </section>
      </main>
      <Footer t={kz} />
      <WhatsAppButton message={whatsappMessage} />
    </>
  );
}
