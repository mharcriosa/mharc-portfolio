"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import Section from "./Section";

interface System {
  name: string;
  desc: string;
  tags: string[];
}

const systems: System[] = [
  {
    name: "Strategic Performance Management System (SPMS)",
    desc: "Goal-setting, performance rating, and appraisal workflows for hospital staff.",
    tags: ["Vue.js", "Vuetify", "Laravel", "MySQL"],
  },
  {
    name: "Job Portal & Recruitment System",
    desc: "End-to-end hiring pipeline — postings, applications, screening, and onboarding.",
    tags: ["Nuxt.js", "Laravel", "MySQL"],
  },
  {
    name: "Human Resource Information System (HRIS)",
    desc: "Centralized employee records, profiles, and organizational data management.",
    tags: ["Vue.js", "Vuetify", "Laravel"],
  },
  {
    name: "Talent Management System",
    desc: "Succession planning, competency tracking, and employee development modules.",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    name: "Timekeeping Module",
    desc: "Attendance capture, shift schedules, overtime computation, and leave balances.",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    name: "SALN Module",
    desc: "Statement of Assets, Liabilities and Net Worth filing and compliance tracking.",
    tags: ["Vue.js", "Laravel"],
  },
  {
    name: "Employee Portal",
    desc: "Self-service hub for payslips, leave requests, and HR announcements.",
    tags: ["Nuxt.js", "Vuetify", "Firebase"],
  },
];

const extraModules = [
  "Payroll",
  "Leave Management",
  "Locator Slip",
  "PDS (Personal Data Sheet)",
  "Service Record",
  "Loan & Refund",
  "Learning & Development",
  "Promotion",
  "HR Exit",
  "Minutes of Meeting",
  "Organizational Structure",
  "Mentorship",
];

function TiltCard({ system }: { system: System }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="card group p-6"
    >
      <h3 className="font-semibold leading-snug text-slate-100 transition-colors group-hover:text-accent">
        {system.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{system.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {system.tags.map((t) => (
          <span key={t} className="font-mono text-[10px] tracking-wider text-accent/80">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Systems() {
  return (
    <Section id="systems" eyebrow="04 // SYSTEMS" title="Systems I've Built">
      <p className="-mt-4 mb-10 max-w-2xl text-sm text-slate-500">
        Enterprise modules shipped for the HRMS platform at Massive
        Integrated Tech Solutions Inc. — serving clients including NKTI and EVMC.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
        {systems.map((s) => (
          <TiltCard key={s.name} system={s} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-8"
      >
        <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-slate-600">
          ALSO BUILT INTO THE PLATFORM
        </p>
        <div className="flex flex-wrap gap-2">
          {extraModules.map((m) => (
            <span
              key={m}
              className="rounded-full border border-slate-800 px-3 py-1 font-mono text-[10px] tracking-wider text-slate-400 transition-colors hover:border-accent/50 hover:text-accent"
            >
              {m}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
