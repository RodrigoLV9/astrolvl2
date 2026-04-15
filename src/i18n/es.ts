import type { I18nDictionary } from "./index";
import { processPageEs } from "./processPageEs";
import { servicesPageEs } from "./servicesPageEs";

export const es: I18nDictionary = {
  brand: {
    name: "Astro LvL",
    tagline:
      "Elevamos tu presencia digital con soluciones web modernas y orientadas a resultados.",
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
      toggleMenu: "Abrir o cerrar menu de navegacion",
    },
  },
  footer: {
    navigationTitle: "Navegacion",
    servicesTitle: "Servicios",
    contactTitle: "Contacto",
    services: {
      landingPage: "Landing Page",
      website: "Sitio Web",
      ecommerce: "E-commerce",
      support: "Soporte",
    },
    location: "Buenos Aires, Argentina",
    copyright: "© {year} ASTRO LVL WEB. Todos los derechos reservados.",
    signature: "Disenado para el futuro digital",
  },
  blog: {
    eyebrow: "Blog",
    latestTitle: "Ultimos articulos",
    latestSubtitle:
      "Explora contenido sobre desarrollo web, diseno y las ultimas tendencias en tecnologia.",
    readArticleAria: "Leer articulo",
    readArticleCta: "Leer articulo",
    featuredBadge: "Post destacado",
    mostReadTitle: "Lo mas leido",
    readTimeSuffix: "min de lectura",
  },
  language: {
    current: "Idioma",
    options: {
      en: "Ingles",
      es: "Espanol",
      pt: "Portugues",
    },
  },
  contact: {
    heroTitle: "Contactenos",
    heroSubtitle: "Estamos aqui para hacer realidad su proyecto digital",
    formTitle: "Envienos un mensaje",
    rightTitle: "Hablemos cuando quieras",
    rightSubtitle: "Elige el canal que prefieras. Respondemos en menos de 24 horas.",
    socialsLabel: "Siguenos",
    cards: {
      whatsappLabel: "WhatsApp",
      whatsappButton: "Escribir por WhatsApp",
      emailLabel: "Correo electronico",
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
      emailLabel: "Correo electronico",
      emailPlaceholder: "Escriba su correo",
      serviceLabel: "Tipo de servicio",
      servicePlaceholder: "Seleccione un servicio",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escriba su mensaje...",
      submitText: "Enviar mensaje",
      submittingText: "Enviando...",
      unknownError: "Error desconocido. Por favor, intentelo nuevamente.",
      successTitle: "Mensaje enviado!",
      successMessage: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
      successReset: "Enviar otro mensaje",
    },
    validation: {
      nameRequired: "El nombre es requerido",
      nameMin: "El nombre debe tener al menos 3 caracteres",
      emailRequired: "El correo es requerido",
      emailInvalid: "Ingrese un correo electronico valido",
      serviceRequired: "Seleccione un servicio",
      serviceInvalid: "Seleccione un servicio valido",
      messageRequired: "El mensaje es requerido",
      messageMin: "El mensaje debe tener al menos 20 caracteres",
    },
  },
  home: {
    hero: {
      badge: "Tecnologia con vision",
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
        "En ASTRO LVL WEB, somos un equipo de desarrolladores apasionados por crear experiencias digitales unicas. Combinamos diseno vanguardista con tecnologia de punta para llevar tu negocio al siguiente nivel.",
      paragraphTwo:
        "Desde startups innovadoras hasta empresas consolidadas, ayudamos a nuestros clientes a destacar en el mundo digital con soluciones personalizadas y escalables.",
      tags: [
        "Innovacion constante",
        "Diseno vanguardista",
        "Tecnologia de punta",
        "Escalabilidad total",
      ],
      stats: {
        projectsLabel: "Proyectos",
        clientsLabel: "Clientes",
        experienceLabel: "Anos exp.",
      },
    },
    faqs: {
      eyebrow: "Preguntas frecuentes",
      title: "Respuestas que necesitas",
      subtitle:
        "Aclaramos las dudas mas comunes antes de que las tengas. Si algo no esta aqui, estamos a un mensaje de distancia.",
      items: [
        {
          question: "Cuanto cuesta desarrollar un proyecto web?",
          answer:
            "Cada proyecto es distinto, por lo que no manejamos tarifas fijas. Luego de una llamada breve para entender tu objetivo, te entregamos un presupuesto claro y detallado sin compromiso.",
        },
        {
          question: "Con que tecnologias trabajan?",
          answer:
            "Usamos tecnologias modernas y probadas segun cada proyecto: Astro, Next.js o React para frontend; Node.js con PostgreSQL o MongoDB para backend; y Shopify para e-commerce cuando es la mejor opcion.",
        },
        {
          question: "Trabajan con clientes de cualquier pais?",
          answer:
            "Si, trabajamos de forma completamente remota con clientes en toda America Latina, Espana y Estados Unidos. Nos adaptamos a distintos husos horarios.",
        },
        {
          question: "Ofrecen diseno, desarrollo o los dos?",
          answer:
            "Ofrecemos ambos. Nos encargamos del diseno UI/UX, la arquitectura tecnica y el desarrollo completo. Tambien podemos trabajar en una sola parte segun tu necesidad.",
        },
        {
          question: "Como protegen la confidencialidad de mi proyecto?",
          answer:
            "Firmamos un acuerdo de confidencialidad (NDA) antes de iniciar cualquier conversacion tecnica. Codigo, datos y documentos son propiedad exclusiva del cliente.",
        },
        {
          question: "En que se diferencian de otras agencias o freelancers?",
          answer:
            "Nos enfocamos en resultados de negocio, no solo en entregables. Trabajamos con equipos pequenos y especializados: sin intermediarios, sin plantillas genericas y sin sorpresas economicas.",
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
      badge: "Metodologia probada",
      titleStart: "Nuestro",
      titleHighlight: "proceso",
      titleEnd: "de trabajo",
      subtitle: "Metodologia clara y transparente para resultados excepcionales en cada proyecto",
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
          description: "Analisis profundo de tus objetivos, competidores y audiencia para construir la estrategia perfecta.",
          tags: ["Analisis", "Estrategia", "Investigacion"],
        },
        {
          id: 2,
          phase: "Fase 02",
          title: "Diseno y estrategia",
          description: "Creamos la propuesta visual y tecnica que representa tu marca y conecta con tu audiencia.",
          tags: ["UI/UX", "Wireframes", "Prototipo"],
        },
        {
          id: 3,
          phase: "Fase 03",
          title: "Desarrollo",
          description: "Construimos e implementamos tu proyecto con tecnologia de vanguardia y codigo limpio.",
          tags: ["Frontend", "Backend", "Optimizacion"],
        },
        {
          id: 4,
          phase: "Fase 04",
          title: "Lanzamiento",
          description: "Entregamos, capacitamos y ofrecemos soporte continuo para garantizar tu exito a largo plazo.",
          tags: ["Deploy", "Soporte", "Growth"],
        },
      ],
    },
    steps: {
      label: "Paso a paso",
      titleStart: "Etapas del",
      titleHighlight: "proceso",
      subtitle: "Cada fase esta disenada para maximizar la calidad y minimizar los riesgos",
    },
  },
  servicesGeneral: {
    hero: {
      badge: "Servicios web premium",
      title: "Soluciones digitales disenadas para escalar tu negocio",
      description:
        "Construimos sitios estrategicos, ecommerce y experiencias digitales enfocadas en crecimiento y resultados medibles.",
      exploreButton: "Explorar servicios",
      contactButton: "Hablar con nosotros",
    },
    whyChoose: {
      title: "Por que elegirnos?",
      subtitle:
        "Somos mucho mas que una agencia de desarrollo web. Somos tu socio en el crecimiento digital.",
      items: [
        {
          icon: "⚡",
          title: "Rapido y eficiente",
          description:
            "Entregamos proyectos de calidad en tiempos acordados, sin comprometer la excelencia.",
        },
        {
          icon: "🎨",
          title: "Diseno moderno",
          description:
            "Creamos interfaces atractivas, intuitivas y alineadas con las tendencias actuales.",
        },
        {
          icon: "📱",
          title: "Responsive",
          description:
            "Tus sitios se ven perfectos en cualquier dispositivo: movil, tablet o escritorio.",
        },
        {
          icon: "🔍",
          title: "SEO optimizado",
          description:
            "Mejoramos tu visibilidad en buscadores para que tus clientes te encuentren facilmente.",
        },
        {
          icon: "🛡️",
          title: "Seguro y confiable",
          description:
            "Implementamos las mejores practicas de seguridad para proteger tu negocio.",
        },
        {
          icon: "💬",
          title: "Soporte permanente",
          description:
            "No abandonamos tu proyecto despues del lanzamiento. Estamos contigo siempre.",
        },
      ],
    },
    process: {
      title: "Nuestro proceso de trabajo",
      subtitle: "Un enfoque estructurado pero flexible para asegurar tu exito",
      steps: [
        {
          title: "Consulta y analisis",
          description: "Entendemos tus necesidades, objetivos y vision para tu proyecto.",
        },
        {
          title: "Estrategia y diseno",
          description: "Creamos un plan detallado y disenos visuales de alta calidad.",
        },
        {
          title: "Desarrollo",
          description: "Construimos tu sitio con tecnologia moderna y mejores practicas.",
        },
        {
          title: "Testing y QA",
          description: "Realizamos pruebas exhaustivas para garantizar calidad y seguridad.",
        },
        {
          title: "Lanzamiento y soporte",
          description: "Desplegamos y proporcionamos soporte continuo para tu exito.",
        },
      ],
    },
    cta: {
      title: "Listo para transformar tu presencia digital?",
      subtitle: "Dejanos ayudarte a encontrar la solucion perfecta para tu negocio",
      button: "Comienza tu proyecto hoy",
    },
  },
  servicesHome: {
    title: "Nuestros servicios",
    subtitle: "Soluciones completas para llevar tu presencia digital al siguiente nivel",
    cardMore: "Ver mas",
    cards: [
      {
        slug: "landing-page",
        title: "LANDING PAGE",
        price: "$100.000 ARS",
        description: "Una pagina unica, moderna y optimizada para presentar tu negocio o producto de forma efectiva.",
        tags: [
          "Diseno responsive",
          "Copy de conversion",
          "Formulario de contacto",
          "SEO basico",
          "Carga rapida",
          "Boton de WhatsApp",
          "Integracion con redes",
        ],
      },
      {
        slug: "website",
        title: "WEB SITE",
        price: "$180.000 ARS",
        description: "Sitio web multipagina para mostrar tu marca, servicios y propuesta de valor con presencia profesional.",
        tags: [
          "Hasta 5 secciones",
          "Diseno personalizado",
          "Integracion con WhatsApp",
          "Optimizacion de velocidad",
          "Galeria de imagenes",
          "Mapa de ubicacion",
          "Formulario de contacto",
        ],
      },
      {
        slug: "ecommerce",
        title: "E-COMMERCE",
        price: "$300.000 ARS",
        description: "Tienda online lista para vender, con catalogo, carrito y proceso de compra claro para tus clientes.",
        tags: [
          "Catalogo de productos",
          "Carrito y checkout",
          "Medios de pago",
          "Panel autoadministrable",
          "Gestion de stock",
          "Cupones de descuento",
          "Emails automaticos",
        ],
      },
      {
        slug: "support",
        title: "SUPPORT",
        price: "$50.000 ARS",
        description: "Mantenimiento y soporte continuo para que tu web este siempre actualizada, segura y funcionando al 100%.",
        tags: [
          "Actualizaciones mensuales",
          "Correccion de errores",
          "Monitoreo basico",
          "Soporte tecnico",
          "Backups regulares",
          "Mejoras de rendimiento",
          "Asistencia por WhatsApp",
        ],
      },
    ],
  },
  processPage: processPageEs,
  servicesPage: servicesPageEs,
};
