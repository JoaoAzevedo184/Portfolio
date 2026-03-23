import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { theme } from "../config/theme";
import { identity, heroRoles } from "../config/data";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const role = heroRoles[roleIdx];
    let i = 0;
    setDisplayed("");

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
              setRoleIdx((prev) => (prev + 1) % heroRoles.length);
            }
          }, 50);
        }, 1800);
      }
    }, 80);
    return () => clearInterval(typeInterval);
  }, [roleIdx]);

  const [firstName, lastName] = identity.displayName.split(".");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ backgroundColor: theme.colors.bg.primary }}
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
            fontFamily: theme.fonts.mono,
            color: theme.colors.accent.primary,
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textShadow: theme.colors.glow.textSoft,
          }}
        >
          &gt; HELLO, WORLD_
        </div>

        <h1
          className="mb-4"
          style={{
            fontFamily: theme.fonts.mono,
            color: theme.colors.text.primary,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            textShadow: "0 0 40px rgba(0,255,156,0.15)",
          }}
        >
          {firstName}
          <span style={{ color: theme.colors.accent.primary, textShadow: `0 0 20px ${theme.colors.accent.primary}` }}>
            .
          </span>
          {lastName}
        </h1>

        <div
          className="mb-6 h-10 flex items-center justify-center"
          style={{
            fontFamily: theme.fonts.mono,
            color: theme.colors.accent.primary,
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            textShadow: theme.colors.glow.text,
            letterSpacing: "0.05em",
          }}
        >
          {displayed}
          <span className="animate-pulse ml-1" style={{ color: theme.colors.accent.primary }}>
            |
          </span>
        </div>

        <p
          className="mb-10 max-w-xl mx-auto"
          style={{
            fontFamily: theme.fonts.mono,
            color: "#888",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          {identity.tagline}{" "}
          <span style={{ color: `${theme.colors.accent.primary}99` }}>
            {identity.taglineHighlight}
          </span>
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollTo("projetos")}
            className="px-7 py-3 rounded transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: theme.colors.accent.primary,
              color: theme.colors.bg.primary,
              border: "none",
              cursor: "pointer",
              boxShadow: theme.colors.glow.medium,
              fontWeight: 700,
            }}
          >
            &gt; Ver Projetos
          </button>
          <button
            onClick={() => scrollTo("contato")}
            className="hero-btn-outline px-7 py-3 rounded transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: theme.fonts.mono,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              background: "transparent",
              color: theme.colors.accent.primary,
              border: `1px solid ${theme.colors.accent.primary}66`,
              cursor: "pointer",
              boxShadow: theme.colors.glow.soft,
            }}
          >
            &gt; Contato
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("sobre")}
        className="absolute bottom-8 animate-bounce"
        style={{ color: `${theme.colors.accent.primary}55`, background: "none", border: "none", cursor: "pointer" }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
