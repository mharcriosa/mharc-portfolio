"use client";

import { motion } from "framer-motion";

const NAME = "MHARC RIOSA";
const FIRST = "MHARC";
const LAST = "RIOSA";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-0"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-slate-800 bg-surface/60 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-slate-400">
            OPEN TO OPPORTUNITIES
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-4 font-mono text-sm tracking-[0.3em] text-accent"
        >
          {"// HELLO, I'M"}
        </motion.p>

        <h1
          className="text-5xl font-bold leading-tight text-slate-100 md:text-8xl"
          aria-label={NAME}
        >
          {FIRST.split("").map((char, i) => (
            <motion.span
              key={`f-${i}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.04, duration: 0.45 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
          {LAST.split("").map((char, i) => (
            <motion.span
              key={`l-${i}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.04, duration: 0.45 }}
              className="inline-block bg-gradient-to-b from-accent via-blue-300 to-cyan-200 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-2 text-2xl font-semibold text-slate-400 md:text-5xl"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="mt-6 max-w-xl leading-relaxed text-slate-400"
        >
          4+ years crafting enterprise web applications with Vue.js, Nuxt.js,
          Vuetify, and Laravel — from responsive interfaces to REST APIs and
          workflow automation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-3 font-mono text-xs tracking-widest text-slate-500"
        >
          MARIKINA CITY / SAN MATEO, RIZAL, PH
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#systems"
            className="border border-accent px-7 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="bg-accent px-7 py-3 font-mono text-sm text-ink shadow-[0_0_28px_-6px_rgba(79,143,255,0.55)] transition-all hover:opacity-85"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll to About"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-10 w-6 rounded-full border border-slate-600"
        >
          <span className="mx-auto mt-2 block h-2 w-1 rounded bg-accent" />
        </motion.span>
      </motion.a>
    </section>
  );
}
