"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TechIcon from "./TechIcon";
import { categories, marqueeBottom, marqueeTop, techs, type Category, type TechKey } from "@/data/content";

function Marquee({ items, reverse }: { items: TechKey[]; reverse?: boolean }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  // Repete a lista até cobrir pelo menos o dobro da viewport, para a faixa nunca abrir buraco.
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const track = trackRef.current;
    const item = itemRef.current;
    if (!track || !item) return;
    const fit = () => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const copyWidth = items.length * (item.getBoundingClientRect().width + gap);
      if (!copyWidth) return;
      setCopies(Math.max(2, Math.ceil((window.innerWidth * 2) / copyWidth) + 1));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [items.length]);

  const loop = Array.from({ length: copies }, () => items).flat();

  return (
    <div className={`marquee${reverse ? " marquee-reverse" : ""}`}>
      <ul
        ref={trackRef}
        className="marquee-track"
        style={{ "--n": items.length } as React.CSSProperties}
      >
        {loop.map((key, i) => {
          const t = techs[key];
          const icon = "icon" in t ? t.icon : undefined;
          const mono = ("monoIcon" in t && t.monoIcon) || icon;
          return (
            <li
              key={`${key}-${i}`}
              ref={i === 0 ? itemRef : undefined}
              className="marquee-item"
              title={t.name}
              aria-hidden={i >= items.length}
            >
              {icon && (
                <>
                  <span
                    className={`mono-icon${mono !== icon ? " mono-icon-cutout" : ""}`}
                    style={{ "--src": `url("${mono}")` } as React.CSSProperties}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt={t.name} loading="lazy" />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Stack() {
  const [filter, setFilter] = useState<Category | "Todas">("Todas");
  const all = Object.keys(techs) as TechKey[];
  const visible = useMemo(
    () => all.filter((k) => filter === "Todas" || techs[k].category === filter),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter]
  );

  const gridRef = useRef<HTMLUListElement>(null);
  // o fade no rodapé da grade só aparece enquanto ainda há item para rolar
  const [hasMore, setHasMore] = useState(false);

  const updateFade = useCallback(() => {
    const el = gridRef.current;
    if (!el) return;
    setHasMore(el.scrollHeight - el.clientHeight - el.scrollTop > 8);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (el) el.scrollTop = 0; // filtro novo começa do topo
    updateFade();
    window.addEventListener("resize", updateFade);
    return () => window.removeEventListener("resize", updateFade);
  }, [filter, updateFade]);

  return (
    <section id="stack" className="section section-wide">
      <h2 className="section-title">Stack</h2>

      <Marquee items={marqueeTop} />

      <div className="stack-card panel">
        <div className="chips" role="group" aria-label="Filtrar tecnologias">
          {(["Todas", ...categories] as const).map((c) => (
            <button
              key={c}
              className={`chip${filter === c ? " is-active" : ""}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <ul
          ref={gridRef}
          className={`stack-grid${hasMore ? " has-more" : ""}`}
          onScroll={updateFade}
        >
          {visible.map((k) => (
            <li key={k} className="stack-item">
              <TechIcon tech={k} size={44} />
              <span>{techs[k].name}</span>
            </li>
          ))}
        </ul>
      </div>

      <Marquee items={marqueeBottom} reverse />
    </section>
  );
}
