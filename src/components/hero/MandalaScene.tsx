"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function MandalaPetal({ radius, angle, scale = 1 }: { radius: number; angle: number; scale?: number }) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.quadraticCurveTo(0.3 * scale, 0.8 * scale, 0, 1.6 * scale);
    s.quadraticCurveTo(-0.3 * scale, 0.8 * scale, 0, 0);
    return s;
  }, [scale]);

  const geometry = useMemo(
    () => new THREE.ShapeGeometry(shape),
    [shape]
  );

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <mesh
      geometry={geometry}
      position={[x, y, 0]}
      rotation={[0, 0, (angle * Math.PI) / 180 - Math.PI / 2]}
    >
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFD700"
        emissiveIntensity={0.15}
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function MandalaRing({ radius, segments, color, opacity = 0.4 }: {
  radius: number;
  segments: number;
  color: string;
  opacity?: number;
}) {
  return (
    <mesh>
      <torusGeometry args={[radius, 0.02, 8, segments]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

function Mandala() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.08;
    }
  });

  const petalAngles8 = Array.from({ length: 8 }, (_, i) => i * 45);
  const petalAngles16 = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Center sphere */}
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>

        {/* Inner ring */}
        <MandalaRing radius={0.5} segments={32} color="#FFD700" opacity={0.5} />

        {/* Inner petals */}
        {petalAngles8.map((angle) => (
          <MandalaPetal key={`inner-${angle}`} radius={0.5} angle={angle} scale={0.5} />
        ))}

        {/* Middle ring */}
        <MandalaRing radius={1.2} segments={48} color="#E8B4B8" opacity={0.3} />

        {/* Middle petals */}
        {petalAngles16.map((angle) => (
          <MandalaPetal key={`mid-${angle}`} radius={1.0} angle={angle} scale={0.7} />
        ))}

        {/* Outer ring */}
        <MandalaRing radius={1.8} segments={64} color="#FFD700" opacity={0.25} />

        {/* Outer petals */}
        {petalAngles8.map((angle) => (
          <MandalaPetal key={`outer-${angle}`} radius={1.6} angle={angle} scale={0.9} />
        ))}

        {/* Outermost decorative ring */}
        <MandalaRing radius={2.2} segments={64} color="#800020" opacity={0.15} />

        {/* Small decorative spheres */}
        {petalAngles16.map((angle) => {
          const x = Math.cos((angle * Math.PI) / 180) * 2.2;
          const y = Math.sin((angle * Math.PI) / 180) * 2.2;
          return (
            <mesh key={`dot-${angle}`} position={[x, y, 0]}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshStandardMaterial
                color="#FFD700"
                emissive="#FFD700"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

export default function MandalaScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} color="#FFD700" />
        <pointLight position={[0, 5, 3]} intensity={1.2} color="#FFD700" />
        <pointLight position={[0, -5, 2]} intensity={0.4} color="#800020" />
        <Mandala />
      </Canvas>
    </div>
  );
}
