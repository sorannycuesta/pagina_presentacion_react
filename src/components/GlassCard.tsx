// src/components/GlassCard.tsx
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <div
    className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
