import { useState } from "react";
import { Menu, X } from "lucide-react";
import { theme } from "../config/theme";
import { navLinks, identity } from "../config/data";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: theme.borders.sectionLine,
      }}
    >
      
      <span
        style={{
          fontFamily: theme.fonts.mono,
          color: theme.colors.accent.primary,
          textShadow: theme.colors.glow.text,
          letterSpacing: "0.15em",
          fontSize: "1.1rem",
        }}
      >
        &lt;DEV/&gt;
      </span>
      

      {/* Desktop */}
      <div className="hidden md:flex gap-8">
       {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <button
              key={link.label}
              onClick={() => scrollTo(link.sectionId)}
              className="nav-link transition-all duration-200 hover:scale-105 flex items-center gap-2"
              style={{
                fontFamily: theme.fonts.mono,
                color: theme.colors.text.secondary,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {Icon && <Icon size={16} />}
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden"
        style={{ color: theme.colors.accent.primary, background: "none", border: "none" }}
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
            borderBottom: theme.borders.sectionLine,
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.sectionId)}
                className="nav-link transition-all duration-200 hover:scale-105 flex items-center gap-2"
                style={{
                  fontFamily: theme.fonts.mono,
                  color: theme.colors.text.secondary,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {Icon && <Icon size={16} />}
                {link.label}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        .nav-link:hover {
          color: ${theme.colors.accent.primary} !important;
          text-shadow: ${theme.colors.glow.textSoft};
        }
      `}</style>
    </nav>
  );
}
