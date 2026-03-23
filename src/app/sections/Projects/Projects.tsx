import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "PaymentGateway API",
    desc: "Gateway de pagamentos REST com suporte a múltiplos provedores, idempotência e webhooks. Processamento assíncrono com filas.",
    techs: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS SQS"],
    github: "#",
    demo: "#",
  },
  {
    name: "AuthService",
    desc: "Microsserviço de autenticação e autorização com JWT, OAuth2, refresh tokens e controle de sessões distribuído.",
    techs: ["Spring Security", "Redis", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    name: "DataSync Engine",
    desc: "Motor de sincronização de dados entre sistemas legados e novos serviços. ETL em tempo real com transformações customizáveis.",
    techs: ["Python", "Kafka", "PostgreSQL", "Docker", "Linux"],
    github: "#",
    demo: "#",
  },
  {
    name: "DevDashboard",
    desc: "Dashboard de monitoramento de infraestrutura com métricas em tempo real, alertas automáticos e relatórios em PDF.",
    techs: ["React", "TypeScript", "Next.js", "AWS CloudWatch"],
    github: "#",
    demo: "#",
  },
  {
    name: "CLI Toolkit",
    desc: "Ferramenta de linha de comando para automação de tarefas de desenvolvimento, gerenciamento de ambientes e deploy.",
    techs: ["Python", "Docker", "Linux", "Bash"],
    github: "#",
    demo: null,
  },
  {
    name: "Inventory API",
    desc: "API REST para gerenciamento de estoque com controle de transações, relatórios e integração com sistemas ERP.",
    techs: ["Java", "Spring Boot", "PostgreSQL", "REST"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projetos"
      className="py-24 px-6"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#00ff9c",
              fontSize: "0.8rem",
              letterSpacing: "0.3em",
              marginBottom: "0.5rem",
            }}
          >
            // 03. PROJETOS
          </div>
          <h2
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#fff",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            O que já construí
            <span style={{ color: "#00ff9c", textShadow: "0 0 10px #00ff9c" }}>.</span>
          </h2>
          <div className="mt-3 h-px w-16" style={{ background: "#00ff9c", boxShadow: "0 0 8px #00ff9c" }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="flex flex-col p-5 rounded transition-all duration-200"
              style={{
                background: "#0d0d0d",
                border: "1px solid #00ff9c15",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c55";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px #00ff9c11";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c15";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#00ff9c",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textShadow: "0 0 6px #00ff9c44",
                  }}
                >
                  {p.name}
                </h3>
              </div>
              <p
                className="flex-1 mb-4"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#777",
                  fontSize: "0.78rem",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      background: "#00ff9c11",
                      color: "#00ff9c99",
                      border: "1px solid #00ff9c22",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  className="flex items-center gap-1.5 transition-colors duration-150"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#888",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ff9c")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
                >
                  <Github size={13} /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    className="flex items-center gap-1.5 transition-colors duration-150"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: "#888",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ff9c")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
                  >
                    <ExternalLink size={13} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
