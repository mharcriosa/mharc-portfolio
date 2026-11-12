"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const schools = [
  {
    school: "Our Lady of Fatima University — Antipolo",
    program: "Bachelor of Science in Information Technology",
    period: "2018 — 2022",
  },
  {
    school: "Nuestra Señora de Guia Academy of Marikina",
    program: "ICT (Information Computer Technology) Strand",
    period: "2016 — 2018",
  },
];

export default function Education() {
  return (
    <Section id="education" eyebrow="05 // EDUCATION" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {schools.map((s, i) => (
          <motion.div
            key={s.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="card p-6"
          >
            <p className="font-mono text-xs tracking-widest text-accent">
              {s.period}
            </p>
            <h3 className="mt-2 font-semibold text-slate-100">{s.school}</h3>
            <p className="mt-1 text-sm text-slate-400">{s.program}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
