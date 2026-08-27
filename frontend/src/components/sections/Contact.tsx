import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "../ui/SocialIcons";
import { profile } from "../../data/profile";
import { fadeUp, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";

const socialButtons = [
  {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Mail,
    label: "Email",
  },
  { href: profile.social.github, icon: IconGithub, label: "GitHub" },
  { href: profile.social.linkedin, icon: IconLinkedin, label: "LinkedIn" },
  { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something remarkable"
          subtitle="Open to internships, full-time roles, and collaboration on ambitious engineering work."
        />

        <div className="grid gap-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
          >
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Whether you&apos;re hiring, mentoring, or exploring a project—reach out. I typically
              respond within 24–48 hours.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socialButtons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  {...(!href.startsWith("mailto:") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex items-center gap-3 p-4 rounded-xl glass-panel text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
