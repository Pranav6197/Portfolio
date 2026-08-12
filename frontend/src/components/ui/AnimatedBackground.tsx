import { motion } from "framer-motion";

const shapes = [
  { size: 320, x: "10%", y: "15%", delay: 0, color: "rgba(34,211,238,0.12)" },
  { size: 240, x: "75%", y: "20%", delay: 1.2, color: "rgba(139,92,246,0.14)" },
  { size: 180, x: "60%", y: "65%", delay: 0.6, color: "rgba(59,130,246,0.1)" },
  { size: 140, x: "20%", y: "70%", delay: 1.8, color: "rgba(34,211,238,0.08)" },
];

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  duration: 4 + (i % 5),
  delay: (i % 7) * 0.4,
}));

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(139,92,246,0.12),transparent_50%)]" />

      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-300/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -18, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
