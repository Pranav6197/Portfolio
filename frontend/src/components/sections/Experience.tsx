import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../../data/experience";
import { fadeUp, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Shipping production code as an intern"
          subtitle="Hands-on backend development at Perimeters.io with enterprise-grade tooling and practices."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.6)] ring-4 ring-[#07070d]" />

              <div className="glass-panel rounded-2xl p-6 md:p-8 hover:border-cyan-400/20 transition-all duration-400 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 items-center justify-center">
                      <Briefcase className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-300/90 font-medium mt-1">
                        {exp.company}
                        {exp.product && (
                          <span className="text-zinc-400"> · {exp.product}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-zinc-500">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-violet-500/15 text-violet-300 border border-violet-500/20">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((item) => (
                    <li key={item} className="text-sm text-zinc-400 flex gap-2 leading-relaxed">
                      <span className="text-cyan-400 mt-1.5 shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-zinc-300 group-hover:border-cyan-400/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
