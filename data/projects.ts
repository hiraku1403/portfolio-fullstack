export type ProjectCategory =
  | "professional"
  | "study";

export interface Project {
  title: {
    pt: string;
    en: string;
  };

  description: {
    pt: string;
    en: string;
  };

  category: ProjectCategory;

  technologies: string[];

  url: string;

  image: string;

  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: {
      pt: "Multimodal RAG with Gemini, Qdrant & FastAPI",
      en: "Multimodal RAG with Gemini, Qdrant & FastAPI",
    },

    description: {
      pt: "Este é um sistema RAG (Retrieval-Augmented Generation) avançado desenvolvido para upload, indexação e consulta inteligente de documentos PDF. O sistema combina busca vetorial no Qdrant Cloud, modelos locais de embedding (Sentence-Transformers) e a API do Google Gemini para responder perguntas com alta precisão e citações exatas de páginas.",

      en: "An advanced RAG (Retrieval-Augmented Generation) system developed for PDF document upload, indexing and intelligent querying. The system combines vector search with Qdrant Cloud, local embedding models using Sentence-Transformers, and the Google Gemini API to answer questions with high accuracy and exact page citations.",
    },

    category: "professional",

    technologies: [
      "FastAPI",
      "Qdrant Cloud",
      "Sentence-Transformers",
      "Google Gemini API",
      "PyPDF",
      "pdfplumber",
    ],

    url: "https://multimodal-rag-suite.onrender.com",

    image: "/projects/rag-multimodal.jpg",

    featured: true,
  },

  {
    title: {
      pt: "TikTok Clip Agent",
      en: "TikTok Clip Agent",
    },

    description: {
      pt: "Agente de IA 100% local e gratuito que transforma vídeos longos do YouTube em cortes prontos para o TikTok (9:16), com transcrição automática utilizando Whisper, detecção de hooks virais com Ollama e LLM local, título fixo, legendas, CTA de afiliado e dois perfis de conteúdo com CTAs e prompts separados.",

      en: "A fully local and free AI agent that transforms long YouTube videos into TikTok-ready clips (9:16), featuring automatic transcription with Whisper, viral hook detection using Ollama and a local LLM, fixed titles, captions, affiliate CTAs, and two content profiles with separate CTAs and prompts.",
    },

    category: "professional",

    technologies: [
      "CrewAI",
      "LangChain",
      "FastAPI",
      "llama3.2:3b",
      "Gemini API",
    ],

    url: "https://github.com/hiraku1403/tiktok-clip-agent",

    image: "/projects/tiktok-clip-agent.jpg",

    featured: true,
  },

  {
    title: {
      pt: "Multi-Agent SEO Platform",
      en: "Multi-Agent SEO Platform",
    },

    description: {
      pt: "Este projeto demonstra a orquestração de múltiplos agentes de IA trabalhando em conjunto para criar conteúdo otimizado para SEO.",

      en: "This project demonstrates the orchestration of multiple AI agents working together to create SEO-optimized content.",
    },

    category: "professional",

    technologies: [
      "CrewAI",
      "LangChain",
      "FastAPI",
      "Vercel",
      "OpenAI GPT-4",
    ],

    url: "https://multi-agent-seo-platform.vercel.app/",

    image: "/projects/seo-content.jpg",

    featured: true,
  },

  {
    title: {
      pt: "E-commerce AI Suite",
      en: "E-commerce AI Suite",
    },

    description: {
      pt: "O E-commerce AI Suite é uma plataforma de inteligência preditiva para e-commerce que combina algoritmos de Machine Learning (Scikit-Learn) e Agentes de IA (Google Gemini) para analisar, em lote, a propensão de conversão de produtos e gerar diagnósticos acionáveis de CRO (Conversion Rate Optimization).",

      en: "E-commerce AI Suite is a predictive intelligence platform for e-commerce that combines Machine Learning algorithms (Scikit-Learn) and AI Agents (Google Gemini) to analyze product conversion propensity in batches and generate actionable CRO (Conversion Rate Optimization) diagnostics.",
    },

    category: "professional",

    technologies: [
      "Machine Learning",
      "CRO",
      "FastAPI",
      "Pydantic",
      "Uvicorn",
    ],

    url: "https://ecommerce-ai-suite-1.vercel.app/",

    image: "/projects/ecommerce-suite.jpg",

    featured: true,
  },

  {
    title: {
      pt: "SEO Machine Learning",
      en: "SEO Machine Learning",
    },

    description: {
      pt: "Um pipeline automatizado de Engenharia de Dados e Inteligência Artificial desenvolvido em Python, Pandas e o SDK do Google Gemini (gemini-2.5-flash). O projeto lê dados brutos de produtos de planilhas Excel, utiliza IA generativa para criar títulos otimizados para SEO e copies persuasivas focadas em conversão (CRO), e exporta um relatório estruturado pronto para uso em e-commerce e marketplaces.",

      en: "An automated Data Engineering and Artificial Intelligence pipeline built with Python, Pandas and the Google Gemini SDK (gemini-2.5-flash). The project reads raw product data from Excel spreadsheets, uses generative AI to create SEO-optimized titles and persuasive conversion-focused copy (CRO), and exports a structured report ready for use in e-commerce and marketplaces.",
    },

    category: "professional",

    technologies: [
      "Python",
      "Gemini",
      "FastAPI",
      "Pydantic",
      "Uvicorn",
    ],

    url: "https://github.com/hiraku1403/seo-machine-learning",

    image: "/projects/seo-machine.jpg",

    featured: true,
  },

  {
    title: {
      pt: "Natural Nuts",
      en: "Natural Nuts",
    },

    description: {
      pt: "Desenvolvimento de template de e-commerce para integração com a plataforma Shopify.",

      en: "Development of an e-commerce template integrated with the Shopify platform.",
    },

    category: "professional",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Shopify",
    ],

    url: "https://naturalnuts.com.br/",

    image: "/projects/natural-nuts.jpg",

    featured: true,
  },

  {
    title: {
      pt: "QIX Skate Shop",
      en: "QIX Skate Shop",
    },

    description: {
      pt: "Desenvolvimento de template de e-commerce integrado à plataforma Magento.",

      en: "Development of an e-commerce template integrated with the Magento platform.",
    },

    category: "professional",

    technologies: [
      "Next.js",
      "Node.js",
      "React",
      "Magento",
    ],

    url: "https://qixskateshop.com.br/",

    image: "/projects/qix-skate-shop.jpg",

    featured: true,
  },

  {
    title: {
      pt: "Chua Brand",
      en: "Chua Brand",
    },

    description: {
      pt: "Alteração e evolução de layout de e-commerce desenvolvido utilizando Python e React JS.",

      en: "Layout improvements and further development of an e-commerce website built with Python and React JS.",
    },

    category: "professional",

    technologies: [
      "Python",
      "React",
      "SCSS",
      "CSS-in-JS",
    ],

    url: "https://www.chuabrand.com.br/",

    image: "/projects/chua-brand.jpg",
  },

  {
    title: {
      pt: "Grafiset",
      en: "Grafiset",
    },

    description: {
      pt: "Desenvolvimento de frontend para site institucional.",

      en: "Frontend development for a corporate website.",
    },

    category: "professional",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    url: "https://grafiset.com.br/",

    image: "/projects/grafiset.jpg",
  },

  {
    title: {
      pt: "Instituto da Transformação",
      en: "Instituto da Transformação",
    },

    description: {
      pt: "Desenvolvimento de frontend e backend para site institucional utilizando PHP e React JS.",

      en: "Frontend and backend development for a corporate website using PHP and React JS.",
    },

    category: "professional",

    technologies: [
      "PHP",
      "React",
      "JavaScript",
    ],

    url: "https://www.institutodatransformacao.com.br/",

    image: "/projects/instituto-transformacao.jpg",
  },

  {
    title: {
      pt: "Articles Next",
      en: "Articles Next",
    },

    description: {
      pt: "Desenvolvimento de frontend para sistema de artigos utilizando Next.js, SCSS e React JS.",

      en: "Frontend development for an articles platform using Next.js, SCSS and React JS.",
    },

    category: "study",

    technologies: [
      "Next.js",
      "React",
      "SCSS",
    ],

    url: "https://articles-next-ecru.vercel.app/",

    image: "/projects/articles-next.jpg",

    featured: true,
  },

  {
    title: {
      pt: "Estratégia de Otimização de SEO",
      en: "SEO Optimization Strategy",
    },

    description: {
      pt: "Otimização de mecanismos de busca aplicando estratégias de SEO, resultando em aumento de 70% nas visualizações em comparação aos três meses anteriores.",

      en: "Search engine optimization using SEO strategies, resulting in a 70% increase in views compared to the previous three months.",
    },

    category: "study",

    technologies: [
      "SEO",
      "Google Analytics",
      "Content Strategy",
    ],

    url: "https://www.institutodatransformacao.com.br/",

    image: "/projects/seo-strategy.jpg",
  },

  {
    title: {
      pt: "Blog para E-commerce",
      en: "E-commerce Blog",
    },

    description: {
      pt: "Desenvolvimento de estratégia de inbound marketing para blog de e-commerce, contribuindo para aumento de 20% na conversão.",

      en: "Development of an inbound marketing strategy for an e-commerce blog, contributing to a 20% increase in conversion.",
    },

    category: "study",

    technologies: [
      "Inbound Marketing",
      "SEO",
      "Content Marketing",
    ],

    url: "https://qixskateshop.com.br/blogs/news",

    image: "/projects/qix-blog.jpg",
  },

  {
    title: {
      pt: "Agência de Viagens",
      en: "Travel Agency",
    },

    description: {
      pt: "Desenvolvimento frontend para site de agência de viagens utilizando Next.js, SCSS e Node.js.",

      en: "Frontend development for a travel agency website using Next.js, SCSS and Node.js.",
    },

    category: "study",

    technologies: [
      "Next.js",
      "SCSS",
      "Node.js",
    ],

    url: "https://agencia-de-viagens-azure.vercel.app",

    image: "/projects/travel-agency.jpg",

    featured: true,
  },
];