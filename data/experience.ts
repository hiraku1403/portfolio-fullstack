export interface Experience {
  company: {
    pt: string;
    en: string;
  };

  role: {
    pt: string;
    en: string;
  };

  location: string;

  period: {
    pt: string;
    en: string;
  };

  description: {
    pt: string[];
    en: string[];
  };
}

export const experiences: Experience[] = [
  {
    company: {
      pt: "Freelancer",
      en: "Freelance",
    },

    role: {
      pt: "Desenvolvedor Backend / Full Stack (Python)",
      en: "Backend / Full Stack Developer (Python)",
    },

    location: "São Paulo, SP",

    period: {
      pt: "Set/2025 – Atual",
      en: "Sep/2025 – Present",
    },

    description: {
      pt: [
        "Desenvolvimento de backends e APIs em Python utilizando FastAPI e Django, com exposição de serviços REST, validação com Pydantic e integração com bancos e sistemas externos.",

        "Construção de integrações entre sistemas e automações de fluxos, incluindo processamento em lote de planilhas, enriquecimento de dados, geração de relatórios e disparo de ações via APIs.",

        "Tradução de regras de negócio em código, incluindo lógica de predição, diagnósticos, pipelines de dados e fluxos de atendimento automatizado com agentes.",

        "Criação de serviços que orquestram múltiplos componentes, incluindo LLMs, modelos de Machine Learning, bancos de dados e armazenamento de arquivos.",

        "Deploy e manutenção de aplicações em cloud, utilizando Git, versionamento e práticas de engenharia de software.",

        "Atuação Full Stack quando necessário, desenvolvendo interfaces com React e Next.js integradas aos backends.",
      ],

      en: [
        "Development of Python backends and APIs using FastAPI and Django, including REST services, Pydantic validation and integration with databases and external systems.",

        "Development of system integrations and workflow automations, including batch spreadsheet processing, data enrichment, report generation and API-driven actions.",

        "Translation of business rules into code, including prediction logic, diagnostics, data pipelines and automated agent-based workflows.",

        "Development of services orchestrating multiple components, including LLMs, Machine Learning models, databases and file storage.",

        "Deployment and maintenance of cloud applications using Git, version control and software engineering practices.",

        "Full Stack development when required, building React and Next.js interfaces integrated with backend services.",
      ],
    },
  },

  {
    company: {
      pt: "Natural Nuts",
      en: "Natural Nuts",
    },

    role: {
      pt: "Gerente de E-commerce",
      en: "E-commerce Manager",
    },

    location: "São Paulo, SP",

    period: {
      pt: "Jan/2019 – Abr/2025",
      en: "Jan/2019 – Apr/2025",
    },

    description: {
      pt: [
        "Captura e formalização de regras de negócio e processos de e-commerce junto a marketing, produto e operações.",

        "Construção de dashboard em PHP com integração a Google Analytics e Search Console para automação de acompanhamento de métricas e suporte à tomada de decisão.",

        "Identificação de gargalos em processos internos e priorização de automações e melhorias de fluxo de backoffice e operações digitais.",

        "Gestão de projetos digitais do planejamento à entrega, utilizando metodologias ágeis como Scrum.",

        "Aumento de 40% no tráfego orgânico em 12 meses e aumento de 35% no CTR através de otimizações baseadas em dados e processos.",
      ],

      en: [
        "Captured and formalized e-commerce business rules and processes together with marketing, product and operations teams.",

        "Built a PHP dashboard integrated with Google Analytics and Search Console to automate metric monitoring and support data-driven decisions.",

        "Identified internal process bottlenecks and prioritized automation and back-office workflow improvements.",

        "Managed digital projects from planning through delivery using agile methodologies such as Scrum.",

        "Achieved a 40% increase in organic traffic over 12 months and a 35% increase in CTR through data-driven optimization.",
      ],
    },
  },

  {
    company: {
      pt: "Agência Instituto da Transformação Digital",
      en: "Instituto da Transformação Digital Agency",
    },

    role: {
      pt: "Desenvolvedor Front-End / Estrategista de Conteúdo",
      en: "Front-End Developer / Content Strategist",
    },

    location: "Porto Alegre, RS",

    period: {
      pt: "Fev/2011 – Dez/2018",
      en: "Feb/2011 – Dec/2018",
    },

    description: {
      pt: [
        "Desenvolvimento de sites e portais, incluindo integrações e rastreamento analítico, utilizando React, Next.js e JavaScript.",

        "Participação em projetos que exigiam entendimento de regras de negócio dos clientes e entrega de soluções digitais orientadas a processos.",
      ],

      en: [
        "Developed websites and portals, including integrations and analytics tracking, using React, Next.js and JavaScript.",

        "Participated in projects requiring an understanding of client business rules and delivery of process-oriented digital solutions.",
      ],
    },
  },
];