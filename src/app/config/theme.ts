/**
 * Theme configuration — single source of truth for colors, fonts, and visual tokens.
 * Edit this file to change the entire look of the portfolio.
 */

export const theme = {
  colors: {
    bg: {
      primary: "#0a0a0a",
      secondary: "#080808",
      card: "#0d0d0d",
      input: "#111",
    },
    accent: {
      primary: "#00ff9c",
      /** Used for frontend tab */
      blue: "#00d4ff",
      /** Used for infra tab */
      purple: "#bf9bff",
    },
    text: {
      primary: "#fff",
      secondary: "#999",
      muted: "#777",
      dimmed: "#555",
      faint: "#444",
      ghost: "#333",
    },
    border: {
      subtle: "#00ff9c15",
      light: "#00ff9c22",
      medium: "#00ff9c33",
      hover: "#00ff9c55",
    },
    glow: {
      strong: "0 0 20px #00ff9c88, 0 0 40px #00ff9c44",
      medium: "0 0 20px #00ff9c66, 0 0 40px #00ff9c33",
      soft: "0 0 20px #00ff9c22",
      subtle: "0 0 10px #00ff9c",
      text: "0 0 12px #00ff9c",
      textSoft: "0 0 8px #00ff9c",
    },
    /** macOS-style window dots */
    windowDots: {
      close: "#ff5f57",
      minimize: "#febc2e",
      maximize: "#28c840",
    },
  },

  fonts: {
    mono: "'JetBrains Mono', monospace",
  },

  /** Reusable border strings for inline styles */
  borders: {
    cardDefault: "1px solid #00ff9c15",
    cardHover: "1px solid #00ff9c55",
    sectionLine: "1px solid #00ff9c22",
  },
} as const;

/** CSS class strings for common hover patterns (avoids inline JS handlers) */
export const hoverClasses = {
  cardLift: "transition-all duration-200 hover:border-[#00ff9c55] hover:shadow-[0_0_30px_#00ff9c11] hover:-translate-y-[3px]",
  cardGlow: "transition-all duration-200 hover:border-[#00ff9c55] hover:shadow-[0_0_20px_#00ff9c11]",
  linkGreen: "transition-colors duration-150 hover:text-[#00ff9c]",
  scale: "transition-all duration-200 hover:scale-105",
} as const;
