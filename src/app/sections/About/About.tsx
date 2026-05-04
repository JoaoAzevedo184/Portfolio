import { Terminal, Code2, Server, Zap } from "lucide-react";
import { theme } from "../../config/theme";
import { identity, aboutBio, aboutHighlights } from "../../config/data";
import { SectionHeader, GlowCard, MonoText } from "../../components/shared";
import profilePhoto from "../../assets/profile.png";
import { aboutStyles, codeColors } from "./About.style";

const iconMap = { Server, Code2, Terminal, Zap } as const;

function ProfilePhoto() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full p-[3px]" style={aboutStyles.photoContainer}>
        <div className="rounded-full overflow-hidden" style={aboutStyles.photoInner}>
          <img
            src={profilePhoto}
            alt={`Foto de ${identity.name} ${identity.surname}`}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
      </div>

      <div className="mt-3" style={aboutStyles.photoLine} />
      
      <MonoText
        as="div"
        size="0.75rem"
        color={`${theme.colors.accent.primary}88`}
        className="mt-2"
        style={{ letterSpacing: "0.15em" }}
      >
        {identity.shortName}
      </MonoText>
      <MonoText
        as="div"
        size="0.65rem"
        color={theme.colors.text.dimmed}
        style={{ marginTop: "2px" }}
      >
        {identity.role}
      </MonoText>
    </div>
  );
}

function CodeBlock() {
  const entries = Object.entries(aboutBio.codeBlock);

  return (
    <div className="rounded p-5 mb-6" style={aboutStyles.codeBlock}>
      <MonoText as="div" size="0.8rem" color={theme.colors.text.dimmed}>
        <span style={{ color: codeColors.keyword }}>const</span>{" "}
        <span style={{ color: codeColors.variable }}>developer</span>{" "}
        <span style={{ color: codeColors.keyword }}>=</span>{" "}
        <span style={{ color: codeColors.bracket }}>&#123;</span>
        <br />
        {entries.map(([key, val]) => (
          <div key={key}>
            &nbsp;&nbsp;<span style={{ color: codeColors.property }}>{key}</span>:{" "}
            {typeof val === "boolean" ? (
              <span style={{ color: codeColors.keyword }}>{String(val)}</span>
            ) : (
              <span style={{ color: codeColors.string }}>"{val}"</span>
            )}
            ,
          </div>
        ))}
        <span style={{ color: codeColors.bracket }}>&#125;</span>
      </MonoText>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 px-6" style={aboutStyles.section}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          index="01"
          label="SOBRE_MIM"
          title="Quem sou eu"
          punctuation="?"
        />

        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start mb-12">
          <ProfilePhoto />
          <div>
            <CodeBlock />
            {aboutBio.paragraphs.map((para, i) => (
              <MonoText
                key={i}
                as="p"
                color={theme.colors.text.secondary}
                size="0.88rem"
                className={i > 0 ? "mt-4" : ""}
                style={{ lineHeight: 1.9 }}
              >
                {para}
              </MonoText>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutHighlights.map((h) => {
            const Icon = iconMap[h.iconName];
            return (
              <GlowCard key={h.label} className="flex items-start gap-4 p-4 rounded">
                <div className="shrink-0 p-2 rounded" style={aboutStyles.highlightIcon}>
                  <Icon size={18} />
                </div>
                <div>
                  <MonoText
                    as="div"
                    color={theme.colors.accent.primary}
                    size="0.82rem"
                    weight={600}
                    style={{ marginBottom: "0.2rem" }}
                  >
                    {h.label}
                  </MonoText>
                  <MonoText
                    as="div"
                    color={theme.colors.text.muted}
                    size="0.78rem"
                    style={{ lineHeight: 1.6 }}
                  >
                    {h.desc}
                  </MonoText>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}