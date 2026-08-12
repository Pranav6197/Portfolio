import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../../data/education";
import { fadeUp, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation, industry mindset"
          align="center"
        />

        <motion.div
          className="max-w-2xl mx-auto glass-panel rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative">
            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-cyan-300" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              {education.degree}
            </h3>
            <p className="text-cyan-300/90 font-medium mb-1">{education.institution}</p>
            <p className="text-sm text-zinc-500 flex items-center justify-center gap-1 mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Pune, India · {education.period}
            </p>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-8">
              {education.status}
            </span>

            <ul className="text-left space-y-3 max-w-md mx-auto">
              {education.highlights.map((item) => (
                <li key={item} className="text-sm text-zinc-400 flex gap-2">
                  <span className="text-violet-400">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
