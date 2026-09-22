import { techs, type TechKey } from "@/data/content";

/** Ícone oficial dentro de um anel branco (resolve logos escuros como Rust e Express). */
export default function TechIcon({ tech, size = 40 }: { tech: TechKey; size?: number }) {
  const t = techs[tech];
  return (
    <span className="tech-ring" style={{ width: size, height: size }} aria-hidden="true">
      <span className="tech-ring-inner">
        {"icon" in t && t.icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.icon} alt="" loading="lazy" />
        ) : (
          <span className="tech-ring-letter">{t.name.charAt(0)}</span>
        )}
      </span>
    </span>
  );
}
