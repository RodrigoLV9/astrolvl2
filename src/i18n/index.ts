import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export const SUPPORTED_LOCALES = ["en", "es", "pt"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const SERVICE_SLUGS = ["landing-page", "website", "ecommerce", "support"] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface I18nDictionary {
  brand: {
    name: string;
    tagline: string;
  };
  header: {
    nav: {
      home: string;
      services: string;
      process: string;
      blogs: string;
      contact: string;
    };
    aria: {
      toggleMenu: string;
    };
  };
  footer: {
    navigationTitle: string;
    servicesTitle: string;
    contactTitle: string;
    services: {
      landingPage: string;
      website: string;
      ecommerce: string;
      support: string;
    };
    location: string;
    copyright: string;
    signature: string;
  };
  blog: {
    eyebrow: string;
    latestTitle: string;
    latestSubtitle: string;
    readArticleAria: string;
    readArticleCta: string;
    featuredBadge: string;
    mostReadTitle: string;
    readTimeSuffix: string;
  };
  language: {
    current: string;
    options: {
      en: string;
      es: string;
      pt: string;
    };
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    formTitle: string;
    rightTitle: string;
    rightSubtitle: string;
    socialsLabel: string;
    cards: {
      whatsappLabel: string;
      whatsappButton: string;
      emailLabel: string;
      emailButton: string;
      instagramLabel: string;
      instagramButton: string;
    };
    services: {
      landing: string;
      ecommerce: string;
      web: string;
      soporte: string;
      otro: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitText: string;
      submittingText: string;
      unknownError: string;
      successTitle: string;
      successMessage: string;
      successReset: string;
    };
    validation: {
      nameRequired: string;
      nameMin: string;
      emailRequired: string;
      emailInvalid: string;
      serviceRequired: string;
      serviceInvalid: string;
      messageRequired: string;
      messageMin: string;
    };
  };
  home: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      servicesButton: string;
      contactButton: string;
    };
    intro: {
      label: string;
      titleStart: string;
      titleHighlight: string;
      paragraphOne: string;
      paragraphTwo: string;
      tags: string[];
      stats: {
        projectsLabel: string;
        clientsLabel: string;
        experienceLabel: string;
      };
    };
    faqs: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
  process: {
    hero: {
      badge: string;
      titleStart: string;
      titleHighlight: string;
      titleEnd: string;
      subtitle: string;
      stats: {
        phasesLabel: string;
        transparencyLabel: string;
        projectsLabel: string;
      };
      cards: Array<{
        id: number;
        phase: string;
        title: string;
        description: string;
        tags: string[];
      }>;
    };
    steps: {
      label: string;
      titleStart: string;
      titleHighlight: string;
      subtitle: string;
    };
  };
  servicesGeneral: {
    hero: {
      badge: string;
      title: string;
      description: string;
      exploreButton: string;
      contactButton: string;
    };
    whyChoose: {
      title: string;
      subtitle: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  servicesHome: {
    title: string;
    subtitle: string;
    cardMore: string;
    cards: Array<{
      slug: ServiceSlug;
      title: string;
      price: string;
      description: string;
      tags: string[];
    }>;
  };
  servicesPage: {
    hero: Record<ServiceSlug, {
      badge: string;
      title: string;
      description: string;
      tags: string[];
      primaryCTA: string;
      secondaryCTA: string;
    }>;
    description: Record<ServiceSlug, {
      eyebrow: string;
      heading: string;
      subtitle: string;
      sections: Array<{
        img: string;
        imgAlt: string;
        cards: Array<{
          title: string;
          description: string;
        }>;
      }>;
    }>;
    process: Record<ServiceSlug, {
      eyebrow: string;
      heading: string;
      subtitle: string;
      steps: Array<{
        n: number;
        title: string;
        description: string;
      }>;
    }>;
    cardsIntro: Record<ServiceSlug, {
      eyebrow: string;
      heading: string;
      subtitle: string;
      cards: Array<{
        title: string;
        description: string;
      }>;
    }>;
    intro: Record<ServiceSlug, {
      eyebrow: string;
      heading: string;
      body: string;
      bullets: string[];
      badge: {
        value: string;
        label: string;
        sub: string;
      };
      imageAlt: string;
    }>;
    features: Record<ServiceSlug, {
      heading: string;
      subtitle: string;
      features: string[];
    }>;
    cta: Record<ServiceSlug, {
      eyebrow: string;
      heading: string;
      subtitle: string;
      price: string;
      priceNote: string;
      includes: string[];
      pricePrefix: string;
      buttonText: string;
    }>;
    more: {
      eyebrow: string;
      headingStart: string;
      headingHighlight: string;
      headingEnd: string;
      subtitle: string;
      cardCta: string;
      cards: Array<{
        slug: ServiceSlug;
        tag: string;
        title: string;
        description: string;
      }>;
    };
  };
  processPage: {
    intro: {
      label: string;
      titleStart: string;
      titleHighlight: string;
      subtitle: string;
      cards: Array<{
        icon: string;
        stat: string;
        title: string;
        description: string;
        accent: string;
      }>;
      features: Array<{
        icon: string;
        label: string;
      }>;
    };
    faqs: {
      eyebrow: string;
      title: string;
      subtitleLine1: string;
      subtitleLine2: string;
      cta: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    steps: {
      label: string;
      titleStart: string;
      titleHighlight: string;
      subtitle: string;
      items: Array<{
        number: number;
        icon: string;
        title: string;
        duration: string;
        description: string;
        items: string[];
        accent: string;
      }>;
    };
  };
}

const dictionaries: Record<Locale, I18nDictionary> = {
  en,
  es,
  pt,
};

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICE_SLUGS.includes(value as ServiceSlug);
}

export function getLocaleFromPath(pathname: string): Locale {
  const [firstSegment = ""] = pathname.split("/").filter(Boolean);
  return isLocale(firstSegment) ? firstSegment : "en";
}

export function getDictionary(locale: Locale): I18nDictionary {
  return dictionaries[locale];
}

export function getLocaleStaticPaths() {
  return SUPPORTED_LOCALES.map((lang) => ({ params: { lang } }));
}
