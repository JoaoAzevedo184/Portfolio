"use client";

// Fundo e tipografia no estilo "AI Runtime" (MotionSites), com o vídeo puxado para azul claro via CSS.
import { useEffect, useRef, useState } from "react";

const VIDEO = "/videos/hero.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  // Garantia de autoplay: alguns navegadores ignoram o atributo, mas aceitam play() em vídeo mudo.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => setFailed(true));
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        {!failed && (
          <video
            ref={videoRef}
            className="hero-video"
            src={VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setFailed(true)}
          />
        )}
        <div className="hero-shade" />
      </div>

      <div className="hero-content">
        <p className="status-pill anim" style={{ "--d": "0.05s" } as React.CSSProperties}>
          <span className="status-dot" />
          Aberto a estágio, vagas júnior e freelas
        </p>

        <h1 className="hero-title">
          <span>Developer</span>
          <span>Backend</span>
        </h1>

        <div className="hero-rule anim" style={{ "--d": "0.42s" } as React.CSSProperties} aria-hidden="true" />

        <p className="hero-text anim" style={{ "--d": "0.5s" } as React.CSSProperties}>
          Sou João Victor. Construo APIs em Java, Python e Node.js e coloco tudo para rodar com Docker,
          Kubernetes e CI/CD.
        </p>

        <div className="hero-actions anim" style={{ "--d": "0.6s" } as React.CSSProperties}>
          <a href="#contato" className="btn btn-light">
            Entrar em contato
          </a>
          <a href="/curriculo.pdf" className="btn btn-dark" download>
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}
