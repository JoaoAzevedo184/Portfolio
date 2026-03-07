import { Terminal, Code2, Server, Zap, Upload } from "lucide-react";
import { useRef, useState } from "react";

const highlights = [
  { icon: <Server size={18} />, label: "Backend", desc: "Arquitetura de microsserviços e APIs REST de alta performance." },
  { icon: <Code2 size={18} />, label: "Clean Code", desc: "Código limpo, testável e com boas práticas de engenharia." },
  { icon: <Terminal size={18} />, label: "DevOps", desc: "Docker, CI/CD, Linux e deploy em ambientes de produção." },
  { icon: <Zap size={18} />, label: "Performance", desc: "Otimização de queries, cache e escalabilidade horizontal." },
];

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
          border: photo ? "3px solid #00ff9c" : "2px dashed #00ff9c44",
          boxShadow: photo ? "0 0 24px #00ff9c55, 0 0 60px #00ff9c22" : "none",
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
                style={{ color: "#00ff9c" }}
              >
                <Upload size={20} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}>
                  Trocar foto
                </span>
              </div>
            )}
          </>
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: "#0d0d0d" }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#00ff9c11",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Upload size={20} style={{ color: "#00ff9c66" }} />
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem",
                color: "#00ff9c55",
                textAlign: "center",
                padding: "0 8px",
              }}
            >
              Sua foto aqui
            </span>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />
      </div>
      {/* Decorative ring */}
      <div
        className="mt-2"
        style={{
          width: "170px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #00ff9c55, transparent)",
        }}
      />
      <div
        className="mt-2"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "#00ff9c66",
          letterSpacing: "0.15em",
        }}
      >
        Alex.Silva
      </div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.62rem",
          color: "#444",
          marginTop: "2px",
        }}
      >
        Backend Developer
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="sobre"
      className="py-24 px-6"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#00ff9c",
              fontSize: "0.8rem",
              letterSpacing: "0.3em",
              marginBottom: "0.5rem",
            }}
          >
            // 01. SOBRE_MIM
          </div>
          <h2
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#fff",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Quem sou eu
            <span style={{ color: "#00ff9c", textShadow: "0 0 10px #00ff9c" }}>?</span>
          </h2>
          <div className="mt-3 h-px w-16" style={{ background: "#00ff9c", boxShadow: "0 0 8px #00ff9c" }} />
        </div>

        {/* Top: photo + bio */}
        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start mb-12">
          {/* Photo */}
          <PhotoSlot />

          {/* Bio */}
          <div>
            <div
              className="rounded p-5 mb-6"
              style={{
                background: "#0d0d0d",
                border: "1px solid #00ff9c22",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "#555",
              }}
            >
              <span style={{ color: "#00ff9c" }}>const</span>{" "}
              <span style={{ color: "#fff" }}>developer</span>{" "}
              <span style={{ color: "#00ff9c" }}>=</span>{" "}
              <span style={{ color: "#888" }}>&#123;</span>
              <br />
              &nbsp;&nbsp;<span style={{ color: "#7ec8e3" }}>nome</span>:{" "}
              <span style={{ color: "#f0c27f" }}>"Alex Silva"</span>,
              <br />
              &nbsp;&nbsp;<span style={{ color: "#7ec8e3" }}>foco</span>:{" "}
              <span style={{ color: "#f0c27f" }}>"Backend Engineering"</span>,
              <br />
              &nbsp;&nbsp;<span style={{ color: "#7ec8e3" }}>experiência</span>:{" "}
              <span style={{ color: "#f0c27f" }}>"5+ anos"</span>,
              <br />
              &nbsp;&nbsp;<span style={{ color: "#7ec8e3" }}>disponível</span>:{" "}
              <span style={{ color: "#00ff9c" }}>true</span>
              <br />
              <span style={{ color: "#888" }}>&#125;</span>
            </div>

            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#999",
                fontSize: "0.88rem",
                lineHeight: 1.9,
              }}
            >
              Desenvolvedor backend com mais de <span style={{ color: "#00ff9c" }}>5 anos de experiência</span> construindo sistemas
              distribuídos, APIs RESTful e arquiteturas orientadas a serviços. Apaixonado por código limpo, performance e
              boas práticas de engenharia de software.
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#999",
                fontSize: "0.88rem",
                lineHeight: 1.9,
              }}
            >
              Especialista em <span style={{ color: "#00ff9c" }}>Java & Spring Boot</span>, com experiência em ambientes
              cloud (AWS), containerização com Docker e bancos de dados relacionais.
            </p>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-start gap-4 p-4 rounded transition-all duration-200"
              style={{
                background: "#0d0d0d",
                border: "1px solid #00ff9c15",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c55";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px #00ff9c11";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00ff9c15";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="shrink-0 p-2 rounded"
                style={{ color: "#00ff9c", background: "#00ff9c15" }}
              >
                {h.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#00ff9c",
                    fontSize: "0.82rem",
                    marginBottom: "0.2rem",
                    fontWeight: 600,
                  }}
                >
                  {h.label}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#777",
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                  }}
                >
                  {h.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
