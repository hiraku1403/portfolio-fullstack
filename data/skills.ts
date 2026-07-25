import {
  Code2,
  Database,
  GitBranch,
  Megaphone,
  Search,
  Workflow,
} from "lucide-react";

export interface SkillCategory {
  title: string;

  description: string;

  icon: typeof Code2;

  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Desenvolvimento Full Stack",

    description:
      "Construção de interfaces, aplicações e experiências digitais modernas.",

    icon: Code2,

    skills: [
      "REACT",
      "NEXT.JS",
      "JavaScript",
      "Python",
      "FastAPI",
      "Vue.js",
      "Django",
      "AICrew",
      "N8N",
    ],
  },

  {
    title: "Web Analytics & SEO",

    description:
      "Análise de performance digital e otimização para mecanismos de busca.",

    icon: Search,

    skills: [
      "Google Analytics",
      "Google Search Console",
      "SEMRush",
      "Similarweb",
      "SEO",
      "Google Tag Manager",
      "Adobe Launch",
    ],
  },

  {
    title: "Agentes de IA & Automação",

    description:
      "Criação e integração de agentes de IA para automação de processos e análise de dados.",

    icon: Database,

    skills: [
      "Python",
      "SQL",
      "Machine Learning",
      "LLMs",
      "Métricas e KPIs",
    ],
  },

  {
    title: "Marketing Digital",

    description:
      "Estratégias de conteúdo e aquisição para crescimento digital.",

    icon: Megaphone,

    skills: [
      "SEO",
      "Inbound Marketing",
      "Marketing de Conteúdo",
      "E-mail Marketing",
      "Estratégia Digital",
    ],
  },

  {
    title: "Gestão de Projetos",

    description:
      "Organização e execução de projetos utilizando metodologias ágeis.",

    icon: Workflow,

    skills: [
      "Scrum",
      "Metodologias Ágeis",
      "Gestão de Projetos",
      "Planejamento",
      "Análise de Resultados",
    ],
  },

  {
    title: "Ferramentas & Colaboração",

    description:
      "Ferramentas utilizadas para desenvolvimento, versionamento e colaboração.",

    icon: GitBranch,

    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Controle de Versão",
      "Colaboração entre Equipes",
    ],
  },
];