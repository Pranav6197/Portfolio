import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile } from "../../data/profile";
import { scrollToSection } from "../../hooks/useSmoothScroll";
import { GlowButton } from "../ui/GlowButton";

const headlineWords = ["Full-Stack", "&", "Backend", "Engineer"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs sm:text-sm text-cyan-300/90 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Computer Engineering Graduate @ VIT Pune · Backend / Full Stack Developer @ Perimeters.io</span>
        </motion.div>

        <div className="max-w-4xl">
          <p className="text-zinc-400 text-lg mb-4 font-medium">Hi, I&apos;m</p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {profile.name}
            </motion.span>
            <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  className={word === "&" ? "text-zinc-500" : "text-gradient"}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {profile.tagline} I build production-grade APIs, secure authentication layers, and
            scalable systems with Node.js, TypeScript, and cloud-native tooling.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <GlowButton onClick={() => scrollToSection("projects")}>View Projects</GlowButton>
            <GlowButton variant="secondary" onClick={() => scrollToSection("contact")}>
              <Mail className="w-4 h-4" />
              Contact Me
            </GlowButton>
            <GlowButton
              variant="ghost"
              href={profile.resumePath}
              download
              className="border border-white/10"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </GlowButton>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-zinc-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

      <motion.div
        className="absolute right-0 top-1/3 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(34,211,238,0.2), rgba(139,92,246,0.25), rgba(34,211,238,0.2))",
          filter: "blur(60px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
