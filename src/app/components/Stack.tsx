import { useState } from "react";
import { theme } from "../config/theme";
import { stackCategories } from "../config/data";
import { SectionHeader, MonoText } from "./shared";

export function Stack() {
  const [activeTab, setActiveTab] = useState("backend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const activeCat = stackCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="stack" className="py-24 px-6" style={{ backgroundColor: theme.colors.bg.secondary }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="02" label="TECH_STACK" title="Tecnologias que uso" />

        {/* Tab bar */}
        <div
          className="flex gap-1 mb-10 p-1 rounded-lg w-fit"
          style={{ background: theme.colors.bg.card, border: "1px solid #ffffff0a" }}
        >
          {stackCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="px-5 py-2 rounded-md transition-all duration-200"
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  border: "none",
                  cursor: "pointer",
                  background: isActive ? `${cat.color}18` : "transparent",
                  color: isActive ? cat.color : theme.colors.text.dimmed,
                  boxShadow: isActive ? `0 0 16px ${cat.color}22` : "none",
                  borderBottom: isActive ? `2px solid ${cat.color}` : "2px solid transparent",
                  textShadow: isActive ? `0 0 8px ${cat.color}` : "none",
                }}
              >
                {cat.label}
              </button>
            );
          })}
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
                  background: isHovered ? `${activeCat.color}0a` : theme.colors.bg.card,
                  border: `1px solid ${isHovered ? `${activeCat.color}55` : "#ffffff08"}`,
                  boxShadow: isHovered ? `0 0 30px ${activeCat.color}18` : "none",
                  transform: isHovered ? "translateY(-2px)" : "none",
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Icon */}
                <div
                  className="shrink-0 flex items-center justify-center rounded-lg text-2xl"
                  style={{
                    width: 52, height: 52,
                    background: `${activeCat.color}12`,
                    border: `1px solid ${activeCat.color}22`,
                    boxShadow: isHovered ? `0 0 16px ${activeCat.color}33` : "none",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  {tech.icon}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <MonoText
                    as="div"
                    color={isHovered ? activeCat.color : "#ddd"}
                    size="0.92rem"
                    weight={600}
                    glow={isHovered}
                    style={{ marginBottom: "0.25rem", transition: "color 0.2s, text-shadow 0.2s" }}
                  >
                    {tech.name}
                  </MonoText>
                  <MonoText as="div" color={theme.colors.text.dimmed} size="0.75rem" style={{ lineHeight: 1.6 }}>
                    {tech.desc}
                  </MonoText>
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

        {/* Footer */}
        <div className="mt-8 flex items-center gap-3" style={{ fontFamily: theme.fonts.mono, fontSize: "0.7rem", color: theme.colors.text.ghost }}>
          <div className="h-px flex-1" style={{ background: "#ffffff08" }} />
          <span>{activeCat.techs.length} tecnologias em {activeCat.label}</span>
          <div className="h-px flex-1" style={{ background: "#ffffff08" }} />
        </div>
      </div>
    </section>
  );
}
