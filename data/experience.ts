export interface Experience {
  company: string;

  location: string;

  period: string;

  role: string;

  description: string;

  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "Freelancer / Full Stack",

    location: "São Paulo, SP",

    period: "Set/2025 – Atual",

    role: "Desenvolvedor Full Stack / Analista de Dados",

    description:
      "Desenvolvimento full stack e análise de dados, criação de APIs, manutenção de aplicações web e criação de agentes de IA.",

    highlights: [
      "Manutenção do site institucional utilizando Next.js e PHP.",
      "Criação de agentes de IA para automação de processos, análise de dados e suporte à tomada de decisões.",
      "Machine Learning e análise de dados utilizando Python, Pandas, NumPy e Matplotlib.",
      "Otimização de boas práticas de SEO, resultando em aumento de 35% na taxa de cliques da busca orgânica.",
      "Gestão de controle de versão utilizando GitHub.",
      "Atuação utilizando a metodologia ágil Scrum.",
    ],
  },

  {
    company: "Natural Nuts",

    location: "São Paulo, SP",

    period: "Jan/2019 – Abr/2025",

    role: "Gerente de E-commerce",

    description:
      "Gestão de e-commerce de produtos naturais, com atuação em marketing digital, SEO, analytics, desenvolvimento e gestão de projetos.",

    highlights: [
      "Monitoramento e análise de performance do website utilizando Google Analytics e SEMrush.",
      "Identificação de oportunidades e geração de relatórios com insights acionáveis para as equipes de marketing e produto.",
      "Implementação de estratégia de conteúdo e SEO que resultou em aumento de 40% no tráfego orgânico em 12 meses.",
      "Interface com equipes de redes sociais, design e produto para padronização de linguagem e consistência nos canais digitais.",
      "Construção de dashboard em PHP para acompanhamento de métricas-chave, integrando dados do Google Analytics e Google Search Console.",
      "Gestão de projetos de marketing digital do planejamento à análise de resultados, utilizando metodologias ágeis.",
    ],
  },

  {
    company: "Agência Instituto da Transformação Digital",

    location: "Porto Alegre, RS",

    period: "Fev/2011 – Dez/2018",

    role: "Desenvolvedor Front-End / Estrategista de Conteúdo",

    description:
      "Agência digital com atuação em desenvolvimento de sites, portais, experiência do usuário, SEO, analytics e estratégia digital.",

    highlights: [
      "Desenvolvimento de sites e portais com foco em experiência do usuário.",
      "Aplicação de React e Next.js alinhados às melhores práticas de SEO e rastreamento analítico.",
      "Produção de relatórios de desempenho digital e sugestões de otimização baseadas em dados.",
      "Participação na definição de premissas de linguagem e estratégia digital para projetos web de diferentes segmentos.",
    ],
  },
];