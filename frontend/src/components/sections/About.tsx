import { motion } from "framer-motion";
import { Cloud, Code2, Shield, Zap } from "lucide-react";
import { fadeUp, staggerContainer, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  {
    icon: Code2,
    title: "Backend Engineering",
    desc: "REST APIs, clean architecture, and maintainable TypeScript services at scale.",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    desc: "JWT flows, RBAC, and hardened middleware for production-ready systems.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS deployments, Docker workflows, and environment-driven configuration.",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    desc: "Structured thinking for performance, reliability, and real-world trade-offs.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="About"
            title="Engineering quality that recruiters can feel"
            subtitle="I'm a Computer Engineering graduate from VIT Pune with hands-on experience as a Backend Developer at Codewits Solutions (Perimeters.io), focused on building systems that are secure, scalable, and thoughtfully designed."
          />

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {pillars.map(({ icon: Icon, title, desc }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl p-5 hover:border-cyan-400/25 transition-all duration-400 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-shadow">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.p
          className="mt-12 max-w-3xl text-zinc-400 leading-relaxed text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.55 }}
        >
          From internship work on Perimeters.io to full-stack projects like Travelgo and
          HealthBooker, I prioritize clean code, testable APIs, and developer experience. I enjoy
          owning the backend deeply—data modeling, auth, observability—while shipping polished
          React interfaces that complete the story.
        </motion.p>
      </div>
    </section>
  );
}
