import type { I18nDictionary } from "./index";

export const processPageEs: I18nDictionary["processPage"] = {
  intro: {
    label: "Por que elegirnos",
    titleStart: "Por que nuestro",
    titleHighlight: "proceso funciona",
    subtitle: "Pilares fundamentales que garantizan el exito de cada proyecto",
    cards: [
      {
        icon: "🔍",
        stat: "100%",
        title: "Transparencia total",
        description:
          "Te mantenemos informado en cada etapa con reportes claros y comunicacion abierta.",
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
          "La gran mayoria de nuestros clientes recomiendan nuestros servicios activamente.",
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
    ],
    features: [
      { icon: "💬", label: "Comunicacion constante" },
      { icon: "⚡", label: "Metodologia agil" },
      { icon: "🧹", label: "Codigo limpio y escalable" },
      { icon: "🛡️", label: "Soporte post-lanzamiento" },
    ],
  },
  faqs: {
    eyebrow: "Preguntas del proceso",
    title: "Como trabajamos, paso a paso",
    subtitleLine1:
      "Todo lo que necesitas saber sobre nuestra metodologia de trabajo antes de arrancar.",
    subtitleLine2: "Si algo no esta aqui, escribenos.",
    cta: "Hablar con el equipo",
    items: [
      {
        question: "En que etapas se divide el proceso de desarrollo?",
        answer:
          "Trabajamos en cuatro fases principales: Discovery, Diseno, Desarrollo y Lanzamiento. Cada fase tiene entregables y un punto de aprobacion claro antes de continuar.",
      },
      {
        question: "Puedo solicitar cambios una vez iniciada una fase?",
        answer:
          "Si. Cada fase incluye rondas de revision definidas. Los cambios dentro del alcance acordado no tienen costo adicional; los que amplian alcance se cotizan antes de ejecutar.",
      },
      {
        question: "Como funciona la aprobacion del diseno antes de desarrollar?",
        answer:
          "Presentamos el diseno completo en alta fidelidad antes de escribir codigo. Solo avanzamos cuando das tu aprobacion para evitar retrabajo.",
      },
      {
        question: "Como se mantiene la comunicacion a lo largo del proyecto?",
        answer:
          "Realizamos reuniones de seguimiento semanales y mantenemos un canal directo de comunicacion para consultas rapidas.",
      },
      {
        question: "Que necesito preparar antes de iniciar el proyecto?",
        answer:
          "Solo necesitas claridad en tu objetivo de negocio y, si los tienes, materiales de marca. El resto lo definimos juntos en Discovery.",
      },
      {
        question: "Que recibo al finalizar el proyecto y como es la entrega?",
        answer:
          "Recibes codigo fuente, accesos, credenciales y documentacion basica, ademas de una sesion de traspaso para operar con autonomia.",
      },
    ],
  },
  steps: {
    label: "Paso a paso",
    titleStart: "Etapas del",
    titleHighlight: "proceso",
    subtitle: "Cada fase esta disenada para maximizar la calidad y minimizar riesgos",
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
          "Propuesta personalizada y presupuesto",
        ],
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        number: 2,
        icon: "✏️",
        title: "Diseno y Estrategia",
        duration: "1 - 2 semanas",
        description:
          "Creamos la propuesta visual y tecnica antes de escribir una sola linea de codigo.",
        items: [
          "Wireframes y arquitectura de informacion",
          "Diseno UI en alta fidelidad",
          "Seleccion del stack tecnologico",
          "Prototipo interactivo para aprobacion",
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
          "Desplegamos tu proyecto y te acompanamos con soporte continuo para garantizar el exito.",
        items: [
          "Deploy en servidor de produccion",
          "Capacitacion al equipo del cliente",
          "Monitoreo y optimizacion continua",
          "Soporte tecnico prioritario",
        ],
        accent: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      },
    ],
  },
};
