# Portfólio — Matheus Henn

Portfólio profissional desenvolvido para apresentar minha experiência, habilidades, projetos e formas de contato como **Frontend Developer**.

O projeto foi desenvolvido com foco em:

- Performance
- SEO
- Responsividade
- Acessibilidade
- Código organizado
- Design moderno
- Fácil manutenção e expansão

---

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Resend
- Vercel
- GitHub

---

## 📁 Estrutura do projeto

```text
portfolio-fullstack/
│
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   │
│   └── ui/
│       ├── AnimatedSection.tsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── ScrollIndicator.tsx
│
├── data/
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── stats.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── images/
│   └── resume.pdf
│
├── .env.local
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🧩 Principais seções

### Hero

Apresenta:

- Nome
- Cargo
- Descrição profissional
- Localização
- Disponibilidade
- Stack principal
- Foco em performance e SEO
- Links para projetos e currículo

---

### Sobre

Apresenta informações sobre minha experiência profissional, perfil e trajetória como desenvolvedor.

---

### Habilidades

Lista as principais tecnologias e ferramentas utilizadas no desenvolvimento de projetos.

Exemplos:

- HTML
- CSS
- JavaScript
- React
- Next.js
- TypeScript
- PHP
- WordPress
- Magento
- OpenCart
- SEO
- Google Analytics

---

### Experiência

Exibe minha trajetória profissional e as principais responsabilidades desempenhadas em cada experiência.

---

### Projetos

Área destinada à apresentação dos projetos desenvolvidos.

Cada projeto pode conter:

- Nome
- Descrição
- Tecnologias utilizadas
- Link para demonstração
- Link para o código-fonte
- Imagem ou screenshot do projeto

Para adicionar uma imagem a um projeto, basta colocar o arquivo na pasta:

```text
public/images/
```

E adicionar o caminho correspondente nos dados do projeto.

Exemplo:

```ts
{
  title: "Nome do Projeto",
  description: "Descrição do projeto",
  image: "/images/meu-projeto.png",
  technologies: ["Next.js", "React", "TypeScript"],
  liveUrl: "https://exemplo.com",
  githubUrl: "https://github.com/usuario/projeto"
}
```

---

## 📬 Formulário de contato

O formulário de contato utiliza uma API interna do Next.js:

```text
/api/contact
```

O envio de e-mails é realizado através do Resend.

A estrutura é:

```text
Formulário
    ↓
Contact.tsx
    ↓
POST /api/contact
    ↓
Resend API
    ↓
E-mail de destino
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo chamado:

```text
.env.local
```

Na raiz do projeto:

```env
RESEND_API_KEY=re_sua_chave_aqui
```

A variável também deve ser configurada no Vercel:

```text
Project
→ Settings
→ Environment Variables
```

Adicionar:

```text
Name:
RESEND_API_KEY

Value:
re_sua_chave_aqui
```

A variável deve estar disponível nos ambientes necessários:

- Production
- Preview
- Development

### ⚠️ Importante

Nunca utilize:

```env
NEXT_PUBLIC_RESEND_API_KEY
```

A chave da API do Resend é secreta e não deve ser exposta ao navegador.

---

## 💻 Instalação local

Clone o repositório:

```bash
git clone https://github.com/hiraku1403/portfolio-fullstack.git
```

Entre na pasta:

```bash
cd portfolio-fullstack
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo:

```text
.env.local
```

Adicione:

```env
RESEND_API_KEY=re_sua_chave_aqui
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

---

## 🛠️ Scripts disponíveis

### Desenvolvimento

```bash
npm run dev
```

Executa o projeto em modo de desenvolvimento.

---

### Build de produção

```bash
npm run build
```

Cria uma versão otimizada para produção e verifica:

- Compilação
- Tipagem
- ESLint
- Geração das páginas
- Otimização do Next.js

---

### Servidor de produção

```bash
npm run start
```

Executa a versão de produção após o build.

---

## 🔄 Fluxo de atualização

Após fazer alterações no projeto:

```bash
npm run build
```

Se o build for concluído com sucesso:

```bash
git add .
```

Depois:

```bash
git commit -m "descrição da alteração"
```

E envie para o GitHub:

```bash
git push origin main
```

O Vercel detectará automaticamente o novo commit e iniciará um novo deploy.

Fluxo:

```text
Alteração no código
        ↓
npm run build
        ↓
git add .
        ↓
git commit
        ↓
git push origin main
        ↓
Deploy automático no Vercel
```

---

## ⚡ Performance

O projeto foi estruturado com foco em performance.

Entre as otimizações implementadas:

- Server Components sempre que possível
- Redução de JavaScript no cliente
- Animações separadas em componentes client
- Otimização do conteúdo principal do Hero
- Atenção especial ao Largest Contentful Paint (LCP)
- Uso de classes utilitárias do Tailwind CSS
- Geração estática de páginas quando possível
- Otimização automática do Next.js

O objetivo é manter uma boa pontuação em ferramentas como:

- Lighthouse
- PageSpeed Insights
- Core Web Vitals

---

## 🔍 SEO

O projeto possui estrutura para SEO através do `metadata` do Next.js.

Também possui:

```text
/app/robots.ts
/app/sitemap.ts
```

Esses arquivos ajudam mecanismos de busca a:

- Identificar as páginas do site
- Rastrear o conteúdo
- Encontrar o sitemap
- Melhorar a indexação

---

## 🚀 Deploy

O projeto está preparado para deploy na Vercel.

Configuração recomendada:

```text
Framework Preset:
Next.js

Root Directory:
./

Build Command:
npm run build

Output Directory:
Padrão do Next.js
```

A integração com o GitHub permite deploy automático a cada atualização na branch `main`.

---

## 🔒 Segurança

Arquivos sensíveis não devem ser enviados ao GitHub.

O arquivo `.gitignore` deve incluir:

```text
.env
.env.local
.env*.local
```

Nunca envie:

- Chaves de API
- Tokens
- Senhas
- Credenciais
- Dados sensíveis

---

## 📌 Próximas melhorias possíveis

Algumas funcionalidades que podem ser adicionadas futuramente:

- Blog pessoal
- CMS para gerenciar projetos
- Modo multilíngue
- Área administrativa
- Analytics avançado
- Dark mode persistente
- Página individual para cada projeto
- Integração com GitHub API
- Integração com LinkedIn
- Sistema de artigos
- Testes automatizados

---

## 👨‍💻 Autor

**Matheus Henn**

Frontend Developer

Desenvolvedor focado na criação de experiências digitais modernas, performáticas e orientadas a resultados.

---

## 📄 Licença

Este projeto é um portfólio pessoal.

O código pode ser utilizado como referência para estudos, mas o conteúdo, identidade visual, informações profissionais e materiais apresentados pertencem ao autor.
