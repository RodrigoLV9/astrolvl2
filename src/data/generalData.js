export const servicesHomeData = [
	{
		title: 'LANDING PAGE',
		price: '$100.000 ARS',
		description: 'Una pagina unica, moderna y optimizada para presentar tu negocio o producto de forma efectiva.',
		tags: ['Diseno responsive', 'Copy de conversion', 'Formulario de contacto', 'SEO basico', 'Carga rapida', 'Boton de WhatsApp', 'Integracion con redes'],
		href: '/landing-page',
	},
	{
		title: 'WEB SITE',
		price: '$180.000 ARS',
		description: 'Sitio web multipagina para mostrar tu marca, servicios y propuesta de valor con presencia profesional.',
		tags: ['Hasta 5 secciones', 'Diseno personalizado', 'Integracion con WhatsApp', 'Optimizacion de velocidad', 'Galeria de imagenes', 'Mapa de ubicacion', 'Formulario de contacto'],
		href: '/website',
	},
	{
		title: 'E-COMMERCE',
		price: '$300.000 ARS',
		description: 'Tienda online lista para vender, con catalogo, carrito y proceso de compra claro para tus clientes.',
		tags: ['Catalogo de productos', 'Carrito y checkout', 'Medios de pago', 'Panel autoadministrable', 'Gestion de stock', 'Cupones de descuento', 'Emails automaticos'],
		href: '/ecommerce',
	},
	{
		title: 'SUPPORT',
		price: '$50.000 ARS',
		description: 'Mantenimiento y soporte continuo para que tu web este siempre actualizada, segura y funcionando al 100%.',
		tags: ['Actualizaciones mensuales', 'Correccion de errores', 'Monitoreo basico', 'Soporte tecnico', 'Backups regulares', 'Mejoras de rendimiento', 'Asistencia por WhatsApp'],
		href: '/support',
	},
]

export const servicesHeroData = {
	'landing-page': {
		badge: 'Landing Page',
		title: 'Paginas disenadas para convertir, no solo impresionar',
		description: 'Creamos landing pages de alto rendimiento que guian al visitante hacia una unica accion: comprar, registrarse o contactar. Sin distracciones, resultados medibles desde el primer dia.',
		tags: ['Alta Conversion', 'Mobile First', 'SEO Optimizado', 'A/B Testing'],
		primaryCTA: 'Quiero mi landing page',
		secondaryCTA: 'Ver proceso',
	},
	website: {
		badge: 'Sitio Web Corporativo',
		title: 'Tu presencia digital construida para generar confianza',
		description: 'Disenamos sitios web corporativos con identidad visual solida, CMS integrado y arquitectura que escala con tu empresa. Un proyecto llave en mano desde el diseno hasta el lanzamiento.',
		tags: ['Diseno UI/UX', 'CMS Integrado', 'SEO Tecnico', 'Escalable'],
		primaryCTA: 'Quiero mi sitio web',
		secondaryCTA: 'Ver proceso',
	},
	ecommerce: {
		badge: 'E-commerce',
		title: 'Tu tienda online lista para vender las 24 horas',
		description: 'Desarrollamos tiendas online robustas con gestion de inventario, multiples pasarelas de pago y SEO por producto. Tu canal de ventas digital, optimizado para convertir y escalar.',
		tags: ['Checkout Seguro', 'Gestion de Stock', 'SEO de Productos', 'Analitica'],
		primaryCTA: 'Quiero mi tienda online',
		secondaryCTA: 'Ver proceso',
	},
	support: {
		badge: 'Soporte & Mantenimiento',
		title: 'Tu plataforma activa, segura y en optimas condiciones',
		description: 'Actualizaciones, backups automaticos, monitoreo continuo y respuesta rapida ante incidencias. Tu web en manos expertas para que tu te enfoques en hacer crecer tu negocio.',
		tags: ['Monitoreo 24/7', 'Actualizaciones', 'Seguridad', 'Reportes Mensuales'],
		primaryCTA: 'Quiero plan de soporte',
		secondaryCTA: 'Ver proceso',
	},
}

export const servicesDescriptionData = {
	'landing-page': {
		eyebrow: 'Que incluye',
		heading: 'Todo lo que tu landing necesita para convertir',
		subtitle: 'Un proyecto llave en mano: desde el concepto hasta la analitica post-lanzamiento.',
		sections: [
			{
				img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
				imgAlt: 'Disenador trabajando en wireframes de landing page',
				cards: [
					{ title: 'Copywriting persuasivo', description: 'Redactamos el texto de la pagina orientado a la accion: headlines que enganchen, beneficios claros y CTAs que conviertan.' },
					{ title: 'Diseno UI de alta fidelidad', description: 'Mockup completo antes del desarrollo. Ve exactamente como quedara tu landing antes de escribir una linea de codigo.' },
					{ title: 'Formularios e integraciones', description: 'Lead forms conectados a tu CRM o herramienta de email marketing. Cada lead capturado llega directo a tu pipeline.' },
					{ title: 'A/B Testing preparado', description: 'Estructura modular lista para que puedas testear variantes de headline, CTA o imagen sin romper nada.' },
				],
			},
			{
				img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
				imgAlt: 'Laptop mostrando metricas de analitica web',
				cards: [
					{ title: 'Pixel & conversiones configuradas', description: 'Meta Pixel, Google Ads y GA4 listos desde el lanzamiento. Mide exactamente el retorno de tu inversion en pauta.' },
					{ title: 'SEO on-page optimizado', description: 'Metaetiquetas, estructura semantica y velocidad de carga configuradas para que Google te encuentre y te posicione.' },
					{ title: 'Mobile-first responsive', description: 'Disenada primero para movil. Perfectamente adaptada a cualquier dispositivo sin sacrificar conversion.' },
					{ title: 'Hosting & despliegue', description: 'Te asesoramos en el hosting mas adecuado y configuramos el despliegue automatico para que tu landing este siempre activa.' },
				],
			},
		],
	},
	website: {
		eyebrow: 'Que incluye',
		heading: 'Un sitio corporativo completo, llave en mano',
		subtitle: 'Diseno, desarrollo, CMS y SEO tecnico: todo en un solo proyecto.',
		sections: [
			{
				img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
				imgAlt: 'Diseno de interfaz de usuario en pantalla',
				cards: [
					{ title: 'Diseno UI/UX personalizado', description: 'Paleta, tipografia y componentes visuales alineados a tu marca. No usamos templates: cada diseno es exclusivo para ti.' },
					{ title: 'CMS integrado sin codigo', description: 'Tu equipo puede crear y editar contenido, publicar articulos de blog e insertar imagenes desde un panel visual intuitivo.' },
					{ title: 'Sistema de blog incluido', description: 'Publicaciones con categorias, etiquetas, autores y SEO por articulo. Tu canal de contenido listo para crecer.' },
					{ title: 'Paginas ilimitadas', description: 'Inicio, Servicios, Sobre nosotros, Equipo, Casos de estudio, Contacto y las que necesites. El alcance lo defines tu.' },
				],
			},
			{
				img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
				imgAlt: 'Pantalla con codigo y herramientas de desarrollo',
				cards: [
					{ title: 'SEO tecnico desde el inicio', description: 'Estructura semantica HTML5, metaetiquetas Open Graph, datos estructurados (Schema.org) y sitemap XML configurados.' },
					{ title: 'Rendimiento optimizado', description: 'Carga diferida de imagenes, minificacion y Core Web Vitals optimizados para una experiencia que no penaliza tu SEO.' },
					{ title: 'Integraciones con terceros', description: 'CRM, chat en vivo, formularios de contacto, Google Analytics y cualquier herramienta que ya uses en tu stack.' },
					{ title: 'Soporte post-lanzamiento', description: '30 dias de soporte tecnico incluidos para resolver cualquier ajuste o incidencia tras el lanzamiento.' },
				],
			},
		],
	},
	ecommerce: {
		eyebrow: 'Que incluye',
		heading: 'Tu tienda online lista para vender desde el primer dia',
		subtitle: 'Catalogo, pagos, logistica y analitica: todo configurado antes de lanzar.',
		sections: [
			{
				img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
				imgAlt: 'Mano sosteniendo telefono con aplicacion de compras',
				cards: [
					{ title: 'Catalogo y variantes', description: 'Sube productos con multiples imagenes, variantes (talla, color), descripcion SEO y precio. Sin limite de SKUs.' },
					{ title: 'Pasarelas de pago integradas', description: 'Stripe, MercadoPago, PayPal y mas. Configuramos la pasarela que mejor se adapta a tu mercado y tipo de cliente.' },
					{ title: 'Gestion de stock e inventario', description: 'Control de stock en tiempo real, alertas de bajo inventario y ajuste de cantidades desde el panel de administracion.' },
					{ title: 'Cupones y descuentos', description: 'Reglas de descuento por producto, categoria o total de carrito. Fecha de vencimiento y condiciones de uso configurables.' },
				],
			},
			{
				img: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80',
				imgAlt: 'Pantalla de laptop con dashboard de ventas en linea',
				cards: [
					{ title: 'SEO de fichas de producto', description: 'URLs limpias, metaetiquetas, rich snippets con precio y disponibilidad para que Google posicione cada producto.' },
					{ title: 'Checkout en un solo flujo', description: 'Proceso de compra simplificado con verificacion de stock, calculo de envio y confirmacion automatica por email.' },
					{ title: 'Analitica y reportes de ventas', description: 'Dashboard con metricas clave: ingresos, tasa de conversion, productos mas vendidos y abandono de carrito.' },
					{ title: 'Integracion logistica', description: 'Conexion con operadores de envio para calcular costos en tiempo real y generar etiquetas de envio automaticamente.' },
				],
			},
		],
	},
	support: {
		eyebrow: 'Que incluye',
		heading: 'Mantenimiento proactivo, no reactivo',
		subtitle: 'No esperamos a que algo falle. Actuamos antes de que tu te enteres.',
		sections: [
			{
				img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
				imgAlt: 'Panel de monitoreo con metricas de rendimiento del servidor',
				cards: [
					{ title: 'Monitoreo de disponibilidad 24/7', description: 'Alertas automaticas ante caidas del sitio. Tiempo de respuesta garantizado para que tu web no este caida mas de lo necesario.' },
					{ title: 'Actualizaciones de dependencias', description: 'Mantenemos actualizados plugins, frameworks y librerias para evitar vulnerabilidades conocidas y deuda tecnica acumulada.' },
					{ title: 'Backups automaticos diarios', description: 'Copias programadas del sitio y la base de datos, almacenadas en ubicacion externa para recuperacion ante cualquier incidente.' },
					{ title: 'Parches de seguridad prioritarios', description: 'Las vulnerabilidades criticas se parchean en menos de 24 horas desde su divulgacion, sin esperar al siguiente ciclo.' },
				],
			},
			{
				img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
				imgAlt: 'Equipo de soporte tecnico revisando reportes en pantallas',
				cards: [
					{ title: 'Revision mensual de rendimiento', description: 'Auditoria de velocidad de carga, Core Web Vitals y salud tecnica con recomendaciones incluidas en cada reporte mensual.' },
					{ title: 'Auditoria tecnica inicial', description: 'Si no desarrollamos tu sitio, realizamos una auditoria previa para entender su arquitectura y estado antes de asumir el soporte.' },
					{ title: 'Soporte para tu equipo', description: 'Canal de soporte directo para que tu equipo resuelva dudas tecnicas, solicite cambios menores o reporte anomalias.' },
					{ title: 'Reporte mensual detallado', description: 'Informe con uptime, acciones realizadas, velocidad de carga, actualizaciones aplicadas y recomendaciones para el siguiente periodo.' },
				],
			},
		],
	},
}

export const servicesProcessData = {
	'landing-page': {
		heading: 'De la idea al lanzamiento en 5 pasos',
		subtitle: 'Un proceso claro, sin sorpresas y con entregas parciales para que siempre sepas en que punto estamos.',
		steps: [
			{ n: 1, title: 'Discovery', description: 'Definimos objetivo de conversion, publico objetivo, propuesta de valor y metricas de exito. La base de todo lo que viene.' },
			{ n: 2, title: 'Copywriting', description: 'Redactamos headlines, subtitulos, descripcion de beneficios y CTAs optimizados para tu audiencia antes de disenar.' },
			{ n: 3, title: 'Diseno UI', description: 'Creamos el mockup de alta fidelidad. Lo revisas y apruebas antes de escribir una sola linea de codigo.' },
			{ n: 4, title: 'Desarrollo', description: 'Construimos la landing con codigo limpio, rendimiento optimizado e integraciones con tus herramientas configuradas.' },
			{ n: 5, title: 'Lanzamiento', description: 'Publicamos, configuramos analitica, verificamos que todo funcione y entregamos accesos e instrucciones de uso.' },
		],
	},
	website: {
		heading: 'Como construimos tu sitio web',
		subtitle: 'Cinco fases que garantizan diseno alineado a tu marca, desarrollo solido y un lanzamiento sin fricciones.',
		steps: [
			{ n: 1, title: 'Discovery', description: 'Relevamos tu marca, objetivos de negocio, competencia y alcance. Definimos paginas, funcionalidades y arquitectura de informacion.' },
			{ n: 2, title: 'Diseno UI/UX', description: 'Wireframes y mockup completo del sitio. Disenamos todos los componentes y el flujo de usuario antes de desarrollar.' },
			{ n: 3, title: 'Desarrollo', description: 'Construimos el sitio con CMS integrado, SEO tecnico configurado y codigo que puede escalar con tu empresa.' },
			{ n: 4, title: 'Contenido & QA', description: 'Cargamos el contenido que nos proveas, realizamos pruebas de usabilidad, rendimiento y compatibilidad cross-browser.' },
			{ n: 5, title: 'Lanzamiento', description: 'Configuramos dominio, SSL, hosting, redireccionamientos y hacemos un chequeo final antes de publicar.' },
		],
	},
	ecommerce: {
		heading: 'De catalogo vacio a tienda lista para vender',
		subtitle: 'Cada etapa tiene entregables concretos para que puedas ver el avance y dar feedback en el momento exacto.',
		steps: [
			{ n: 1, title: 'Discovery', description: 'Definimos catalogo, pasarelas de pago, integraciones logisticas y reglas de negocio antes de disenar o desarrollar.' },
			{ n: 2, title: 'Diseno UI/UX', description: 'Disenamos el flujo completo: home, ficha de producto, carrito y checkout. Aprobas el diseno antes del desarrollo.' },
			{ n: 3, title: 'Desarrollo', description: 'Construimos la tienda, integramos pasarelas de pago, configuramos inventario y aplicamos SEO por producto.' },
			{ n: 4, title: 'Carga de datos', description: 'Importamos tu catalogo, configuramos categorias, precios, variantes y metodos de envio segun tus reglas.' },
			{ n: 5, title: 'Lanzamiento', description: 'Realizamos pruebas de compra end-to-end, verificamos analitica y publicamos la tienda una vez todo esta validado.' },
		],
	},
	support: {
		heading: 'Asi funciona nuestro soporte',
		subtitle: 'Un ciclo mensual predecible que mantiene tu web en optimas condiciones sin que tengas que preocuparte.',
		steps: [
			{ n: 1, title: 'Auditoria inicial', description: 'Si no desarrollamos tu sitio, auditamos su estado tecnico, dependencias y posibles vulnerabilidades antes de asumir el soporte.' },
			{ n: 2, title: 'Monitoreo activo', description: 'Activamos el monitoreo de disponibilidad y performance para detectar incidencias antes de que impacten a tus usuarios.' },
			{ n: 3, title: 'Mantenimiento mensual', description: 'Actualizamos dependencias, aplicamos parches de seguridad, hacemos backups y revisamos el rendimiento del sitio.' },
			{ n: 4, title: 'Resolucion de incidencias', description: 'Ante errores funcionales o caidas, respondemos segun SLA acordado con diagnostico y solucion documentados.' },
			{ n: 5, title: 'Reporte mensual', description: 'Recibes un informe completo con todo lo realizado, el estado actual de la plataforma y las recomendaciones para el mes siguiente.' },
		],
	},
}

export const servicesMoreData = [
	{
		slug: 'landing-page',
		tag: 'Landing Page',
		title: 'Paginas de alta conversion',
		description: 'Para campanas, lanzamientos o captacion de leads. Disenadas con un solo objetivo: convertir.',
	},
	{
		slug: 'website',
		tag: 'Sitio Web Corporativo',
		title: 'Presencia digital completa',
		description: 'Multiples paginas, CMS integrado y SEO tecnico para empresas que necesitan una base digital solida.',
	},
	{
		slug: 'ecommerce',
		tag: 'E-commerce',
		title: 'Tienda online a medida',
		description: 'Gestion de catalogo, pagos y logistica en una tienda online optimizada para vender y escalar.',
	},
	{
		slug: 'support',
		tag: 'Soporte y Mantenimiento',
		title: 'Tu web en manos expertas',
		description: 'Backups, actualizaciones, monitoreo y reportes mensuales para que nada falle sin que lo sepas.',
	},
]

export const servicesStaticPathsData = [
	{
		slug: 'landing-page',
		title: 'Landing Pages de Alta Conversion',
		description: 'Disenamos sitios enfocados en vender.',
	},
	{
		slug: 'website',
		title: 'Sitios Web Corporativos',
		description: 'Presencia profesional para tu empresa.',
	},
	{
		slug: 'ecommerce',
		title: 'Tiendas Online (E-commerce)',
		description: 'Escala tus ventas con una tienda robusta.',
	},
	{
		slug: 'support',
		title: 'Soporte y Mantenimiento',
		description: 'Cuidamos tu web mientras tu creces.',
	},
]

export const serviceFaqsData = {
	'landing-page': [
		{
			question: 'En que se diferencia una landing page de un sitio web completo?',
			answer: 'Una landing page es una pagina de proposito unico disenada para convertir visitantes en leads o clientes. A diferencia de un sitio con multiples secciones y objetivos, la landing elimina distracciones y guia al usuario hacia una sola accion: comprar, registrarse o contactar.',
		},
		{
			question: 'Cuanto tiempo tarda en estar lista mi landing page?',
			answer: 'Una landing page profesional suele estar lista en 2 a 3 semanas. Esto incluye la fase de Discovery, el diseno en alta fidelidad, el desarrollo y las pruebas finales. El plazo puede variar si hay integraciones externas o contenido adicional por definir.',
		},
		{
			question: 'Puede integrarse con mis herramientas de marketing?',
			answer: 'Si. Conectamos la landing con tu CRM (HubSpot, ActiveCampaign, Pipedrive), formularios de email marketing, pixel de Meta Ads, Google Ads, Google Tag Manager y cualquier otra herramienta que ya uses. Todo queda trazado y medible desde el primer dia.',
		},
		{
			question: 'Esta optimizada para moviles y velocidad de carga?',
			answer: 'Absolutamente. Disenamos y desarrollamos con enfoque mobile-first. Ademas, optimizamos imagenes, eliminamos codigo innecesario y aplicamos mejores practicas de Core Web Vitals para asegurar una carga rapida que no penalice tu posicionamiento ni tu tasa de conversion.',
		},
		{
			question: 'Incluyen seguimiento de conversiones y analitica?',
			answer: 'Si. Configuramos Google Analytics 4, seguimiento de eventos clave (clics, envios de formulario, scroll depth) y conversiones en Google Ads o Meta Ads si aplica. Asi puedes medir exactamente el rendimiento de tu inversion en trafico.',
		},
		{
			question: 'Que contenido debo preparar yo?',
			answer: 'Necesitas tener clara tu propuesta de valor y, si los tienes, imagenes o videos del producto o servicio. El resto -copywriting, estructura de la pagina, llamados a la accion- lo trabajamos juntos en la etapa de Discovery. No necesitas entregar un brief perfecto para empezar.',
		},
	],
	website: [
		{
			question: 'Cuantas paginas y secciones incluye un sitio web corporativo?',
			answer: 'El alcance se define en la etapa de Discovery segun tus necesidades. Un sitio corporativo tipico incluye Inicio, Sobre nosotros, Servicios (o Productos), Blog y Contacto. Si necesitas mas paginas -casos de estudio, equipo, portafolio- las agregamos al proyecto desde el inicio.',
		},
		{
			question: 'Podre actualizar el contenido sin conocimientos tecnicos?',
			answer: 'Si. Integramos un CMS (gestor de contenidos) que te permite editar textos, imagenes, entradas de blog y mas desde un panel visual sencillo, sin tocar codigo. En la entrega te hacemos una capacitacion para que puedas manejarlo con total autonomia.',
		},
		{
			question: 'El sitio web estara optimizado para SEO desde el inicio?',
			answer: 'Si. Implementamos las bases tecnicas de SEO: estructura semantica HTML, metaetiquetas, Open Graph, esquemas de datos estructurados, sitemap XML y rendimiento de carga optimizado. Si necesitas una estrategia de contenido SEO mas profunda, eso se cotiza por separado.',
		},
		{
			question: 'El proyecto incluye diseno visual o solo desarrollo?',
			answer: 'Incluye ambos por defecto. Disenamos la identidad visual de la web -paleta, tipografia, componentes de UI- a partir de tu branding existente. Si necesitas construir o refinar tu identidad de marca desde cero, tambien lo ofrecemos como servicio adicional.',
		},
		{
			question: 'Ofrecen hosting y dominio, o solo el desarrollo?',
			answer: 'Nos encargamos del desarrollo completo. Para hosting y dominio te recomendamos las mejores opciones segun tu proyecto (Vercel, Netlify, VPS o hosting administrado) y te ayudamos a configurarlo todo. El costo del hosting corre por tu cuenta directamente con el proveedor.',
		},
		{
			question: 'Puedo escalar el sitio con mas funcionalidades en el futuro?',
			answer: 'Si. Construimos sobre arquitecturas modulares y bien documentadas que facilitan el crecimiento. Puedes agregar tienda online, sistema de reservas, area de clientes, integraciones con terceros u otros modulos en cualquier momento sin rehacer todo desde cero.',
		},
	],
	ecommerce: [
		{
			question: 'Que pasarela de pago integran en la tienda?',
			answer: 'Integramos las pasarelas mas utilizadas segun tu mercado: Mercado Pago, Stripe, PayPal, Conekta, ePayco y otras. Si ya tienes contrato con una pasarela especifica, tambien la conectamos. Garantizamos que el proceso de pago sea seguro, fluido y compatible con tarjetas, transferencias y billeteras digitales.',
		},
		{
			question: 'Puedo gestionar el inventario desde un panel de administracion?',
			answer: 'Si. Tendras acceso a un panel de control donde puedes agregar o editar productos, gestionar stock, procesar pedidos, aplicar descuentos y ver reportes de ventas, sin necesidad de conocimientos tecnicos. Te capacitamos en el uso del panel al momento de la entrega.',
		},
		{
			question: 'Cuantos productos puede manejar la tienda sin perder rendimiento?',
			answer: 'La arquitectura que usamos escala eficientemente hasta decenas de miles de productos sin degradacion de rendimiento, siempre que el hosting sea adecuado. Si tienes un catalogo muy grande, lo analizamos en el Discovery para asegurar que la solucion tecnica tenga la capacidad requerida.',
		},
		{
			question: 'El e-commerce esta optimizado para SEO de fichas de producto?',
			answer: 'Si. Implementamos URLs limpias y descriptivas, metaetiquetas por producto, rich snippets con datos estructurados (precio, disponibilidad, valoraciones), carga rapida de imagenes y estructura HTML semantica. Todo listo para que Google indexe y posicione tu catalogo desde el lanzamiento.',
		},
		{
			question: 'Puedo crear descuentos, cupones y campanas promocionales?',
			answer: 'Si. El panel incluye herramientas para definir descuentos por producto, categoria o total del carrito, cupones con condiciones y fechas de vigencia, y precios especiales por volumen o tipo de cliente. Perfectamente integrado con tus campanas de marketing.',
		},
		{
			question: 'Integran con plataformas de envio o marketplaces externos?',
			answer: 'Si. Conectamos la tienda con operadores logisticos (para calculo de envios en tiempo real), sistemas de fulfillment y, si lo requieres, sincronizacion de catalogo con Mercado Libre, Amazon o Instagram Shopping. Cada integracion se evalua en el alcance del proyecto.',
		},
	],
	support: [
		{
			question: 'Que incluye exactamente el plan de mantenimiento?',
			answer: 'Incluye actualizaciones de dependencias y plugins, monitoreo de disponibilidad 24/7, revision mensual de rendimiento y seguridad, backups automaticos, correccion de errores detectados y soporte tecnico para consultas del equipo. El alcance exacto se define segun el plan contratado.',
		},
		{
			question: 'Cual es el tiempo de respuesta ante una incidencia critica?',
			answer: 'Para incidencias criticas -sitio caido o brecha de seguridad- el tiempo de respuesta es de maximo 2 horas en horario laboral extendido. Para errores funcionales no criticos, respondemos dentro de las siguientes 24 horas habiles. El SLA exacto se establece en el contrato.',
		},
		{
			question: 'Pueden encargarse del mantenimiento de un sitio que no desarrollaron?',
			answer: 'Si. Hacemos una auditoria tecnica inicial del sitio para entender su arquitectura, dependencias y estado general. A partir de eso definimos el plan de mantenimiento adecuado y, si hay deuda tecnica importante, te lo comunicamos con transparencia antes de comprometernos.',
		},
		{
			question: 'Con que frecuencia realizan actualizaciones y revisiones?',
			answer: 'Las actualizaciones de seguridad se aplican tan pronto estan disponibles si son criticas, o en ciclos quincenales para actualizaciones regulares. Las revisiones de rendimiento y salud del sitio se hacen mensualmente. Recibiras un reporte con cada ciclo de mantenimiento.',
		},
		{
			question: 'Brindan reportes sobre el rendimiento y estado del sitio?',
			answer: 'Si. Cada mes recibes un informe con el estado del sitio: uptime, velocidad de carga, acciones de mantenimiento realizadas, actualizaciones aplicadas y cualquier anomalia detectada. Asi siempre tienes visibilidad de lo que ocurre con tu plataforma.',
		},
		{
			question: 'Que pasa si mi sitio se cae fuera de horario laboral?',
			answer: 'Nuestro sistema de monitoreo detecta caidas automaticamente y nos alerta de inmediato. Dependiendo del plan, la atencion fuera de horario puede tener un tiempo de respuesta establecido o ser bajo demanda. Si necesitas cobertura 24/7 completa, lo incluimos en el plan premium.',
		},
	],
}

export const serviceFaqTitlesData = {
	'landing-page': {
		eyebrow: 'Preguntas Frecuentes',
		title: 'Dudas sobre tu landing?',
		subtitle: 'Todo lo que necesitas saber antes de arrancar tu pagina de conversion.',
	},
	website: {
		eyebrow: 'Preguntas Frecuentes',
		title: 'Dudas sobre tu sitio web?',
		subtitle: 'Resolvemos las preguntas mas comunes sobre desarrollo de sitios corporativos.',
	},
	ecommerce: {
		eyebrow: 'Preguntas Frecuentes',
		title: 'Dudas sobre tu tienda?',
		subtitle: 'Todo lo que necesitas saber antes de lanzar tu e-commerce.',
	},
	support: {
		eyebrow: 'Preguntas Frecuentes',
		title: 'Dudas sobre el soporte?',
		subtitle: 'Resolvemos las preguntas mas comunes sobre nuestros planes de mantenimiento.',
	},
}

export const processIntroCardsData = [
	{
		icon: '\u{1F50D}',
		stat: '100%',
		title: 'Transparencia total',
		description: 'Te mantenemos informado en cada etapa con reportes claros y comunicacion abierta.',
		accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	},
	{
		icon: '\u{1F680}',
		stat: '+50',
		title: 'Proyectos entregados',
		description: 'Experiencia probada en proyectos de diversas industrias, siempre respetando los plazos.',
		accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
	},
	{
		icon: '\u2B50',
		stat: '98%',
		title: 'Clientes satisfechos',
		description: 'La gran mayoria de nuestros clientes recomiendan nuestros servicios activamente.',
		accent: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
	},
]

export const processIntroFeaturesData = [
	{ icon: '\u{1F4AC}', label: 'Comunicacion constante' },
	{ icon: '\u26A1', label: 'Metodologia agil' },
	{ icon: '\u{1F9F9}', label: 'Codigo limpio y escalable' },
	{ icon: '\u{1F6E1}\uFE0F', label: 'Soporte post-lanzamiento' },
]

export const processFaqsData = [
	{
		question: 'En que etapas se divide el proceso de desarrollo?',
		answer: 'Trabajamos en cuatro fases principales: Discovery (entender el objetivo y definir el alcance), Diseno (wireframes y maquetas en alta fidelidad para tu aprobacion), Desarrollo (construccion tecnica con revisiones parciales) y Lanzamiento (pruebas finales, ajustes y entrega). Cada fase tiene entregables y un punto de aprobacion claro antes de continuar.',
	},
	{
		question: 'Puedo solicitar cambios una vez iniciada una fase?',
		answer: 'Si. Cada fase incluye rondas de revision definidas donde puedes pedir ajustes. Los cambios que caen dentro del alcance acordado no tienen costo adicional. Los que lo amplian se presupuestan de forma transparente antes de ejecutarlos, sin sorpresas.',
	},
	{
		question: 'Como funciona la aprobacion del diseno antes de desarrollar?',
		answer: 'Presentamos el diseno completo en alta fidelidad -con todos los estados, interacciones y versiones movil y desktop- antes de escribir una sola linea de codigo. Solo avanzamos al desarrollo cuando das tu aprobacion. Esto evita retrabajo costoso y garantiza que el resultado final coincida con tus expectativas.',
	},
	{
		question: 'Como se mantiene la comunicacion a lo largo del proyecto?',
		answer: 'Tenemos reuniones de seguimiento semanales por videollamada para revisar avances, resolver dudas y alinear prioridades. Fuera de eso, usamos un canal de comunicacion directo (Slack, WhatsApp o email, segun tu preferencia) para consultas rapidas. Siempre sabras en que punto esta tu proyecto.',
	},
	{
		question: 'Que necesito preparar antes de iniciar el proyecto?',
		answer: 'Solo necesitas tener claro tu objetivo de negocio y, si los tienes, materiales de marca como logo, paleta de colores o guias de estilo. Todo lo demas -estructura, contenidos, estrategia tecnica- lo definimos juntos en la etapa de Discovery. No es necesario saber de tecnologia para trabajar con nosotros.',
	},
	{
		question: 'Que recibo al finalizar el proyecto y como es la entrega?',
		answer: 'Al cerrar el proyecto recibes el codigo fuente completo, acceso total a todos los repositorios, credenciales de las plataformas configuradas y documentacion tecnica basica. Realizamos una sesion de traspaso donde te explicamos como gestionar y actualizar tu proyecto. El primer mes post-lanzamiento incluye correccion de errores sin costo adicional.',
	},
]

export const processStepsData = [
	{
		number: 1,
		icon: '\u{1F50D}',
		title: 'Descubrimiento y Consulta',
		duration: '1 - 2 semanas',
		description: 'Entendemos tu negocio, objetivos y audiencia para sentar las bases del proyecto.',
		items: [
			'Reunion inicial de requisitos',
			'Analisis de competidores y mercado',
			'Definicion de objetivos y KPIs',
			'Propuesta personalizada y presupuesto',
		],
		accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	},
	{
		number: 2,
		icon: '\u270F\uFE0F',
		title: 'Diseno y Estrategia',
		duration: '1 - 2 semanas',
		description: 'Creamos la propuesta visual y tecnica antes de escribir una sola linea de codigo.',
		items: [
			'Wireframes y arquitectura de informacion',
			'Diseno UI en alta fidelidad',
			'Seleccion del stack tecnologico',
			'Prototipo interactivo para aprobacion',
		],
		accent: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
	},
	{
		number: 3,
		icon: '\u26A1',
		title: 'Desarrollo',
		duration: '3 - 8 semanas',
		description: 'Construimos tu proyecto con tecnologia moderna, reportes semanales y total transparencia.',
		items: [
			'Desarrollo frontend y backend',
			'Integraciones con APIs y servicios',
			'Pruebas de rendimiento y seguridad',
			'Revisiones semanales de avance',
		],
		accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
	},
	{
		number: 4,
		icon: '\u{1F504}',
		title: 'Revision y Ajustes',
		duration: '1 semana',
		description: 'Presentamos el producto completo y realizamos ajustes hasta tu plena satisfaccion.',
		items: [
			'Demo completa del producto',
			'Ronda de correcciones y ajustes',
			'Pruebas en multiples dispositivos',
			'Aprobacion final del cliente',
		],
		accent: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
	},
	{
		number: 5,
		icon: '\u{1F680}',
		title: 'Lanzamiento y Soporte',
		duration: 'Continuo',
		description: 'Desplegamos tu proyecto y te acompanamos con soporte continuo para garantizar el exito.',
		items: [
			'Deploy en servidor de produccion',
			'Capacitacion al equipo del cliente',
			'Monitoreo y optimizacion continua',
			'Soporte tecnico prioritario',
		],
		accent: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
	},
]

export const blogCategoriesData = ['Todos', 'Desarrollo Web', 'Diseno UI/UX', 'Backend', 'DevOps']

export const contactSocialsData = [
	{ platform: 'instagram', href: 'https://www.instagram.com/agenciaweb_astrolvl/' },
	{ platform: 'whatsapp', href: 'https://wa.me/5491166232246' },
	{ platform: 'twitter', href: 'https://x.com/webastrolvl' },
	{ platform: 'facebook', href: 'https://www.facebook.com/profile.php?id=61576484442808' },
	{ platform: 'linkedin', href: 'https://www.linkedin.com/in/astro-lvl-agencia-de-desarrollo-digital-b19716368/' },
	{ platform: 'youtube', href: 'https://www.youtube.com/@AstroLvLAgenciaWeb' },
	{ platform: 'tiktok', href: 'https://www.tiktok.com/@astrolvlagenciaweb' },
	{ platform: 'threads', href: 'https://www.threads.com/@agenciaweb_astrolvl' },
]
