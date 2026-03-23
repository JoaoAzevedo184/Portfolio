import { type ReactNode } from "react";
import { theme } from "../../config/theme";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  /** Accent color for hover glow. Defaults to theme primary. */
  accentColor?: string;
  /** Whether card lifts on hover */
  lift?: boolean;
  onClick?: () => void;
};

/**
 * Card with neon border glow on hover.
 * Replaces all the repetitive onMouseEnter/onMouseLeave inline style handlers.
 */
export function GlowCard({
  children,
  className = "",
  accentColor = theme.colors.accent.primary,
  lift = false,
  onClick,
}: GlowCardProps) {
  // Build dynamic CSS custom properties for the accent color
  const cardStyle = {
    "--card-accent": accentColor,
    "--card-accent-hover": `${accentColor}55`,
    "--card-accent-glow": `${accentColor}11`,
    background: theme.colors.bg.card,
    border: `1px solid ${accentColor}15`,
  } as React.CSSProperties;

  return (
    <>
      <div
        className={`glow-card ${lift ? "glow-card--lift" : ""} ${className}`}
        style={cardStyle}
        onClick={onClick}
      >
        {children}
      </div>
      <style>{`
        .glow-card {
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .glow-card:hover {
          border-color: var(--card-accent-hover) !important;
          box-shadow: 0 0 20px var(--card-accent-glow);
        }
        .glow-card--lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px var(--card-accent-glow);
        }
      `}</style>
    </>
  );
}
