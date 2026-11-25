import type { I18nDictionary } from "./index";

export const processPageEs: I18nDictionary["processPage"] = {
  intro: {
    label: "Por que elegirnos",
    titleStart: "Por que nuestro",
    titleHighlight: "proceso funciona",
    subtitle: "Pilares fundamentales que garantizan el éxito de cada proyecto",
    cards: [
      {
        icon: "🔍",
        stat: "100%",
        title: "Transparencia total",
        description:
          "Te mantenemos informado en cada etapa con reportes claros y comunicación abierta.",
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        icon: "🚀",
        stat: "+50",
        title: "Proyectos entregados",
        description:
          "Experiencia probada en proyectos de diversas industrias, siempre respetando los plazos.",
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        icon: "⭐",
        stat: "98%",
        title: "Clientes satisfechos",
        description:
          "La gran mayoría de nuestros clientes recomiendan nuestros servicios activamente.",
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
    ],
    features: [
      { icon: "💬", label: "Comunicación constante" },
      { icon: "⚡", label: "Metodologia ágil" },
      { icon: "🧹", label: "Código limpio y escalable" },
      { icon: "🛡️", label: "Soporte post-lanzamiento" },
    ],
  },
  faqs: {
    eyebrow: "Preguntas del proceso",
    title: "Como trabajamos, paso a paso",
    subtitleLine1:
      "Todo lo que necesitas saber sobre nuestra metodología de trabajo antes de arrancar.",
    subtitleLine2: "Si algo no está aquí, escribenos.",
    cta: "Hablar con el equipo",
    items: [
      {
        question: "En que etapas se divide el proceso de desarrollo?",
        answer:
          "Trabajamos en cuatro fases principales: Discovery, Diseño, Desarrollo y Lanzamiento. Cada fase tiene entregables y un punto de aprobación claro antes de continuar.",
      },
      {
        question: "Puedo solicitar cambios una vez iniciada una fase?",
        answer:
          "Si. Cada fase incluye rondas de revisión definidas. Los cambios dentro del alcance acordado no tienen costo adicional; los que amplían alcance se cotizan antes de ejecutar.",
      },
      {
        question: "Como funciona la aprobación del diseño antes de desarrollar?",
        answer:
          "Presentamos el diseño completo en alta fidelidad antes de escribir código. Solo avanzamos cuando das tu aprobación para evitar retrabajo.",
      },
      {
        question: "Como se mantiene la comunicación a lo largo del proyecto?",
        answer:
          "Realizamos reuniones de seguimiento semanales y mantenemos un canal directo de comunicación para consultas rápidas.",
      },
      {
        question: "Que necesito preparar antes de iniciar el proyecto?",
        answer:
          "Solo necesitas claridad en tu objetivo de negocio y, si los tienes, materiales de marca. El resto lo definimos juntos en Discovery.",
      },
      {
        question: "Que recibo al finalizar el proyecto y como es la entrega?",
        answer:
          "Recibes código fuente, accesos, credenciales y documentación básica, además de una sesión de traspaso para operar con autonomía.",
      },
    ],
  },
  steps: {
    label: "Paso a paso",
    titleStart: "Etapas del",
    titleHighlight: "proceso",
    subtitle: "Cada fase está diseñada para maximizar la calidad y minimizar riesgos",
    items: [
      {
        number: 1,
        icon: "🔍",
        title: "Descubrimiento y Consulta",
        duration: "1 - 2 semanas",
        description:
          "Entendemos tu negocio, objetivos y audiencia para sentar las bases del proyecto.",
        items: [
          "Reunion inicial de requisitos",
          "Analisis de competidores y mercado",
          "Definicion de objetivos y KPIs",
          "Propuestá personalizada y presupuesto",
        ],
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        number: 2,
        icon: "✏️",
        title: "Diseño y Estrategia",
        duration: "1 - 2 semanas",
        description:
          "Creamos la propuestá visual y tecnica antes de escribir una sola linea de código.",
        items: [
          "Wireframes y arquitectura de información",
          "Diseño UI en alta fidelidad",
          "Seleccion del stack tecnologico",
          "Prototipo interactivo para aprobación",
        ],
        accent: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
      {
        number: 3,
        icon: "⚡",
        title: "Desarrollo",
        duration: "3 - 8 semanas",
        description:
          "Construimos tu proyecto con tecnologia moderna, reportes semanales y total transparencia.",
        items: [
          "Desarrollo frontend y backend",
          "Integraciones con APIs y servicios",
          "Pruebas de rendimiento y seguridad",
          "Revisiones semanales de avance",
        ],
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        number: 4,
        icon: "🔄",
        title: "Revision y Ajustes",
        duration: "1 semana",
        description:
          "Presentamos el producto completo y realizamos ajustes hasta tu plena satisfaccion.",
        items: [
          "Demo completa del producto",
          "Ronda de correcciones y ajustes",
          "Pruebas en multiples dispositivos",
          "Aprobacion final del cliente",
        ],
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
      {
        number: 5,
        icon: "🚀",
        title: "Lanzamiento y Soporte",
        duration: "Continuo",
        description:
          "Desplegamos tu proyecto y te acompanamos con soporte continuo para garantizar el éxito.",
        items: [
          "Deploy en servidor de producción",
          "Capacitacion al equipo del cliente",
          "Monitoreo y optimizacion continua",
          "Soporte tecnico prioritario",
        ],
        accent: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      },
    ],
  },
};
