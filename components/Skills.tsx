"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  {
    label: "FRONTEND",
    items: ["HTML", "CSS", "JavaScript", "Vue.js", "Nuxt.js", "Vuetify"],
  },
  {
    label: "BACKEND & DATABASE",
    items: ["PHP", "Laravel 8", "Firebase", "MySQL"],
  },
  {
    label: "TOOLS & PROCESS",
    items: ["Git", "GitLab", "GitHub", "Agile / Scrum"],
  },
  {
    label: "AI & PRODUCTIVITY",
    items: [
      "AI-Assisted Development",
      "Prompt Engineering",
      "ChatGPT / LLM Tools",
      "GitHub Copilot",
      "Cascade (Windsurf)",
    ],
  },
  {
    label: "OTHER",
    items: ["Manual QA / Testing", "Project Planning", "Documentation", "Web Development"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 // SKILLS" title="What I Work With">
      <div className="grid gap-8 md:grid-cols-2">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.5 }}
            className="card p-6"
          >
            <h3 className="mb-4 font-mono text-xs tracking-[0.3em] text-accent">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-slate-700 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
