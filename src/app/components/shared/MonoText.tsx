import { type ReactNode, type CSSProperties } from "react";
import { theme } from "../../config/theme";

type MonoTextProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  size?: string;
  weight?: number;
  className?: string;
  style?: CSSProperties;
  glow?: boolean;
};

/**
 * Text component with JetBrains Mono.
 * Eliminates ~100 instances of `fontFamily: "'JetBrains Mono', monospace"`.
 */
export function MonoText({
  children,
  as: Tag = "span",
  color = theme.colors.text.secondary,
  size = "0.85rem",
  weight,
  className = "",
  style = {},
  glow = false,
}: MonoTextProps) {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: theme.fonts.mono,
        color,
        fontSize: size,
        fontWeight: weight,
        textShadow: glow ? theme.colors.glow.textSoft : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
