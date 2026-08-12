import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "../../lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-2xl mb-14 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400/90 mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">{subtitle}</p>
      )}
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-cyan-400 via-violet-500 to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
