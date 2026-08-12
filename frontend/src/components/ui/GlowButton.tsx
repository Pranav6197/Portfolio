import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "../../hooks/useMagnetic";

type GlowButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-500/90 to-violet-600/90 text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]",
  secondary:
    "glass-panel text-white border border-white/10 hover:border-cyan-400/40 hover:bg-white/5",
  ghost: "text-zinc-300 hover:text-white bg-transparent border border-transparent hover:border-white/10",
};

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  external,
  type = "button",
  disabled,
}: GlowButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement | HTMLButtonElement>();

  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden group";

  const inner = (
    <>
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/10 via-transparent to-violet-500/10" />
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`${base} ${variants[variant]} ${className}`}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${base} ${variants[variant]} ${className} disabled:pointer-events-none`}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
