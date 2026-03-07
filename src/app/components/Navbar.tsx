import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Início", "Sobre", "Stack", "Projetos", "Contato"];
const ids = ["hero", "sobre", "stack", "projetos", "contato"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #00ff9c22",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#00ff9c",
          textShadow: "0 0 12px #00ff9c",
          letterSpacing: "0.15em",
          fontSize: "1.1rem",
        }}
      >
        &lt;DEV/&gt;
      </span>

      {/* Desktop */}
      <div className="hidden md:flex gap-8">
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(ids[i])}
            className="transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#aaa",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#00ff9c";
              (e.target as HTMLElement).style.textShadow = "0 0 8px #00ff9c";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "#aaa";
              (e.target as HTMLElement).style.textShadow = "none";
            }}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden"
        style={{ color: "#00ff9c" }}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-4 px-6 py-6"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderBottom: "1px solid #00ff9c22",
          }}
        >
          {links.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(ids[i])}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#00ff9c",
                fontSize: "0.9rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              &gt; {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
