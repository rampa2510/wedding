"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PETALS = [
  { size: 24, x: "8%", delay: 0, duration: 8 },
  { size: 16, x: "18%", delay: 2, duration: 10 },
  { size: 20, x: "72%", delay: 1, duration: 9 },
  { size: 14, x: "85%", delay: 3, duration: 7 },
  { size: 22, x: "45%", delay: 1.5, duration: 11 },
  { size: 18, x: "60%", delay: 4, duration: 8.5 },
  { size: 12, x: "30%", delay: 0.5, duration: 9.5 },
];

function Petal({ size, x, delay, duration }: { size: number; x: string; delay: number; duration: number }) {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0, rotate: 0 }}
      animate={{ y: "110vh", opacity: [0, 0.7, 0.7, 0], rotate: 360 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1],
      }}
      style={{ left: x, width: size, height: size }}
      className="fixed top-0 pointer-events-none z-[1] will-change-transform"
    >
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <ellipse
          cx="20"
          cy="20"
          rx="8"
          ry="18"
          fill="#FFD700"
          fillOpacity="0.35"
          stroke="#FFD700"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="4"
          ry="10"
          fill="#FFA500"
          fillOpacity="0.2"
        />
      </svg>
    </motion.div>
  );
}

export default function FloatingPetals() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <>
      {PETALS.map((p, i) => (
        <Petal key={i} {...p} />
      ))}
    </>
  );
}
