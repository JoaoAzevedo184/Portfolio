// Todo o conteúdo do site fica aqui. Edite este arquivo para trocar textos, links e projetos.

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE = "https://cdn.simpleicons.org";

export type Category =
  | "Linguagens"
  | "Frameworks"
  | "Bancos de dados"
  | "DevOps e Cloud"
  | "IA e Automação"
  | "Ferramentas";

// monoIcon: para logos que sao um badge quadrado (TypeScript, JavaScript, LinkedIn),
// mascarar o SVG oficial daria um bloco solido. A variante "plain" tem o desenho vazado
// dentro do quadrado, e o CSS .mono-icon-cutout subtrai esse quadrado para sobrar so o desenho.
// O icone oficial colorido continua sendo o `icon`, usado no hover.
export type Tech = { name: string; icon?: string; monoIcon?: string; category: Category };

export const techs = {
  java: { name: "Java", icon: `${DEVICON}/java/java-original.svg`, category: "Linguagens" },
  python: { name: "Python", icon: `${DEVICON}/python/python-original.svg`, category: "Linguagens" },
  typescript: { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg`, monoIcon: `${DEVICON}/typescript/typescript-plain.svg`, category: "Linguagens" },
  javascript: { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg`, monoIcon: `${DEVICON}/javascript/javascript-plain.svg`, category: "Linguagens" },
  rust: { name: "Rust", icon: `${DEVICON}/rust/rust-original.svg`, category: "Linguagens" },
  bash: { name: "Bash", icon: `${DEVICON}/bash/bash-original.svg`, category: "Linguagens" },

  spring: { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg`, category: "Frameworks" },
  fastapi: { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg`, category: "Frameworks" },
  nodejs: { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg`, category: "Frameworks" },
  express: { name: "Express", icon: `${DEVICON}/express/express-original.svg`, category: "Frameworks" },
  fastify: { name: "Fastify", icon: `${DEVICON}/fastify/fastify-original.svg`, category: "Frameworks" },
  tokio: { name: "Tokio", category: "Frameworks" },
  axum: { name: "Axum", category: "Frameworks" },

  postgresql: { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg`, category: "Bancos de dados" },
  mongodb: { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg`, category: "Bancos de dados" },
  redis: { name: "Redis", icon: `${DEVICON}/redis/redis-original.svg`, category: "Bancos de dados" },
  mysql: { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg`, category: "Bancos de dados" },

  docker: { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg`, category: "DevOps e Cloud" },
  kubernetes: { name: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-plain.svg`, category: "DevOps e Cloud" },
  helm: { name: "Helm", icon: `${DEVICON}/helm/helm-original.svg`, category: "DevOps e Cloud" },
  githubactions: { name: "GitHub Actions", icon: `${DEVICON}/githubactions/githubactions-original.svg`, category: "DevOps e Cloud" },
  aws: { name: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`, category: "DevOps e Cloud" },
  linux: { name: "Linux", icon: `${DEVICON}/linux/linux-original.svg`, category: "DevOps e Cloud" },
  prometheus: { name: "Prometheus", icon: `${DEVICON}/prometheus/prometheus-original.svg`, category: "DevOps e Cloud" },
  opentelemetry: { name: "OpenTelemetry", icon: `${SIMPLE}/opentelemetry`, category: "DevOps e Cloud" },

  n8n: { name: "n8n", icon: `${SIMPLE}/n8n`, category: "IA e Automação" },
  ollama: { name: "Ollama", icon: `${SIMPLE}/ollama`, category: "IA e Automação" },
  claude: { name: "Claude", icon: `${SIMPLE}/claude`, category: "IA e Automação" },
  springai: { name: "Spring AI", icon: `${DEVICON}/spring/spring-original.svg`, category: "IA e Automação" },

  git: { name: "Git", icon: `${DEVICON}/git/git-original.svg`, category: "Ferramentas" },
  github: { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, category: "Ferramentas" },
  maven: { name: "Maven", icon: `${DEVICON}/maven/maven-original.svg`, category: "Ferramentas" },
  swagger: { name: "Swagger", icon: `${DEVICON}/swagger/swagger-original.svg`, category: "Ferramentas" },
  salesforce: { name: "Salesforce", icon: `${DEVICON}/salesforce/salesforce-original.svg`, category: "Ferramentas" },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof techs;

export const categories: Category[] = [
  "Linguagens",
  "Frameworks",
  "Bancos de dados",
  "DevOps e Cloud",
  "IA e Automação",
  "Ferramentas",
];

// Faixas animadas da seção Stack (monocromáticas em azul, coloridas no hover)
export const marqueeTop: TechKey[] = ["java", "spring", "python", "fastapi", "typescript", "nodejs", "rust", "postgresql", "redis", "mongodb"];
export const marqueeBottom: TechKey[] = ["docker", "kubernetes", "helm", "githubactions", "aws", "linux", "prometheus", "n8n", "ollama", "git"];

export type Project = {
  name: string;
  description: string;
  repo: string;
  deploy?: string;
  youtubeId?: string; // ID do vídeo, ex.: "dQw4w9WgXcQ"
  image?: string; // ex.: "/projetos/rust-gateway.png" (dentro de /public)
  status?: string;
  techs: TechKey[];
};

const GH = "https://github.com/JoaoAzevedo184";
const YT = "https://www.youtube.com/watch?v=";
const LK = "https://www.linkedin.com/in/joao-victor-azevedo-181-sena";

export const projects: Project[] = [
  {
    name: "Rust Gateway",
    description:
      "API gateway em Rust que serve de porta de entrada única para serviços internos: roteamento, validação de JWT, rate limiting, resiliência e observabilidade num só lugar.",
    repo: `${GH}/rust-gateway`,
    status: "Em construção",
    techs: ["rust", "tokio", "axum", "redis", "prometheus", "opentelemetry", "docker"],
  },
  {
    name: "Smart Support API",
    description:
      "API de help desk em Java 21 e Spring Boot 3.5. Cada chamado passa por um pipeline de validação, classificação e atribuição, com dez padrões de projeto aplicados onde resolvem problemas reais e classificação por IA via Spring AI.",
    repo: `${GH}/Smart-Support-API`,
    techs: ["java", "spring", "postgresql", "docker", "springai", "ollama"],
  },
  {
    name: "LexFlow AI",
    description:
      "Plataforma de atendimento com agentes de IA em n8n. Qualifica leads, responde com RAG e agenda reuniões. Para atender outro segmento, basta trocar os playbooks e a base de conhecimento.",
    repo: `${GH}/LexFlow-AI`,
    status: "Em construção",
    techs: ["n8n", "postgresql", "docker"],
  },
  {
    name: "Budget AI",
    description:
      "Orçamento pessoal controlado por voz. A API transcreve o áudio, entende a intenção com um LLM e registra ou consulta gastos usando tool calling do Spring AI.",
    repo: `${GH}/budget-ai`,
    techs: ["java", "spring", "springai", "postgresql", "ollama", "claude"],
  },
  {
    name: "Productivity API",
    description:
      "API REST de tarefas com filtros, paginação, validação e erros padronizados. É a base dos desafios da disciplina de DevOps.",
    repo: `${GH}/ProductivityAPI`,
    techs: ["java", "spring", "postgresql", "maven", "swagger", "docker"],
  },
  {
    name: "Linux AI Workshop",
    description:
      "20 projetos práticos de Linux em quatro níveis, do terminal à automação com a API do Claude, Claude Code e modelos locais no Ollama.",
    repo: `${GH}/linux-ai-workshop`,
    techs: ["linux", "bash", "python", "claude", "ollama"],
  },
];

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  techs: TechKey[];
};

export const services: Service[] = [
  {
    title: "Backend e APIs",
    description:
      "APIs REST sólidas para o seu produto ou sistema interno, com banco de dados bem modelado, documentação e deploy em container.",
    deliverables: ["API documentada com Swagger", "Banco modelado e versionado", "Docker e pipeline de CI/CD", "Testes automatizados"],
    techs: ["java", "spring", "python", "fastapi", "postgresql", "docker"],
  },
  {
    title: "Automação",
    description:
      "Tarefas repetitivas viram fluxos automáticos: integrações entre sistemas, planilhas, WhatsApp, e-mail e rotinas agendadas.",
    deliverables: ["Fluxos no n8n", "Integração entre APIs", "Rotinas agendadas"],
    techs: ["n8n", "python", "bash"],
  },
  {
    title: "Agentes de IA",
    description:
      "Assistentes que respondem clientes, consultam seus documentos e executam ações no seu sistema, com modelos na nuvem ou rodando localmente.",
    deliverables: ["Atendimento com RAG", "Tool calling no seu sistema", "Modelos locais ou em nuvem"],
    techs: ["springai", "claude", "ollama", "n8n"],
  },
];

export type ExperienceItem = { title: string; place: string; period: string; description: string };

// Preencha os períodos com as datas reais.
export const experience: Record<"Formação" | "Carreira" | "Certificações", ExperienceItem[]> = {
  Formação: [
    {
      title: "Bacharelado em Sistemas de Informação",
      place: "UNINASSAU Olinda",
      period: "Em andamento · 6º período",
      description: "Formação em desenvolvimento, bancos de dados, governança de TI, segurança da informação e machine learning.",
    },
  ],
  Carreira: [
    {
      title: "Residente em Tecnologia, trilha CRM",
      place: "Instituto ECOA | PUC-Rio",
      period: "Atual",
      description: "Residência Trilhas em Tecnologia com foco em CRM na Salesforce, com projetos em equipe como um CRM para locadora de veículos.",
    },
    {
      title: "Monitor de Tecnologia (estágio)",
      place: "Escola Monte Castelo",
      period: "Período",
      description: "Ensinei informática para turmas do 6º ao 9º ano.",
    },
  ],
  Certificações: [
    {
      title: "Bootcamp Agentes de IA em Campo",
      place: "AWS",
      period: "2026",
      description: "Projeto final: Delivery AI Assistant, com agentes no Bedrock orquestrados por Step Functions.",
    },
    {
      title: "Desafios de projeto",
      place: "DIO",
      period: "2026",
      description: "Budget AI com Spring AI e uma API REST de Fórmula 1 em Node.js e Fastify.",
    },
    {
      title: "Linux com Claude Code e API do Claude",
      place: "Udemy",
      period: "2026",
      description: "Base do repositório linux-ai-workshop.",
    },
  ],
};

export type ContactChannel = { label: string; value: string; href: string; icon: string; monoIcon?: string };

// Troque os valores marcados com "seu-" pelos seus dados reais.
export const contacts: ContactChannel[] = [
  { label: "E-mail", value: "ccjconra50@gmail.com", href: "mailto:ccjconra50@gmail.com", icon: `${SIMPLE}/gmail` },
  { label: "LinkedIn", value: "/in/meu-perfil", href: LK, icon: `${DEVICON}/linkedin/linkedin-plain.svg`, monoIcon: `${DEVICON}/linkedin/linkedin-plain.svg` },
  { label: "GitHub", value: "JoaoAzevedo184", href: GH, icon: `${DEVICON}/github/github-original.svg` },
  { label: "WhatsApp", value: "(81) 98859-2011", href: "https://wa.me/5581988592011", icon: `${SIMPLE}/whatsapp` },
];
