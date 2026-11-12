"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { MathUtils, type Group, type Mesh, type Points } from "three";
import { Suspense, useEffect, useMemo, useRef } from "react";

/** Particle shell drifting around the hero sphere. */
function ParticleField({ count = 1500 }: { count?: number }) {
  const ref = useRef<Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x = MathUtils.damp(
      ref.current.rotation.x,
      state.pointer.y * 0.15,
      4,
      delta
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#7fb0ff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Distorted sphere centerpiece with glowing orbit rings. */
function HeroSphere() {
  const mesh = useRef<Mesh>(null!);
  const ringA = useRef<Mesh>(null!);
  const ringB = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.12;
    if (ringA.current) ringA.current.rotation.z += delta * 0.18;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={[1.4, 0, 0]}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.35, 32]} />
          <MeshDistortMaterial
            color="#15264a"
            emissive="#0d1d3a"
            distort={0.42}
            speed={1.8}
            roughness={0.15}
            metalness={0.6}
          />
        </mesh>
        <mesh ref={ringA} rotation={[Math.PI / 2.5, 0.4, 0]}>
          <torusGeometry args={[2.05, 0.012, 8, 128]} />
          <meshBasicMaterial color="#4f8fff" transparent opacity={0.4} />
        </mesh>
        <mesh ref={ringB} rotation={[Math.PI / 1.7, -0.5, 0.3]}>
          <torusGeometry args={[2.4, 0.008, 8, 128]} />
          <meshBasicMaterial color="#7fb0ff" transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

/** Scroll-linked camera rig + subtle pointer parallax. */
function CameraRig({ group }: { group: React.RefObject<Group> }) {
  // Cache scroll height — reading it every frame forces layout (jank).
  const maxScroll = useRef(1);

  useEffect(() => {
    const update = () => {
      maxScroll.current = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
    };
    update();
    window.addEventListener("resize", update);
    // Re-check shortly after mount for font/hydration layout shifts.
    const t1 = setTimeout(update, 500);
    const t2 = setTimeout(update, 2000);
    return () => {
      window.removeEventListener("resize", update);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useFrame((state, delta) => {
    const progress = Math.min(1, window.scrollY / maxScroll.current);

    // Descend through the scene as the user scrolls.
    const targetY = -progress * 2.4;
    state.camera.position.y = MathUtils.damp(state.camera.position.y, targetY, 5, delta);
    state.camera.position.x = MathUtils.damp(
      state.camera.position.x,
      state.pointer.x * 0.35,
      5,
      delta
    );
    state.camera.lookAt(0, state.camera.position.y * 0.4, 0);

    // Fade the group out as the user leaves the hero.
    if (group.current) {
      const targetScale = 1 - Math.min(progress * 0.55, 0.5);
      group.current.scale.setScalar(targetScale);
      group.current.position.y = MathUtils.damp(
        group.current.position.y,
        progress * 1.6,
        5,
        delta
      );
    }
  });
  return null;
}

function SceneContent() {
  const group = useRef<Group>(null);
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 4, 4]} intensity={1.4} color="#dbe7ff" />
      <pointLight position={[-4, -2, -4]} intensity={30} color="#4f8fff" />
      <group ref={group}>
        <HeroSphere />
        <ParticleField />
        <group position={[1.4, 0, 0]}>
          <Sparkles
            count={140}
            scale={[7, 4, 4]}
            size={2.2}
            speed={0.3}
            color="#9dc0ff"
            opacity={0.55}
          />
        </group>
      </group>
      <CameraRig group={group} />
      <EffectComposer>
        <Bloom intensity={0.45} luminanceThreshold={0.2} mipmapBlur />
        <Vignette offset={0.28} darkness={0.75} />
      </EffectComposer>
    </>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 46 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      className="!fixed inset-0 -z-10"
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
