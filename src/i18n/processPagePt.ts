import type { I18nDictionary } from "./index";

export const processPagePt: I18nDictionary["processPage"] = {
  intro: {
    label: "Por que nos escolher",
    titleStart: "Por que nosso",
    titleHighlight: "processo funciona",
    subtitle: "Pilares essenciais que garantem o sucesso de cada projeto",
    cards: [
      {
        icon: "🔍",
        stat: "100%",
        title: "Transparencia total",
        description:
          "Mantemos voce informado em cada etapa com relatorios claros e comunicacao aberta.",
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        icon: "🚀",
        stat: "+50",
        title: "Projetos entregues",
        description:
          "Experiencia comprovada em diferentes setores, sempre cumprindo os prazos combinados.",
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        icon: "⭐",
        stat: "98%",
        title: "Clientes satisfeitos",
        description:
          "A maioria dos nossos clientes recomenda nossos servicos ativamente.",
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
    ],
    features: [
      { icon: "💬", label: "Comunicacao constante" },
      { icon: "⚡", label: "Metodologia agil" },
      { icon: "🧹", label: "Codigo limpo e escalavel" },
      { icon: "🛡️", label: "Suporte pos-lancamento" },
    ],
  },
  faqs: {
    eyebrow: "Perguntas do processo",
    title: "Como trabalhamos, passo a passo",
    subtitleLine1:
      "Tudo o que voce precisa saber sobre nosso fluxo de trabalho antes de comecar.",
    subtitleLine2: "Se algo faltar, fale com a gente.",
    cta: "Falar com a equipe",
    items: [
      {
        question: "Em quais etapas o processo de desenvolvimento e dividido?",
        answer:
          "Trabalhamos em quatro fases principais: Discovery, Design, Desenvolvimento e Lancamento. Cada fase tem entregaveis claros e um ponto de aprovacao antes de avancar.",
      },
      {
        question: "Posso pedir alteracoes depois que uma fase comecar?",
        answer:
          "Sim. Cada fase inclui rodadas de revisao definidas. Alteracoes dentro do escopo acordado estao incluidas; expansoes de escopo sao orcadas antes da execucao.",
      },
      {
        question: "Como funciona a aprovacao do design antes do desenvolvimento?",
        answer:
          "Apresentamos o design completo em alta fidelidade antes de escrever codigo. So avancamos para o desenvolvimento com sua aprovacao.",
      },
      {
        question: "Como a comunicacao e mantida durante o projeto?",
        answer:
          "Fazemos reunioes semanais de acompanhamento e mantemos um canal direto para duvidas rapidas.",
      },
      {
        question: "O que preciso preparar antes de iniciar o projeto?",
        answer:
          "Voce so precisa de clareza sobre seu objetivo de negocio e, se tiver, materiais de marca. O restante definimos juntos na fase de Discovery.",
      },
      {
        question: "O que recebo ao final do projeto?",
        answer:
          "Voce recebe codigo-fonte, credenciais e documentacao basica, alem de uma sessao de handoff para sua equipe operar com seguranca.",
      },
    ],
  },
  steps: {
    label: "Passo a passo",
    titleStart: "Etapas do",
    titleHighlight: "processo",
    subtitle: "Cada fase e desenhada para maximizar qualidade e minimizar riscos",
    items: [
      {
        number: 1,
        icon: "🔍",
        title: "Descoberta e consulta",
        duration: "1 - 2 semanas",
        description:
          "Entendemos seu negocio, objetivos e publico para construir bases solidas para o projeto.",
        items: [
          "Reuniao inicial de requisitos",
          "Analise de concorrentes e mercado",
          "Definicao de objetivos e KPIs",
          "Proposta personalizada e orcamento",
        ],
        accent: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        number: 2,
        icon: "✏️",
        title: "Design e estrategia",
        duration: "1 - 2 semanas",
        description:
          "Criamos a direcao visual e tecnica antes de escrever uma unica linha de codigo.",
        items: [
          "Wireframes e arquitetura da informacao",
          "Design UI em alta fidelidade",
          "Selecao do stack tecnologico",
          "Prototipo interativo para aprovacao",
        ],
        accent: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
      {
        number: 3,
        icon: "⚡",
        title: "Desenvolvimento",
        duration: "3 - 8 semanas",
        description:
          "Construimos seu projeto com tecnologia moderna, relatorios semanais e total transparencia.",
        items: [
          "Desenvolvimento frontend e backend",
          "Integracoes com APIs e servicos",
          "Testes de performance e seguranca",
          "Revisoes semanais de progresso",
        ],
        accent: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        number: 4,
        icon: "🔄",
        title: "Revisao e ajustes",
        duration: "1 semana",
        description:
          "Apresentamos o produto completo e aplicamos ajustes ate sua aprovacao final.",
        items: [
          "Demo completa do produto",
          "Rodada de correcoes e ajustes",
          "Testes em multiplos dispositivos",
          "Aprovacao final do cliente",
        ],
        accent: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
      {
        number: 5,
        icon: "🚀",
        title: "Lancamento e suporte",
        duration: "Continuo",
        description:
          "Publicamos seu projeto e seguimos com suporte para garantir sucesso no longo prazo.",
        items: [
          "Deploy em producao",
          "Treinamento da equipe do cliente",
          "Monitoramento e otimizacao continua",
          "Suporte tecnico prioritario",
        ],
        accent: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      },
    ],
  },
};
