/**
 * Portfolio data — all personal content lives here.
 * Edit this single file to customize the entire portfolio for a different person.
 */

// ─── Identity ────────────────────────────────────────────────────────────────

export const identity = {
  name: "João Victor",
  surname: "Azevedo",
  /** Shown in hero as Name.Surname */
  displayName: "João.Azevedo",
  /** Shown under photo */
  shortName: "João.Azevedo",
  role: "Backend & DevOps Developer",
  tagline: "Construindo sistemas robustos, escaláveis e de alto desempenho.",
  taglineHighlight: "Do back-end à nuvem.",
  available: true,
  experience: "Estudante ADS",
  focus: "Backend & DevOps Engineering",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroRoles = [
  "Backend Developer",
  "DevOps Engineer",
  "Software Engineer",
  "API Architect",
];

// ─── About ───────────────────────────────────────────────────────────────────

export const aboutBio = {
  codeBlock: {
    nome: identity.displayName,
    foco: identity.focus,
    experiência: identity.experience,
    disponível: identity.available,
  },
  paragraphs: [
    <>
      Estudante de Análise e Desenvolvimento de Sistemas com foco em{" "}
      <span style={{ color: "#00ff9c" }}>Backend e DevOps</span>, construindo
      APIs RESTful, pipelines CI/CD e ambientes containerizados. Apaixonado por
      código limpo, automação e boas práticas de engenharia de software.
    </>,
    <>
      Experiência prática com{" "}
      <span style={{ color: "#00ff9c" }}>TypeScript, Python & Docker</span>,
      incluindo homelab com orquestração Kubernetes, monitoramento com
      Prometheus/Grafana e deploy em ambientes Linux.
    </>,
  ],
};

export const aboutHighlights = [
  {
    iconName: "Server" as const,
    label: "Backend",
    desc: "APIs REST, microsserviços e arquitetura de sistemas distribuídos.",
  },
  {
    iconName: "Code2" as const,
    label: "Clean Code",
    desc: "Código limpo, testável e com boas práticas de engenharia.",
  },
  {
    iconName: "Terminal" as const,
    label: "DevOps",
    desc: "Docker, CI/CD, Kubernetes, Linux e deploy em produção.",
  },
  {
    iconName: "Zap" as const,
    label: "Performance",
    desc: "Otimização de queries, cache e escalabilidade horizontal.",
  },
];

// ─── Stack ───────────────────────────────────────────────────────────────────

export type StackCategory = {
  id: string;
  label: string;
  color: string;
  techs: { name: string; icon: string; desc: string }[];
};

export const stackCategories: StackCategory[] = [
  {
    id: "backend",
    label: "Backend",
    color: "#00ff9c",
    techs: [
      { name: "TypeScript", icon: "🔷", desc: "Linguagem principal para APIs e projetos backend." },
      { name: "Python", icon: "🐍", desc: "Automação, scripts, FastAPI e integrações." },
      { name: "Node.js", icon: "🟢", desc: "Runtime para APIs REST e microsserviços." },
      { name: "APIs REST", icon: "🔗", desc: "Design e implementação de contratos de API." },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#00d4ff",
    techs: [
      { name: "React", icon: "⚛️", desc: "Interfaces modernas com componentes reutilizáveis." },
      { name: "React Native", icon: "📱", desc: "Apps mobile cross-platform com Expo." },
      { name: "Next.js", icon: "▲", desc: "SSR, SSG e apps full-stack com React." },
    ],
  },
  {
    id: "infra",
    label: "Infraestrutura",
    color: "#bf9bff",
    techs: [
      { name: "Docker", icon: "🐳", desc: "Containerização e ambientes reprodutíveis." },
      { name: "Kubernetes", icon: "☸️", desc: "Orquestração com Helm Charts e Kind." },
      { name: "PostgreSQL", icon: "🐘", desc: "Banco relacional de alta confiabilidade." },
      { name: "Linux", icon: "🐧", desc: "Administração de servidores e automação via shell." },
      { name: "GitHub Actions", icon: "⚡", desc: "CI/CD pipelines e automação de deploy." },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export type Project = {
  name: string;
  desc: string;
  techs: string[];
  github: string;
  demo?: string | null;
};

export const projects: Project[] = [
  {
    name: "Team Task Manager API",
    desc: "API REST completa com Express, Prisma, JWT, Zod e Vitest. Suite educacional com documentação detalhada.",
    techs: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Docker"],
    github: "https://github.com/JoaoAzevedo184",
    demo: null,
  },
  {
    name: "TaskAPI + DevOps Pipeline",
    desc: "FastAPI com CI/CD completo, Docker multi-stage, Kubernetes com Helm Charts e 99%+ de cobertura de testes.",
    techs: ["Python", "FastAPI", "Docker", "Kubernetes", "GitHub Actions"],
    github: "https://github.com/JoaoAzevedo184",
    demo: null,
  },
  {
    name: "UdemyTranscripter",
    desc: "CLI que extrai transcrições de cursos Udemy e formata como Markdown para Obsidian, com enriquecimento por IA.",
    techs: ["Python", "curl_cffi", "Ollama", "Groq", "Gemini"],
    github: "https://github.com/JoaoAzevedo184",
    demo: null,
  },
  {
    name: "Oxe-Comprei",
    desc: "Marketplace mobile para comércio local em Recife. Mapa interativo com PostGIS e React Native + Expo.",
    techs: ["React Native", "TypeScript", "Prisma", "PostGIS", "Node.js"],
    github: "https://github.com/JoaoAzevedo184",
    demo: null,
  },
  {
    name: "Homelab Stack",
    desc: "Automação completa de homelab em Pop!_OS: Docker, Portainer, Traefik, Gitea, Ollama, Prometheus/Grafana.",
    techs: ["Docker", "Linux", "Traefik", "Prometheus", "Grafana"],
    github: "https://github.com/JoaoAzevedo184",
    demo: null,
  },
  {
    name: "Quantum Portfolio Optimizer",
    desc: "Otimizador de portfólio com QAOA e fallback clássico. Dados de mercado via Yahoo Finance e BRAPI.",
    techs: ["Python", "PennyLane", "Qiskit", "Yahoo Finance"],
    github: "https://github.com/JoaoAzevedo184",
    demo: null,
  },
];

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contacts = [
  {
    iconName: "Mail" as const,
    label: "Email",
    value: "joaoazevedo184@gmail.com",
    href: "mailto:joaoazevedo184@gmail.com",
  },
  {
    iconName: "Github" as const,
    label: "GitHub",
    value: "github.com/JoaoAzevedo184",
    href: "https://github.com/JoaoAzevedo184",
  },
  {
    iconName: "Linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/joaoazevedo184",
    href: "https://www.linkedin.com/in/joaoazevedo184",
  },
];

// ─── ChatBot FAQ ─────────────────────────────────────────────────────────────

export const chatBotGreeting =
  "Olá! 👋 Sou o assistente do João. Pergunte qualquer coisa sobre ele — experiência, projetos, tecnologias, disponibilidade...";

export const chatBotGreetingReply =
  "Olá! 👋 Sou o assistente virtual do João. Posso te contar sobre sua experiência, projetos, stack tecnológica, disponibilidade e muito mais. Como posso te ajudar?";

export const chatBotFallback =
  "Hmm, não tenho certeza sobre isso ainda. Posso te ajudar com informações sobre a experiência do João, projetos, tecnologias que ele usa ou como entrar em contato. O que você gostaria de saber?";

export const chatBotFaq = [
  {
    keywords: ["experiência", "anos", "tempo", "trabalha", "trabalho", "estuda"],
    answer:
      "O João é estudante de Análise e Desenvolvimento de Sistemas na UNINASSAU e tem experiência prática com backend, DevOps e infraestrutura através de projetos pessoais e homelab.",
  },
  {
    keywords: ["stack", "tecnologia", "linguagem", "python", "typescript", "react"],
    answer:
      "O João trabalha com TypeScript + Node.js no backend, Python para automação e FastAPI, React/React Native no frontend, e Docker, Kubernetes e GitHub Actions na infraestrutura.",
  },
  {
    keywords: ["contato", "email", "chamar", "falar", "conversar", "contratar"],
    answer:
      "Você pode entrar em contato pelo email joaoazevedo184@gmail.com ou pelo GitHub (github.com/JoaoAzevedo184). Ele está aberto a oportunidades! 🚀",
  },
  {
    keywords: ["projeto", "projetos", "portfólio", "trabalhos", "fez"],
    answer:
      "O João já construiu APIs REST com Express e FastAPI, pipelines CI/CD com GitHub Actions, orquestração Kubernetes, CLIs para extração de transcrições, e um marketplace mobile. Confira a seção Projetos!",
  },
  {
    keywords: ["disponível", "disponibilidade", "freelance", "vaga", "emprego", "estágio", "internship"],
    answer:
      "Sim! O João está buscando estágios em desenvolvimento, DevOps, infraestrutura ou backend. Entre em contato para conversar.",
  },
  {
    keywords: ["formação", "faculdade", "curso", "estudo", "graduação", "universidade"],
    answer:
      "O João cursa Análise e Desenvolvimento de Sistemas (ADS) na UNINASSAU Olinda, semestre 2026.1, e complementa com cursos práticos e projetos no homelab.",
  },
  {
    keywords: ["docker", "kubernetes", "devops", "cloud", "infra", "infraestrutura", "linux"],
    answer:
      "O João tem experiência com Docker, Kubernetes (Helm + Kind), GitHub Actions CI/CD, Linux (Pop!_OS), Traefik, Prometheus/Grafana e homelab completo.",
  },
  {
    keywords: ["homelab", "servidor", "lab"],
    answer:
      "O João roda um homelab em Pop!_OS (i3 10th gen, 24GB RAM) com Docker, Portainer, Traefik, Gitea, Ollama + Open WebUI, Nextcloud, Prometheus/Grafana e mais!",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Início", sectionId: "hero" },
  { label: "Sobre", sectionId: "sobre" },
  { label: "Stack", sectionId: "stack" },
  { label: "Projetos", sectionId: "projetos" },
  { label: "Contato", sectionId: "contato" },
];

// ─── Loading Screen ──────────────────────────────────────────────────────────

export const loadingLines = [
  "> Initializing portfolio...",
  "> Loading modules...",
  "> Connecting to backend services...",
  "> Compiling components...",
  "> Booting interface...",
  "> Access granted. Welcome.",
];
