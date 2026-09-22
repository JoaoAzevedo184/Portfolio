"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "sobre", label: "Sobre" },
  { id: "stack", label: "Stack" },
  { id: "projetos", label: "Projetos" },
  { id: "servicos", label: "Serviços" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

export default function Sidebar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  // Progresso do scroll alimenta a linha neon via variável CSS (sem re-render)
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight;
      root.style.setProperty("--progress", String(max > 0 ? root.scrollTop / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Seção ativa
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["inicio", ...items.map((i) => i.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Menu mobile
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <aside className="rail" aria-label="Navegação principal">
        <a href="#inicio" className="logo" aria-label="Voltar ao início">
          {/* Troque pelo seu logo: <img src="/logo.svg" alt="" /> */}
          <span>JV</span>
        </a>
        <nav className="rail-nav-wrap">
          <ul className="rail-nav">
            {items.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  className={active === i.id ? "is-active" : undefined}
                  aria-current={active === i.id ? "true" : undefined}
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="neon-line" aria-hidden="true">
        <span className="neon-fill" />
        <span className="neon-tip" />
      </div>

      <header className="topbar">
        <a href="#inicio" className="logo" aria-label="Voltar ao início">
          <span>JV</span>
        </a>
        <button
          className={`burger${open ? " is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {open && (
        <div className="menu-overlay" onClick={() => setOpen(false)}>
          <nav id="mobile-menu" className="menu-sheet" onClick={(e) => e.stopPropagation()}>
            <ul>
              {items.map((i, idx) => (
                <li key={i.id} style={{ "--i": idx } as React.CSSProperties}>
                  <a
                    href={`#${i.id}`}
                    className={active === i.id ? "is-active" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/curriculo.pdf" className="btn btn-dark btn-block" download onClick={() => setOpen(false)}>
              Baixar currículo
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
