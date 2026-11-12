"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#systems", label: "Systems" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed top-0 z-40 w-full bg-gradient-to-b from-ink/95 via-ink/70 to-transparent"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-mono text-sm font-bold tracking-widest text-accent">
          MR<span className="text-slate-500">.dev</span>
        </a>
        <ul className="hidden gap-7 md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wider text-slate-400 transition-colors hover:text-accent"
              >
                <span className="mr-1 text-accent">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        style={{ scaleX: progress }}
        className="h-[2px] origin-left bg-gradient-to-r from-accent to-cyan-300"
      />
    </motion.header>
  );
}
