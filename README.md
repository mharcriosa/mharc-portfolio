# Mharc Riosa — Portfolio

Personal portfolio with a 3D animated hero scene, built with Next.js, React Three Fiber, and TailwindCSS.

## Stack

- Next.js 14 (App Router) + TypeScript
- `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing` — 3D scene
- Framer Motion — section reveals, staggered text, 3D-tilt cards
- TailwindCSS — styling

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Notes

- The 3D scene renders as a fixed background canvas with a scroll-driven camera rig.
- On mobile, low-power devices, or `prefers-reduced-motion`, a static gradient fallback is shown instead.
- Contact form opens the visitor's mail client (no backend required).
