import { Mail, Github, Linkedin } from "lucide-react";
import { theme } from "../config/theme";
import { contacts, identity } from "../config/data";
import { SectionHeader, MonoText } from "./shared";

const iconMap = { Mail, Github, Linkedin } as const;

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6" style={{ backgroundColor: theme.colors.bg.secondary }}>
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader index="04" label="CONTATO" title="Vamos conversar" punctuation="?" centered />

        <MonoText as="p" color="#666" size="0.88rem" className="mt-6 mb-10" style={{ lineHeight: 1.8 }}>
          Disponível para estágios, colaborações ou apenas uma boa conversa sobre tecnologia.
        </MonoText>

        {/* Terminal-style contact box */}
        <div
          className="rounded p-6 mb-10 text-left"
          style={{ background: theme.colors.bg.card, border: theme.borders.sectionLine }}
        >
          {/* Window dots */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full" style={{ background: theme.colors.windowDots.close }} />
            <div className="w-3 h-3 rounded-full" style={{ background: theme.colors.windowDots.minimize }} />
            <div className="w-3 h-3 rounded-full" style={{ background: theme.colors.windowDots.maximize }} />
            <MonoText className="ml-3" size="0.75rem" color={theme.colors.text.faint}>
              terminal — contact.sh
            </MonoText>
          </div>

          <MonoText as="div" size="0.82rem" color={theme.colors.text.dimmed} style={{ marginBottom: "0.75rem" }}>
            <span style={{ color: theme.colors.accent.primary }}>$</span> ./contact --dev {identity.shortName.toLowerCase()}
          </MonoText>
          <MonoText as="div" size="0.78rem" color={theme.colors.text.faint} style={{ marginBottom: "1.5rem" }}>
            Fetching contact info... <span style={{ color: theme.colors.accent.primary }}>done ✓</span>
          </MonoText>

          <div className="flex flex-col gap-3">
            {contacts.map((c) => {
              const Icon = iconMap[c.iconName];
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link flex items-center gap-4 p-3 rounded"
                  style={{
                    textDecoration: "none",
                    background: theme.colors.bg.input,
                    border: `1px solid ${theme.colors.accent.primary}11`,
                  }}
                >
                  <div style={{ color: theme.colors.accent.primary }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <MonoText as="div" size="0.7rem" color={theme.colors.text.dimmed} style={{ marginBottom: "0.1rem" }}>
                      {c.label}
                    </MonoText>
                    <MonoText as="div" size="0.82rem" color="#ccc">
                      {c.value}
                    </MonoText>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <MonoText as="p" size="0.72rem" color={theme.colors.text.ghost}>
          Desenvolvido com React + Tailwind CSS &nbsp;·&nbsp; © 2026 {identity.name} {identity.surname}
        </MonoText>
      </div>

      <style>{`
        .contact-link:hover {
          border-color: ${theme.colors.accent.primary}44 !important;
          box-shadow: 0 0 15px ${theme.colors.accent.primary}11;
        }
      `}</style>
    </section>
  );
}
