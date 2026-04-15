import type { I18nDictionary } from "./index";
import { processPageEn } from "./processPageEn";
import { servicesPageEn } from "./servicesPageEn";

export const en: I18nDictionary = {
  brand: {
    name: "Astro LvL",
    tagline:
      "We elevate your digital presence with modern, results-driven web solutions.",
  },
  header: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      blogs: "Blogs",
      contact: "Contact",
    },
    aria: {
      toggleMenu: "Toggle navigation menu",
    },
  },
  footer: {
    navigationTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Contact",
    services: {
      landingPage: "Landing Page",
      website: "Website",
      ecommerce: "E-commerce",
      support: "Support",
    },
    location: "Buenos Aires, Argentina",
    copyright: "© {year} ASTRO LVL WEB. All rights reserved.",
    signature: "Designed for the digital future",
  },
  blog: {
    eyebrow: "Blog",
    latestTitle: "Latest Articles",
    latestSubtitle:
      "Explore content about web development, design, and the latest technology trends.",
    readArticleAria: "Read article",
    readArticleCta: "Read article",
    featuredBadge: "Featured post",
    mostReadTitle: "Most read",
    readTimeSuffix: "min read",
  },
  language: {
    current: "Language",
    options: {
      en: "English",
      es: "Espanol",
      pt: "Portugues",
    },
  },
  contact: {
    heroTitle: "Contact Us",
    heroSubtitle: "We are here to bring your digital project to life",
    formTitle: "Send us a message",
    rightTitle: "Let us talk anytime",
    rightSubtitle: "Choose your preferred channel. We reply in less than 24 hours.",
    socialsLabel: "Follow us",
    cards: {
      whatsappLabel: "WhatsApp",
      whatsappButton: "Message on WhatsApp",
      emailLabel: "Email",
      emailButton: "Send an email",
      instagramLabel: "Instagram",
      instagramButton: "View profile",
    },
    services: {
      landing: "Landing Page",
      ecommerce: "E-commerce",
      web: "Website",
      soporte: "Support",
      otro: "Other",
    },
    form: {
      nameLabel: "Full name",
      namePlaceholder: "Type your name",
      emailLabel: "Email address",
      emailPlaceholder: "Type your email",
      serviceLabel: "Service type",
      servicePlaceholder: "Select a service",
      messageLabel: "Message",
      messagePlaceholder: "Type your message...",
      submitText: "Send message",
      submittingText: "Sending...",
      unknownError: "Unknown error. Please try again.",
      successTitle: "Message sent!",
      successMessage: "Thank you for contacting us. We will reply in less than 24 hours.",
      successReset: "Send another message",
    },
    validation: {
      nameRequired: "Name is required",
      nameMin: "Name must be at least 3 characters",
      emailRequired: "Email is required",
      emailInvalid: "Enter a valid email",
      serviceRequired: "Select a service",
      serviceInvalid: "Select a valid service",
      messageRequired: "Message is required",
      messageMin: "Message must be at least 20 characters",
    },
  },
  home: {
    hero: {
      badge: "Technology with vision",
      title: "We elevate your digital presence to the next level",
      subtitle: "Futuristic web development for visionary companies",
      servicesButton: "Explore services",
      contactButton: "Contact",
    },
    intro: {
      label: "About us",
      titleStart: "We transform ideas into",
      titleHighlight: "digital reality",
      paragraphOne:
        "At ASTRO LVL WEB, we are a team of developers passionate about building unique digital experiences. We combine cutting-edge design with modern technology to take your business to the next level.",
      paragraphTwo:
        "From innovative startups to established companies, we help our clients stand out in the digital world with tailored and scalable solutions.",
      tags: [
        "Constant innovation",
        "Avant-garde design",
        "Modern technology",
        "Total scalability",
      ],
      stats: {
        projectsLabel: "Projects",
        clientsLabel: "Clients",
        experienceLabel: "Years exp.",
      },
    },
    faqs: {
      eyebrow: "Frequently asked questions",
      title: "Answers you need",
      subtitle:
        "We clear up the most common questions before you even ask. If something is missing, we are one message away.",
      items: [
        {
          question: "How much does a web project cost?",
          answer:
            "Every project is different, so we do not use fixed rates. After a short call to understand your goal, we share a clear, detailed quote with no commitment. Cost depends on the solution type, scope, and timeline.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "We work with modern, proven technologies based on each project needs: Astro, Next.js, or React for frontend; Node.js with PostgreSQL or MongoDB for backend; and Shopify for e-commerce when it is the best fit.",
        },
        {
          question: "Do you work with clients from any country?",
          answer:
            "Yes, we work fully remote with clients across Latin America, Spain, and the United States. We adapt to different time zones so distance is never a blocker.",
        },
        {
          question: "Do you offer design, development, or both?",
          answer:
            "We offer both. We handle UI/UX design, technical architecture, and full development. We can also work only on development if you already have approved designs, or only on design if you have your own tech team.",
        },
        {
          question: "How do you protect project confidentiality?",
          answer:
            "We sign an NDA before any technical discussion. Code, data, and project documents belong exclusively to the client. We never share or reuse third-party work.",
        },
        {
          question: "How are you different from other agencies or freelancers?",
          answer:
            "We focus on business outcomes, not only deliverables. We work with small, specialized teams: no intermediaries, no generic templates, and no pricing surprises.",
        },
        {
          question: "How do I start working with you?",
          answer:
            "The first step is a free 20-30 minute call where we listen to your project and assess fit. From there we define scope, send a detailed proposal, and agree on next steps.",
        },
      ],
    },
  },
  process: {
    hero: {
      badge: "Proven methodology",
      titleStart: "Our",
      titleHighlight: "process",
      titleEnd: "of work",
      subtitle: "A clear and transparent methodology for exceptional results in every project",
      stats: {
        phasesLabel: "Process phases",
        transparencyLabel: "Transparency",
        projectsLabel: "Completed projects",
      },
      cards: [
        {
          id: 1,
          phase: "Phase 01",
          title: "Discovery",
          description: "Deep analysis of your goals, competitors, and audience to build the right strategy.",
          tags: ["Analysis", "Strategy", "Research"],
        },
        {
          id: 2,
          phase: "Phase 02",
          title: "Design & strategy",
          description: "We define the visual and technical direction that represents your brand.",
          tags: ["UI/UX", "Wireframes", "Prototype"],
        },
        {
          id: 3,
          phase: "Phase 03",
          title: "Development",
          description: "We build and implement your project with modern technology and clean code.",
          tags: ["Frontend", "Backend", "Optimization"],
        },
        {
          id: 4,
          phase: "Phase 04",
          title: "Launch",
          description: "We deliver, train your team, and provide support for long-term success.",
          tags: ["Deploy", "Support", "Growth"],
        },
      ],
    },
    steps: {
      label: "Step by step",
      titleStart: "Process",
      titleHighlight: "stages",
      subtitle: "Each phase is designed to maximize quality and minimize risk",
    },
  },
  servicesGeneral: {
    hero: {
      badge: "Premium web services",
      title: "Digital solutions designed to scale your business",
      description:
        "We build strategic websites, ecommerce platforms, and growth-focused digital experiences with measurable outcomes.",
      exploreButton: "Explore services",
      contactButton: "Talk with us",
    },
    whyChoose: {
      title: "Why choose us?",
      subtitle:
        "We are more than a web development studio. We are your partner in digital growth.",
      items: [
        {
          icon: "⚡",
          title: "Fast and efficient",
          description:
            "We deliver high-quality projects on agreed timelines without compromising excellence.",
        },
        {
          icon: "🎨",
          title: "Modern design",
          description:
            "We create attractive, intuitive interfaces aligned with current design standards.",
        },
        {
          icon: "📱",
          title: "Fully responsive",
          description:
            "Your website looks and performs great on mobile, tablet, and desktop.",
        },
        {
          icon: "🔍",
          title: "SEO-ready",
          description:
            "We improve search visibility so your ideal customers can find you faster.",
        },
        {
          icon: "🛡️",
          title: "Secure and reliable",
          description:
            "We implement strong security practices to protect your business and data.",
        },
        {
          icon: "💬",
          title: "Ongoing support",
          description:
            "We stay with you after launch to keep improving your digital platform.",
        },
      ],
    },
    process: {
      title: "Our work process",
      subtitle: "A structured and flexible approach to ensure your success",
      steps: [
        {
          title: "Consulting and analysis",
          description: "We understand your needs, goals, and vision before building.",
        },
        {
          title: "Strategy and design",
          description: "We craft a detailed roadmap and high-quality visual direction.",
        },
        {
          title: "Development",
          description: "We build your solution with modern tech and best practices.",
        },
        {
          title: "Testing and QA",
          description: "We run thorough testing to ensure quality, performance, and security.",
        },
        {
          title: "Launch and support",
          description:
            "We deploy and provide continuous support so your project keeps growing.",
        },
      ],
    },
    cta: {
      title: "Ready to transform your digital presence?",
      subtitle: "Let us help you find the right solution for your business.",
      button: "Start your project today",
    },
  },
  servicesHome: {
    title: "Our services",
    subtitle: "Complete solutions to take your digital presence to the next level",
    cardMore: "See more",
    cards: [
      {
        slug: "landing-page",
        title: "LANDING PAGE",
        price: "$100,000 ARS",
        description: "A modern, optimized single page to present your business or product effectively.",
        tags: [
          "Responsive design",
          "Conversion-focused copy",
          "Contact form",
          "Basic SEO",
          "Fast loading",
          "WhatsApp button",
          "Social integration",
        ],
      },
      {
        slug: "website",
        title: "WEB SITE",
        price: "$180,000 ARS",
        description: "A multi-page website to showcase your brand, services, and value proposition with a professional presence.",
        tags: [
          "Up to 5 sections",
          "Custom design",
          "WhatsApp integration",
          "Speed optimization",
          "Image gallery",
          "Location map",
          "Contact form",
        ],
      },
      {
        slug: "ecommerce",
        title: "E-COMMERCE",
        price: "$300,000 ARS",
        description: "An online store ready to sell, with catalog, cart, and a clear checkout flow for your customers.",
        tags: [
          "Product catalog",
          "Cart and checkout",
          "Payment methods",
          "Self-managed admin panel",
          "Stock management",
          "Discount coupons",
          "Automated emails",
        ],
      },
      {
        slug: "support",
        title: "SUPPORT",
        price: "$50,000 ARS",
        description: "Continuous maintenance and support to keep your website updated, secure, and running at full performance.",
        tags: [
          "Monthly updates",
          "Bug fixing",
          "Basic monitoring",
          "Technical support",
          "Regular backups",
          "Performance improvements",
          "WhatsApp assistance",
        ],
      },
    ],
  },
  processPage: processPageEn,
  servicesPage: servicesPageEn,
};
