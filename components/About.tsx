"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "7", label: "Systems Built" },
  { value: "2", label: "Companies" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="01 // ABOUT" title="About Me">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 leading-relaxed text-slate-400">
          <p>
            I&apos;m a frontend-focused software engineer with over 4 years of
            experience building enterprise web applications using Vue.js,
            Nuxt.js, and Vuetify. I engineer responsive interfaces that elevate
            user engagement and integrate seamlessly with Laravel-powered REST
            APIs.
          </p>
          <p>
            I collaborate with Agile teams to resolve intricate issues,
            contribute backend development, and support systems end-to-end —
            from data grids and multi-level approval workflows to automated
            processes and manual testing. Currently, I build the NKTI Human
            Resource Management System supporting hospital-wide operations.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="card p-5"
            >
              <p className="text-3xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 font-mono text-xs tracking-wider text-slate-500">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
