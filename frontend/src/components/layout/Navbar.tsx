import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/profile";
import { scrollToSection } from "../../hooks/useSmoothScroll";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    setScrolled(scrollY.get() > 40);
    const sections = profile.nav.map((n) => n.id);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActive(id);
        break;
      }
    }
  });

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "glass-panel rounded-2xl shadow-lg shadow-black/20" : ""
        }`}
      >
        <nav className="flex items-center justify-between h-14 px-2 sm:px-4">
          <button
            type="button"
            onClick={() => handleNav("hero")}
            className="font-display text-lg font-bold tracking-tight group"
          >
            <span className="text-white group-hover:text-cyan-300 transition-colors">PB</span>
            <span className="text-gradient ml-1">.</span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {profile.nav.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active === item.id ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-3">
              {profile.nav.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className="w-full text-left px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
