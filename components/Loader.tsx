"use client";

import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const { progress, active } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 grid place-items-center bg-ink"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-mono text-5xl text-accent tabular-nums">
              {Math.round(progress)}%
            </span>
            <div className="h-px w-48 overflow-hidden bg-slate-800">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-xs tracking-widest text-slate-500">
              LOADING SCENE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
