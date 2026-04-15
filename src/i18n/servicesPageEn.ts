import type { I18nDictionary } from "./index";

export const servicesPageEn: I18nDictionary["servicesPage"] = {
  hero: {
    "landing-page": {
      badge: "Landing Page",
      title: "Pages designed to convert, not just impress",
      description:
        "We build high-performance landing pages that guide visitors toward one action: buy, sign up, or contact. No distractions, measurable results from day one.",
      tags: ["High Conversion", "Mobile First", "SEO Optimized", "A/B Testing"],
      primaryCTA: "I want my landing page",
      secondaryCTA: "See process",
    },
    website: {
      badge: "Corporate Website",
      title: "Your digital presence built to generate trust",
      description:
        "We design corporate websites with strong brand identity, integrated CMS, and architecture that scales with your business. A turnkey project from design to launch.",
      tags: ["UI/UX Design", "Integrated CMS", "Technical SEO", "Scalable"],
      primaryCTA: "I want my website",
      secondaryCTA: "See process",
    },
    ecommerce: {
      badge: "E-commerce",
      title: "Your online store ready to sell 24/7",
      description:
        "We build robust online stores with inventory management, multiple payment gateways, and product SEO. Your digital sales channel optimized to convert and scale.",
      tags: ["Secure Checkout", "Stock Management", "Product SEO", "Analytics"],
      primaryCTA: "I want my online store",
      secondaryCTA: "See process",
    },
    support: {
      badge: "Support and Maintenance",
      title: "Your platform active, secure, and performing at its best",
      description:
        "Updates, automated backups, continuous monitoring, and fast incident response. Your website in expert hands so you can focus on growing your business.",
      tags: ["24/7 Monitoring", "Updates", "Security", "Monthly Reports"],
      primaryCTA: "I want a support plan",
      secondaryCTA: "See process",
    },
  },
  description: {
    "landing-page": {
      eyebrow: "What is included",
      heading: "Everything your landing page needs to convert",
      subtitle: "A turnkey project: from concept to post-launch analytics.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
          imgAlt: "Designer working on landing page wireframes",
          cards: [
            { title: "Persuasive copywriting", description: "We write action-oriented page copy: engaging headlines, clear benefits, and CTAs built to convert." },
            { title: "High-fidelity UI design", description: "Complete mockup before development. See exactly how your landing page will look before any code is written." },
            { title: "Forms and integrations", description: "Lead forms connected to your CRM or email marketing stack. Every lead goes straight into your pipeline." },
            { title: "A/B testing ready", description: "Modular structure prepared for testing headline, CTA, or image variants without breaking implementation." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          imgAlt: "Laptop displaying web analytics metrics",
          cards: [
            { title: "Pixel and conversion setup", description: "Meta Pixel, Google Ads, and GA4 configured from launch so you can track paid campaign ROI precisely." },
            { title: "On-page SEO optimized", description: "Meta tags, semantic structure, and speed configuration so search engines can discover and rank your page." },
            { title: "Mobile-first responsive", description: "Designed mobile-first and fully adapted to all devices without sacrificing conversion performance." },
            { title: "Hosting and deployment", description: "We guide hosting selection and configure automated deployment so your landing page remains stable and available." },
          ],
        },
      ],
    },
    website: {
      eyebrow: "What is included",
      heading: "A complete corporate website, turnkey",
      subtitle: "Design, development, CMS, and technical SEO in one project.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
          imgAlt: "User interface design on screen",
          cards: [
            { title: "Custom UI/UX design", description: "Color palette, typography, and components aligned to your brand. No templates, every design is tailored." },
            { title: "No-code integrated CMS", description: "Your team can create and edit content, publish blog posts, and upload images from an intuitive visual panel." },
            { title: "Built-in blog system", description: "Posts with categories, tags, authors, and per-article SEO. Your content channel ready to grow." },
            { title: "Unlimited pages", description: "Home, Services, About, Team, Case Studies, Contact, and any additional pages your scope requires." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
          imgAlt: "Screen with code and development tools",
          cards: [
            { title: "Technical SEO from day one", description: "Semantic HTML5 structure, Open Graph, Schema.org structured data, and XML sitemap configured." },
            { title: "Performance optimized", description: "Lazy loading, minification, and Core Web Vitals optimization for a fast experience that supports SEO." },
            { title: "Third-party integrations", description: "CRM, live chat, contact forms, Google Analytics, and any external tools already in your stack." },
            { title: "Post-launch support", description: "30 days of technical support included to resolve adjustments or incidents after launch." },
          ],
        },
      ],
    },
    ecommerce: {
      eyebrow: "What is included",
      heading: "Your online store ready to sell from day one",
      subtitle: "Catalog, payments, logistics, and analytics fully configured before launch.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
          imgAlt: "Hand holding phone with shopping app",
          cards: [
            { title: "Catalog and variants", description: "Upload products with multiple images, variants, SEO description, and pricing. No SKU limits." },
            { title: "Integrated payment gateways", description: "Stripe, MercadoPago, PayPal, and more. We configure the gateway that best fits your market." },
            { title: "Stock and inventory management", description: "Real-time stock control, low-inventory alerts, and quantity adjustments from one admin panel." },
            { title: "Coupons and discounts", description: "Discount rules by product, category, or cart total with configurable dates and conditions." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
          imgAlt: "Laptop screen with online sales dashboard",
          cards: [
            { title: "Product-page SEO", description: "Clean URLs, meta tags, and rich snippets so search engines can rank each product page." },
            { title: "Single-flow checkout", description: "Streamlined purchase flow with stock checks, shipping calculation, and automatic email confirmation." },
            { title: "Sales analytics and reporting", description: "Dashboard with key metrics: revenue, conversion rate, top sellers, and cart abandonment." },
            { title: "Logistics integration", description: "Shipping carrier integrations for real-time costs and automatic shipping label generation." },
          ],
        },
      ],
    },
    support: {
      eyebrow: "What is included",
      heading: "Proactive maintenance, not reactive",
      subtitle: "We do not wait for failures. We act before they impact your business.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          imgAlt: "Monitoring dashboard with server performance metrics",
          cards: [
            { title: "24/7 availability monitoring", description: "Automatic downtime alerts and guaranteed response times so your site is down as little as possible." },
            { title: "Dependency updates", description: "We keep plugins, frameworks, and libraries updated to avoid known vulnerabilities and technical debt." },
            { title: "Daily automatic backups", description: "Scheduled site and database backups stored externally for safe recovery in case of incidents." },
            { title: "Priority security patches", description: "Critical vulnerabilities are patched within 24 hours of disclosure instead of waiting for the next cycle." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
          imgAlt: "Technical support team reviewing reports on screens",
          cards: [
            { title: "Monthly performance review", description: "Speed, Core Web Vitals, and technical health audit with recommendations in each monthly report." },
            { title: "Initial technical audit", description: "If we did not build your site, we run a full audit to understand architecture and condition before support starts." },
            { title: "Support for your team", description: "Direct support channel for technical questions, minor requests, and anomaly reporting." },
            { title: "Detailed monthly report", description: "Report including uptime, completed actions, speed, applied updates, and next-period recommendations." },
          ],
        },
      ],
    },
  },
  process: {
    "landing-page": {
      eyebrow: "Process",
      heading: "From idea to launch in 5 steps",
      subtitle:
        "A clear process, no surprises, and incremental deliveries so you always know where we are.",
      steps: [
        { n: 1, title: "Discovery", description: "We define conversion goals, target audience, value proposition, and success metrics. The foundation for everything that follows." },
        { n: 2, title: "Copywriting", description: "We craft headlines, subheadings, benefit copy, and CTAs tailored to your audience before design starts." },
        { n: 3, title: "UI Design", description: "We create the high-fidelity mockup. You review and approve it before we write any code." },
        { n: 4, title: "Development", description: "We build the landing page with clean code, optimized performance, and configured integrations." },
        { n: 5, title: "Launch", description: "We publish, configure analytics, verify everything works, and hand over access and usage guidance." },
      ],
    },
    website: {
      eyebrow: "Process",
      heading: "How we build your website",
      subtitle:
        "Five phases that ensure brand-aligned design, solid development, and a frictionless launch.",
      steps: [
        { n: 1, title: "Discovery", description: "We assess your brand, business goals, competition, and scope. Then we define pages, features, and information architecture." },
        { n: 2, title: "UI/UX Design", description: "Wireframes and a full mockup of the website. We design components and user flow before development." },
        { n: 3, title: "Development", description: "We build the website with integrated CMS, configured technical SEO, and scalable code." },
        { n: 4, title: "Content and QA", description: "We upload your provided content and run usability, performance, and cross-browser tests." },
        { n: 5, title: "Launch", description: "We configure domain, SSL, hosting, redirects, and run final checks before publishing." },
      ],
    },
    ecommerce: {
      eyebrow: "Process",
      heading: "From empty catalog to a store ready to sell",
      subtitle:
        "Each stage has concrete deliverables so you can track progress and give feedback at the right moment.",
      steps: [
        { n: 1, title: "Discovery", description: "We define catalog structure, payment gateways, logistics integrations, and business rules before design or development." },
        { n: 2, title: "UI/UX Design", description: "We design the full flow: home, product page, cart, and checkout. You approve before development." },
        { n: 3, title: "Development", description: "We build the store, integrate payments, configure inventory, and apply per-product SEO." },
        { n: 4, title: "Data setup", description: "We import your catalog and configure categories, pricing, variants, and shipping methods based on your rules." },
        { n: 5, title: "Launch", description: "We run end-to-end purchase testing, verify analytics, and publish once everything is validated." },
      ],
    },
    support: {
      eyebrow: "Process",
      heading: "How our support works",
      subtitle:
        "A predictable monthly cycle that keeps your website in optimal condition without extra effort from your team.",
      steps: [
        { n: 1, title: "Initial audit", description: "If we did not build your website, we audit technical status, dependencies, and potential vulnerabilities before taking support." },
        { n: 2, title: "Active monitoring", description: "We enable availability and performance monitoring to detect incidents before users are impacted." },
        { n: 3, title: "Monthly maintenance", description: "We update dependencies, apply security patches, run backups, and review site performance." },
        { n: 4, title: "Incident resolution", description: "For functional issues or downtime, we respond according to SLA with documented diagnosis and solution." },
        { n: 5, title: "Monthly report", description: "You receive a full report of completed work, platform status, and recommendations for the next period." },
      ],
    },
  },
  cardsIntro: {
    "landing-page": {
      eyebrow: "Why choose us?",
      heading: "Three pillars that make the difference",
      subtitle:
        "We do not just design pretty pages. We build measurable conversion tools from day one.",
      cards: [
        {
          title: "Built to convert",
          description:
            "Every element, headline, CTA, and visual flow is crafted to guide visitors to the target action.",
        },
        {
          title: "Analytics from day one",
          description:
            "We integrate GA4, event tracking, and ad conversions so you can measure ROI for every campaign.",
        },
        {
          title: "Mobile-first and fast",
          description:
            "90+ Core Web Vitals score. Optimized for better ranking and lower bounce rates.",
        },
      ],
    },
    website: {
      eyebrow: "Why choose us?",
      heading: "What sets apart a website that grows",
      subtitle: "A website is only as strong as the strategy behind it. Here is ours.",
      cards: [
        {
          title: "CMS for your team",
          description:
            "Edit text, images, and posts without touching code from an intuitive visual panel.",
        },
        {
          title: "Technical SEO included",
          description:
            "Semantic structure, meta tags, and sitemap ready to scale in search engines.",
        },
        {
          title: "Performance optimized",
          description:
            "Modular architecture, compressed images, and lazy loading for a fast experience.",
        },
      ],
    },
    ecommerce: {
      eyebrow: "Why choose us?",
      heading: "The foundations of a store that sells",
      subtitle:
        "Technology, shopping experience, and search visibility: the factors that define results.",
      cards: [
        {
          title: "Multi-payment gateway",
          description:
            "Stripe, MercadoPago, PayPal, and more. Integrated with PCI security and frictionless checkout.",
        },
        {
          title: "Unlimited catalog",
          description:
            "Manage products, variants, images, and stock from a centralized panel.",
        },
        {
          title: "Product SEO included",
          description:
            "Clean URLs and per-product meta tags so Google can index and rank your catalog.",
        },
      ],
    },
    support: {
      eyebrow: "Why choose us?",
      heading: "Maintenance that prevents, not just repairs",
      subtitle: "Most teams act only when something breaks. We work so nothing breaks.",
      cards: [
        {
          title: "Continuous monitoring",
          description:
            "We detect downtime in seconds and respond immediately before users notice.",
        },
        {
          title: "Backups and security",
          description:
            "Daily backups, priority patches, and vulnerability scans included.",
        },
        {
          title: "Detailed monthly report",
          description:
            "You get a monthly report with uptime, speed, and actions completed.",
        },
      ],
    },
  },
  intro: {
    "landing-page": {
      eyebrow: "What is a landing page?",
      heading: "One page. One goal. Maximum results.",
      body:
        "A landing page is a single-purpose page: convert visitors into leads, subscribers, or customers.",
      bullets: [
        "No menus or links that distract visitors",
        "Each section built to push toward the CTA",
        "Measurable from day one with integrated analytics",
      ],
      badge: { value: "3x", label: "higher conversion", sub: "vs. homepage" },
      imageAlt: "Analytics dashboard showing conversion metrics",
    },
    website: {
      eyebrow: "What is a corporate website?",
      heading: "Your most important digital asset, built to last.",
      body:
        "A corporate website builds credibility, presents your offer clearly, and drives consistent conversions.",
      bullets: [
        "Integrated CMS: your team edits without code",
        "Complete technical SEO from the first line",
        "Modular architecture that grows with your company",
      ],
      badge: { value: "70%", label: "of buyers", sub: "search on Google first" },
      imageAlt: "Corporate website design displayed on screen",
    },
    ecommerce: {
      eyebrow: "What is a custom e-commerce store?",
      heading: "Your digital sales channel, open 24/7.",
      body:
        "A custom e-commerce platform integrates payments, manages inventory, and optimizes product SEO to sell and scale.",
      bullets: [
        "Payment gateways adapted to your market",
        "Product SEO to attract organic traffic",
        "Admin panel with no learning curve",
      ],
      badge: { value: "24/7", label: "active sales", sub: "without manual intervention" },
      imageAlt: "Online store with product catalog and shopping cart",
    },
    support: {
      eyebrow: "What does technical support cover?",
      heading: "Your website always online. We handle it.",
      body:
        "Website maintenance covers updates, security, and continuous monitoring to reduce real risks.",
      bullets: [
        "Automatic downtime alerts before you notice",
        "Security patches applied in less than 24h",
        "Monthly report with everything that happened on your platform",
      ],
      badge: { value: "99.9%", label: "uptime", sub: "SLA guaranteed" },
      imageAlt: "Data center with monitored servers",
    },
  },
  features: {
    "landing-page": {
      heading: "Everything included in your landing page",
      subtitle: "No hidden costs. No surprises. Every item delivered and documented.",
      features: [
        "High-fidelity UI/UX design",
        "Persuasive copywriting included",
        "Responsive mobile-first implementation",
        "Core Web Vitals 90+ guaranteed",
        "CRM and email marketing integration",
        "Meta Pixel and Google Ads setup",
        "Google Analytics 4 + key events",
        "Lead capture forms",
        "On-page SEO optimized",
        "Domain and hosting setup",
        "SSL included",
        "30-day post-launch support",
      ],
    },
    website: {
      heading: "Everything included in your corporate website",
      subtitle:
        "Design, development, and launch. No extra freelancers and no paid external tools.",
      features: [
        "Custom UI/UX design",
        "Pages based on agreed scope",
        "Integrated CMS (no-code editing)",
        "Blog system with per-article SEO",
        "Complete on-page technical SEO",
        "Structured data (Schema.org)",
        "Open Graph and meta tags",
        "XML sitemap and robots.txt",
        "Core Web Vitals optimized",
        "Third-party tool integrations",
        "SSL and domain setup",
        "CMS training included",
      ],
    },
    ecommerce: {
      heading: "Everything included in your online store",
      subtitle:
        "From catalog to sales analytics, everything ready before launch.",
      features: [
        "Catalog with unlimited variants",
        "Multiple payment gateways",
        "Stock and inventory management",
        "Coupon and discount system",
        "Single-page checkout",
        "Automatic email confirmations",
        "Per-product SEO",
        "Rich snippets with price and availability",
        "Sales and revenue dashboard",
        "Cart abandonment reports",
        "Shipping logistics integration",
        "30-day post-launch support",
      ],
    },
    support: {
      heading: "Everything included in the support plan",
      subtitle:
        "No hourly rates and no surprises. A fixed plan covering everything your platform needs.",
      features: [
        "24/7 availability monitoring",
        "Automatic downtime alerts",
        "Dependency updates",
        "Priority security patches",
        "Daily automatic backups",
        "External backup storage",
        "Monthly performance review",
        "Monthly Core Web Vitals audit",
        "Technical support for your team",
        "Functional bug fixes",
        "Detailed monthly report",
        "SLA-guaranteed response time",
      ],
    },
  },
  cta: {
    "landing-page": {
      eyebrow: "Investment",
      heading: "Professional landing page from $1,200",
      subtitle:
        "Fixed price, defined scope, and no surprises. Pay in two installments: 50% upfront and 50% on delivery.",
      price: "$1,200",
      priceNote: "Base price. Varies by integrations and additional features.",
      includes: [
        "High-fidelity UI/UX design",
        "Copywriting included",
        "Marketing integrations configured",
        "30-day post-launch support",
      ],
      pricePrefix: "from",
      buttonText: "Request custom quote",
    },
    website: {
      eyebrow: "Investment",
      heading: "Corporate website from $2,500",
      subtitle:
        "Fixed price and defined scope from Discovery. No hourly charges and no hidden extras.",
      price: "$2,500",
      priceNote: "Base price. Varies by number of pages, CMS, and features.",
      includes: [
        "Custom UI/UX design",
        "Integrated CMS for your team",
        "Complete technical SEO",
        "30-day post-launch support",
      ],
      pricePrefix: "from",
      buttonText: "Request custom quote",
    },
    ecommerce: {
      eyebrow: "Investment",
      heading: "Online store ready to sell from $3,500",
      subtitle:
        "Includes design, development, payments, and initial catalog setup with one provider.",
      price: "$3,500",
      priceNote: "Base price. Varies by gateways, logistics, and catalog size.",
      includes: [
        "Full flow UI/UX design",
        "Payment gateways configured",
        "Per-product SEO included",
        "30-day post-launch support",
      ],
      pricePrefix: "from",
      buttonText: "Request custom quote",
    },
    support: {
      eyebrow: "Investment",
      heading: "Monthly maintenance from $299/month",
      subtitle:
        "Recurring monthly payment, no mandatory annual contract. You can scale or pause with prior notice.",
      price: "$299/month",
      priceNote: "Base Essential plan price. Professional and Premium plans available.",
      includes: [
        "24/7 monitoring included",
        "Automatic daily backups",
        "Security updates",
        "Detailed monthly report",
      ],
      pricePrefix: "from",
      buttonText: "Request custom quote",
    },
  },
  more: {
    eyebrow: "Other services",
    headingStart: "Need something",
    headingHighlight: "different",
    headingEnd: "?",
    subtitle:
      "Each service is designed for a specific need. If this one is not yours, here are other options.",
    cardCta: "View service",
    cards: [
      {
        slug: "landing-page",
        tag: "Landing Page",
        title: "High-converting pages",
        description:
          "For campaigns, launches, and lead generation. Designed to convert.",
      },
      {
        slug: "website",
        tag: "Corporate Website",
        title: "Complete digital presence",
        description:
          "Multiple pages, integrated CMS, and technical SEO for a solid digital foundation.",
      },
      {
        slug: "ecommerce",
        tag: "E-commerce",
        title: "Custom online store",
        description:
          "Catalog, payments, and logistics in a store optimized to scale.",
      },
      {
        slug: "support",
        tag: "Support and Maintenance",
        title: "Your website in expert hands",
        description:
          "Backups, updates, monitoring, and monthly reports for smooth operations.",
      },
    ],
  },
};
