"use client";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function PaisleyShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" fill="none" className={className}>
      {/* Teardrop body */}
      <path
        d="M40 10 C20 10 8 28 8 50 C8 78 25 100 40 110 C55 100 72 78 72 50 C72 28 60 10 40 10Z"
        fill="#FFD700"
        fillOpacity="0.07"
        stroke="#FFD700"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />
      {/* Inner curl */}
      <path
        d="M40 30 C30 30 24 40 24 52 C24 66 32 78 40 84"
        fill="none"
        stroke="#FFD700"
        strokeWidth="0.6"
        strokeOpacity="0.15"
      />
      {/* Center flower */}
      <circle cx="40" cy="55" r="5" fill="#800020" fillOpacity="0.08" />
      <circle cx="40" cy="55" r="2" fill="#FFD700" fillOpacity="0.15" />
      {/* Decorative dots */}
      <circle cx="30" cy="40" r="1.5" fill="#FFD700" fillOpacity="0.2" />
      <circle cx="50" cy="40" r="1.5" fill="#FFD700" fillOpacity="0.2" />
      <circle cx="40" cy="72" r="1.5" fill="#FFD700" fillOpacity="0.2" />
    </svg>
  );
}

export default function FloatingPaisley() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <>
      {/* Top-left */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-32 left-0 w-24 md:w-36 opacity-40 pointer-events-none z-0 -translate-x-1/3"
      >
        <PaisleyShape />
      </motion.div>

      {/* Top-right */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed top-48 right-0 w-20 md:w-32 opacity-40 pointer-events-none z-0 translate-x-1/3 scale-x-[-1]"
      >
        <PaisleyShape />
      </motion.div>

      {/* Mid-left */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed top-[60vh] left-0 w-16 md:w-24 opacity-30 pointer-events-none z-0 -translate-x-1/3"
      >
        <PaisleyShape />
      </motion.div>

      {/* Mid-right */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="fixed top-[70vh] right-0 w-20 md:w-28 opacity-30 pointer-events-none z-0 translate-x-1/3 scale-x-[-1]"
      >
        <PaisleyShape />
      </motion.div>
    </>
  );
}
