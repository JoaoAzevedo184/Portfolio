import { Mail, Github, Linkedin, Terminal } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "alex.silva@dev.io",
    href: "mailto:alex.silva@dev.io",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/alexsilva",
    href: "https://github.com",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/alexsilva",
    href: "https://linkedin.com",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="py-24 px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-3xl mx-auto text-center">
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
            // 04. CONTATO
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
            Vamos conversar
            <span style={{ color: "#00ff9c", textShadow: "0 0 10px #00ff9c" }}>?</span>
          </h2>
          <div className="mt-3 h-px w-16 mx-auto" style={{ background: "#00ff9c", boxShadow: "0 0 8px #00ff9c" }} />
          <p
            className="mt-6"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#666",
              fontSize: "0.88rem",
              lineHeight: 1.8,
            }}
          >
            Disponível para novos projetos, colaborações ou apenas uma boa conversa sobre tecnologia.
          </p>
        </div>

        {/* Terminal-style contact box */}
        <div
          className="rounded p-6 mb-10 text-left"
          style={{
            background: "#0d0d0d",
            border: "1px solid #00ff9c22",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            <span
              className="ml-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#444",
              }}
            >
              terminal — contact.sh
            </span>
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.82rem",
              color: "#555",
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ color: "#00ff9c" }}>$</span> ./contact --dev alex.silva
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              color: "#444",
              marginBottom: "1.5rem",
            }}
          >
            Fetching contact info... <span style={{ color: "#00ff9c" }}>done ✓</span>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3 rounded transition-all duration-200"
                style={{
                  textDecoration: "none",
                  background: "#111",
                  border: "1px solid #00ff9c11",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c44";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px #00ff9c11";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c11";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ color: "#00ff9c" }}>{c.icon}</div>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#555",
                      marginBottom: "0.1rem",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.82rem",
                      color: "#ccc",
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "#333",
          }}
        >
          Desenvolvido com React + Tailwind CSS &nbsp;·&nbsp; © 2026 Alex Silva
        </p>
      </div>
    </section>
  );
}
