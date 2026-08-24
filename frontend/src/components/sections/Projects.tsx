import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { IconGithub } from "../ui/SocialIcons";
import { projects } from "../../data/projects";
import { fadeUp, staggerContainer, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";
import { GlowButton } from "../ui/GlowButton";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with measurable impact"
          subtitle="Full-stack and systems projects that reflect how I design, build, and ship software."
        />

        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={project.featured ? "lg:col-span-1" : ""}
            >
              <TiltCard className="h-full">
                <article className="project-card h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-wider">
                      0{index + 1}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-grow">
                    {project.summary}
                  </p>

                  <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Impact</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-chip text-xs py-1 px-2.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <GlowButton
                      variant="secondary"
                      href={project.github}
                      external
                      className="!px-4 !py-2 text-xs"
                    >
                      <IconGithub className="w-3.5 h-3.5" />
                      GitHub
                    </GlowButton>
                    {project.demo && (
                      <GlowButton
                        href={project.demo}
                        external
                        className="!px-4 !py-2 text-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </GlowButton>
                    )}
                  </div>

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
