"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

function use3DEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.innerWidth < 768;
    const hardwareThreads = navigator.hardwareConcurrency ?? 4;
    const lowPower = hardwareThreads <= 4;
    setEnabled(!(reduced || smallScreen || lowPower));
  }, []);

  return enabled;
}

export default function SceneWrapper() {
  const enabled = use3DEnabled();

  if (!enabled) {
    return <div className="scene-fallback fixed inset-0 -z-10" aria-hidden />;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Scene />
    </div>
  );
}
