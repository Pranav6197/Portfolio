import { Award, CalendarDays, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { certifications } from "../../data/certification";
import { defaultViewport, fadeUp } from "../../lib/motion";
import { GlowButton } from "../ui/GlowButton";
import { SectionHeading } from "../ui/SectionHeading";

export function Certification() {
  return (
    <section id="certification" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certification"
          title="Proof of continuous learning"
          subtitle="A verified credential in building applications with LangChain and Python."
          align="center"
        />

        {certifications.map((certification, index) => (
          <motion.article
            key={certification.url}
            className="relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-3xl glass-panel p-8 last:mb-0 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-violet-500" />
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mb-8 block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan-400/40"
              aria-label={`View ${certification.issuer} certificate`}
            >
              <img
                src={certification.imageUrl}
                alt={`${certification.name} certificate issued to Pranav Bhawari`}
                className="block h-auto w-full"
              />
            </a>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-cyan-300">{certification.issuer}</p>
                <h3 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                  {certification.name}
                </h3>
                {(certification.issued || certification.credentialId) && (
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
                    {certification.issued && (
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-zinc-500" />
                        Issued {certification.issued}
                      </span>
                    )}
                    {certification.credentialId && (
                      <span className="inline-flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        ID: {certification.credentialId}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <GlowButton href={certification.url} external variant="secondary" className="shrink-0">
              <ExternalLink className="h-4 w-4" />
              Verify credential
            </GlowButton>
          </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}