import { Mail, Code2 } from "lucide-react";
import { profile } from "../../data/profile";
import { IconGithub, IconLinkedin } from "../ui/SocialIcons";

const links = [
  { href: profile.social.github, icon: IconGithub, label: "GitHub" },
  { href: profile.social.linkedin, icon: IconLinkedin, label: "LinkedIn" },
  { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
  { href: profile.social.email, icon: Mail, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-500">
          © {year}{" "}
          <span className="text-zinc-300 font-medium">{profile.name}</span>. Crafted with precision.
        </p>
        <div className="flex items-center gap-3">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full glass-panel text-zinc-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <Icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
