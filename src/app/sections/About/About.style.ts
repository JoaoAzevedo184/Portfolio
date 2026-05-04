import { theme } from "../../config/theme";

const accent = theme.colors.accent.primary;

export const aboutStyles = {
  section: {
    backgroundColor: theme.colors.bg.primary,
  },
  photoContainer: {
    background: `linear-gradient(135deg, ${accent}, ${accent}44, ${accent})`,
    boxShadow: `0 0 30px ${accent}44, 0 0 60px ${accent}22`,
  },
  photoInner: {
    width: "180px",
    height: "180px",
    border: "3px solid #0a0a0a",
  },
  photoLine: {
    width: "190px",
    height: "2px",
    background: `linear-gradient(90deg, transparent, ${accent}55, transparent)`,
  },
  codeBlock: {
    background: theme.colors.bg.card,
    border: theme.borders.sectionLine,
  },
  highlightIcon: {
    color: accent,
    background: `${accent}15`,
  }
} as const;

export const codeColors = {
  keyword: accent,
  property: "#7ec8e3",
  string: "#f0c27f",
  bracket: "#888",
  variable: theme.colors.text.primary,
};