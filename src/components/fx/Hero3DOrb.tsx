import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#0077BE"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.6}
          emissive="#0077BE"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

export function Hero3DOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#38BDF8" />
      <directionalLight position={[-5, -3, -2]} intensity={0.8} color="#7DD3FC" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#0EA5E9" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
    </Canvas>
  );
}