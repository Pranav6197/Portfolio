import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import { fadeUp, staggerContainer, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillIcon } from "../ui/SkillIcon";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />
      <div className="section-container relative">
        <SectionHeading
          eyebrow="Skills"
          title="A stack built for real-world delivery"
          subtitle="Technologies I use daily across frontend, backend, cloud, and engineering fundamentals."
          align="center"
        />

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="glass-panel rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-400"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 group-hover:border-cyan-400/30 transition-colors">
                  <SkillIcon name={cat.icon} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(34,211,238,0.15)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
