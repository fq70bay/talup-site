import type { Metadata } from "next";
import { AnimatedProjectPreview } from "@/components/AnimatedProjectPreview";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, siteConfig } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import { kz } from "@/locales/kz";
import { Footer } from "@/sections/Footer";
import { AstanaHeader } from "./AstanaHeader";

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
    cta: "START таңдау",
    message: "Сәлеметсіз бе! TalUp START пакеті бойынша сайт жасатқым келеді.",
    includes: [
      "1–3 негізгі бөлім",
      "Портфолио немесе визитка",
      "Mobile responsive",
      "WhatsApp / байланыс",
      "Vercel-де жариялау",
    ],
  },
  {
    name: "BUSINESS",
    price: "129 000 ₸",
    text: "Толық бизнес landing page.",
    cta: "BUSINESS таңдау",
    message: "Сәлеметсіз бе! TalUp BUSINESS пакеті бойынша сайт жасатқым келеді.",
    badge: "ТАНЫМАЛ",
    includes: [
      "4–6 негізгі бөлім",
      "Қызметтер және артықшылықтар",
      "WhatsApp интеграциясы",
      "Mobile responsive",
      "Негізгі SEO",
      "Vercel-де жариялау",
    ],
  },
  {
    name: "PRO",
    price: "179 000 ₸",
    text: "KZ/RU, көбірек блок және кеңейтілген функционал.",
    cta: "PRO таңдау",
    message: "Сәлеметсіз бе! TalUp PRO пакеті бойынша сайт жасатқым келеді.",
    includes: [
      "KZ / RU",
      "6+ бөлім",
      "Кеңейтілген функционал",
      "WhatsApp интеграциясы",
      "Mobile responsive",
      "Домен қосуға көмек",
      "Негізгі SEO",
    ],
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

const footerLinks = [
  { href: "/", label: "Басты бет" },
  { href: "#services", label: "Қызметтер" },
  { href: "#pricing", label: "Баға" },
  { href: "#cases", label: "Жобалар" },
];

function SectionHeading({ children }: { children: string }) {
  return <h2 className="text-3xl font-semibold leading-tight text-[#071B33] sm:text-4xl">{children}</h2>;
}

export default function AstanaWebsiteDevelopmentPage() {
  const whatsappUrl = getWhatsAppLink(whatsappMessage);
  const pageProjects = projects.filter((project) => project.id in caseCopy);

  return (
    <>
      <AstanaHeader whatsappUrl={whatsappUrl} />
      <main className="bg-[#F7F7F5] text-[#0B2340]">
        <section className="border-b border-[rgba(8,46,99,0.08)] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
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
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                  <AnimatedProjectPreview
                    displayUrl={project.displayUrl}
                    flush
                    image={project.image}
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
            <SectionHeading>Қандай сайттар жасаймыз?</SectionHeading>
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
            <SectionHeading>Сайт жасау бағасы</SectionHeading>
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
            <SectionHeading>TalUp-пен сайт жасаудың артықшылықтары</SectionHeading>
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
            <SectionHeading>Жасалған сайттар</SectionHeading>
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
                      Сайтты ашу ↗
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading>Сайтты қалай жасаймыз?</SectionHeading>
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
            <SectionHeading>Жиі қойылатын сұрақтар</SectionHeading>
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
                Астанада сайт керек пе?{"\n"}Жобаңызды талқылайық.
              </h2>
              <p className="mt-4 max-w-2xl whitespace-pre-line text-base leading-7 text-white/72">
                Қандай сайт қажет екенін бірге анықтап,{"\n"}сізге сәйкес пакетті ұсынамыз.
              </p>
            </div>
            <Button className="w-full gap-2 sm:w-auto" href={whatsappUrl} rel="noopener noreferrer" target="_blank" variant="whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp арқылы жазу
            </Button>
          </div>
        </section>
      </main>
      <Footer bottomLinks={footerLinks} t={kz} />
      <WhatsAppButton message={whatsappMessage} />
    </>
  );
}
