import type { ReactNode, CSSProperties } from "react";

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties; // Necesario para inline styles
}

export default function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div
      className={`glass-card ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
