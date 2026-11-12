"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <div className="mb-12">
        {eyebrow && (
          <p className="mb-2 font-mono text-xs tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">
          {title}
          <span className="ml-3 inline-block h-px w-16 translate-y-[-8px] bg-gradient-to-r from-slate-700 to-transparent md:w-32" />
        </h2>
      </div>
      {children}
    </motion.section>
  );
}
