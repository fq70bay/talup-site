import type { Translation } from "@/lib/types";

export const kz: Translation = {
  header: {
    nav: {
      home: "Басты бет",
      services: "Қызметтер",
      projects: "Жобалар",
      contact: "Байланыс",
    },
    cta: "Жоба бастау",
    menu: "Мәзір",
    close: "Жабу",
  },
  hero: {
    label: "TALUP • WEB STUDIO",
    title: "Клиент әкелетін сайт жасаймыз",
    subtitle:
      "Landing page, бизнес сайт және портфолио жасаймыз. Қазақша және орысша, мобильге бейімделген, WhatsApp өтінімімен.",
    proof: "KZ / RU · Mobile · WhatsApp",
    primary: "WhatsApp арқылы тапсырыс беру",
    secondary: "Жобаларды көру",
    previewBadge: "LIVE PROJECT ↗",
  },
  services: {
    label: "ҚЫЗМЕТТЕР",
    heading: "Бизнесіңізге қажет сайт форматын таңдаймыз.",
    subtitle: "",
    orderCta: "Тапсырыс беру →",
    items: [
      {
        title: "Landing Page",
        description: "Бір өнімді немесе қызметті сатуға арналған бір беттік сайт.",
        features: ["WhatsApp өтінімі", "KZ / RU", "Мобильге бейімделген"],
      },
      {
        title: "Бизнес сайт",
        description: "Компания мен қызметтеріңізді кәсіби көрсететін толық сайт.",
        features: ["4–6 негізгі бөлім", "Қызметтер мен байланыс", "Мобильге бейімделген"],
      },
      {
        title: "Портфолио",
        description: "Маманға немесе командаға арналған кәсіби жеке сайт.",
        features: ["Жобалар", "Тәжірибе", "Байланыс"],
      },
    ],
  },
  pricing: {
    label: "ПАКЕТТЕР",
    heading: "Сайтыңызға сай пакетті таңдаңыз",
    subtitle: "Барлық пакетке mobile responsive және сайтты жариялау кіреді.",
    note:
      "Қосымша функционал, күрделі интеграциялар және жеке талаптар жоба көлеміне қарай бөлек есептеледі.",
    astanaLink: "Астанада сайт жасау",
    plans: [
      {
        name: "START",
        price: "79 000 ₸",
        description: "Портфолио, визитка немесе шағын жеке сайтқа арналған.",
        includes: [
          "1–3 негізгі бөлім",
          "Жеке дизайн",
          "Mobile responsive",
          "WhatsApp / байланыс",
          "Vercel-де жариялау",
        ],
        cta: "START таңдау",
        message: "Сәлеметсіз бе! TalUp START пакеті бойынша сайт жасатқым келеді.",
      },
      {
        name: "BUSINESS",
        badge: "ТАНЫМАЛ",
        price: "129 000 ₸",
        description: "Толық бизнес лендинг немесе қызмет көрсету сайты.",
        includes: [
          "4–6 негізгі бөлім",
          "Қызметтер және артықшылықтар",
          "WhatsApp интеграциясы",
          "Mobile responsive",
          "Негізгі SEO",
          "Vercel-де жариялау",
        ],
        cta: "BUSINESS таңдау",
        message: "Сәлеметсіз бе! TalUp BUSINESS пакеті бойынша сайт жасатқым келеді.",
      },
      {
        name: "PRO",
        price: "179 000 ₸",
        description: "Көбірек блок, екі тіл және кеңейтілген функционал қажет жобаға.",
        includes: [
          "KZ / RU",
          "6+ бөлім",
          "Кеңейтілген функционал",
          "WhatsApp интеграциясы",
          "Mobile responsive",
          "Домен қосуға көмек",
          "Негізгі SEO",
          "Vercel-де жариялау",
        ],
        cta: "PRO таңдау",
        message: "Сәлеметсіз бе! TalUp PRO пакеті бойынша сайт жасатқым келеді.",
      },
    ],
  },
  projects: {
    label: "ЖОБАЛАР",
    heading: "Нақты жасалған жұмыстар",
    subtitle: "TalUp арқылы іске қосылған сайттардың мысалдары.",
    liveBadge: "LIVE PROJECT ↗",
    viewProject: "Сайтты ашу ↗",
    similarProject: "Осындай сайт керек →",
    detailLabels: {
      goal: "Мақсат",
      solution: "Шешім",
      result: "Нәтиже",
    },
  },
  why: {
    label: "НЕГЕ TALUP",
    heading: "Сайтты тек жасап қоймаймыз —\nіске қосуға дайындаймыз.",
    subtitle:
      "Клиентке түсінікті, мобильге бейімделген және байланысқа дайын сайт жасаймыз.",
    items: [
      { title: "KZ / RU", description: "Қазақша және орысша нұсқа." },
      {
        title: "Мобильге бейім",
        description: "Телефон, планшет және компьютерде ыңғайлы жұмыс істейді.",
      },
      { title: "WhatsApp", description: "Клиент сізге бір батырмамен жаза алады." },
      {
        title: "Іске қосуға дайын",
        description: "Сайтты интернетке жариялауға дайын күйде тапсырамыз.",
      },
    ],
  },
  process: {
    label: "ЖҰМЫС ПРОЦЕСІ",
    heading: "4 қадамда дайын сайт",
    steps: [
      {
        title: "Талқылау",
        description: "Қандай сайт керек екенін және негізгі мақсатты анықтаймыз.",
      },
      {
        title: "Құрылым",
        description: "Бөлімдер, контент және қолданушы жолын жоспарлаймыз.",
      },
      { title: "Жасау", description: "Дизайн мен сайтты іске асырамыз." },
      { title: "Жариялау", description: "Сайтты интернетке шығарып, жұмысын тексереміз." },
    ],
  },
  about: {
    heading: "TALUP деген не?",
    paragraphs: [
      "TalUp атауы қазақтың «Талап» сөзінен шабыттанған.",
      "Талап — ұмтылыс, даму және алға қозғалыс.",
      "Up — жоғары көтерілу.",
      "TalUp — идеяны келесі деңгейге көтеру.",
    ],
  },
  cta: {
    heading: "Сайт керек пе?\nЖобаңызды талқылайық.",
    text: "Қандай сайт қажет екенін бірге анықтап,\nіске қосуға дайын шешім ұсынамыз.",
    button: "WhatsApp арқылы жазу",
    emailButton: "Email арқылы жазу",
    note: "Жауапты WhatsApp арқылы береміз.",
  },
  footer: {
    emailLabel: "Email",
    phoneLabel: "Phone",
    instagramLabel: "Instagram",
    whatsappLabel: "WhatsApp",
    astanaLink: "Астанада сайт жасау",
    copyright: "© 2026 TalUp. Барлық құқықтар қорғалған.",
  },
  whatsappMessage: "Сәлеметсіз бе! TalUp Project арқылы сайт жасау бойынша ақпарат алғым келеді.",
};
