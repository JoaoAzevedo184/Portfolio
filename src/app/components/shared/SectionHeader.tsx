import { theme } from "../../config/theme";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  /** Character appended with glow effect (e.g. "?" or ".") */
  punctuation?: string;
  centered?: boolean;
};

export function SectionHeader({
  index,
  label,
  title,
  punctuation = ".",
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <div
        style={{
          fontFamily: theme.fonts.mono,
          color: theme.colors.accent.primary,
          fontSize: "0.8rem",
          letterSpacing: "0.3em",
          marginBottom: "0.5rem",
        }}
      >
        // {index}. {label}
      </div>
      <h2
        style={{
          fontFamily: theme.fonts.mono,
          color: theme.colors.text.primary,
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {title}
        <span
          style={{
            color: theme.colors.accent.primary,
            textShadow: `0 0 10px ${theme.colors.accent.primary}`,
          }}
        >
          {punctuation}
        </span>
      </h2>
      <div
        className={`mt-3 h-px w-16 ${centered ? "mx-auto" : ""}`}
        style={{
          background: theme.colors.accent.primary,
          boxShadow: `0 0 8px ${theme.colors.accent.primary}`,
        }}
      />
    </div>
  );
}
