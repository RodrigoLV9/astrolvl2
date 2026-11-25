import type { I18nDictionary } from "./index";

export const servicesPageEs: I18nDictionary["servicesPage"] = {
  hero: {
    "landing-page": {
      badge: "Landing Page",
      title: "Páginas diseñadas para convertir, no solo impresionar",
      description:
        "Creamos landing pages de alto rendimiento que guían al visitante hacia una única acción: comprar, registrarse o contactar. Sin distracciones, resultados medibles desde el primer día.",
      tags: ["Alta Conversion", "Mobile First", "SEO Optimizado", "A/B Testing"],
      primaryCTA: "Quiero mi landing page",
      secondaryCTA: "Ver proceso",
    },
    website: {
      badge: "Sitio Web Corporativo",
      title: "Tu presencia digital construida para generar confianza",
      description:
        "Disenamos sitios web corporativos con identidad visual sólida, CMS integrado y arquitectura que escala con tu empresa. Un proyecto llave en mano desde el diseño hasta el lanzamiento.",
      tags: ["Diseño UI/UX", "CMS Integrado", "SEO Tecnico", "Escalable"],
      primaryCTA: "Quiero mi sitio web",
      secondaryCTA: "Ver proceso",
    },
    ecommerce: {
      badge: "E-commerce",
      title: "Tu tienda online lista para vender las 24 horas",
      description:
        "Desarrollamos tiendas online robustas con gestión de inventario, multiples pasarelas de pago y SEO por producto. Tu canal de ventas digital, optimizado para convertir y escalar.",
      tags: ["Checkout Seguro", "Gestión de Stock", "SEO de Productos", "Analítica"],
      primaryCTA: "Quiero mi tienda online",
      secondaryCTA: "Ver proceso",
    },
    support: {
      badge: "Soporte y Mantenimiento",
      title: "Tu plataforma activa, segura y en óptimas condiciones",
      description:
        "Actualizaciones, backups automaticos, monitoreo continuo y respuesta rapida ante incidencias. Tu web en manos expertas para que tu te enfoques en hacer crecer tu negocio.",
      tags: ["Monitoreo 24/7", "Actualizaciones", "Seguridad", "Reportes Mensuales"],
      primaryCTA: "Quiero plan de soporte",
      secondaryCTA: "Ver proceso",
    },
//     "apps-moviles": {
//       badge: "Apps Móviles",
//       title: "Apps nativas que tus usuarios van a querer abrir todos los días",
//       description:
//         "Desarrollamos apps iOS y Android de alto rendimiento con UX pulida, soporte offline y backend integrado.",
//       tags: ["iOS & Android", "Rendimiento Nativo", "Modo Offline", "App Store Launch"],
//       primaryCTA: "Quiero una app móvil",
//       secondaryCTA: "Ver proceso",
//     },
//     "apps-escritorio": {
//       badge: "Apps de Escritorio",
//       title: "Software de escritorio potente, rápido y confiable",
//       description:
//         "Desarrollamos aplicaciones multiplataforma para Windows, macOS y Linux con rendimiento casi nativo.",
//       tags: ["Multiplataforma", "Rendimiento Nativo", "Modo Offline", "Auto-Update"],
//       primaryCTA: "Quiero una app de escritorio",
//       secondaryCTA: "Ver proceso",
//     },
//     "saas": {
//       badge: "SaaS",
//       title: "Tu SaaS construido para escalar del MVP a millones de usuarios",
//       description:
//         "Construimos plataformas SaaS multi-tenant con facturación por suscripción, gestión de usuarios y arquitectura escalable.",
//       tags: ["Multi-Tenant", "Facturación por Suscripción", "Arquitectura Escalable", "Roles y Permisos"],
//       primaryCTA: "Quiero construir un SaaS",
//       secondaryCTA: "Ver proceso",
//     },
//     "api": {
//       badge: "Desarrollo de APIs",
//       title: "APIs RESTful y GraphQL diseñadas para rendimiento y escala",
//       description:
//         "Diseñamos y construimos APIs seguras, bien documentadas que potencian tus aplicaciones.",
//       tags: ["REST & GraphQL", "Alto Rendimiento", "Docs Automáticos", "Seguridad"],
//       primaryCTA: "Necesito una API",
//       secondaryCTA: "Ver proceso",
//     },
//     "automatizacion-ia": {
//       badge: "Automatización con IA",
//       title: "Automatización inteligente que transforma cómo opera tu negocio",
//       description:
//         "Integramos agentes de IA, LLMs y automatización de workflows para eliminar tareas repetitivas y generar insights.",
//       tags: ["Agentes de IA", "Integración LLM", "Automatización de Workflows", "Procesamiento de Documentos"],
//       primaryCTA: "Quiero automatizar con IA",
//       secondaryCTA: "Ver proceso",
//     },
//     "crm": {
//       badge: "CRM",
//       title: "Un CRM que realmente se adapta a cómo trabaja tu equipo",
//       description:
//         "Construimos sistemas CRM a medida de tu proceso de ventas, no al revés.",
//       tags: ["Pipelines a Medida", "Adopción del Equipo", "Workflows Automatizados", "Reportes en Tiempo Real"],
//       primaryCTA: "Quiero un CRM a medida",
//       secondaryCTA: "Ver proceso",
//     },
//     "soluciones-personalizadas": {
//       badge: "Soluciones Personalizadas",
//       title: "Software construido alrededor de tu negocio, no de plantillas",
//       description:
//         "Cuando las soluciones genéricas no alcanzan, diseñamos y construimos software a medida para tus workflows exactos.",
//       tags: ["Arquitectura a Medida", "Integración Legacy", "UX Personalizada", "Código Escalable"],
//       primaryCTA: "Necesito una solución a medida",
//       secondaryCTA: "Ver proceso",
//     },
//     "consultoria": {
//       badge: "Consultoría",
//       title: "Experiencia técnica que te ahorra meses de ensayo y error",
//       description:
//         "Auditamos tu arquitectura, optimizamos tu stack y definimos un roadmap que alinea tecnología con objetivos de negocio.",
//       tags: ["Auditoría de Arquitectura", "Optimización de Stack", "Roadmap Técnico", "Enablement del Equipo"],
//       primaryCTA: "Quiero una consultoría",
//       secondaryCTA: "Ver proceso",
//     },
  },
  description: {
    "landing-page": {
      eyebrow: "Que incluye",
      heading: "Todo lo que tu landing necesita para convertir",
      subtitle: "Un proyecto llave en mano: desde el concepto hasta la analítica post-lanzamiento.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
          imgAlt: "Disenador trabajando en wireframes de landing page",
          cards: [
            { title: "Copywriting persuasivo", description: "Redactamos el texto de la página orientado a la acción: headlines que enganchen, beneficios claros y CTAs que conviertan." },
            { title: "Diseño UI de alta fidelidad", description: "Mockup completo antes del desarrollo. Ve exactamente como quedara tu landing antes de escribir una linea de código." },
            { title: "Formularios e integraciones", description: "Lead forms conectados a tu CRM o herramienta de email marketing. Cada lead capturado llega directo a tu pipeline." },
            { title: "A/B Testing preparado", description: "Estructura modular lista para que puedas testear variantes de headline, CTA o imagen sin romper nada." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          imgAlt: "Laptop mostrando métricas de analítica web",
          cards: [
            { title: "Pixel y conversiónes configuradas", description: "Meta Pixel, Google Ads y GA4 listos desde el lanzamiento. Mide exactamente el retorno de tu inversion en pauta." },
            { title: "SEO on-page optimizado", description: "Metaetiquetas, estructura semantica y velocidad de carga configuradas para que Google te encuentre y te posicione." },
            { title: "Mobile-first responsive", description: "Diseñada primero para movil. Perfectamente adaptada a cualquier dispositivo sin sacrificar conversión." },
            { title: "Hosting y despliegue", description: "Te asesoramos en el hosting mas adecuado y configuramos el despliegue automatico para que tu landing este siempre activa." },
          ],
        },
      ],
    },
    website: {
      eyebrow: "Que incluye",
      heading: "Un sitio corporativo completo, llave en mano",
      subtitle: "Diseño, desarrollo, CMS y SEO técnico: todo en un solo proyecto.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
          imgAlt: "Diseño de interfaz de usuario en pantalla",
          cards: [
            { title: "Diseño UI/UX personalizado", description: "Paleta, tipografia y componentes visuales alineados a tu marca. No usamos templates: cada diseño es exclusivo para ti." },
            { title: "CMS integrado sin código", description: "Tu equipo puede crear y editar contenido, publicar articulos de blog e insertar imagenes desde un panel visual intuitivo." },
            { title: "Sistema de blog incluido", description: "Publicaciones con categorias, etiquetas, autores y SEO por articulo. Tu canal de contenido listo para crecer." },
            { title: "Páginas ilimitadas", description: "Inicio, Servicios, Sobre nosotros, Equipo, Casos de estudio, Contacto y las que necesites. El alcance lo defines tu." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
          imgAlt: "Pantalla con código y herramientas de desarrollo",
          cards: [
            { title: "SEO técnico desde el inicio", description: "Estructura semantica HTML5, metaetiquetas Open Graph, datos estructurados (Schema.org) y sitemap XML configurados." },
            { title: "Rendimiento optimizado", description: "Carga diferida de imagenes, minificacion y Core Web Vitals optimizados para una experiencia que no penaliza tu SEO." },
            { title: "Integraciones con terceros", description: "CRM, chat en vivo, formularios de contacto, Google Analytics y cualquier herramienta que ya uses en tu stack." },
            { title: "Soporte post-lanzamiento", description: "30 días de soporte técnico incluidos para resolver cualquier ajuste o incidencia tras el lanzamiento." },
          ],
        },
      ],
    },
    ecommerce: {
      eyebrow: "Que incluye",
      heading: "Tu tienda online lista para vender desde el primer día",
      subtitle: "Catálogo, pagos, logística y analítica: todo configurado antes de lanzar.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
          imgAlt: "Mano sosteniendo telefono con aplicacion de compras",
          cards: [
            { title: "Catálogo y variantes", description: "Sube productos con multiples imagenes, variantes (talla, color), descripción SEO y precio. Sin limite de SKUs." },
            { title: "Pasarelas de pago integradas", description: "Stripe, MercadoPago, PayPal y mas. Configuramos la pasarela que mejor se adapta a tu mercado y tipo de cliente." },
            { title: "Gestión de stock e inventario", description: "Control de stock en tiempo real, alertas de bajo inventario y ajuste de cantidades desde el panel de administracion." },
            { title: "Cupones y descuentos", description: "Reglas de descuento por producto, categoria o total de carrito. Fecha de vencimiento y condiciones de uso configurables." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
          imgAlt: "Pantalla de laptop con dashboard de ventas en linea",
          cards: [
            { title: "SEO de fichas de producto", description: "URLs limpias, metaetiquetas, rich snippets con precio y disponibilidad para que Google posicione cada producto." },
            { title: "Checkout en un solo flujo", description: "Proceso de compra simplificado con verificacion de stock, calculo de envio y confirmacion automatica por email." },
            { title: "Analítica y reportes de ventas", description: "Dashboard con métricas clave: ingresos, tasa de conversión, productos mas vendidos y abandono de carrito." },
            { title: "Integracion logística", description: "Conexion con operadores de envio para calcular costos en tiempo real y generar etiquetas de envio automaticamente." },
          ],
        },
      ],
    },
    support: {
      eyebrow: "Que incluye",
      heading: "Mantenimiento proactivo, no reactivo",
      subtitle: "No esperamos a que algo falle. Actuamos antes de que tu te enteres.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          imgAlt: "Panel de monitoreo con métricas de rendimiento del servidor",
          cards: [
            { title: "Monitoreo de disponibilidad 24/7", description: "Alertas automaticas ante caidas del sitio. Tiempo de respuesta garantizado para que tu web no este caida mas de lo necesario." },
            { title: "Actualizaciones de dependencias", description: "Mantenemos actualizados plugins, frameworks y librerias para evitar vulnerabilidades conocidas y deuda técnica acumulada." },
            { title: "Backups automaticos díarios", description: "Copias programadas del sitio y la base de datos, almacenadas en ubicacion externa para recuperacion ante cualquier incidente." },
            { title: "Parches de seguridad prioritarios", description: "Las vulnerabilidades criticas se parchean en menos de 24 horas desde su divulgacion, sin esperar al siguiente ciclo." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
          imgAlt: "Equipo de soporte técnico revisando reportes en pantallas",
          cards: [
            { title: "Revision mensual de rendimiento", description: "Auditoria de velocidad de carga, Core Web Vitals y salud técnica con recomendaciones incluidas en cada reporte mensual." },
            { title: "Auditoria técnica inicial", description: "Si no desarrollamos tu sitio, realizamos una auditoría previa para entender su arquitectura y estado antes de asumir el soporte." },
            { title: "Soporte para tu equipo", description: "Canal de soporte directo para que tu equipo resuelva dudas técnicas, solicite cambios menores o reporte anomalias." },
              { title: "Reporte mensual detallado", description: "Informe con uptime, acciónes realizadas, velocidad de carga, actualizaciones aplicadas y recomendaciones para el siguiente periodo." },
            ],
          },
        ],
      },
//     "apps-moviles": {
//       eyebrow: "Qué incluye",
//       heading: "Todo lo que tu app móvil necesita para triunfar",
//       subtitle: "Desde el diseño UX hasta la publicación en tiendas: un proyecto llave en mano.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Diseño UX/UI nativo", description: "Creamos flujos de usuario intuitivos siguiendo las guías de diseño de Apple (HIG) y Google (Material Design) para una experiencia familiar y pulida." },
//             { title: "Backend y API integrados", description: "Desarrollamos el backend que tu app necesita: autenticación, base de datos, notificaciones push y sincronización en tiempo real." },
//             { title: "Modo offline completo", description: "Tu app funciona sin conexión. Sincronizamos datos automáticamente cuando el usuario recupera la señal, sin pérdida de información." },
//             { title: "Publicación en tiendas", description: "Gestionamos todo el proceso de publicación en App Store y Google Play: metadatos, capturas de pantalla, políticas y revisión." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Notificaciones push segmentadas", description: "Configuramos campañas de notificaciones push segmentadas por comportamiento, ubicación o preferencias del usuario." },
//             { title: "Analítica de uso integrada", description: "Firebase Analytics o Mixpanel configurados para medir retención, embudos de conversión y comportamiento dentro de la app." },
//             { title: "Actualizaciones OTA", description: "Sistema de actualizaciones over-the-air para publicar mejoras sin pasar por revisión de tienda cada vez." },
//             { title: "Soporte 30 días post-lanzamiento", description: "Te acompañamos durante el primer mes en tienda para resolver incidencias, ajustar la app y optimizar según feedback real." },
//           ],
//         },
//       ],
//     },
//     "apps-escritorio": {
//       eyebrow: "Qué incluye",
//       heading: "Aplicaciones de escritorio robustas, llave en mano",
//       subtitle: "Desde la arquitectura hasta el instalador: todo listo para distribuir a tus usuarios.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Multiplataforma nativa", description: "Desarrollamos para Windows, macOS y Linux con toolkits nativos que garantizan rendimiento y look & feel propio de cada sistema operativo." },
//             { title: "Instalador y auto-actualización", description: "Empaquetamos tu app con instaladores nativos (.exe, .dmg, .AppImage) y sistema de actualizaciones automáticas incluido." },
//             { title: "Acceso a hardware local", description: "Integración con periféricos, sistema de archivos, impresoras y dispositivos USB para apps que necesitan interactuar con hardware." },
//             { title: "UI responsive adaptable", description: "Interfaces que se adaptan al tamaño de ventana y resolución, con soporte para temas claro y oscuro del sistema operativo." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Sincronización con la nube", description: "Sincronización bidireccional con backend en la nube para que los datos estén disponibles en todos los dispositivos del usuario." },
//             { title: "Modo offline y sync diferida", description: "La app funciona sin conexión a internet y sincroniza cambios automáticamente cuando se restablece la conexión." },
//             { title: "Firma de código y distribución", description: "Gestionamos certificados de firma de código y preparamos la app para distribución en Microsoft Store y Mac App Store." },
//             { title: "Soporte 30 días post-lanzamiento", description: "Te acompañamos durante el primer mes tras el lanzamiento para resolver incidencias y optimizar según el feedback de tus usuarios." },
//           ],
//         },
//       ],
//     },
//     "saas": {
//       eyebrow: "Qué incluye",
//       heading: "Tu plataforma SaaS lista para facturar desde el día uno",
//       subtitle: "Arquitectura multi-tenant, facturación por suscripción y panel de administración incluidos.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Arquitectura multi-tenant", description: "Aislamiento de datos por cliente con bases de datos compartidas o dedicadas según tus necesidades de seguridad y compliance." },
//             { title: "Facturación y suscripciones", description: "Integración con Stripe para planes de suscripción, facturación recurrente, gestión de upgrades/downgrades y portal de cliente." },
//             { title: "Roles y permisos granulares", description: "Sistema RBAC completo: superadmin, admin de tenant, editor, viewer y roles personalizados con permisos configurables por módulo." },
//             { title: "Onboarding de usuarios", description: "Flujo guiado de primer uso con tooltips, checklist de configuración y emails automatizados de bienvenida y activación." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Panel de administración", description: "Dashboard para gestionar tenants, usuarios, facturación y configuración global de la plataforma desde un solo lugar." },
//             { title: "API y webhooks", description: "API REST documentada para que tus clientes integren tu SaaS con sus herramientas. Webhooks para eventos clave de la plataforma." },
//             { title: "Escalabilidad desde el día uno", description: "Arquitectura preparada para escalar horizontalmente con balanceo de carga, caché distribuida y colas de trabajo asíncronas." },
//             { title: "Analítica de negocio", description: "Dashboards con métricas SaaS clave: MRR, churn, LTV, tasa de conversión de trial y adopción de features por tenant." },
//           ],
//         },
//       ],
//     },
//     "api": {
//       eyebrow: "Qué incluye",
//       heading: "APIs diseñadas para alto tráfico y fácil integración",
//       subtitle: "Desde el diseño del contrato hasta la documentación interactiva: todo listo para tus consumidores.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Diseño de contrato API-first", description: "Definimos la API en OpenAPI 3.0 antes de escribir código. Endpoints, modelos de datos, errores y autenticación claros desde el diseño." },
//             { title: "REST, GraphQL o híbridas", description: "Elegimos el paradigma según tu caso de uso. REST para CRUD clásico, GraphQL para consultas flexibles y híbridas cuando necesitas ambos." },
//             { title: "Autenticación y autorización", description: "Implementamos OAuth 2.0, JWT, API Keys y RBAC granular para que solo los clientes autorizados accedan a los endpoints correctos." },
//             { title: "Rate limiting y throttling", description: "Protección contra abusos con límites configurables por cliente, endpoint y plan de suscripción para garantizar disponibilidad para todos." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Documentación interactiva", description: "Swagger UI o Redoc integrados con ejemplos de request/response, autenticación interactiva y playground para probar endpoints." },
//             { title: "Versionado de API", description: "Estrategia de versionado por URL o header con soporte para múltiples versiones simultáneas y guía de migración documentada." },
//             { title: "Testing automatizado", description: "Tests de integración, carga y contrato para garantizar que cada endpoint responde correctamente bajo condiciones reales de uso." },
//             { title: "Monitoreo y alertas", description: "Dashboards de uso de API, latencia por endpoint, tasa de errores y alertas automáticas ante degradación de servicio." },
//           ],
//         },
//       ],
//     },
//     "automatizacion-ia": {
//       eyebrow: "Qué incluye",
//       heading: "Automatización inteligente que multiplica tu capacidad operativa",
//       subtitle: "Integramos IA en tus procesos para reducir tareas manuales, procesar datos no estructurados y tomar decisiones más rápido.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Análisis de procesos actuales", description: "Mapeamos tus flujos de trabajo para identificar cuellos de botella, tareas repetitivas y oportunidades de automatización con IA." },
//             { title: "Integración de LLMs", description: "Conectamos modelos de lenguaje (OpenAI, Anthropic, open-source) a tus sistemas para automatizar clasificación, extracción y generación de texto." },
//             { title: "Procesamiento de documentos", description: "Extraemos datos de facturas, contratos, currículums y formularios con OCR + IA para eliminar la entrada manual de datos." },
//             { title: "Chatbots y asistentes inteligentes", description: "Creamos asistentes conversacionales con RAG que responden sobre tu base de conocimiento interna con contexto real." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Pipelines de datos automatizados", description: "Orquestamos la ingesta, limpieza y transformación de datos con IA para alimentar dashboards y modelos de negocio." },
//             { title: "Alertas y decisiones automáticas", description: "Configuramos reglas de negocio con umbrales inteligentes que disparan acciones automáticas basadas en patrones detectados por IA." },
//             { title: "Dashboard de automatización", description: "Panel con métricas de cada flujo automatizado: volumen procesado, tasa de acierto, tiempo ahorrado y ROI de la automatización." },
//             { title: "Mejora continua con feedback loop", description: "Sistema de retroalimentación para que los modelos mejoren con cada corrección humana, aumentando precisión con el tiempo." },
//           ],
//         },
//       ],
//     },
//     "crm": {
//       eyebrow: "Qué incluye",
//       heading: "Un CRM construido alrededor de tu proceso de ventas",
//       subtitle: "Pipeline visual, automatización de seguimiento y dashboards que te dicen exactamente dónde enfocar tu energía.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Pipeline de ventas visual", description: "Tablero Kanban con etapas personalizables, arrastrar y soltar deals y vista de probabilidad de cierre por columna." },
//             { title: "Gestión de contactos y leads", description: "Ficha completa por contacto con historial de interacciones, documentos adjuntos, notas del equipo y scoring automático de leads." },
//             { title: "Automatización de seguimiento", description: "Secuencias de emails y recordatorios automáticos basados en inactividad del lead o cambios de etapa en el pipeline." },
//             { title: "Integración con email y calendario", description: "Sincronización bidireccional con Gmail/Outlook: registra emails automáticamente en el contacto y programa reuniones desde el CRM." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Dashboards de ventas", description: "Visualización de métricas clave: pipeline value, tasa de conversión por etapa, tiempo promedio de cierre y forecast de ingresos." },
//             { title: "Reportes exportables", description: "Generación de reportes en PDF y CSV con datos de pipeline, actividad del equipo y resultados por período para compartir con stakeholders." },
//             { title: "Roles y permisos por equipo", description: "Gerentes ven todo su equipo, vendedores solo ven sus deals. Permisos granulares por módulo y funcionalidad del CRM." },
//             { title: "API para integraciones", description: "API REST completa para conectar tu CRM con facturación, ERP, marketing automation o cualquier herramienta de tu stack actual." },
//           ],
//         },
//       ],
//     },
//     "soluciones-personalizadas": {
//       eyebrow: "Qué incluye",
//       heading: "Software a medida que resuelve tu problema exacto",
//       subtitle: "No adaptes tu negocio a una herramienta genérica. Construimos la herramienta que se adapta a tu negocio.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Discovery y análisis de requisitos", description: "Sesiones de trabajo para entender tu problema a fondo, mapear stakeholders, definir alcance y priorizar funcionalidades." },
//             { title: "Arquitectura de solución", description: "Diseñamos la arquitectura técnica óptima para tu caso: monorepo o microservicios, SQL o NoSQL, cloud o on-premise." },
//             { title: "Desarrollo full-stack", description: "Frontend con React, backend con Node.js o Python y base de datos con PostgreSQL. Stack moderno preparado para escalar." },
//             { title: "MVP funcional en semanas", description: "Entregamos una versión funcional mínima en 4-8 semanas para que puedas validar la solución con usuarios reales rápido." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Iteraciones ágiles", description: "Ciclos de desarrollo de 2 semanas con demo al final de cada sprint. Tú priorizas qué se construye en cada iteración." },
//             { title: "Integración con tu stack actual", description: "Conectamos la solución nueva con tus sistemas existentes: ERP, contabilidad, RRHH, legacy o APIs de terceros." },
//             { title: "Documentación técnica completa", description: "Manual de arquitectura, guía de despliegue, documentación de API y manual de usuario para que tu equipo sea autónomo." },
//             { title: "Soporte continuo post-entrega", description: "Plan de mantenimiento evolutivo: nuevas funcionalidades, ajustes por feedback y soporte técnico para garantizar operación sin fricción." },
//           ],
//         },
//       ],
//     },
//     "consultoria": {
//       eyebrow: "Qué incluye",
//       heading: "Consultoría tecnológica que te da claridad y dirección",
//       subtitle: "Auditamos, diagnosticamos y trazamos la ruta para que tu tecnología sea una ventaja competitiva, no un lastre.",
//       sections: [
//         {
//           img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
//           imgAlt: "Diseñador trabajando en wireframes de landing page",
//           cards: [
//             { title: "Auditoría de stack tecnológico", description: "Revisión completa de tu infraestructura, código, dependencias, seguridad y deuda técnica con hallazgos priorizados por criticidad." },
//             { title: "Revisión de arquitectura", description: "Evaluamos si tu arquitectura actual soportará el crecimiento proyectado. Identificamos cuellos de botella y riesgos de escalabilidad." },
//             { title: "Roadmap técnico accionable", description: "Plan de acción trimestral con iniciativas priorizadas, estimaciones de esfuerzo y quick wins para mostrar resultados rápido." },
//             { title: "Due diligence técnico", description: "Para inversores o adquisiciones: evaluamos el estado real de la tecnología de una empresa antes de tomar decisiones financieras." },
//           ],
//         },
//         {
//           img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//           imgAlt: "Laptop mostrando métricas de analítica web",
//           cards: [
//             { title: "Optimización de rendimiento", description: "Diagnóstico de velocidad, Core Web Vitals y consumo de recursos con recomendaciones específicas y medibles para mejora." },
//             { title: "Evaluación de seguridad", description: "Análisis de vulnerabilidades OWASP Top 10, revisión de políticas de acceso y recomendaciones de hardening para infraestructura." },
//             { title: "Selección de tecnología", description: "Te ayudamos a elegir el stack adecuado para tu próximo proyecto basado en requisitos reales, no en modas ni preferencias personales." },
//             { title: "Mentoría para tu equipo técnico", description: "Sesiones de pairing, code review y transferencia de conocimiento para elevar el nivel técnico de tu equipo de desarrollo." },
//           ],
//         },
//       ],
//     },
  },
  process: {
    "landing-page": {
      eyebrow: "Proceso",
      heading: "De la idea al lanzamiento en 5 pasos",
      subtitle: "Un proceso claro, sin sorpresas y con entregas parciales para que siempre sepas en que punto estamos.",
      steps: [
        { n: 1, title: "Discovery", description: "Definimos objetivo de conversión, publico objetivo, propuesta de valor y métricas de exito. La base de todo lo que viene." },
        { n: 2, title: "Copywriting", description: "Redactamos headlines, subtitulos, descripción de beneficios y CTAs optimizados para tu audiencia antes de disenar." },
        { n: 3, title: "Diseño UI", description: "Creamos el mockup de alta fidelidad. Lo revisas y apruebas antes de escribir una sola linea de código." },
        { n: 4, title: "Desarrollo", description: "Construimos la landing con código limpio, rendimiento optimizado e integraciones con tus herramientas configuradas." },
        { n: 5, title: "Lanzamiento", description: "Publicamos, configuramos analítica, verificamos que todo funcione y entregamos accesos e instrucciones de uso." },
      ],
    },
    website: {
      eyebrow: "Proceso",
      heading: "Como construimos tu sitio web",
      subtitle: "Cinco fases que garantizan diseño alineado a tu marca, desarrollo solido y un lanzamiento sin fricciones.",
      steps: [
        { n: 1, title: "Discovery", description: "Relevamos tu marca, objetivos de negocio, competencia y alcance. Definimos páginas, funcionalidades y arquitectura de información." },
        { n: 2, title: "Diseño UI/UX", description: "Wireframes y mockup completo del sitio. Disenamos todos los componentes y el flujo de usuario antes de desarrollar." },
        { n: 3, title: "Desarrollo", description: "Construimos el sitio con CMS integrado, SEO técnico configurado y código que puede escalar con tu empresa." },
        { n: 4, title: "Contenido y QA", description: "Cargamos el contenido que nos proveas, realizamos pruebas de usabilidad, rendimiento y compatibilidad cross-browser." },
        { n: 5, title: "Lanzamiento", description: "Configuramos dominio, SSL, hosting, redireccionamientos y hacemos un chequeo final antes de publicar." },
      ],
    },
    ecommerce: {
      eyebrow: "Proceso",
      heading: "De catálogo vacio a tienda lista para vender",
      subtitle: "Cada etapa tiene entregables concretos para que puedas ver el avance y dar feedback en el momento exacto.",
      steps: [
        { n: 1, title: "Discovery", description: "Definimos catálogo, pasarelas de pago, integraciones logísticas y reglas de negocio antes de disenar o desarrollar." },
        { n: 2, title: "Diseño UI/UX", description: "Disenamos el flujo completo: home, ficha de producto, carrito y checkout. Aprobas el diseño antes del desarrollo." },
        { n: 3, title: "Desarrollo", description: "Construimos la tienda, integramos pasarelas de pago, configuramos inventario y aplicamos SEO por producto." },
        { n: 4, title: "Carga de datos", description: "Importamos tu catálogo, configuramos categorias, precios, variantes y metodos de envio según tus reglas." },
        { n: 5, title: "Lanzamiento", description: "Realizamos pruebas de compra end-to-end, verificamos analítica y publicamos la tienda una vez todo esta validado." },
      ],
    },
    support: {
      eyebrow: "Proceso",
      heading: "Asi funciona nuestro soporte",
      subtitle: "Un ciclo mensual predecible que mantiene tu web en óptimas condiciones sin que tengas que preocuparte.",
      steps: [
        { n: 1, title: "Auditoria inicial", description: "Si no desarrollamos tu sitio, auditamos su estado técnico, dependencias y posibles vulnerabilidades antes de asumir el soporte." },
        { n: 2, title: "Monitoreo activo", description: "Activamos el monitoreo de disponibilidad y performance para detectar incidencias antes de que impacten a tus usuarios." },
        { n: 3, title: "Mantenimiento mensual", description: "Actualizamos dependencias, aplicamos parches de seguridad, hacemos backups y revisamos el rendimiento del sitio." },
        { n: 4, title: "Resolucion de incidencias", description: "Ante errores funcionales o caidas, respondemos según SLA acordado con díagnostico y solucion documentados." },
        { n: 5, title: "Reporte mensual", description: "Recibes un informe completo con todo lo realizado, el estado actual de la plataforma y las recomendaciones para el mes siguiente." },
      ],
    },
//     "apps-moviles": {
//       eyebrow: "Proceso",
//       heading: "De la idea a la tienda de aplicaciones en 5 pasos",
//       subtitle: "Un proceso iterativo con prototipo funcional temprano para que puedas tocar tu app antes del desarrollo completo.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Definimos funcionalidades core, flujo de usuario principal, arquitectura del backend y estrategia de publicación en tiendas." },
//         { n: 2, title: "Diseño UX/UI", description: "Creamos wireframes y prototipo interactivo con diseño visual nativo. Validamos usabilidad antes de escribir una línea de código." },
//         { n: 3, title: "Desarrollo ágil", description: "Construimos en sprints de 2 semanas con entregas iterativas. Puedes instalar la app en tu dispositivo desde el primer sprint." },
//         { n: 4, title: "Testing y QA", description: "Pruebas en dispositivos reales iOS y Android, test de carga del backend, revisión de lineamientos de Apple y Google." },
//         { n: 5, title: "Lanzamiento en tiendas", description: "Publicamos en App Store y Google Play, gestionamos la revisión y configuramos analítica de instalación y retención de usuarios." },
//       ],
//     },
//     "apps-escritorio": {
//       eyebrow: "Proceso",
//       heading: "Cómo construimos tu aplicación de escritorio",
//       subtitle: "Diseño, desarrollo multiplataforma y empaquetado con instaladores nativos listos para distribuir.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Definimos funcionalidades, sistemas operativos objetivo, integraciones con hardware local y alcance del proyecto." },
//         { n: 2, title: "Diseño UI", description: "Diseñamos la interfaz adaptada a convenciones de escritorio de cada SO: menús, atajos de teclado, ventanas y diálogos nativos." },
//         { n: 3, title: "Desarrollo", description: "Construimos con toolkits nativos multiplataforma. Iteración semanal con builds funcionales que puedes probar en tu máquina." },
//         { n: 4, title: "Testing y empaquetado", description: "Pruebas en Windows, macOS y Linux. Configuramos instaladores, firma de código y sistema de actualizaciones automáticas." },
//         { n: 5, title: "Lanzamiento y distribución", description: "Publicamos en tiendas oficiales o distribuimos el instalador según tu estrategia. Entregamos accesos y documentación." },
//       ],
//     },
//     "saas": {
//       eyebrow: "Proceso",
//       heading: "Cómo llevamos tu SaaS del concepto a los primeros clientes de pago",
//       subtitle: "Un roadmap claro desde el MVP hasta una plataforma lista para escalar con facturación y multi-tenancy.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Definimos propuesta de valor, modelo de negocio, estructura de planes y funcionalidades core del MVP." },
//         { n: 2, title: "Arquitectura", description: "Diseñamos la arquitectura multi-tenant, elegimos stack tecnológico y definimos la estrategia de escalabilidad y despliegue." },
//         { n: 3, title: "Desarrollo del MVP", description: "Construimos el core del producto: onboarding, funcionalidad principal, facturación con Stripe y panel de administración básico." },
//         { n: 4, title: "Beta cerrada", description: "Lanzamos con un grupo reducido de usuarios reales. Recolectamos feedback, ajustamos UX y corregimos bugs antes del lanzamiento público." },
//         { n: 5, title: "Lanzamiento público", description: "Abrimos registros, activamos campañas de adquisición y configuramos monitoreo de métricas SaaS: MRR, churn y adopción." },
//       ],
//     },
//     "api": {
//       eyebrow: "Proceso",
//       heading: "Del contrato de API al primer consumidor en producción",
//       subtitle: "Diseñamos, documentamos y desplegamos tu API siguiendo el estándar API-first para garantizar consistencia.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Definimos los recursos, endpoints, modelos de datos y casos de uso principales que debe cubrir la API." },
//         { n: 2, title: "Diseño del contrato", description: "Escribimos la especificación OpenAPI 3.0 completa con todos los endpoints, schemas, ejemplos y códigos de error." },
//         { n: 3, title: "Desarrollo", description: "Implementamos los endpoints, lógica de negocio, autenticación, rate limiting y conexión con la base de datos." },
//         { n: 4, title: "Testing y documentación", description: "Tests de integración y carga. Publicamos la documentación interactiva con Swagger UI lista para tus consumidores." },
//         { n: 5, title: "Despliegue y monitoreo", description: "Configuramos CI/CD, desplegamos en producción y activamos monitoreo de latencia, errores y uso de la API." },
//       ],
//     },
//     "automatizacion-ia": {
//       eyebrow: "Proceso",
//       heading: "Cómo automatizamos tus procesos con IA paso a paso",
//       subtitle: "Identificamos, diseñamos e implementamos automatizaciones con medición de impacto real en tu operación.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Mapeamos tus procesos actuales, identificamos cuellos de botella y priorizamos las automatizaciones por impacto y viabilidad." },
//         { n: 2, title: "Diseño de solución", description: "Definimos la arquitectura: qué modelos de IA usar, cómo integrarlos con tus sistemas y cómo medir el éxito de cada automatización." },
//         { n: 3, title: "Implementación", description: "Integramos los modelos de IA, construimos los pipelines de datos y configuramos los disparadores automáticos de cada flujo." },
//         { n: 4, title: "Validación y ajuste", description: "Probamos con datos reales, medimos precisión y ajustamos prompts, umbrales y reglas hasta alcanzar el nivel de confianza acordado." },
//         { n: 5, title: "Lanzamiento y monitoreo", description: "Activamos en producción, configuramos dashboards de métricas y establecemos el ciclo de mejora continua con feedback loop." },
//       ],
//     },
//     "crm": {
//       eyebrow: "Proceso",
//       heading: "De hoja de cálculo a CRM hecho a tu medida",
//       subtitle: "Construimos tu sistema de gestión de clientes alrededor de cómo tu equipo realmente vende.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Mapeamos tu proceso de ventas actual: etapas del pipeline, roles del equipo, herramientas que usan y puntos de fricción." },
//         { n: 2, title: "Diseño del pipeline", description: "Definimos las etapas, campos de cada deal, reglas de automatización y dashboards que tu equipo necesita ver." },
//         { n: 3, title: "Desarrollo", description: "Construimos el CRM con pipeline Kanban, fichas de contacto, automatizaciones de seguimiento e integraciones con email y calendario." },
//         { n: 4, title: "Migración de datos", description: "Importamos tus contactos, deals y notas desde Excel, Google Sheets o tu CRM anterior sin pérdida de información." },
//         { n: 5, title: "Capacitación y lanzamiento", description: "Entrenamos a tu equipo en el uso del CRM, configuramos dashboards finales y lanzamos con soporte prioritario las primeras semanas." },
//       ],
//     },
//     "soluciones-personalizadas": {
//       eyebrow: "Proceso",
//       heading: "Cómo convertimos tu problema en una solución de software",
//       subtitle: "Un proceso estructurado que reduce la incertidumbre y te da visibilidad total del avance en cada etapa.",
//       steps: [
//         { n: 1, title: "Discovery", description: "Sesiones de entendimiento profundo: mapeamos el problema, los stakeholders, las restricciones y definimos el alcance del MVP." },
//         { n: 2, title: "Propuesta técnica", description: "Te presentamos la arquitectura propuesta, el stack tecnológico, el roadmap de sprints y la estimación de esfuerzo detallada." },
//         { n: 3, title: "Desarrollo iterativo", description: "Sprints de 2 semanas con demo al final de cada uno. Tú decides qué funcionalidades se construyen en cada iteración." },
//         { n: 4, title: "QA y UAT", description: "Pruebas funcionales, de rendimiento y de seguridad. Sesiones de validación contigo para asegurar que la solución cumple lo esperado." },
//         { n: 5, title: "Despliegue y entrega", description: "Configuramos el entorno de producción, migramos datos si es necesario y entregamos documentación y capacitación a tu equipo." },
//       ],
//     },
//     "consultoria": {
//       eyebrow: "Proceso",
//       heading: "Cómo funciona nuestro proceso de consultoría",
//       subtitle: "Diagnóstico, recomendaciones accionables y seguimiento para que la estrategia se convierta en resultados.",
//       steps: [
//         { n: 1, title: "Sesión inicial", description: "Reunión de 90 minutos para entender tu contexto actual, objetivos de negocio y los desafíos técnicos que enfrentas." },
//         { n: 2, title: "Auditoría y diagnóstico", description: "Revisión de código, infraestructura, arquitectura, seguridad y procesos. Identificamos riesgos y oportunidades de mejora." },
//         { n: 3, title: "Informe de hallazgos", description: "Documento detallado con hallazgos priorizados por criticidad, impacto en negocio y esfuerzo estimado de resolución." },
//         { n: 4, title: "Roadmap y plan de acción", description: "Plan trimestral con iniciativas priorizadas, quick wins, dependencias entre tareas y métricas de éxito claras para cada iniciativa." },
//         { n: 5, title: "Seguimiento y mentoría", description: "Sesiones de seguimiento para revisar avances, desbloquear obstáculos y ajustar el plan según resultados reales." },
//       ],
//     },
  },
  cardsIntro: {
    "landing-page": {
      eyebrow: "Por que elegirnos?",
      heading: "Tres pilares que hacen la diferencia",
      subtitle:
        "No solo diseñamos páginas bonitas. Construimos herramientas de conversión medibles desde el primer día.",
      cards: [
        {
          title: "Diseñada para convertir",
          description:
            "Cada elemento, headline, CTA y flujo visual esta construido para guiar al visitante hacia la acción objetivo.",
        },
        {
          title: "Analítica desde el día 1",
          description:
            "Integramos GA4, seguimiento de eventos y conversiónes en ads para que midas el ROI de cada campaña.",
        },
        {
          title: "Mobile-first y rapida",
          description:
            "Puntuacion 90+ en Core Web Vitals. Optimizada para posicionar mejor y reducir abandonos.",
        },
      ],
    },
    website: {
      eyebrow: "Por que elegirnos?",
      heading: "Lo que distingue un sitio que crece",
      subtitle: "Un sitio web es tan bueno como la estrategia detras de el. Aqui esta la nuestra.",
      cards: [
        {
          title: "CMS para tu equipo",
          description:
            "Edita textos, imagenes y publicaciones sin tocar código desde un panel visual intuitivo.",
        },
        {
          title: "SEO técnico incluido",
          description:
            "Estructura semantica, metaetiquetas y sitemap listos para escalar en buscadores.",
        },
        {
          title: "Rendimiento optimizado",
          description:
            "Arquitectura modular, imagenes comprimidas y carga diferida para una experiencia rapida.",
        },
      ],
    },
    ecommerce: {
      eyebrow: "Por que elegirnos?",
      heading: "Las bases de una tienda que vende",
      subtitle:
        "Tecnologia, experiencia de compra y visibilidad en buscadores: los factores que definen resultados.",
      cards: [
        {
          title: "Multi-pasarela de pago",
          description:
            "Stripe, MercadoPago, PayPal y mas. Integradas con seguridad PCI y flujo sin friccion.",
        },
        {
          title: "Catálogo sin limites",
          description:
            "Gestióna productos, variantes, imagenes y stock desde un panel centralizado.",
        },
        {
          title: "SEO de producto incluido",
          description:
            "URLs limpias y metaetiquetas por ficha para que Google indexe y posicione tu catálogo.",
        },
      ],
    },
    support: {
      eyebrow: "Por que elegirnos?",
      heading: "Mantenimiento que previene, no que repara",
      subtitle: "La mayoria actua cuando algo falla. Nosotros trabajamos para que nada falle.",
      cards: [
        {
          title: "Monitoreo continuo",
          description:
            "Detectamos caidas en segúndos y respondemos de inmedíato antes de que tus usuarios lo noten.",
        },
        {
          title: "Backups y seguridad",
          description:
            "Copias díarias, parches prioritarios y escaneo de vulnerabilidades incluidos.",
        },
        {
          title: "Reporte mensual detallado",
          description:
            "Recibes un informe con uptime, velocidad y acciónes realizadas cada mes.",
        },
      ],
    },
//     "apps-moviles": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Tres razones para construir tu app con nosotros",
//       subtitle: "No solo escribimos código. Construimos productos digitales que tus usuarios quieren usar todos los días.",
//       cards: [
//         {
//           title: "Nativo en ambas plataformas",
//           description:
//             "Desarrollo nativo iOS y Android que aprovecha las capacidades de cada plataforma: Face ID, widgets, notificaciones y más.",
//         },
//         {
//           title: "Publicación sin fricción",
//           description:
//             "Gestionamos todo el proceso de App Store y Google Play: metadatos, capturas, políticas de privacidad y revisión.",
//         },
//         {
//           title: "Escalabilidad desde el inicio",
//           description:
//             "Backend preparado para crecer con tu base de usuarios sin degradar rendimiento ni experiencia.",
//         },
//       ],
//     },
//     "apps-escritorio": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Aplicaciones de escritorio que tus usuarios instalan con confianza",
//       subtitle: "Rendimiento nativo, instaladores profesionales y experiencia de usuario que se siente parte del sistema operativo.",
//       cards: [
//         {
//           title: "Multiplataforma real",
//           description:
//             "Mismo código base con adaptaciones nativas para Windows, macOS y Linux. Sin compromisos de experiencia.",
//         },
//         {
//           title: "Instaladores profesionales",
//           description:
//             ".exe firmado, .dmg notarizado y .AppImage listos para distribuir con actualizaciones automáticas.",
//         },
//         {
//           title: "Acceso total al hardware",
//           description:
//             "Integración con periféricos, impresoras, USB y sistema de archivos para apps que van más allá del navegador.",
//         },
//       ],
//     },
//     "saas": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Construimos SaaS que genera ingresos recurrentes",
//       subtitle: "No solo tecnología. Entregamos una plataforma lista para facturar con suscripciones desde el día uno.",
//       cards: [
//         {
//           title: "Facturación integrada",
//           description:
//             "Stripe con planes, upgrades, downgrades y portal de cliente. Empiezas a facturar en cuanto lanzas.",
//         },
//         {
//           title: "Multi-tenant from day one",
//           description:
//             "Aislamiento de datos por cliente con arquitectura que no tendrás que refactorizar cuando crezcas.",
//         },
//         {
//           title: "Métricas SaaS desde el inicio",
//           description:
//             "MRR, churn, LTV y adopción de features medibles desde el primer día para tomar decisiones con datos.",
//         },
//       ],
//     },
//     "api": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "APIs que tus desarrolladores van a querer integrar",
//       subtitle: "Documentación clara, consistencia en los endpoints y rendimiento predecible bajo carga real.",
//       cards: [
//         {
//           title: "API-first design",
//           description:
//             "Contrato OpenAPI definido antes de escribir código. Tus consumidores saben exactamente qué esperar.",
//         },
//         {
//           title: "Documentación interactiva",
//           description:
//             "Swagger UI con playground para probar endpoints, ejemplos de código y guías de integración.",
//         },
//         {
//           title: "Seguridad por diseño",
//           description:
//             "OAuth 2.0, JWT, rate limiting y validación de inputs implementados desde la primera línea de código.",
//         },
//       ],
//     },
//     "automatizacion-ia": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Automatización con IA que genera ROI medible",
//       subtitle: "No hacemos demos bonitas. Implementamos automatizaciones que ahorran horas reales de trabajo cada semana.",
//       cards: [
//         {
//           title: "ROI cuantificable",
//           description:
//             "Cada automatización incluye métricas de tiempo ahorrado, volumen procesado y costo operativo reducido.",
//         },
//         {
//           title: "IA aplicada, no teórica",
//           description:
//             "Integramos modelos de lenguaje, visión y procesamiento de datos en tus flujos de trabajo reales.",
//         },
//         {
//           title: "Mejora continua",
//           description:
//             "Cada corrección humana entrena el sistema. La precisión mejora con el tiempo sin intervención manual.",
//         },
//       ],
//     },
//     "crm": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Un CRM que tu equipo de ventas realmente va a usar",
//       subtitle: "Diseñado alrededor de tu proceso de ventas real, no al revés. Sin features que nadie pidió.",
//       cards: [
//         {
//           title: "Adaptado a tu proceso",
//           description:
//             "Pipeline, campos y automatizaciones que reflejan cómo vendes realmente, no cómo un software genérico asume que vendes.",
//         },
//         {
//           title: "Adopción sin fricción",
//           description:
//             "Interfaz simple que tu equipo entiende en minutos. Integración con Gmail y calendario para no cambiar de herramientas.",
//         },
//         {
//           title: "Dueño de tus datos",
//           description:
//             "Tus datos de clientes en tu infraestructura. Sin costos por usuario que escalan ni dependencia de un vendor externo.",
//         },
//       ],
//     },
//     "soluciones-personalizadas": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Software que resuelve tu problema, no el de la mayoría",
//       subtitle: "Cuando las herramientas genéricas no alcanzan, construimos la solución exacta que tu negocio necesita.",
//       cards: [
//         {
//           title: "Sin compromisos",
//           description:
//             "No fuerzas tu negocio a adaptarse a un software. El software se adapta a cómo operas realmente.",
//         },
//         {
//           title: "Iteración rápida",
//           description:
//             "MVP funcional en semanas, no meses. Validás la solución con usuarios reales antes de comprometer más presupuesto.",
//         },
//         {
//           title: "Propiedad total",
//           description:
//             "El código es tuyo. Sin licencias recurrentes, sin límite de usuarios y con libertad total para evolucionar.",
//         },
//       ],
//     },
//     "consultoria": {
//       eyebrow: "Por qué elegirnos?",
//       heading: "Consultoría que no se queda en PDFs bonitos",
//       subtitle: "Diagnóstico honesto, recomendaciones accionables y seguimiento hasta que los cambios estén implementados.",
//       cards: [
//         {
//           title: "Honestidad radical",
//           description:
//             "Te decimos lo que necesitas escuchar, no lo que quieres escuchar. Sin endulzar problemas ni vender soluciones innecesarias.",
//         },
//         {
//           title: "Accionable, no teórico",
//           description:
//             "Cada recomendación incluye pasos concretos, responsables sugeridos y criterios de éxito medibles.",
//         },
//         {
//           title: "Transferencia de conocimiento",
//           description:
//             "Tu equipo aprende en el proceso. No creamos dependencia: te damos las herramientas para ser autónomo.",
//         },
//       ],
//     },
  },
  intro: {
    "landing-page": {
      eyebrow: "Que es una landing page?",
      heading: "Una página. Un objetivo. Maximos resultados.",
      body:
        "Una landing page es una página de proposito único: convertir visitantes en leads, suscriptores o clientes.",
      bullets: [
        "Sin menus ni links que distraigan al visitante",
        "Cada seccion construida para empujar hacia el CTA",
        "Medible desde el primer día con analítica integrada",
      ],
      badge: { value: "3x", label: "mas conversión", sub: "vs. homepage" },
      imageAlt: "Dashboard de analítica mostrando métricas de conversión",
    },
    website: {
      eyebrow: "Que es un sitio web corporativo?",
      heading: "Tu activo digital mas importante, construido para durar.",
      body:
        "Un sitio web corporativo transmite credibilidad, presenta tu oferta con claridad y genera conversiónes de forma constante.",
      bullets: [
        "CMS integrado: tu equipo edita sin tocar código",
        "SEO técnico completo desde la primera linea",
        "Arquitectura modular que crece con tu empresa",
      ],
      badge: { value: "70%", label: "de compradores", sub: "buscan en Google primero" },
      imageAlt: "Diseño de sitio web corporativo en pantalla",
    },
    ecommerce: {
      eyebrow: "Que es un e-commerce a medida?",
      heading: "Tu canal de ventas digital, abierto las 24 horas.",
      body:
        "Un e-commerce a medida integra pasarelas, gestióna inventario y optimiza SEO por producto para vender y escalar.",
      bullets: [
        "Pasarelas de pago adaptadas a tu mercado",
        "SEO por producto para atraer trafico organico",
        "Panel de administracion sin curva de aprendizaje",
      ],
      badge: { value: "24/7", label: "ventas activas", sub: "sin intervencion manual" },
      imageAlt: "Tienda online con catálogo de productos y carrito de compras",
    },
    support: {
      eyebrow: "Que cubre el soporte técnico?",
      heading: "Tu web siempre activa. Nosotros nos encargamos.",
      body:
        "El mantenimiento web cubre actualizaciones, seguridad y monitoreo continuo para reducir riesgos reales.",
      bullets: [
        "Alertas automaticas ante caidas, antes de que lo notes",
        "Parches de seguridad aplicados en menos de 24 h",
        "Reporte mensual con todo lo que ocurrio en tu plataforma",
      ],
      badge: { value: "99.9%", label: "uptime", sub: "garantizado por SLA" },
      imageAlt: "Centro de datos con servidores monitoreados",
    },
//     "apps-moviles": {
//       eyebrow: "Qué es una app móvil a medida?",
//       heading: "Tu producto en el bolsillo de tus usuarios, disponible 24/7.",
//       body:
//         "Una app móvil a medida convierte tu servicio en una experiencia nativa que tus usuarios pueden abrir con un solo toque, incluso sin conexión.",
//       bullets: [
//         "Experiencia nativa fluida que aprovecha el hardware del dispositivo",
//         "Notificaciones push que traen de vuelta a tus usuarios",
//         "Funcionalidad offline para que tu app nunca deje de funcionar",
//       ],
//       badge: { value: "5.5B", label: "de apps descargadas", sub: "en 2025 globalmente" },
//       imageAlt: "Teléfono mostrando una aplicación móvil con diseño moderno",
//     },
//     "apps-escritorio": {
//       eyebrow: "Qué es una app de escritorio a medida?",
//       heading: "Software que corre donde tu equipo trabaja, sin la latencia del navegador.",
//       body:
//         "Una aplicación de escritorio nativa ofrece acceso completo al hardware, rendimiento superior y una experiencia que el navegador no puede igualar en tareas intensivas.",
//       bullets: [
//         "Acceso directo al sistema de archivos y periféricos locales",
//         "Rendimiento nativo sin las limitaciones de un navegador",
//         "Instalador profesional con actualizaciones automáticas incluidas",
//       ],
//       badge: { value: "10x", label: "más rendimiento", sub: "que apps web equivalentes" },
//       imageAlt: "Laptop con aplicación de escritorio profesional en pantalla",
//     },
//     "saas": {
//       eyebrow: "Qué es un SaaS?",
//       heading: "Tu software como servicio: ingreso recurrente, escalabilidad sin límites.",
//       body:
//         "Un SaaS convierte tu conocimiento o proceso en un producto digital que tus clientes pagan mensualmente, accesible desde cualquier navegador.",
//       bullets: [
//         "Facturación recurrente con Stripe desde el lanzamiento",
//         "Arquitectura multi-tenant que crece sin refactorizar",
//         "Métricas de negocio integradas: MRR, churn, LTV",
//       ],
//       badge: { value: "$300B", label: "mercado SaaS", sub: "global proyectado a 2026" },
//       imageAlt: "Dashboard de plataforma SaaS con gráficos de métricas de negocio",
//     },
//     "api": {
//       eyebrow: "Qué es el desarrollo de APIs?",
//       heading: "El puente que conecta tus sistemas y permite a otros construir sobre tu plataforma.",
//       body:
//         "Una API bien diseñada permite que tus sistemas internos, apps móviles y partners externos se comuniquen de forma segura, eficiente y predecible.",
//       bullets: [
//         "Contrato OpenAPI definido antes de la primera línea de código",
//         "Documentación interactiva que reduce el tiempo de integración",
//         "Autenticación y rate limiting para proteger tus recursos",
//       ],
//       badge: { value: "83%", label: "del tráfico web", sub: "es tráfico de API" },
//       imageAlt: "Diagrama de arquitectura de API REST con endpoints y servicios conectados",
//     },
//     "automatizacion-ia": {
//       eyebrow: "Qué es la automatización con IA?",
//       heading: "Procesos que se ejecutan solos mientras tu equipo se enfoca en lo que importa.",
//       body:
//         "La automatización con IA integra modelos de inteligencia artificial en tus flujos de trabajo para eliminar tareas repetitivas, procesar datos no estructurados y tomar decisiones en tiempo real.",
//       bullets: [
//         "Procesamiento automático de documentos, emails y formularios",
//         "Clasificación y extracción de datos sin intervención manual",
//         "Decisiones automáticas basadas en patrones detectados por IA",
//       ],
//       badge: { value: "40%", label: "de tareas operativas", sub: "automatizables en la mayoría de empresas" },
//       imageAlt: "Dashboard de automatización mostrando flujos de trabajo con IA",
//     },
//     "crm": {
//       eyebrow: "Qué es un CRM a medida?",
//       heading: "El sistema que organiza tus relaciones con clientes, diseñado para tu proceso de ventas real.",
//       body:
//         "Un CRM a medida organiza tus contactos, automatiza el seguimiento y te da visibilidad de tu pipeline sin forzarte a cambiar cómo vendes ni pagar por features que no necesitas.",
//       bullets: [
//         "Pipeline visual que refleja tus etapas de ventas reales",
//         "Seguimiento automático sin leads que se caen por olvido",
//         "Dashboards que muestran dónde enfocar tu energía cada día",
//       ],
//       badge: { value: "29%", label: "más ventas", sub: "en empresas que usan CRM" },
//       imageAlt: "Dashboard de CRM mostrando pipeline de ventas y métricas de contactos",
//     },
//     "soluciones-personalizadas": {
//       eyebrow: "Qué es una solución personalizada?",
//       heading: "El software que tu empresa necesita, no el que existe en el mercado.",
//       body:
//         "Cuando las herramientas genéricas no resuelven tu problema, construimos una solución desde cero diseñada exclusivamente para tu caso de uso, tu equipo y tu forma de operar.",
//       bullets: [
//         "Software diseñado alrededor de tu proceso, no al revés",
//         "Propiedad total del código: sin licencias, sin límites",
//         "Iteración rápida con MVP funcional en semanas",
//       ],
//       badge: { value: "100%", label: "adaptado a tu negocio", sub: "sin compromisos" },
//       imageAlt: "Equipo de desarrollo trabajando en arquitectura de software personalizada",
//     },
//     "consultoria": {
//       eyebrow: "Qué es la consultoría tecnológica?",
//       heading: "Una mirada experta externa que te dice la verdad sobre tu tecnología.",
//       body:
//         "La consultoría tecnológica evalúa tu stack actual, identifica riesgos que tu equipo no ve y te entrega un plan accionable para que la tecnología sea una ventaja competitiva.",
//       bullets: [
//         "Auditoría honesta: te decimos lo que funciona y lo que no",
//         "Roadmap priorizado con quick wins para mostrar resultados rápido",
//         "Transferencia de conocimiento para que tu equipo crezca",
//       ],
//       badge: { value: "3x", label: "más velocidad", sub: "de delivery post-consultoría" },
//       imageAlt: "Consultor revisando diagramas de arquitectura con un equipo de desarrollo",
//     },
  },
  features: {
    "landing-page": {
      heading: "Todo incluido en tu landing page",
      subtitle: "Sin costos ocultos. Sin sorpresas. Cada item entregado y documentado.",
      features: [
        "Diseño UI/UX de alta fidelidad",
        "Copywriting persuasivo incluido",
        "Responsive mobile-first",
        "Core Web Vitals 90+ garantizado",
        "Integracion con CRM y email marketing",
        "Meta Pixel y Google Ads configurados",
        "Google Analytics 4 + eventos clave",
        "Formularios de captura de leads",
        "SEO on-page optimizado",
        "Dominio y hosting configurados",
        "SSL incluido",
        "Soporte 30 días post-lanzamiento",
      ],
    },
    website: {
      heading: "Todo incluido en tu sitio corporativo",
      subtitle:
        "Diseño, desarrollo y lanzamiento. Sin freelancers extras ni herramientas de pago externas.",
      features: [
        "Diseño UI/UX personalizado",
        "Páginas según alcance acordado",
        "CMS integrado (edicion sin código)",
        "Sistema de blog con SEO por articulo",
        "SEO técnico on-page completo",
        "Datos estructurados (Schema.org)",
        "Open Graph y metaetiquetas",
        "Sitemap XML y robots.txt",
        "Core Web Vitals optimizados",
        "Integraciones con herramientas externas",
        "SSL y configuracion de dominio",
        "Capacitacion de uso del CMS incluida",
      ],
    },
    ecommerce: {
      heading: "Todo incluido en tu tienda online",
      subtitle:
        "Desde el catálogo hasta la analítica de ventas, listo antes del lanzamiento.",
      features: [
        "Catálogo con variantes ilimitadas",
        "Pasarelas de pago multiples",
        "Gestión de stock e inventario",
        "Sistema de cupones y descuentos",
        "Checkout de una sola página",
        "Confirmacion automatica por email",
        "SEO por ficha de producto",
        "Rich snippets con precio y disponibilidad",
        "Dashboard de ventas e ingresos",
        "Reportes de abandono de carrito",
        "Integracion logística de envios",
        "Soporte 30 días post-lanzamiento",
      ],
    },
    support: {
      heading: "Todo incluido en el plan de soporte",
      subtitle:
        "Sin tarifas por hora ni sorpresas. Un plan fijo que cubre todo lo que tu plataforma necesita.",
      features: [
        "Monitoreo de disponibilidad 24/7",
        "Alertas automaticas ante caidas",
        "Actualizaciones de dependencias",
        "Parches de seguridad prioritarios",
        "Backups automaticos díarios",
        "Almacenamiento externo de backups",
        "Revision mensual de rendimiento",
        "Auditoria Core Web Vitals mensual",
        "Soporte técnico para tu equipo",
        "Correccion de errores funcionales",
        "Reporte mensual detallado",
        "Tiempo de respuesta garantizado SLA",
      ],
    },
//     "apps-moviles": {
//       heading: "Todo incluido en tu app móvil",
//       subtitle: "Desde el diseño hasta la publicación en tiendas. Sin costos ocultos ni sorpresas de última hora.",
//       features: [
//         "Diseño UX/UI nativo iOS y Android",
//         "Desarrollo nativo con Swift y Kotlin",
//         "Backend integrado con API REST",
//         "Autenticación de usuarios",
//         "Notificaciones push segmentadas",
//         "Modo offline con sincronización",
//         "Integración con Firebase Analytics",
//         "Publicación en App Store y Google Play",
//         "Metadatos y capturas de tienda",
//         "Sistema de actualizaciones OTA",
//         "Capacitación de uso del panel",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "apps-escritorio": {
//       heading: "Todo incluido en tu app de escritorio",
//       subtitle: "Desarrollo, empaquetado y distribución. Una app profesional lista para tus usuarios.",
//       features: [
//         "Diseño UI adaptado a escritorio",
//         "Desarrollo multiplataforma nativo",
//         "Instalador .exe, .dmg y .AppImage",
//         "Auto-actualización integrada",
//         "Acceso a hardware y periféricos",
//         "Sincronización cloud bidireccional",
//         "Modo offline con sync diferida",
//         "Integración con sistema de archivos",
//         "Firma de código y notarización",
//         "Distribución en tiendas oficiales",
//         "Documentación de usuario incluida",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "saas": {
//       heading: "Todo incluido en tu plataforma SaaS",
//       subtitle: "MVP, facturación, multi-tenancy y analítica. Todo lo que necesitas para lanzar y escalar.",
//       features: [
//         "Arquitectura multi-tenant",
//         "Onboarding de usuarios guiado",
//         "Facturación con Stripe integrada",
//         "Planes de suscripción configurables",
//         "Portal de cliente self-service",
//         "Roles y permisos RBAC",
//         "Panel de administración global",
//         "API REST documentada",
//         "Webhooks para integraciones",
//         "Dashboard de métricas SaaS",
//         "Infraestructura escalable",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "api": {
//       heading: "Todo incluido en tu API",
//       subtitle: "Diseño, implementación y documentación. Una API lista para que tus consumidores la integren.",
//       features: [
//         "Diseño de contrato OpenAPI 3.0",
//         "Endpoints REST o GraphQL",
//         "Autenticación OAuth 2.0 y JWT",
//         "Rate limiting configurable",
//         "Validación de inputs y schemas",
//         "Documentación Swagger interactiva",
//         "Versionado de API",
//         "Base de datos PostgreSQL",
//         "Tests de integración automatizados",
//         "CI/CD configurado",
//         "Monitoreo de latencia y errores",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "automatizacion-ia": {
//       heading: "Todo incluido en tu automatización con IA",
//       subtitle: "Análisis de procesos, integración de modelos y dashboards de ROI. Automatización que se paga sola.",
//       features: [
//         "Análisis de procesos actuales",
//         "Integración de LLMs (OpenAI, etc.)",
//         "Procesamiento de documentos con OCR",
//         "Clasificación automática de datos",
//         "Chatbots con RAG y base de conocimiento",
//         "Pipelines de datos automatizados",
//         "Extracción de información de textos",
//         "Disparadores automáticos configurables",
//         "Dashboard de métricas y ROI",
//         "Sistema de feedback loop",
//         "Mejora continua de modelos",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "crm": {
//       heading: "Todo incluido en tu CRM a medida",
//       subtitle: "Pipeline, contactos y automatización. Un CRM que tu equipo de ventas adopta sin resistencia.",
//       features: [
//         "Pipeline de ventas Kanban",
//         "Gestión de contactos y leads",
//         "Fichas de cliente completas",
//         "Scoring automático de leads",
//         "Automatización de seguimiento",
//         "Integración con Gmail y Outlook",
//         "Sincronización con calendario",
//         "Dashboards de ventas en tiempo real",
//         "Reportes exportables PDF y CSV",
//         "Roles y permisos por equipo",
//         "API REST para integraciones",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "soluciones-personalizadas": {
//       heading: "Todo incluido en tu solución a medida",
//       subtitle: "Discovery, arquitectura y desarrollo iterativo. Una solución construida alrededor de tu problema real.",
//       features: [
//         "Discovery y análisis de requisitos",
//         "Arquitectura de solución diseñada",
//         "Desarrollo full-stack",
//         "Frontend con React o Vue",
//         "Backend con Node.js o Python",
//         "Base de datos PostgreSQL",
//         "MVP funcional en semanas",
//         "Iteraciones ágiles cada 2 semanas",
//         "Integración con sistemas existentes",
//         "Documentación técnica completa",
//         "Despliegue en producción",
//         "Soporte 30 días post-lanzamiento",
//       ],
//     },
//     "consultoria": {
//       heading: "Todo incluido en tu consultoría",
//       subtitle: "Auditoría, diagnóstico y roadmap. Una hoja de ruta clara para que tu tecnología impulse tu negocio.",
//       features: [
//         "Sesión inicial de entendimiento",
//         "Auditoría de stack tecnológico",
//         "Revisión de arquitectura",
//         "Análisis de vulnerabilidades OWASP",
//         "Evaluación de rendimiento",
//         "Diagnóstico de deuda técnica",
//         "Informe detallado de hallazgos",
//         "Roadmap técnico trimestral",
//         "Quick wins priorizados",
//         "Sesiones de seguimiento",
//         "Mentoría para tu equipo técnico",
//         "Due diligence técnico opcional",
//       ],
//     },
  },
  cta: {
    "landing-page": {
      eyebrow: "Inversion",
      heading: "Landing page profesional a medida",
      subtitle:
        "Alcance definido y sin sorpresas. Paga en dos cuotas: 50% al inicio y 50% en la entrega.",
      includes: [
        "Diseño UI/UX de alta fidelidad",
        "Copywriting incluido",
        "Integraciones de marketing configuradas",
        "Soporte 30 días post-lanzamiento",
      ],
      buttonText: "Solicitar cotizacion personalizada",
    },
    website: {
      eyebrow: "Inversion",
      heading: "Sitio web corporativo a medida",
      subtitle:
        "Alcance definido desde el Discovery. Sin cargos por hora ni extras ocultos.",
      includes: [
        "Diseño UI/UX personalizado",
        "CMS integrado para tu equipo",
        "SEO técnico completo",
        "Soporte 30 días post-lanzamiento",
      ],
      buttonText: "Solicitar cotizacion personalizada",
    },
    ecommerce: {
      eyebrow: "Inversion",
      heading: "Tienda online lista para vender",
      subtitle:
        "Incluye diseño, desarrollo, pagos y carga inicial de catálogo con un solo proveedor.",
      includes: [
        "Diseño UI/UX del flujo completo",
        "Pasarelas de pago configuradas",
        "SEO por producto incluido",
        "Soporte 30 días post-lanzamiento",
      ],
      buttonText: "Solicitar cotizacion personalizada",
    },
    support: {
      eyebrow: "Inversion",
      heading: "Mantenimiento mensual a medida",
      subtitle:
        "Pago mensual recurrente, sin contrato anual obligatorio. Puedes escalar o pausar con aviso previo.",
      includes: [
        "Monitoreo 24/7 incluido",
        "Backups díarios automaticos",
        "Actualizaciones de seguridad",
        "Reporte mensual detallado",
      ],
      buttonText: "Solicitar cotizacion personalizada",
    },
//     "apps-moviles": {
//       eyebrow: "Inversión",
//       heading: "App móvil a medida de tus necesidades",
//       subtitle:
//         "Alcance definido desde el Discovery. Pagos por hitos: diseño, desarrollo y lanzamiento.",
//       includes: [
//         "Desarrollo nativo iOS y Android",
//         "Notificaciones push y modo offline",
//         "Publicación en App Store y Google Play",
//         "Soporte 30 días post-lanzamiento",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "apps-escritorio": {
//       eyebrow: "Inversión",
//       heading: "Aplicación de escritorio a medida",
//       subtitle:
//         "Multiplataforma desde un solo código. Alcance definido con pagos por hitos.",
//       includes: [
//         "Soporte Windows, macOS y Linux",
//         "Diseño multiplataforma",
//         "Sistema de auto-actualización",
//         "Soporte 30 días post-lanzamiento",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "saas": {
//       eyebrow: "Inversión",
//       heading: "Plataforma SaaS según tu visión de producto",
//       subtitle:
//         "Alcance del MVP definido juntos. Precio fijo por hito para que controlez presupuesto y tiempos.",
//       includes: [
//         "Arquitectura multi-tenant",
//         "Facturación con Stripe",
//         "Control de roles y permisos",
//         "Soporte 30 días post-lanzamiento",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "api": {
//       eyebrow: "Inversión",
//       heading: "Desarrollo de APIs a medida de tus requerimientos",
//       subtitle:
//         "Alcance fijo por grupo de endpoints. Pago por hitos: diseño, desarrollo y despliegue.",
//       includes: [
//         "Arquitectura REST o GraphQL",
//         "Docs interactivas auto-generadas",
//         "Autenticación y rate limiting",
//         "Soporte 30 días post-lanzamiento",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "automatizacion-ia": {
//       eyebrow: "Inversión",
//       heading: "Automatización con IA según tus workflows",
//       subtitle:
//         "Empezamos con una automatización de alto impacto. Ves ROI antes de expandir a otros procesos.",
//       includes: [
//         "Auditoría de procesos y estimación de ROI",
//         "Implementación de agente IA y workflow",
//         "Puntos de revisión human-in-the-loop",
//         "30 días de ajuste y soporte",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "crm": {
//       eyebrow: "Inversión",
//       heading: "CRM a medida de tu proceso de ventas",
//       subtitle:
//         "Incluye diseño de pipeline, desarrollo, migración de datos y capacitación del equipo.",
//       includes: [
//         "Diseño de pipeline y automatizaciones",
//         "Integración con email y calendario",
//         "Migración desde herramientas existentes",
//         "Capacitación y 30 días de soporte",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "soluciones-personalizadas": {
//       eyebrow: "Inversión",
//       heading: "Solución a medida para tu negocio",
//       subtitle:
//         "Alcance definido en Discovery. Pagos por hito con demos funcionales en cada etapa.",
//       includes: [
//         "Discovery y arquitectura de solución",
//         "Desarrollo con entrega iterativa",
//         "Integración con sistemas existentes",
//         "Soporte 30 días post-lanzamiento",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
//     "consultoria": {
//       eyebrow: "Inversión",
//       heading: "Consultoría a medida de tus necesidades",
//       subtitle:
//         "Alcance fijo por tipo de compromiso. Eliges profundidad de auditoría, entregables y soporte.",
//       includes: [
//         "Auditoría de arquitectura y código",
//         "Backlog priorizado de acciones",
//         "Roadmap técnico trimestral",
//         "Sesiones opcionales de pairing y asesoría",
//       ],
//       buttonText: "Solicitar cotización personalizada",
//     },
  },
  more: {
    eyebrow: "Otros servicios",
    headingStart: "Necesitas algo",
    headingHighlight: "diferente",
    headingEnd: "?",
    subtitle:
      "Cada servicio esta diseñado para una necesidad específica. Si este no es el tuyo, aquí están las otras opciones.",
    cardCta: "Ver servicio",
    cards: [
      {
        slug: "landing-page",
        tag: "Landing Page",
        title: "Páginas de alta conversión",
        description:
          "Para campañas, lanzamientos o captación de leads. Diseñadas para convertir.",
      },
      {
        slug: "website",
        tag: "Sitio Web Corporativo",
        title: "Presencia digital completa",
        description:
          "Múltiples páginas, CMS integrado y SEO técnico para una base digital sólida.",
      },
      {
        slug: "ecommerce",
        tag: "E-commerce",
        title: "Tienda online a medida",
        description:
          "Gestión de catálogo, pagos y logística en una tienda optimizada para escalar.",
      },
      {
        slug: "support",
        tag: "Soporte y Mantenimiento",
        title: "Tu web en manos expertas",
        description:
          "Backups, actualizaciones, monitoreo y reportes mensuales para operar sin fricción.",
      },
      // {
      //   slug: "apps-moviles",
      //   tag: "Apps Móviles",
      //   title: "Apps nativas que enamoran",
      //   description:
      //     "iOS y Android con soporte offline, notificaciones push y publicación en tiendas.",
      // },
      // {
      //   slug: "apps-escritorio",
      //   tag: "Apps de Escritorio",
      //   title: "Software de escritorio potente",
      //   description:
      //     "Multiplataforma para Windows, macOS y Linux con rendimiento nativo.",
      // },
      // {
      //   slug: "saas",
      //   tag: "SaaS",
      //   title: "Plataformas SaaS escalables",
      //   description:
      //     "Arquitectura multi-tenant, facturación por suscripción e infraestructura que crece contigo.",
      // },
      // {
      //   slug: "api",
      //   tag: "Desarrollo de APIs",
      //   title: "APIs listas para producción",
      //   description:
      //     "APIs REST y GraphQL con docs automáticas, seguridad y monitoreo.",
      // },
      // {
      //   slug: "automatizacion-ia",
      //   tag: "Automatización con IA",
      //   title: "Workflows inteligentes",
      //   description:
      //     "Agentes de IA y automatización que eliminan tareas repetitivas.",
      // },
      // {
      //   slug: "crm",
      //   tag: "CRM",
      //   title: "Plataforma de ventas a medida",
      //   description:
      //     "CRM construido alrededor de tu proceso con seguimientos automáticos y reportes.",
      // },
      // {
      //   slug: "soluciones-personalizadas",
      //   tag: "Soluciones Personalizadas",
      //   title: "Software a medida",
      //   description:
      //     "Soluciones que se integran con tu stack y evolucionan con tu negocio.",
      // },
      // {
      //   slug: "consultoria",
      //   tag: "Consultoría",
      //   title: "Expertos en tecnología a tu lado",
      //   description:
      //     "Auditorías, revisiones de arquitectura y roadmaps técnicos accionables.",
      // },
    ],
  },
};
