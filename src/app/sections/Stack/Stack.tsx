import { useState } from "react";

const categories = [
  {
    id: "backend",
    label: "Backend",
    color: "#00ff9c",
    techs: [
      { name: "Java", icon: "☕", desc: "Linguagem principal para sistemas robustos e escaláveis." },
      { name: "Spring Boot", icon: "🌱", desc: "Framework para APIs REST e microsserviços em produção." },
      { name: "Python", icon: "🐍", desc: "Automação, scripts e integrações de sistemas." },
      { name: "APIs REST", icon: "🔗", desc: "Design e implementação de contratos de API." },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#00d4ff",
    techs: [
      { name: "React", icon: "⚛️", desc: "Interfaces modernas com componentes reutilizáveis." },
      { name: "TypeScript", icon: "🔷", desc: "JavaScript tipado para código mais seguro e previsível." },
      { name: "Next.js", icon: "▲", desc: "SSR, SSG e apps full-stack com React." },
    ],
  },
  {
    id: "infra",
    label: "Infraestrutura",
    color: "#bf9bff",
    techs: [
      { name: "Docker", icon: "🐳", desc: "Containerização e ambientes reprodutíveis." },
      { name: "PostgreSQL", icon: "🐘", desc: "Banco relacional de alta confiabilidade." },
      { name: "Linux", icon: "🐧", desc: "Administração de servidores e automação via shell." },
      { name: "AWS", icon: "☁️", desc: "Cloud computing: EC2, S3, SQS, CloudWatch." },
    ],
  },
];

export function Stack() {
  const [activeTab, setActiveTab] = useState("backend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const activeCat = categories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="stack"
      className="py-24 px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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
            // 02. TECH_STACK
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
            Tecnologias que uso
            <span style={{ color: "#00ff9c", textShadow: "0 0 10px #00ff9c" }}>.</span>
          </h2>
          <div className="mt-3 h-px w-16" style={{ background: "#00ff9c", boxShadow: "0 0 8px #00ff9c" }} />
        </div>

        {/* Tab bar */}
        <div
          className="flex gap-1 mb-10 p-1 rounded-lg w-fit"
          style={{ background: "#0d0d0d", border: "1px solid #ffffff0a" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="px-5 py-2 rounded-md transition-all duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                border: "none",
                cursor: "pointer",
                background: activeTab === cat.id ? cat.color + "18" : "transparent",
                color: activeTab === cat.id ? cat.color : "#555",
                boxShadow: activeTab === cat.id ? `0 0 16px ${cat.color}22` : "none",
                borderBottom: activeTab === cat.id ? `2px solid ${cat.color}` : "2px solid transparent",
                textShadow: activeTab === cat.id ? `0 0 8px ${cat.color}` : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {activeCat.techs.map((tech) => {
            const isHovered = hoveredTech === tech.name;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-5 p-5 rounded-lg cursor-default transition-all duration-200"
                style={{
                  background: isHovered ? activeCat.color + "0a" : "#0d0d0d",
                  border: `1px solid ${isHovered ? activeCat.color + "55" : "#ffffff08"}`,
                  boxShadow: isHovered ? `0 0 30px ${activeCat.color}18` : "none",
                  transform: isHovered ? "translateY(-2px)" : "none",
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Icon badge */}
                <div
                  className="shrink-0 flex items-center justify-center rounded-lg text-2xl"
                  style={{
                    width: 52,
                    height: 52,
                    background: activeCat.color + "12",
                    border: `1px solid ${activeCat.color}22`,
                    boxShadow: isHovered ? `0 0 16px ${activeCat.color}33` : "none",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  {tech.icon}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: isHovered ? activeCat.color : "#ddd",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      marginBottom: "0.25rem",
                      textShadow: isHovered ? `0 0 8px ${activeCat.color}` : "none",
                      transition: "color 0.2s, text-shadow 0.2s",
                    }}
                  >
                    {tech.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#555",
                      fontSize: "0.75rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {tech.desc}
                  </div>
                </div>

                {/* Indicator dot */}
                <div
                  className="shrink-0 w-2 h-2 rounded-full"
                  style={{
                    background: isHovered ? activeCat.color : "#222",
                    boxShadow: isHovered ? `0 0 8px ${activeCat.color}` : "none",
                    transition: "all 0.2s",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer hint */}
        <div
          className="mt-8 flex items-center gap-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#333",
          }}
        >
          <div className="h-px flex-1" style={{ background: "#ffffff08" }} />
          <span>{activeCat.techs.length} tecnologias em {activeCat.label}</span>
          <div className="h-px flex-1" style={{ background: "#ffffff08" }} />
        </div>
      </div>
    </section>
  );
}
