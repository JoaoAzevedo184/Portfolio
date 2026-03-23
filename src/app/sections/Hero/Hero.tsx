import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const roles = ["Backend Developer", "Software Engineer", "API Architect", "Java & Spring Boot Dev"];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    setDisplayed("");
    setTyping(true);

    const typeInterval = setInterval(() => {
      if (i < role.length) {
        setDisplayed(role.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          let j = role.length;
          const deleteInterval = setInterval(() => {
            if (j > 0) {
              setDisplayed(role.slice(0, j - 1));
              j--;
            } else {
              clearInterval(deleteInterval);
              setRoleIdx((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 1800);
      }
    }, 80);
    return () => clearInterval(typeInterval);
  }, [roleIdx]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,156,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,156,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,255,156,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <div
          className="mb-4"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#00ff9c",
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textShadow: "0 0 8px #00ff9c",
          }}
        >
          &gt; HELLO, WORLD_
        </div>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#ffffff",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            textShadow: "0 0 40px rgba(0,255,156,0.15)",
          }}
        >
          Alex<span style={{ color: "#00ff9c", textShadow: "0 0 20px #00ff9c" }}>.</span>Silva
        </h1>

        <div
          className="mb-6 h-10 flex items-center justify-center"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#00ff9c",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            textShadow: "0 0 12px #00ff9c",
            letterSpacing: "0.05em",
          }}
        >
          {displayed}
          <span className="animate-pulse ml-1" style={{ color: "#00ff9c" }}>
            |
          </span>
        </div>

        <p
          className="mb-10 max-w-xl mx-auto"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#888",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          Construindo sistemas robustos, escaláveis e de alto desempenho.{" "}
          <span style={{ color: "#00ff9c99" }}>Do back-end à nuvem.</span>
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo("projetos")}
            className="px-7 py-3 rounded transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: "#00ff9c",
              color: "#0a0a0a",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px #00ff9c66, 0 0 40px #00ff9c33",
              fontWeight: 700,
            }}
          >
            &gt; Ver Projetos
          </button>
          <button
            onClick={() => scrollTo("contato")}
            className="px-7 py-3 rounded transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: "transparent",
              color: "#00ff9c",
              border: "1px solid #00ff9c66",
              cursor: "pointer",
              boxShadow: "0 0 10px #00ff9c22",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px #00ff9c44, inset 0 0 20px #00ff9c11";
              (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px #00ff9c22";
              (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c66";
            }}
          >
            &gt; Contato
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("sobre")}
        className="absolute bottom-8 animate-bounce"
        style={{ color: "#00ff9c55", background: "none", border: "none", cursor: "pointer" }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
