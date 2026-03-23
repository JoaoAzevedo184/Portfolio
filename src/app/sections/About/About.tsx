import { Terminal, Code2, Server, Zap, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { theme } from "../../config/theme";
import { identity, aboutBio, aboutHighlights } from "../../config/data";
import { SectionHeader, GlowCard, MonoText } from "../../components/shared";

const iconMap = { Server, Code2, Terminal, Zap } as const;

function PhotoSlot() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [hover, setHover] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhoto(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative rounded-full overflow-hidden cursor-pointer transition-all duration-200"
        style={{
          width: "160px",
          height: "160px",
          border: photo
            ? `3px solid ${theme.colors.accent.primary}`
            : `2px dashed ${theme.colors.accent.primary}44`,
          boxShadow: photo ? `0 0 24px ${theme.colors.accent.primary}55, 0 0 60px ${theme.colors.accent.primary}22` : "none",
        }}
        onClick={() => inputRef.current?.click()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {photo ? (
          <>
            <img
              src={photo}
              alt="Foto do desenvolvedor"
              className="w-full h-full object-cover"
              style={{ filter: hover ? "brightness(0.5)" : "brightness(1)", transition: "filter 0.2s" }}
            />
            {hover && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-1"
                style={{ color: theme.colors.accent.primary }}
              >
                <Upload size={20} />
                <MonoText size="0.65rem">Trocar foto</MonoText>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ background: theme.colors.bg.card }}>
            <div
              style={{
                width: 52, height: 52, borderRadius: "50%",
                background: `${theme.colors.accent.primary}11`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Upload size={20} style={{ color: `${theme.colors.accent.primary}66` }} />
            </div>
            <MonoText size="0.62rem" color={`${theme.colors.accent.primary}55`} style={{ textAlign: "center", padding: "0 8px" }}>
              Sua foto aqui
            </MonoText>
          </div>
        )}
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>

      <div
        className="mt-2"
        style={{ width: "170px", height: "2px", background: `linear-gradient(90deg, transparent, ${theme.colors.accent.primary}55, transparent)` }}
      />
      <MonoText as="div" size="0.7rem" color={`${theme.colors.accent.primary}66`} className="mt-2" style={{ letterSpacing: "0.15em" }}>
        {identity.shortName}
      </MonoText>
      <MonoText as="div" size="0.62rem" color={theme.colors.text.faint} style={{ marginTop: "2px" }}>
        {identity.role}
      </MonoText>
    </div>
  );
}

function CodeBlock() {
  const entries = Object.entries(aboutBio.codeBlock);

  return (
    <div
      className="rounded p-5 mb-6"
      style={{ background: theme.colors.bg.card, border: theme.borders.sectionLine }}
    >
      <MonoText as="div" size="0.8rem" color={theme.colors.text.dimmed}>
        <span style={{ color: theme.colors.accent.primary }}>const</span>{" "}
        <span style={{ color: theme.colors.text.primary }}>developer</span>{" "}
        <span style={{ color: theme.colors.accent.primary }}>=</span>{" "}
        <span style={{ color: "#888" }}>&#123;</span>
        <br />
        {entries.map(([key, val]) => (
          <div key={key}>
            &nbsp;&nbsp;<span style={{ color: "#7ec8e3" }}>{key}</span>:{" "}
            {typeof val === "boolean" ? (
              <span style={{ color: theme.colors.accent.primary }}>{String(val)}</span>
            ) : (
              <span style={{ color: "#f0c27f" }}>"{val}"</span>
            )}
            ,
          </div>
        ))}
        <span style={{ color: "#888" }}>&#125;</span>
      </MonoText>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 px-6" style={{ backgroundColor: theme.colors.bg.primary }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="01" label="SOBRE_MIM" title="Quem sou eu" punctuation="?" />

        {/* Top: photo + bio */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start mb-12">
          <PhotoSlot />

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

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutHighlights.map((h) => {
            const Icon = iconMap[h.iconName];
            return (
              <GlowCard key={h.label} className="flex items-start gap-4 p-4 rounded">
                <div className="shrink-0 p-2 rounded" style={{ color: theme.colors.accent.primary, background: `${theme.colors.accent.primary}15` }}>
                  <Icon size={18} />
                </div>
                <div>
                  <MonoText as="div" color={theme.colors.accent.primary} size="0.82rem" weight={600} style={{ marginBottom: "0.2rem" }}>
                    {h.label}
                  </MonoText>
                  <MonoText as="div" color={theme.colors.text.muted} size="0.78rem" style={{ lineHeight: 1.6 }}>
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
