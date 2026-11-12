"use client";

import { motion } from "framer-motion";
import Section from "./Section";

interface Client {
  abbr: string;
  full?: string;
}

interface Job {
  role: string;
  company: string;
  period: string;
  clients?: Client[];
  bullets: string[];
}

const jobs: Job[] = [
  {
    role: "Software Engineer II",
    company: "Massive Integrated Tech Solutions Inc.",
    period: "May 2022 — Present",
    clients: [
      { abbr: "NKTI", full: "National Kidney and Transplant Institute" },
      { abbr: "EVMC", full: "Eastern Visayas Medical Center" },
    ],
    bullets: [
      "Developing the NKTI Human Resource Management System (HRMS) supporting hospital-wide operations.",
      "Building responsive Vue.js / Nuxt.js / Vuetify applications — data grids with expandable rows, inline editing, and large dataset handling.",
      "Maintaining Laravel backend services: RESTful APIs, complex business logic, and database transactions.",
      "Designing multi-level approval workflows, automated processes, and data import/export and reporting tools.",
      "Onboarding a new client, EVMC, onto the HRMS platform — configuring modules and workflows for their requirements.",
      "Executing full lifecycle development — specifications, verification plans, deployment tooling, and documentation.",
      "Serving as a subject matter expert across HRMS modules, collaborating with engineers, designers, QA, and project coordinators.",
      "Providing technical support, client walkthroughs, training, and continuous system improvement.",
    ],
  },
  {
    role: "Junior Software Engineer I (Front-End)",
    company: "Suiterus Technologies Inc.",
    period: "Feb 2022 — May 2022 · OJT (500 hrs)",
    bullets: [
      "Developed frontend components and learned enterprise web development practices.",
    ],
  },
  {
    role: "Work Immersion",
    company: "Electrical Equipment & System Integration Inc.",
    period: "2018 · SHS (80 hrs)",
    bullets: ["Completed senior high school industry immersion program."],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 // EXPERIENCE" title="Where I've Worked">
      <div className="relative border-l border-slate-800 pl-8">
        {jobs.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink shadow-[0_0_10px_2px_rgba(79,143,255,0.5)]" />
            <p className="font-mono text-xs tracking-widest text-accent">
              {job.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              {job.role}
            </h3>
            <p className="text-sm text-slate-500">{job.company}</p>
            {job.clients && (
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest text-slate-600">
                  CLIENTS
                </span>
                {job.clients.map((c) => (
                  <span
                    key={c.abbr}
                    className="rounded-full border border-accent/40 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] tracking-wider"
                  >
                    <span className="text-accent">{c.abbr}</span>
                    {c.full && (
                      <span className="text-slate-500"> · {c.full}</span>
                    )}
                  </span>
                ))}
              </div>
            )}
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-1.5 text-accent">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
