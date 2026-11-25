import type { I18nDictionary } from "./index";
import { processPageEs } from "./processPageEs";
import { servicesPageEs } from "./servicesPageEs";

export const es: I18nDictionary = {
  brand: {
    name: "Astro LvL",
    tagline:
      "Elevamos tu presencia digital con soluciónes web modernas y orientadas a resultados.",
  },
  header: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      process: "Proceso",
      blogs: "Blog",
      contact: "Contacto",
    },
    aria: {
      toggleMenu: "Abrir o cerrar menu de navegación",
    },
  },
  footer: {
    navigationTitle: "Navegación",
    servicesTitle: "Servicios",
    contactTitle: "Contacto",
    services: {
      landingPage: "Landing Page",
      website: "Sitio Web",
      ecommerce: "E-commerce",
      support: "Soporte",
      // appsMoviles: "Apps Móviles",
      // appsEscritorio: "Apps de Escritorio",
      // saas: "SaaS",
      // api: "Desarrollo de APIs",
      // automatizacionIa: "Automatización con IA",
      // crm: "CRM",
      // solucionesPersonalizadas: "Soluciones Personalizadas",
      // consultoria: "Consultoría General",
    },
    location: "Buenos Aires, Argentina",
    copyright: "© {year} ASTRO LVL WEB. Todos los derechos reservados.",
    signature: "Diseñado para el futuro digital",
  },
  blog: {
    eyebrow: "Blog",
    latestTitle: "Ultimos artículos",
    latestSubtitle:
      "Explora contenido sobre desarrollo web, diseño y las últimas tendencias en tecnología.",
    readArticleAria: "Leer artículo",
    readArticleCta: "Leer artículo",
    featuredBadge: "Post destacado",
    mostReadTitle: "Lo más leido",
    readTimeSuffix: "min de lectura",
  },
  language: {
    current: "Idioma",
    options: {
      en: "Inglés",
      es: "Español",
      pt: "Portugués",
    },
  },
  contact: {
    heroTitle: "Contáctenos",
    heroSubtitle: "Estamos aquí para hacer realidad su proyecto digital",
    formTitle: "Envíenos un mensaje",
    rightTitle: "Hablemos cuando quieras",
    rightSubtitle: "Elige el canal que prefieras. Respondemos en menos de 24 horas.",
    socialsLabel: "Síguenos",
    cards: {
      whatsappLabel: "WhatsApp",
      whatsappButton: "Escribir por WhatsApp",
      emailLabel: "Correo electrónico",
      emailButton: "Enviar un correo",
      instagramLabel: "Instagram",
      instagramButton: "Ver perfil",
    },
    services: {
      landing: "Landing Page",
      ecommerce: "E-commerce",
      web: "Sitio Web",
      soporte: "Soporte",
      otro: "Otro",
    },
    form: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Escriba su nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Escriba su correo",
      serviceLabel: "Tipo de servicio",
      servicePlaceholder: "Seleccione un servicio",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escriba su mensaje...",
      submitText: "Enviar mensaje",
      submittingText: "Enviando...",
      unknownError: "Error desconocido. Por favor, inténtelo nuevamente.",
      successTitle: "Mensaje enviado!",
      successMessage: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
      successReset: "Enviar otro mensaje",
    },
    validation: {
      nameRequired: "El nombre es requerido",
      nameMin: "El nombre debe tener al menos 3 caracteres",
      emailRequired: "El correo es requerido",
      emailInvalid: "Ingrese un correo electrónico válido",
      serviceRequired: "Seleccione un servicio",
      serviceInvalid: "Seleccione un servicio válido",
      messageRequired: "El mensaje es requerido",
      messageMin: "El mensaje debe tener al menos 20 caracteres",
    },
  },
  home: {
    hero: {
      badge: "Tecnología con visión",
      title: "Elevamos tu presencia digital al siguiente nivel",
      subtitle: "Desarrollo web futurista para empresas visionarias",
      servicesButton: "Explorar servicios",
      contactButton: "Contacto",
    },
    intro: {
      label: "Sobre nosotros",
      titleStart: "Transformamos ideas en",
      titleHighlight: "realidad digital",
      paragraphOne:
        "En ASTRO LVL WEB, somos un equipo de desarrolladores apasionados por crear experiencias digitales únicas. Combinamos diseño vanguardista con tecnología de punta para llevar tu negocio al siguiente nivel.",
      paragraphTwo:
        "Desde startups innovadoras hasta empresas consolidadas, ayudamos a nuestros clientes a destacar en el mundo digital con soluciónes personalizadas y escalables.",
      tags: [
        "Innovación constante",
        "Diseño vanguardista",
        "Tecnología de punta",
        "Escalabilidad total",
      ],
      stats: {
        projectsLabel: "Proyectos",
        clientsLabel: "Clientes",
        experienceLabel: "Años exp.",
      },
    },
    faqs: {
      eyebrow: "Preguntas frecuentes",
      title: "Respuestas que necesitas",
      subtitle:
        "Aclaramos las dudas más comunes antes de que las tengas. Si algo no esta aquí, estamos a un mensaje de distancia.",
      items: [
        {
          question: "Cuanto cuesta desarrollar un proyecto web?",
          answer:
            "Cada proyecto es distinto, por lo que no manejamos tarifas fijas. Luego de una llamada breve para entender tu objetivo, te entregamos un presupuesto claro y detallado sin compromiso.",
        },
        {
          question: "Con que tecnologías trabajan?",
          answer:
            "Usamos tecnologías modernas y probadas según cada proyecto: Astro, Next.js o React para frontend; Node.js con PostgreSQL o MongoDB para backend; y Shopify para e-commerce cuando es la mejor opción.",
        },
        {
          question: "Trabajan con clientes de cualquier pais?",
          answer:
            "Si, trabajamos de forma completamente remota con clientes en toda America Latina, España y Estados Unidos. Nos adaptamos a distintos husos horarios.",
        },
        {
          question: "Ofrecen diseño, desarrollo o los dos?",
          answer:
            "Ofrecemos ambos. Nos encargamos del diseño UI/UX, la arquitectura técnica y el desarrollo completo. Tambien podemos trabajar en una sola parte según tu necesidad.",
        },
        {
          question: "Como protegen la confidencialidad de mi proyecto?",
          answer:
            "Firmamos un acuerdo de confidencialidad (NDA) antes de iniciar cualquier conversación técnica. Codigo, datos y documentos son propiedad exclusiva del cliente.",
        },
        {
          question: "En que se diferencian de otras agencias o freelancers?",
          answer:
            "Nos enfocamos en resultados de negocio, no solo en entregables. Trabajamos con equipos pequeños y especializados: sin intermediarios, sin plantillas genéricas y sin sorpresas económicas.",
        },
        {
          question: "Como inicio el proceso para trabajar con ustedes?",
          answer:
            "El primer paso es una llamada de 20 a 30 minutos sin costo donde escuchamos tu proyecto y evaluamos si somos el equipo adecuado.",
        },
      ],
    },
  },
  process: {
    hero: {
      badge: "Metodología probada",
      titleStart: "Nuestro",
      titleHighlight: "proceso",
      titleEnd: "de trabajo",
      subtitle: "Metodología clara y transparente para resultados excepcionales en cada proyecto",
      stats: {
        phasesLabel: "Fases del proceso",
        transparencyLabel: "Transparencia",
        projectsLabel: "Proyectos completados",
      },
      cards: [
        {
          id: 1,
          phase: "Fase 01",
          title: "Descubrimiento",
          description: "Análisis profundo de tus objetivos, competidores y audiencia para construir la estrategia perfecta.",
          tags: ["Análisis", "Estrategia", "Investigación"],
        },
        {
          id: 2,
          phase: "Fase 02",
          title: "Diseño y estrategia",
          description: "Creamos la propuesta visual y técnica que representa tu marca y conecta con tu audiencia.",
          tags: ["UI/UX", "Wireframes", "Prototipo"],
        },
        {
          id: 3,
          phase: "Fase 03",
          title: "Desarrollo",
          description: "Construimos e implementamos tu proyecto con tecnología de vanguardia y código limpio.",
          tags: ["Frontend", "Backend", "Optimización"],
        },
        {
          id: 4,
          phase: "Fase 04",
          title: "Lanzamiento",
          description: "Entregamos, capacitamos y ofrecemos soporte continuo para garantizar tu éxito a largo plazo.",
          tags: ["Deploy", "Soporte", "Growth"],
        },
      ],
    },
    steps: {
      label: "Paso a paso",
      titleStart: "Etapas del",
      titleHighlight: "proceso",
      subtitle: "Cada fase esta diseñada para maximizar la calidad y minimizar los riesgos",
    },
  },
  servicesGeneral: {
    hero: {
      badge: "Servicios web premium",
      title: "Soluciones digitales diseñadas para escalar tu negocio",
      description:
        "Construimos sitios estratégicos, ecommerce y experiencias digitales enfocadas en crecimiento y resultados medibles.",
      exploreButton: "Explorar servicios",
      contactButton: "Hablar con nosotros",
    },
    whyChoose: {
      title: "Por que elegirnos?",
      subtitle:
        "Somos mucho más que una agencia de desarrollo web. Somos tu socio en el crecimiento digital.",
      items: [
        {
          icon: "⚡",
          title: "Rápido y eficiente",
          description:
            "Entregamos proyectos de calidad en tiempos acordados, sin comprometer la excelencia.",
        },
        {
          icon: "🎨",
          title: "Diseño moderno",
          description:
            "Creamos interfaces atractivas, intuitivas y alineadas con las tendencias actuales.",
        },
        {
          icon: "📱",
          title: "Responsive",
          description:
            "Tus sitios se ven perfectos en cualquier dispositivo: móvil, tablet o escritorio.",
        },
        {
          icon: "🔍",
          title: "SEO optimizado",
          description:
            "Mejoramos tu visibilidad en buscadores para que tus clientes te encuentren fácilmente.",
        },
        {
          icon: "🛡️",
          title: "Seguro y confiable",
          description:
            "Implementamos las mejores prácticas de seguridad para proteger tu negocio.",
        },
        {
          icon: "💬",
          title: "Soporte permanente",
          description:
            "No abandonamos tu proyecto después del lanzamiento. Estamos contigo siempre.",
        },
      ],
    },
    process: {
      title: "Nuestro proceso de trabajo",
      subtitle: "Un enfoque estructurado pero flexible para asegurar tu éxito",
      steps: [
        {
          title: "Consulta y análisis",
          description: "Entendemos tus necesidades, objetivos y visión para tu proyecto.",
        },
        {
          title: "Estrategia y diseño",
          description: "Creamos un plan detallado y diseños visuales de alta calidad.",
        },
        {
          title: "Desarrollo",
          description: "Construimos tu sitio con tecnología moderna y mejores prácticas.",
        },
        {
          title: "Testing y QA",
          description: "Realizamos pruebas exhaustivas para garantizar calidad y seguridad.",
        },
        {
          title: "Lanzamiento y soporte",
          description: "Desplegamos y proporcionamos soporte continuo para tu éxito.",
        },
      ],
    },
    cta: {
      title: "Listo para transformar tu presencia digital?",
      subtitle: "Dejanos ayudarte a encontrar la solución perfecta para tu negocio",
      button: "Comienza tu proyecto hoy",
    },
  },
  servicesHome: {
    title: "Nuestros servicios",
    subtitle: "Soluciones completas para llevar tu presencia digital al siguiente nivel",
    cardMore: "Ver más",
    cards: [
      {
        slug: "landing-page",
        title: "LANDING PAGE",
        description: "Una pagina única, moderna y optimizada para presentar tu negocio o producto de forma efectiva.",
        tags: [
          "Diseño responsive",
          "Copy de conversión",
          "Formulario de contacto",
          "SEO básico",
          "Carga rápida",
          "Botón de WhatsApp",
          "Integración con redes",
        ],
      },
      {
        slug: "website",
        title: "WEB SITE",
        description: "Sitio web multipagina para mostrar tu marca, servicios y propuesta de valor con presencia profesional.",
        tags: [
          "Hasta 5 secciones",
          "Diseño personalizado",
          "Integración con WhatsApp",
          "Optimización de velocidad",
          "Galería de imágenes",
          "Mapa de ubicación",
          "Formulario de contacto",
        ],
      },
      {
        slug: "ecommerce",
        title: "E-COMMERCE",
        description: "Tienda online lista para vender, con catálogo, carrito y proceso de compra claro para tus clientes.",
        tags: [
          "Catálogo de productos",
          "Carrito y checkout",
          "Medios de pago",
          "Panel autoadministrable",
          "Gestión de stock",
          "Cupones de descuento",
          "Emails automáticos",
        ],
      },
      {
        slug: "support",
        title: "SUPPORT",
        description: "Mantenimiento y soporte continuo para que tu web este siempre actualizada, segura y funcionando al 100%.",
        tags: [
          "Actualizaciones mensuales",
          "Corrección de errores",
          "Monitoreo básico",
          "Soporte técnico",
          "Backups regulares",
          "Mejoras de rendimiento",
          "Asistencia por WhatsApp",
        ],
      },
      // {
      //   slug: "apps-moviles",
      //   title: "APPS MÓVILES",
      //   description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android, desde MVP hasta producto completo.",
      //   tags: [
      //     "iOS y Android",
      //     "React Native / Swift / Kotlin",
      //     "Notificaciones push",
      //     "Modo offline",
      //     "App Store y Play Store",
      //     "Panel de administración",
      //     "Sincronización en tiempo real",
      //   ],
      // },
      // {
      //   slug: "apps-escritorio",
      //   title: "APPS ESCRITORIO",
      //   description: "Software de escritorio multiplataforma para Windows, macOS y Linux con rendimiento casi nativo.",
      //   tags: [
      //     "Windows, macOS, Linux",
      //     "Electron / Tauri",
      //     "Actualización automática",
      //     "Acceso a APIs nativas",
      //     "Integración con archivos",
      //     "Funcionalidad offline",
      //     "Empaquetado seguro",
      //   ],
      // },
      // {
      //   slug: "saas",
      //   title: "SAAS",
      //   description: "Plataformas cloud escalables con facturación por suscripción, arquitectura multi-tenant y portales de administración.",
      //   tags: [
      //     "Arquitectura multi-tenant",
      //     "Facturación por suscripción",
      //     "Stripe / MercadoPago",
      //     "Autenticación de usuarios",
      //     "Roles y permisos",
      //     "API y documentación",
      //     "Infra cloud escalable",
      //   ],
      // },
      // {
      //   slug: "api",
      //   title: "APIS",
      //   description: "APIs RESTful, GraphQL y microservicios diseñados para rendimiento, seguridad y escalabilidad.",
      //   tags: [
      //     "REST y GraphQL",
      //     "Node.js / Python / Go",
      //     "OpenAPI / Swagger",
      //     "Auth JWT y OAuth2",
      //     "Rate limiting",
      //     "Tests automatizados",
      //     "CI/CD pipelines",
      //   ],
      // },
      // {
      //   slug: "automatizacion-ia",
      //   title: "AUTOMATIZACIÓN IA",
      //   description: "Workflows inteligentes potenciados por IA para automatizar tareas, procesar documentos y mejorar la atención al cliente.",
      //   tags: [
      //     "Chatbots y asistentes",
      //     "GPT / Claude / Gemini",
      //     "Procesamiento de documentos",
      //     "Análisis de sentimiento",
      //     "Pipelines RAG",
      //     "Automatización de workflows",
      //     "Fine-tuning de modelos",
      //   ],
      // },
      // {
      //   slug: "crm",
      //   title: "CRM",
      //   description: "Sistemas CRM a medida o integraciones con HubSpot, Salesforce y Pipedrive para gestionar tu pipeline de ventas.",
      //   tags: [
      //     "CRM a medida",
      //     "Pipeline de ventas",
      //     "HubSpot / Salesforce",
      //     "Migración de datos",
      //     "Integración con email",
      //     "Dashboards en tiempo real",
      //     "WhatsApp Business API",
      //   ],
      // },
      // {
      //   slug: "soluciones-personalizadas",
      //   title: "SOLUCIONES A MEDIDA",
      //   description: "Software personalizado construido desde cero para resolver los desafíos únicos de tu negocio.",
      //   tags: [
      //     "Arquitectura única",
      //     "Desarrollo full-stack",
      //     "Escalable desde el día 1",
      //     "Integraciones externas",
      //     "Paneles administrativos",
      //     "Evolución continua",
      //     "Equipo dedicado",
      //   ],
      // },
      // {
      //   slug: "consultoria",
      //   title: "CONSULTORÍA",
      //   description: "Asesoramiento tecnológico estratégico: revisión de arquitectura, selección de stack, auditorías técnicas y mentoría.",
      //   tags: [
      //     "Revisión de arquitectura",
      //     "Selección de stack",
      //     "Auditorías de código",
      //     "Estrategia de producto",
      //     "Mentoría de equipos",
      //     "Evaluación de vendors",
      //     "Informes accionables",
      //   ],
      // },
    ],
  },
  processPage: processPageEs,
  servicesPage: servicesPageEs,
};
