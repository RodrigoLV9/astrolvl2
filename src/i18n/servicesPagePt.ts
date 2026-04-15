import type { I18nDictionary } from "./index";

export const servicesPagePt: I18nDictionary["servicesPage"] = {
  hero: {
    "landing-page": {
      badge: "Landing Page",
      title: "Paginas desenhadas para converter, nao apenas impressionar",
      description:
        "Criamos landing pages de alto desempenho que guiam o visitante para uma unica acao: comprar, se cadastrar ou entrar em contato. Sem distracoes, com resultados mensuraveis desde o primeiro dia.",
      tags: ["Alta Conversao", "Mobile First", "SEO Otimizado", "A/B Testing"],
      primaryCTA: "Quero minha landing page",
      secondaryCTA: "Ver processo",
    },
    website: {
      badge: "Site Corporativo",
      title: "Sua presenca digital construida para gerar confianca",
      description:
        "Desenhamos sites corporativos com identidade visual solida, CMS integrado e arquitetura que escala com sua empresa. Um projeto turnkey do design ao lancamento.",
      tags: ["Design UI/UX", "CMS Integrado", "SEO Tecnico", "Escalavel"],
      primaryCTA: "Quero meu site",
      secondaryCTA: "Ver processo",
    },
    ecommerce: {
      badge: "E-commerce",
      title: "Sua loja online pronta para vender 24 horas por dia",
      description:
        "Desenvolvemos lojas online robustas com gestao de inventario, multiplas gateways de pagamento e SEO por produto. Seu canal digital de vendas otimizado para converter e escalar.",
      tags: ["Checkout Seguro", "Gestao de Estoque", "SEO de Produtos", "Analitica"],
      primaryCTA: "Quero minha loja online",
      secondaryCTA: "Ver processo",
    },
    support: {
      badge: "Suporte e Manutencao",
      title: "Sua plataforma ativa, segura e em condicoes ideais",
      description:
        "Atualizacoes, backups automaticos, monitoramento continuo e resposta rapida a incidentes. Seu site em maos especialistas para voce focar no crescimento do negocio.",
      tags: ["Monitoramento 24/7", "Atualizacoes", "Seguranca", "Relatorios Mensais"],
      primaryCTA: "Quero plano de suporte",
      secondaryCTA: "Ver processo",
    },
  },
  description: {
    "landing-page": {
      eyebrow: "O que inclui",
      heading: "Tudo que sua landing page precisa para converter",
      subtitle: "Um projeto turnkey: do conceito a analitica pos-lancamento.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
          imgAlt: "Designer trabalhando em wireframes de landing page",
          cards: [
            { title: "Copywriting persuasivo", description: "Escrevemos o texto da pagina orientado a acao: headlines fortes, beneficios claros e CTAs que convertem." },
            { title: "Design UI de alta fidelidade", description: "Mockup completo antes do desenvolvimento. Veja exatamente como sua landing ficara antes de escrever codigo." },
            { title: "Formularios e integracoes", description: "Lead forms conectados ao seu CRM ou ferramenta de email marketing. Cada lead vai direto para seu pipeline." },
            { title: "Pronto para A/B testing", description: "Estrutura modular preparada para testar variacoes de headline, CTA ou imagem sem quebrar nada." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          imgAlt: "Laptop exibindo metricas de analitica web",
          cards: [
            { title: "Pixel e conversoes configurados", description: "Meta Pixel, Google Ads e GA4 prontos desde o lancamento para medir o retorno do investimento em anuncios." },
            { title: "SEO on-page otimizado", description: "Meta tags, estrutura semantica e velocidade configuradas para facilitar indexacao e posicionamento." },
            { title: "Mobile-first responsivo", description: "Desenhada primeiro para mobile e adaptada a qualquer dispositivo sem perder conversao." },
            { title: "Hospedagem e deploy", description: "Ajudamos a escolher a hospedagem ideal e configuramos deploy automatico para manter estabilidade." },
          ],
        },
      ],
    },
    website: {
      eyebrow: "O que inclui",
      heading: "Um site corporativo completo, turnkey",
      subtitle: "Design, desenvolvimento, CMS e SEO tecnico em um unico projeto.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
          imgAlt: "Design de interface em uma tela",
          cards: [
            { title: "Design UI/UX personalizado", description: "Paleta, tipografia e componentes visuais alinhados a sua marca. Nao usamos templates genericos." },
            { title: "CMS integrado sem codigo", description: "Sua equipe pode criar e editar conteudo, publicar artigos e inserir imagens em um painel visual intuitivo." },
            { title: "Sistema de blog incluido", description: "Publicacoes com categorias, tags, autores e SEO por artigo. Seu canal de conteudo pronto para crescer." },
            { title: "Paginas ilimitadas", description: "Inicio, Servicos, Sobre, Equipe, Cases, Contato e as paginas adicionais definidas no escopo." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
          imgAlt: "Tela com codigo e ferramentas de desenvolvimento",
          cards: [
            { title: "SEO tecnico desde o inicio", description: "HTML5 semantico, Open Graph, dados estruturados Schema.org e sitemap XML configurados." },
            { title: "Performance otimizada", description: "Lazy loading, minificacao e Core Web Vitals otimizados para uma experiencia rapida que fortalece o SEO." },
            { title: "Integracoes com terceiros", description: "CRM, chat ao vivo, formularios, Google Analytics e qualquer ferramenta externa ja usada pelo seu time." },
            { title: "Suporte pos-lancamento", description: "30 dias de suporte tecnico incluidos para ajustes e incidentes apos a publicacao." },
          ],
        },
      ],
    },
    ecommerce: {
      eyebrow: "O que inclui",
      heading: "Sua loja online pronta para vender desde o primeiro dia",
      subtitle: "Catalogo, pagamentos, logistica e analitica configurados antes do lancamento.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
          imgAlt: "Mao segurando celular com aplicativo de compras",
          cards: [
            { title: "Catalogo e variacoes", description: "Publique produtos com multiplas imagens, variacoes, descricao SEO e preco. Sem limite de SKUs." },
            { title: "Gateways de pagamento integradas", description: "Stripe, MercadoPago, PayPal e mais. Configuramos a melhor opcao para seu mercado." },
            { title: "Gestao de estoque e inventario", description: "Controle de estoque em tempo real, alertas de baixo inventario e ajustes pelo painel administrativo." },
            { title: "Cupons e descontos", description: "Regras de desconto por produto, categoria ou total do carrinho com validade e condicoes configuraveis." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
          imgAlt: "Tela de laptop com dashboard de vendas online",
          cards: [
            { title: "SEO para paginas de produto", description: "URLs limpas, meta tags e rich snippets para melhorar indexacao e ranking de cada produto." },
            { title: "Checkout em fluxo unico", description: "Compra simplificada com validacao de estoque, calculo de frete e confirmacao automatica por email." },
            { title: "Analitica e relatorios de vendas", description: "Dashboard com receita, taxa de conversao, produtos mais vendidos e abandono de carrinho." },
            { title: "Integracao logistica", description: "Conexao com transportadoras para custos em tempo real e geracao automatica de etiquetas." },
          ],
        },
      ],
    },
    support: {
      eyebrow: "O que inclui",
      heading: "Manutencao proativa, nao reativa",
      subtitle: "Nao esperamos falhas acontecerem. Agimos antes que impactem seu negocio.",
      sections: [
        {
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          imgAlt: "Painel de monitoramento com metricas de servidor",
          cards: [
            { title: "Monitoramento de disponibilidade 24/7", description: "Alertas automaticos de queda e tempo de resposta garantido para reduzir indisponibilidade." },
            { title: "Atualizacoes de dependencias", description: "Mantemos plugins, frameworks e bibliotecas atualizados para evitar vulnerabilidades conhecidas." },
            { title: "Backups diarios automaticos", description: "Copias agendadas do site e banco de dados com armazenamento externo para recuperacao segura." },
            { title: "Patches de seguranca prioritarios", description: "Vulnerabilidades criticas sao corrigidas em ate 24 horas apos divulgacao." },
          ],
        },
        {
          img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
          imgAlt: "Equipe de suporte tecnico analisando relatorios em telas",
          cards: [
            { title: "Revisao mensal de performance", description: "Auditoria de velocidade, Core Web Vitals e saude tecnica com recomendacoes no relatorio mensal." },
            { title: "Auditoria tecnica inicial", description: "Se nao desenvolvemos seu site, realizamos auditoria completa antes de assumir o suporte." },
            { title: "Suporte para sua equipe", description: "Canal direto para duvidas tecnicas, solicitacoes menores e registro de anomalias." },
            { title: "Relatorio mensal detalhado", description: "Relatorio com uptime, atividades, velocidade, atualizacoes aplicadas e proximas recomendacoes." },
          ],
        },
      ],
    },
  },
  process: {
    "landing-page": {
      eyebrow: "Processo",
      heading: "Da ideia ao lancamento em 5 passos",
      subtitle:
        "Um processo claro, sem surpresas e com entregas parciais para voce sempre saber em que etapa estamos.",
      steps: [
        { n: 1, title: "Discovery", description: "Definimos objetivo de conversao, publico-alvo, proposta de valor e metricas de sucesso. A base de tudo que vem depois." },
        { n: 2, title: "Copywriting", description: "Redigimos headlines, subtitulos, beneficios e CTAs otimizados para sua audiencia antes do design." },
        { n: 3, title: "Design UI", description: "Criamos o mockup em alta fidelidade. Voce revisa e aprova antes de escrevermos codigo." },
        { n: 4, title: "Desenvolvimento", description: "Construimos a landing page com codigo limpo, performance otimizada e integracoes configuradas." },
        { n: 5, title: "Lancamento", description: "Publicamos, configuramos analitica, validamos tudo e entregamos acessos e orientacoes de uso." },
      ],
    },
    website: {
      eyebrow: "Processo",
      heading: "Como construimos seu site",
      subtitle:
        "Cinco fases que garantem design alinhado a marca, desenvolvimento solido e lancamento sem friccao.",
      steps: [
        { n: 1, title: "Discovery", description: "Mapeamos sua marca, objetivos de negocio, concorrencia e escopo. Definimos paginas, funcionalidades e arquitetura da informacao." },
        { n: 2, title: "Design UI/UX", description: "Wireframes e mockup completo do site. Desenhamos componentes e fluxo de usuario antes do desenvolvimento." },
        { n: 3, title: "Desenvolvimento", description: "Construimos o site com CMS integrado, SEO tecnico configurado e codigo que escala com sua empresa." },
        { n: 4, title: "Conteudo e QA", description: "Publicamos o conteudo fornecido e realizamos testes de usabilidade, performance e compatibilidade cross-browser." },
        { n: 5, title: "Lancamento", description: "Configuramos dominio, SSL, hospedagem, redirecionamentos e validacoes finais antes da publicacao." },
      ],
    },
    ecommerce: {
      eyebrow: "Processo",
      heading: "De catalogo vazio a loja pronta para vender",
      subtitle:
        "Cada etapa possui entregaveis concretos para acompanhar a evolucao e dar feedback no momento certo.",
      steps: [
        { n: 1, title: "Discovery", description: "Definimos catalogo, gateways de pagamento, integracoes logisticas e regras de negocio antes de desenhar ou desenvolver." },
        { n: 2, title: "Design UI/UX", description: "Desenhamos o fluxo completo: home, pagina de produto, carrinho e checkout. Voce aprova antes do desenvolvimento." },
        { n: 3, title: "Desenvolvimento", description: "Construimos a loja, integramos pagamentos, configuramos inventario e aplicamos SEO por produto." },
        { n: 4, title: "Carga de dados", description: "Importamos seu catalogo e configuramos categorias, precos, variacoes e metodos de envio de acordo com suas regras." },
        { n: 5, title: "Lancamento", description: "Executamos testes completos de compra, validamos analitica e publicamos com tudo aprovado." },
      ],
    },
    support: {
      eyebrow: "Processo",
      heading: "Como funciona nosso suporte",
      subtitle:
        "Um ciclo mensal previsivel que mantem seu site em otimas condicoes sem sobrecarregar sua equipe.",
      steps: [
        { n: 1, title: "Auditoria inicial", description: "Se nao desenvolvemos seu site, auditamos estado tecnico, dependencias e vulnerabilidades antes de assumir o suporte." },
        { n: 2, title: "Monitoramento ativo", description: "Ativamos monitoramento de disponibilidade e performance para detectar incidentes antes de afetar usuarios." },
        { n: 3, title: "Manutencao mensal", description: "Atualizamos dependencias, aplicamos patches de seguranca, realizamos backups e revisamos performance." },
        { n: 4, title: "Resolucao de incidentes", description: "Para falhas funcionais ou quedas, respondemos conforme SLA com diagnostico e solucao documentados." },
        { n: 5, title: "Relatorio mensal", description: "Voce recebe um relatorio completo com atividades, estado da plataforma e recomendacoes para o proximo periodo." },
      ],
    },
  },
  cardsIntro: {
    "landing-page": {
      eyebrow: "Por que nos escolher?",
      heading: "Tres pilares que fazem a diferenca",
      subtitle:
        "Nao criamos apenas paginas bonitas. Construimos ferramentas de conversao mensuraveis desde o primeiro dia.",
      cards: [
        {
          title: "Desenhada para converter",
          description:
            "Cada elemento, headline, CTA e fluxo visual e construido para guiar o visitante ate a acao principal.",
        },
        {
          title: "Analitica desde o dia 1",
          description:
            "Integramos GA4, rastreamento de eventos e conversoes em anuncios para medir o ROI de cada campanha.",
        },
        {
          title: "Mobile-first e rapida",
          description:
            "Pontuacao 90+ em Core Web Vitals. Otimizada para ranquear melhor e reduzir abandono.",
        },
      ],
    },
    website: {
      eyebrow: "Por que nos escolher?",
      heading: "O que diferencia um site que cresce",
      subtitle: "Um site e tao bom quanto a estrategia por tras dele. Aqui esta a nossa.",
      cards: [
        {
          title: "CMS para sua equipe",
          description:
            "Edite textos, imagens e publicacoes sem tocar em codigo, em um painel visual intuitivo.",
        },
        {
          title: "SEO tecnico incluido",
          description:
            "Estrutura semantica, meta tags e sitemap prontos para escalar nos buscadores.",
        },
        {
          title: "Performance otimizada",
          description:
            "Arquitetura modular, imagens comprimidas e carregamento tardio para uma experiencia rapida.",
        },
      ],
    },
    ecommerce: {
      eyebrow: "Por que nos escolher?",
      heading: "As bases de uma loja que vende",
      subtitle:
        "Tecnologia, experiencia de compra e visibilidade nos buscadores: os fatores que definem resultados.",
      cards: [
        {
          title: "Multipla gateway de pagamento",
          description:
            "Stripe, MercadoPago, PayPal e mais. Integradas com seguranca PCI e checkout sem friccao.",
        },
        {
          title: "Catalogo sem limites",
          description:
            "Gerencie produtos, variacoes, imagens e estoque em um painel centralizado.",
        },
        {
          title: "SEO de produto incluido",
          description:
            "URLs limpas e meta tags por produto para o Google indexar e posicionar seu catalogo.",
        },
      ],
    },
    support: {
      eyebrow: "Por que nos escolher?",
      heading: "Manutencao que previne, nao apenas corrige",
      subtitle: "A maioria age quando algo quebra. Nos trabalhamos para que nada quebre.",
      cards: [
        {
          title: "Monitoramento continuo",
          description:
            "Detectamos quedas em segundos e respondemos imediatamente antes que seus usuarios percebam.",
        },
        {
          title: "Backups e seguranca",
          description:
            "Backups diarios, patches prioritarios e escaneamento de vulnerabilidades incluidos.",
        },
        {
          title: "Relatorio mensal detalhado",
          description:
            "Voce recebe um relatorio mensal com uptime, velocidade e acoes realizadas.",
        },
      ],
    },
  },
  intro: {
    "landing-page": {
      eyebrow: "O que e uma landing page?",
      heading: "Uma pagina. Um objetivo. Maximos resultados.",
      body:
        "Uma landing page e uma pagina de proposito unico: converter visitantes em leads, assinantes ou clientes.",
      bullets: [
        "Sem menus ou links que distraiam o visitante",
        "Cada secao construida para levar ao CTA",
        "Mensuravel desde o primeiro dia com analitica integrada",
      ],
      badge: { value: "3x", label: "mais conversao", sub: "vs. homepage" },
      imageAlt: "Dashboard analitico mostrando metricas de conversao",
    },
    website: {
      eyebrow: "O que e um site corporativo?",
      heading: "Seu ativo digital mais importante, construido para durar.",
      body:
        "Um site corporativo transmite credibilidade, apresenta sua oferta com clareza e gera conversoes constantes.",
      bullets: [
        "CMS integrado: sua equipe edita sem codigo",
        "SEO tecnico completo desde a primeira linha",
        "Arquitetura modular que cresce com sua empresa",
      ],
      badge: { value: "70%", label: "dos compradores", sub: "buscam no Google primeiro" },
      imageAlt: "Design de site corporativo em uma tela",
    },
    ecommerce: {
      eyebrow: "O que e um e-commerce sob medida?",
      heading: "Seu canal de vendas digital, aberto 24 horas.",
      body:
        "Um e-commerce sob medida integra pagamentos, gerencia estoque e otimiza SEO por produto para vender e escalar.",
      bullets: [
        "Gateways de pagamento adaptadas ao seu mercado",
        "SEO por produto para atrair trafego organico",
        "Painel administrativo sem curva de aprendizado",
      ],
      badge: { value: "24/7", label: "vendas ativas", sub: "sem intervencao manual" },
      imageAlt: "Loja online com catalogo de produtos e carrinho",
    },
    support: {
      eyebrow: "O que cobre o suporte tecnico?",
      heading: "Seu site sempre online. Nos cuidamos disso.",
      body:
        "A manutencao web cobre atualizacoes, seguranca e monitoramento continuo para reduzir riscos reais.",
      bullets: [
        "Alertas automaticos de queda antes de voce notar",
        "Patches de seguranca aplicados em menos de 24 h",
        "Relatorio mensal com tudo o que ocorreu na sua plataforma",
      ],
      badge: { value: "99.9%", label: "uptime", sub: "garantido por SLA" },
      imageAlt: "Data center com servidores monitorados",
    },
  },
  features: {
    "landing-page": {
      heading: "Tudo incluido na sua landing page",
      subtitle: "Sem custos ocultos. Sem surpresas. Cada item entregue e documentado.",
      features: [
        "Design UI/UX de alta fidelidade",
        "Copywriting persuasivo incluido",
        "Implementacao responsive mobile-first",
        "Core Web Vitals 90+ garantido",
        "Integracao com CRM e email marketing",
        "Meta Pixel e Google Ads configurados",
        "Google Analytics 4 + eventos chave",
        "Formularios de captura de leads",
        "SEO on-page otimizado",
        "Dominio e hospedagem configurados",
        "SSL incluido",
        "Suporte de 30 dias pos-lancamento",
      ],
    },
    website: {
      heading: "Tudo incluido no seu site corporativo",
      subtitle:
        "Design, desenvolvimento e lancamento. Sem freelancers extras nem ferramentas pagas externas.",
      features: [
        "Design UI/UX personalizado",
        "Paginas conforme escopo acordado",
        "CMS integrado (edicao sem codigo)",
        "Sistema de blog com SEO por artigo",
        "SEO tecnico on-page completo",
        "Dados estruturados (Schema.org)",
        "Open Graph e meta tags",
        "Sitemap XML e robots.txt",
        "Core Web Vitals otimizados",
        "Integracoes com ferramentas externas",
        "SSL e configuracao de dominio",
        "Treinamento de uso do CMS incluido",
      ],
    },
    ecommerce: {
      heading: "Tudo incluido na sua loja online",
      subtitle:
        "Do catalogo a analitica de vendas, tudo pronto antes do lancamento.",
      features: [
        "Catalogo com variacoes ilimitadas",
        "Multiplas gateways de pagamento",
        "Gestao de estoque e inventario",
        "Sistema de cupons e descontos",
        "Checkout em uma unica pagina",
        "Confirmacao automatica por email",
        "SEO por produto",
        "Rich snippets com preco e disponibilidade",
        "Dashboard de vendas e receita",
        "Relatorios de abandono de carrinho",
        "Integracao logistica de envios",
        "Suporte de 30 dias pos-lancamento",
      ],
    },
    support: {
      heading: "Tudo incluido no plano de suporte",
      subtitle:
        "Sem tarifas por hora nem surpresas. Um plano fixo que cobre tudo o que sua plataforma precisa.",
      features: [
        "Monitoramento de disponibilidade 24/7",
        "Alertas automaticos de queda",
        "Atualizacoes de dependencias",
        "Patches de seguranca prioritarios",
        "Backups automaticos diarios",
        "Armazenamento externo de backups",
        "Revisao mensal de performance",
        "Auditoria mensal de Core Web Vitals",
        "Suporte tecnico para sua equipe",
        "Correcao de erros funcionais",
        "Relatorio mensal detalhado",
        "Tempo de resposta garantido por SLA",
      ],
    },
  },
  cta: {
    "landing-page": {
      eyebrow: "Investimento",
      heading: "Landing page profissional a partir de $1,200",
      subtitle:
        "Preco fixo, escopo definido e sem surpresas. Pague em duas parcelas: 50% no inicio e 50% na entrega.",
      price: "$1,200",
      priceNote: "Preco base. Varia conforme integracoes e funcionalidades adicionais.",
      includes: [
        "Design UI/UX de alta fidelidade",
        "Copywriting incluido",
        "Integracoes de marketing configuradas",
        "Suporte de 30 dias pos-lancamento",
      ],
      pricePrefix: "a partir de",
      buttonText: "Solicitar cotacao personalizada",
    },
    website: {
      eyebrow: "Investimento",
      heading: "Site corporativo a partir de $2,500",
      subtitle:
        "Preco fixo e escopo definido desde o Discovery. Sem cobranca por hora e sem extras ocultos.",
      price: "$2,500",
      priceNote: "Preco base. Varia conforme paginas, CMS e funcionalidades.",
      includes: [
        "Design UI/UX personalizado",
        "CMS integrado para sua equipe",
        "SEO tecnico completo",
        "Suporte de 30 dias pos-lancamento",
      ],
      pricePrefix: "a partir de",
      buttonText: "Solicitar cotacao personalizada",
    },
    ecommerce: {
      eyebrow: "Investimento",
      heading: "Loja online pronta para vender a partir de $3,500",
      subtitle:
        "Inclui design, desenvolvimento, pagamentos e carga inicial do catalogo com um unico fornecedor.",
      price: "$3,500",
      priceNote: "Preco base. Varia conforme gateways, logistica e tamanho do catalogo.",
      includes: [
        "Design UI/UX do fluxo completo",
        "Gateways de pagamento configuradas",
        "SEO por produto incluido",
        "Suporte de 30 dias pos-lancamento",
      ],
      pricePrefix: "a partir de",
      buttonText: "Solicitar cotacao personalizada",
    },
    support: {
      eyebrow: "Investimento",
      heading: "Manutencao mensal a partir de $299/mes",
      subtitle:
        "Pagamento mensal recorrente, sem contrato anual obrigatorio. Voce pode escalar ou pausar com aviso previo.",
      price: "$299/mes",
      priceNote: "Preco base do plano Essencial. Planos Profissional e Premium disponiveis.",
      includes: [
        "Monitoramento 24/7 incluido",
        "Backups diarios automaticos",
        "Atualizacoes de seguranca",
        "Relatorio mensal detalhado",
      ],
      pricePrefix: "a partir de",
      buttonText: "Solicitar cotacao personalizada",
    },
  },
  more: {
    eyebrow: "Outros servicos",
    headingStart: "Precisa de algo",
    headingHighlight: "diferente",
    headingEnd: "?",
    subtitle:
      "Cada servico e desenhado para uma necessidade especifica. Se este nao e o seu, aqui estao as outras opcoes.",
    cardCta: "Ver servico",
    cards: [
      {
        slug: "landing-page",
        tag: "Landing Page",
        title: "Paginas de alta conversao",
        description:
          "Para campanhas, lancamentos ou captacao de leads. Desenhadas para converter.",
      },
      {
        slug: "website",
        tag: "Site Corporativo",
        title: "Presenca digital completa",
        description:
          "Multiplas paginas, CMS integrado e SEO tecnico para uma base digital solida.",
      },
      {
        slug: "ecommerce",
        tag: "E-commerce",
        title: "Loja online sob medida",
        description:
          "Gestao de catalogo, pagamentos e logistica em uma loja otimizada para escalar.",
      },
      {
        slug: "support",
        tag: "Suporte e Manutencao",
        title: "Seu site em maos especialistas",
        description:
          "Backups, atualizacoes, monitoramento e relatorios mensais para operar sem friccao.",
      },
    ],
  },
};
