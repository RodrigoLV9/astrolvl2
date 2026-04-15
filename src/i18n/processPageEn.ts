import type { I18nDictionary } from "./index";

export const processPageEn: I18nDictionary["processPage"] = {
  intro: {
    label: "Why choose us",
    titleStart: "Why our",
    titleHighlight: "process works",
    subtitle: "Core pillars that ensure every project succeeds",
    cards: [
      {
        icon: "🔍",
        stat: "100%",
        title: "Full transparency",
        description:
          "We keep you informed at every stage with clear reports and open communication.",
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        icon: "🚀",
        stat: "+50",
        title: "Projects delivered",
        description:
          "Proven experience across different industries, always meeting agreed deadlines.",
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        icon: "⭐",
        stat: "98%",
        title: "Satisfied clients",
        description:
          "Most of our clients actively recommend our services.",
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
    ],
    features: [
      { icon: "💬", label: "Constant communication" },
      { icon: "⚡", label: "Agile methodology" },
      { icon: "🧹", label: "Clean and scalable code" },
      { icon: "🛡️", label: "Post-launch support" },
    ],
  },
  faqs: {
    eyebrow: "Process questions",
    title: "How we work, step by step",
    subtitleLine1:
      "Everything you need to know about our workflow before we start.",
    subtitleLine2: "If something is missing, message us.",
    cta: "Talk to the team",
    items: [
      {
        question: "What stages are included in your development process?",
        answer:
          "We work in four main phases: Discovery, Design, Development, and Launch. Each phase has clear deliverables and an approval checkpoint before moving forward.",
      },
      {
        question: "Can I request changes after a phase has started?",
        answer:
          "Yes. Each phase includes defined review rounds. Changes inside the agreed scope are included; scope extensions are quoted before execution.",
      },
      {
        question: "How does design approval work before development?",
        answer:
          "We present the complete high-fidelity design before writing code. We only move to development once you approve it.",
      },
      {
        question: "How do you keep communication during the project?",
        answer:
          "We hold weekly progress meetings and keep a direct channel open for quick questions.",
      },
      {
        question: "What do I need before starting the project?",
        answer:
          "You only need clarity on your business goal and, if available, your brand assets. We define everything else together during Discovery.",
      },
      {
        question: "What do I receive at the end of the project?",
        answer:
          "You receive source code, credentials, and basic documentation, plus a handoff session so your team can operate with confidence.",
      },
    ],
  },
  steps: {
    label: "Step by step",
    titleStart: "Process",
    titleHighlight: "stages",
    subtitle: "Each phase is designed to maximize quality and minimize risk",
    items: [
      {
        number: 1,
        icon: "🔍",
        title: "Discovery and consultation",
        duration: "1 - 2 weeks",
        description:
          "We understand your business, goals, and audience to set strong project foundations.",
        items: [
          "Initial requirements meeting",
          "Competitor and market analysis",
          "Goal and KPI definition",
          "Custom proposal and budget",
        ],
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        number: 2,
        icon: "✏️",
        title: "Design and strategy",
        duration: "1 - 2 weeks",
        description:
          "We shape the visual and technical approach before writing a single line of code.",
        items: [
          "Wireframes and information architecture",
          "High-fidelity UI design",
          "Technology stack selection",
          "Interactive prototype for approval",
        ],
        accent: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
      {
        number: 3,
        icon: "⚡",
        title: "Development",
        duration: "3 - 8 weeks",
        description:
          "We build your project with modern technology, weekly reports, and full transparency.",
        items: [
          "Frontend and backend development",
          "API and service integrations",
          "Performance and security testing",
          "Weekly progress reviews",
        ],
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        number: 4,
        icon: "🔄",
        title: "Review and adjustments",
        duration: "1 week",
        description:
          "We present the complete product and apply refinements until you are fully satisfied.",
        items: [
          "Full product demo",
          "Correction and adjustment round",
          "Multi-device testing",
          "Final client approval",
        ],
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
      {
        number: 5,
        icon: "🚀",
        title: "Launch and support",
        duration: "Ongoing",
        description:
          "We deploy your project and continue supporting you to ensure long-term success.",
        items: [
          "Production deployment",
          "Client team training",
          "Continuous monitoring and optimization",
          "Priority technical support",
        ],
        accent: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      },
    ],
  },
};
