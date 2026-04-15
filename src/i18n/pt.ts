import type { I18nDictionary } from "./index";
import { processPagePt } from "./processPagePt";
import { servicesPagePt } from "./servicesPagePt";

export const pt: I18nDictionary = {
  brand: {
    name: "Astro LvL",
    tagline:
      "Elevamos sua presenca digital com solucoes web modernas e orientadas a resultados.",
  },
  header: {
    nav: {
      home: "Inicio",
      services: "Servicos",
      process: "Processo",
      blogs: "Blog",
      contact: "Contato",
    },
    aria: {
      toggleMenu: "Alternar menu de navegacao",
    },
  },
  footer: {
    navigationTitle: "Navegacao",
    servicesTitle: "Servicos",
    contactTitle: "Contato",
    services: {
      landingPage: "Landing Page",
      website: "Site",
      ecommerce: "E-commerce",
      support: "Suporte",
    },
    location: "Buenos Aires, Argentina",
    copyright: "© {year} ASTRO LVL WEB. Todos os direitos reservados.",
    signature: "Desenhado para o futuro digital",
  },
  blog: {
    eyebrow: "Blog",
    latestTitle: "Ultimos artigos",
    latestSubtitle:
      "Explore conteudo sobre desenvolvimento web, design e as ultimas tendencias em tecnologia.",
    readArticleAria: "Ler artigo",
    readArticleCta: "Ler artigo",
    featuredBadge: "Post em destaque",
    mostReadTitle: "Mais lidos",
    readTimeSuffix: "min de leitura",
  },
  language: {
    current: "Idioma",
    options: {
      en: "Ingles",
      es: "Espanhol",
      pt: "Portugues",
    },
  },
  contact: {
    heroTitle: "Entre em contato",
    heroSubtitle: "Estamos aqui para tornar seu projeto digital realidade",
    formTitle: "Envie-nos uma mensagem",
    rightTitle: "Vamos conversar quando quiser",
    rightSubtitle: "Escolha o canal que preferir. Respondemos em menos de 24 horas.",
    socialsLabel: "Siga-nos",
    cards: {
      whatsappLabel: "WhatsApp",
      whatsappButton: "Escrever no WhatsApp",
      emailLabel: "Email",
      emailButton: "Enviar um email",
      instagramLabel: "Instagram",
      instagramButton: "Ver perfil",
    },
    services: {
      landing: "Landing Page",
      ecommerce: "E-commerce",
      web: "Site",
      soporte: "Suporte",
      otro: "Outro",
    },
    form: {
      nameLabel: "Nome completo",
      namePlaceholder: "Digite seu nome",
      emailLabel: "Email",
      emailPlaceholder: "Digite seu email",
      serviceLabel: "Tipo de servico",
      servicePlaceholder: "Selecione um servico",
      messageLabel: "Mensagem",
      messagePlaceholder: "Digite sua mensagem...",
      submitText: "Enviar mensagem",
      submittingText: "Enviando...",
      unknownError: "Erro desconhecido. Tente novamente.",
      successTitle: "Mensagem enviada!",
      successMessage: "Obrigado por entrar em contato. Responderemos em menos de 24 horas.",
      successReset: "Enviar outra mensagem",
    },
    validation: {
      nameRequired: "O nome e obrigatorio",
      nameMin: "O nome deve ter pelo menos 3 caracteres",
      emailRequired: "O email e obrigatorio",
      emailInvalid: "Digite um email valido",
      serviceRequired: "Selecione um servico",
      serviceInvalid: "Selecione um servico valido",
      messageRequired: "A mensagem e obrigatoria",
      messageMin: "A mensagem deve ter pelo menos 20 caracteres",
    },
  },
  home: {
    hero: {
      badge: "Tecnologia com visao",
      title: "Elevamos sua presenca digital para o proximo nivel",
      subtitle: "Desenvolvimento web futurista para empresas visionarias",
      servicesButton: "Explorar servicos",
      contactButton: "Contato",
    },
    intro: {
      label: "Sobre nos",
      titleStart: "Transformamos ideias em",
      titleHighlight: "realidade digital",
      paragraphOne:
        "Na ASTRO LVL WEB, somos uma equipe apaixonada por criar experiencias digitais unicas. Combinamos design de ponta e tecnologia moderna para levar seu negocio ao proximo nivel.",
      paragraphTwo:
        "De startups inovadoras a empresas consolidadas, ajudamos nossos clientes a se destacar no mundo digital com solucoes personalizadas e escalaveis.",
      tags: [
        "Inovacao constante",
        "Design de vanguarda",
        "Tecnologia moderna",
        "Escalabilidade total",
      ],
      stats: {
        projectsLabel: "Projetos",
        clientsLabel: "Clientes",
        experienceLabel: "Anos exp.",
      },
    },
    faqs: {
      eyebrow: "Perguntas frequentes",
      title: "Respostas que voce precisa",
      subtitle:
        "Esclarecemos as duvidas mais comuns antes mesmo de voce perguntar. Se algo faltar, estamos a uma mensagem de distancia.",
      items: [
        {
          question: "Quanto custa desenvolver um projeto web?",
          answer:
            "Cada projeto e diferente, por isso nao trabalhamos com valores fixos. Depois de uma breve reuniao para entender seu objetivo, enviamos um orcamento claro e detalhado sem compromisso.",
        },
        {
          question: "Com quais tecnologias voces trabalham?",
          answer:
            "Usamos tecnologias modernas e comprovadas conforme cada projeto: Astro, Next.js ou React para frontend; Node.js com PostgreSQL ou MongoDB para backend; e Shopify para e-commerce quando for a melhor opcao.",
        },
        {
          question: "Vocês atendem clientes de qualquer pais?",
          answer:
            "Sim, trabalhamos 100% remoto com clientes na America Latina, Espanha e Estados Unidos. Adaptamos horarios para facilitar a comunicacao.",
        },
        {
          question: "Vocês oferecem design, desenvolvimento ou ambos?",
          answer:
            "Oferecemos ambos. Cuidamos de UI/UX, arquitetura tecnica e desenvolvimento completo. Tambem podemos atuar apenas no design ou apenas no desenvolvimento.",
        },
        {
          question: "Como protegem a confidencialidade do meu projeto?",
          answer:
            "Assinamos NDA antes de qualquer conversa tecnica. Codigo, dados e documentos pertencem exclusivamente ao cliente.",
        },
        {
          question: "Em que voces se diferenciam de outras agencias ou freelancers?",
          answer:
            "Focamos em resultados de negocio, nao apenas em entregas. Trabalhamos com equipes pequenas e especializadas, sem intermediarios e sem surpresas no orcamento.",
        },
        {
          question: "Como comeco a trabalhar com voces?",
          answer:
            "O primeiro passo e uma reuniao gratuita de 20 a 30 minutos para entender seu projeto e avaliar se somos o time ideal.",
        },
      ],
    },
  },
  process: {
    hero: {
      badge: "Metodologia comprovada",
      titleStart: "Nosso",
      titleHighlight: "processo",
      titleEnd: "de trabalho",
      subtitle: "Metodologia clara e transparente para resultados excepcionais em cada projeto",
      stats: {
        phasesLabel: "Fases do processo",
        transparencyLabel: "Transparencia",
        projectsLabel: "Projetos concluidos",
      },
      cards: [
        {
          id: 1,
          phase: "Fase 01",
          title: "Descoberta",
          description: "Analise profunda dos seus objetivos, concorrencia e publico para construir a estrategia ideal.",
          tags: ["Analise", "Estrategia", "Pesquisa"],
        },
        {
          id: 2,
          phase: "Fase 02",
          title: "Design e estrategia",
          description: "Criamos a proposta visual e tecnica que representa sua marca e conecta com seu publico.",
          tags: ["UI/UX", "Wireframes", "Prototipo"],
        },
        {
          id: 3,
          phase: "Fase 03",
          title: "Desenvolvimento",
          description: "Construimos e implementamos seu projeto com tecnologia moderna e codigo limpo.",
          tags: ["Frontend", "Backend", "Otimizacao"],
        },
        {
          id: 4,
          phase: "Fase 04",
          title: "Lancamento",
          description: "Entregamos, capacitamos e oferecemos suporte continuo para garantir sucesso no longo prazo.",
          tags: ["Deploy", "Suporte", "Growth"],
        },
      ],
    },
    steps: {
      label: "Passo a passo",
      titleStart: "Etapas do",
      titleHighlight: "processo",
      subtitle: "Cada fase e desenhada para maximizar qualidade e minimizar riscos",
    },
  },
  servicesGeneral: {
    hero: {
      badge: "Servicos web premium",
      title: "Solucoes digitais desenhadas para escalar seu negocio",
      description:
        "Construimos sites estrategicos, ecommerce e experiencias digitais focadas em crescimento e resultados mensuraveis.",
      exploreButton: "Explorar servicos",
      contactButton: "Falar conosco",
    },
    whyChoose: {
      title: "Por que nos escolher?",
      subtitle:
        "Somos muito mais que uma agencia de desenvolvimento web. Somos seu parceiro de crescimento digital.",
      items: [
        {
          icon: "⚡",
          title: "Rapido e eficiente",
          description:
            "Entregamos projetos de qualidade no prazo combinado, sem comprometer a excelencia.",
        },
        {
          icon: "🎨",
          title: "Design moderno",
          description:
            "Criamos interfaces atraentes, intuitivas e alinhadas com as tendencias atuais.",
        },
        {
          icon: "📱",
          title: "Responsivo",
          description:
            "Seu site fica perfeito em qualquer dispositivo: celular, tablet ou desktop.",
        },
        {
          icon: "🔍",
          title: "SEO otimizado",
          description:
            "Melhoramos sua visibilidade nos buscadores para que seus clientes encontrem voce mais facil.",
        },
        {
          icon: "🛡️",
          title: "Seguro e confiavel",
          description:
            "Aplicamos as melhores praticas de seguranca para proteger seu negocio.",
        },
        {
          icon: "💬",
          title: "Suporte continuo",
          description:
            "Nao abandonamos seu projeto apos o lancamento. Estamos com voce sempre.",
        },
      ],
    },
    process: {
      title: "Nosso processo de trabalho",
      subtitle: "Uma abordagem estruturada e flexivel para garantir seu sucesso",
      steps: [
        {
          title: "Consulta e analise",
          description: "Entendemos suas necessidades, objetivos e visao para o projeto.",
        },
        {
          title: "Estrategia e design",
          description: "Criamos um plano detalhado e um direcionamento visual de alta qualidade.",
        },
        {
          title: "Desenvolvimento",
          description: "Construimos seu site com tecnologia moderna e melhores praticas.",
        },
        {
          title: "Testes e QA",
          description: "Realizamos testes completos para garantir qualidade e seguranca.",
        },
        {
          title: "Lancamento e suporte",
          description: "Publicamos e oferecemos suporte continuo para manter seu crescimento.",
        },
      ],
    },
    cta: {
      title: "Pronto para transformar sua presenca digital?",
      subtitle: "Deixe-nos ajudar a encontrar a solucao ideal para seu negocio",
      button: "Comece seu projeto hoje",
    },
  },
  servicesHome: {
    title: "Nossos servicos",
    subtitle: "Solucoes completas para levar sua presenca digital ao proximo nivel",
    cardMore: "Ver mais",
    cards: [
      {
        slug: "landing-page",
        title: "LANDING PAGE",
        price: "$100.000 ARS",
        description: "Uma pagina unica, moderna e otimizada para apresentar seu negocio ou produto com eficiencia.",
        tags: [
          "Design responsivo",
          "Copy de conversao",
          "Formulario de contato",
          "SEO basico",
          "Carregamento rapido",
          "Botao de WhatsApp",
          "Integracao com redes sociais",
        ],
      },
      {
        slug: "website",
        title: "WEB SITE",
        price: "$180.000 ARS",
        description: "Site multipagina para mostrar sua marca, servicos e proposta de valor com presenca profissional.",
        tags: [
          "Ate 5 secoes",
          "Design personalizado",
          "Integracao com WhatsApp",
          "Otimizacao de velocidade",
          "Galeria de imagens",
          "Mapa de localizacao",
          "Formulario de contato",
        ],
      },
      {
        slug: "ecommerce",
        title: "E-COMMERCE",
        price: "$300.000 ARS",
        description: "Loja online pronta para vender, com catalogo, carrinho e checkout claro para seus clientes.",
        tags: [
          "Catalogo de produtos",
          "Carrinho e checkout",
          "Meios de pagamento",
          "Painel autogerenciavel",
          "Gestao de estoque",
          "Cupons de desconto",
          "Emails automaticos",
        ],
      },
      {
        slug: "support",
        title: "SUPPORT",
        price: "$50.000 ARS",
        description: "Manutencao e suporte continuo para manter seu site atualizado, seguro e funcionando com alto desempenho.",
        tags: [
          "Atualizacoes mensais",
          "Correcao de erros",
          "Monitoramento basico",
          "Suporte tecnico",
          "Backups regulares",
          "Melhorias de performance",
          "Atendimento por WhatsApp",
        ],
      },
    ],
  },
  processPage: processPagePt,
  servicesPage: servicesPagePt,
};
