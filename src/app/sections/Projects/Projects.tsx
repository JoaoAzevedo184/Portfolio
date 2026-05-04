import { Github, ExternalLink } from "lucide-react";
import { theme } from "../../config/theme";
import { projects } from "../../config/data";
import { SectionHeader, GlowCard, MonoText } from "../../components/shared";

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="03" label="PROJETOS" title="O que já construí" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <GlowCard key={p.name} lift className="flex flex-col p-5 rounded">
              <MonoText
                as="h3"
                color={theme.colors.accent.primary}
                size="0.95rem"
                weight={600}
                style={{ textShadow: `0 0 6px ${theme.colors.accent.primary}44`, marginBottom: "0.75rem" }}
              >
                {p.name}
              </MonoText>

              <MonoText
                as="p"
                color={theme.colors.text.muted}
                size="0.78rem"
                className="flex-1 mb-4"
                style={{ lineHeight: 1.7 }}
              >
                {p.desc}
              </MonoText>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded"
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: "0.65rem",
                      background: `${theme.colors.accent.primary}11`,
                      color: `${theme.colors.accent.primary}99`,
                      border: `1px solid ${theme.colors.accent.primary}22`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link flex items-center gap-1.5"
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: "0.75rem",
                    color: "#888",
                    textDecoration: "none",
                  }}
                >
                  <Github size={13} /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link flex items-center gap-1.5"
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: "0.75rem",
                      color: "#888",
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={13} /> Demo
                  </a>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      <style>{`
        .project-link:hover { color: ${theme.colors.accent.primary} !important; }
      `}</style>
    </section>
  );
}
