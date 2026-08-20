export type ProjectCategory =
  | "professional"
  | "study";

export interface Project {
  title: string;

  description: string;

  category: ProjectCategory;

  technologies: string[];

  url: string;

  image: string;

  featured?: boolean;
}

export const projects: Project[] = [
      {
    title: "Multimodal RAG with Gemini, Qdrant & FastAPI",

    description:
      "Este é um sistema RAG (Retrieval-Augmented Generation) avançado desenvolvido para upload, indexação e consulta inteligente de documentos PDF. O sistema combina busca vetorial no Qdrant Cloud, modelos locais de embedding (Sentence-Transformers) e a API do Google Gemini para responder perguntas com alta precisão e citações exatas de páginas.",
    category: "professional",

    technologies: [
      "FastAPI: Backend RESTful assíncrono e de alta performance.",
      "Qdrant Cloud: Banco de dados vetorial distribuído para busca de similaridade em escala.",
      "Sentence-Transformers: Embeddings multilíngues locais (384-dim).",
      "Google Gemini API (google-genai): Modelo de linguagem de última geração para síntese e geração de respostas.",
      "PyPDF / pdfplumber: Processamento e extração de texto de PDFs."
    ],

    url: "https://multimodal-rag-suite.onrender.com",

    image: "/projects/rag-multimodal.jpg",

    featured: true,
  },
    {
    title: "TikTok Clip Agent",

    description:
      "Agente de IA 100% local e gratuito que transforma vídeos longos do YouTube em cortes prontos para o TikTok (9:16), com Transcrição automática (Whisper), Detecção de hooks virais (Ollama / LLM local), Título fixo + legendas + CTA de afiliado incluídos no vídeo e Dois perfis de conteúdo com CTAs e prompts separados",
    category: "professional",

    technologies: [
      "CrewAI: Orquestração multi-agente",
      "LangChain: Integração com LLMs",
      "FastAPI: API RESTful",
      "llama3.2:3b",
      "Gemini API"
    ],

    url: "https://github.com/hiraku1403/tiktok-clip-agent",

    image: "/projects/tiktok-clip-agent.jpg",

    featured: true,
  },
  {
    title: "Multi-Agent SEO Platform",

    description:
      "Este projeto demonstra a orquestração de múltiplos agentes de IA trabalhando em conjunto para criar conteúdo otimizado para SEO.",

    category: "professional",

    technologies: [
      "CrewAI: Orquestração multi-agente",
      "LangChain: Integração com LLMs",
      "FastAPI: API RESTful",
      "Vercel: Deploy serverless",
      "OpenAI GPT-4: Modelo principal"
    ],

    url: "https://multi-agent-seo-platform.vercel.app/",

    image: "/projects/seo-content.jpg",

    featured: true,
  },
  {
    title: "E-commerce AI Suite",

    description:
      "O E-commerce AI Suite é uma plataforma de inteligência preditiva para e-commerce que combina algoritmos de Machine Learning (Scikit-Learn) e Agentes de IA (Google Gemini) para analisar, em lote, a propensão de conversão de produtos e gerar diagnósticos acionáveis de CRO (Conversion Rate Optimization).",

    category: "professional",

    technologies: [
      "Machine Learning",
      "CRO ",
      "FastAPI" ,
      "Pydantic",
       "Uvicorn",
    ],

    url: "https://ecommerce-ai-suite-1.vercel.app/",

    image: "/projects/ecommerce-suite.jpg",

    featured: true,
  },
    {
    title: "Seo Machine Learning",

    description:
      "Um pipeline automatizado de Engenharia de Dados e Inteligência Artificial desenvolvido em Python, Pandas e o SDK do Google Gemini (gemini-2.5-flash).O projeto lê dados brutos de produtos de planilhas Excel, utiliza IA generativa para criar títulos otimizados para SEO e copies persuasivas focadas em conversão (CRO), e exporta um relatório estruturado pronto para uso em e-commerce e marketplaces.",

    category: "professional",

    technologies: [
      "Python",
      "Gemini ",
      "FastAPI" ,
      "Pydantic",
      "Uvicorn",
    ],

    url: "https://github.com/hiraku1403/seo-machine-learning",

    image: "/projects/seo-machine.jpg",

    featured: true,
  },
  {
    title: "Natural Nuts",

    description:
      "Desenvolvimento de template de e-commerce para integração com a plataforma Shopify.",

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
    title: "QIX Skate Shop",

    description:
      "Desenvolvimento de template de e-commerce integrado à plataforma Magento.",

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
    title: "Chua Brand",

    description:
      "Alteração e evolução de layout de e-commerce desenvolvido utilizando Python e React JS.",

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
    title: "Grafiset",

    description:
      "Desenvolvimento de frontend para site institucional.",

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
    title: "Instituto da Transformação",

    description:
      "Desenvolvimento de frontend e backend para site institucional utilizando PHP e React JS.",

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
    title: "Articles Next",

    description:
      "Desenvolvimento de frontend para sistema de artigos utilizando Next.js, SCSS e React JS.",

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
    title: "Estratégia de Otimização de SEO",

    description:
      "Otimização de mecanismos de busca aplicando estratégias de SEO, resultando em aumento de 70% nas visualizações em comparação aos três meses anteriores.",

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
    title: "Blog para E-commerce",

    description:
      "Desenvolvimento de estratégia de inbound marketing para blog de e-commerce, contribuindo para aumento de 20% na conversão.",

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
    title: "Agência de Viagens",

    description:
      "Desenvolvimento frontend para site de agência de viagens utilizando Next.js, SCSS e Node.js.",

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