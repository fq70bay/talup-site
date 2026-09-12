export type Locale = "kz" | "ru";

export type Translation = {
  header: {
    nav: { home: string; services: string; projects: string; contact: string };
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    proof: string;
    primary: string;
    secondary: string;
    previewBadge: string;
  };
  services: {
    label: string;
    heading: string;
    subtitle: string;
    orderCta: string;
    items: Array<{ title: string; description: string; features: string[] }>;
  };
  pricing: {
    label: string;
    heading: string;
    subtitle: string;
    note: string;
    astanaLink: string;
    plans: Array<{
      name: string;
      badge?: string;
      price: string;
      description: string;
      includes: string[];
      cta: string;
      message: string;
    }>;
  };
  projects: {
    label: string;
    heading: string;
    subtitle: string;
    liveBadge: string;
    viewProject: string;
    similarProject: string;
    detailLabels: { goal: string; solution: string; result: string };
  };
  why: {
    label: string;
    heading: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  process: {
    label: string;
    heading: string;
    steps: Array<{ title: string; description: string }>;
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  cta: {
    heading: string;
    text: string;
    button: string;
    emailButton: string;
    note: string;
  };
  footer: {
    emailLabel: string;
    phoneLabel: string;
    instagramLabel: string;
    whatsappLabel: string;
    astanaLink: string;
    copyright: string;
  };
  whatsappMessage: string;
};
