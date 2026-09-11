import type { Translation } from "@/lib/types";

export const ru: Translation = {
  header: {
    nav: {
      home: "Главная",
      services: "Услуги",
      projects: "Проекты",
      contact: "Контакты",
    },
    cta: "Начать проект",
    menu: "Меню",
    close: "Закрыть",
  },
  hero: {
    label: "TALUP • WEB STUDIO",
    title: "Создаем сайты, которые приводят клиентов",
    subtitle:
      "Делаем landing page, бизнес сайты и портфолио. На казахском и русском, адаптировано под мобильные устройства, с заявками в WhatsApp.",
    proof: "KZ / RU · Mobile · WhatsApp",
    primary: "Заказать через WhatsApp",
    secondary: "Смотреть проекты",
    previewBadge: "LIVE PROJECT ↗",
  },
  services: {
    label: "УСЛУГИ",
    heading: "Подбираем формат сайта под задачи вашего бизнеса.",
    subtitle: "",
    orderCta: "Заказать →",
    items: [
      {
        title: "Landing Page",
        description: "Одностраничный сайт для продажи продукта или услуги.",
        features: ["Заявка в WhatsApp", "KZ / RU", "Mobile responsive"],
      },
      {
        title: "Бизнес сайт",
        description: "Полный сайт для профессиональной презентации компании и услуг.",
        features: ["4–6 основных блоков", "Услуги и контакты", "Mobile responsive"],
      },
      {
        title: "Портфолио",
        description: "Профессиональный личный сайт для специалиста или команды.",
        features: ["Проекты", "Опыт", "Контакты"],
      },
    ],
  },
  pricing: {
    label: "ПАКЕТЫ",
    heading: "Выберите пакет под ваш сайт",
    subtitle: "В каждый пакет входит mobile responsive и публикация сайта.",
    note:
      "Дополнительный функционал, сложные интеграции и индивидуальные требования рассчитываются отдельно по объему проекта.",
    plans: [
      {
        name: "START",
        price: "79 000 ₸",
        description: "Для портфолио, визитки или небольшого личного сайта.",
        includes: [
          "1–3 основных блока",
          "Индивидуальный дизайн",
          "Mobile responsive",
          "WhatsApp / контакты",
          "Публикация на Vercel",
        ],
        cta: "Выбрать START",
        message: "Здравствуйте! Хочу заказать сайт по пакету TalUp START.",
      },
      {
        name: "BUSINESS",
        badge: "ПОПУЛЯРНЫЙ",
        price: "129 000 ₸",
        description: "Полный бизнес лендинг или сайт для услуг.",
        includes: [
          "4–6 основных блоков",
          "Услуги и преимущества",
          "Интеграция WhatsApp",
          "Mobile responsive",
          "Базовое SEO",
          "Публикация на Vercel",
        ],
        cta: "Выбрать BUSINESS",
        message: "Здравствуйте! Хочу заказать сайт по пакету TalUp BUSINESS.",
      },
      {
        name: "PRO",
        price: "179 000 ₸",
        description: "Для проекта с большим числом блоков, двумя языками и расширенным функционалом.",
        includes: [
          "KZ / RU",
          "6+ блоков",
          "Расширенный функционал",
          "Интеграция WhatsApp",
          "Mobile responsive",
          "Помощь с подключением домена",
          "Базовое SEO",
          "Публикация на Vercel",
        ],
        cta: "Выбрать PRO",
        message: "Здравствуйте! Хочу заказать сайт по пакету TalUp PRO.",
      },
    ],
  },
  projects: {
    label: "ПРОЕКТЫ",
    heading: "Реальные запущенные работы",
    subtitle: "Примеры сайтов, запущенных через TalUp.",
    liveBadge: "LIVE PROJECT ↗",
    viewProject: "Открыть сайт ↗",
    similarProject: "Хочу такой сайт →",
    detailLabels: {
      goal: "Цель",
      solution: "Решение",
      result: "Результат",
    },
  },
  why: {
    label: "ПОЧЕМУ TALUP",
    heading: "Мы не просто делаем сайт —\nготовим его к запуску.",
    subtitle:
      "Делаем сайт понятным для клиента, адаптированным под мобильные устройства и готовым к связи.",
    items: [
      { title: "KZ / RU", description: "Версия на казахском и русском." },
      {
        title: "Адаптация под мобильные",
        description: "Удобно работает на телефоне, планшете и компьютере.",
      },
      { title: "WhatsApp", description: "Клиент может написать вам одной кнопкой." },
      {
        title: "Готов к запуску",
        description: "Передаем сайт в готовом к публикации в интернете виде.",
      },
    ],
  },
  process: {
    label: "РАБОЧИЙ ПРОЦЕСС",
    heading: "Готовый сайт за 4 шага",
    steps: [
      { title: "Обсуждение", description: "Определяем формат сайта и основную цель." },
      {
        title: "Структура",
        description: "Планируем блоки, контент и путь пользователя.",
      },
      { title: "Создание", description: "Реализуем дизайн и сайт." },
      { title: "Публикация", description: "Выводим сайт в интернет и проверяем работу." },
    ],
  },
  priceCta: {
    label: "СТОИМОСТЬ ПРОЕКТА",
    heading: "Хотите узнать, сколько будет стоить ваш сайт?",
    text: "Коротко напишите в WhatsApp. Мы посмотрим, какой сайт вам нужен, и предложим предварительную структуру и стоимость.",
    note: "Цена зависит от объема сайта и функционала.",
    button: "Рассчитать стоимость",
    message:
      "Здравствуйте! Хочу заказать сайт через TalUp. Рассчитайте, пожалуйста, стоимость проекта.",
  },
  about: {
    heading: "Что означает TALUP?",
    paragraphs: [
      "Название TalUp вдохновлено казахским словом «Талап».",
      "Талап — это стремление, развитие и движение вперед.",
      "Up — движение вверх.",
      "TalUp — это переход идеи на следующий уровень.",
    ],
  },
  cta: {
    heading: "Нужен сайт?\nОбсудим ваш проект.",
    text: "Вместе определим, какой сайт вам нужен,\nи предложим готовое к запуску решение.",
    button: "Написать в WhatsApp",
    emailButton: "Написать на email",
    note: "Ответим в WhatsApp.",
  },
  footer: {
    emailLabel: "Email",
    phoneLabel: "Phone",
    instagramLabel: "Instagram",
    whatsappLabel: "WhatsApp",
    copyright: "© 2026 TalUp. Все права защищены.",
  },
  whatsappMessage: "Здравствуйте! Хочу узнать подробнее о создании сайта через TalUp Project.",
};
