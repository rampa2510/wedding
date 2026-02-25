"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

interface EnvelopeScreenProps {
  onOpen: () => void;
}

export default function EnvelopeScreen({ onOpen }: EnvelopeScreenProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(onOpen, 800);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 gap-6"
      exit={{ opacity: 0, scale: 0.88, y: -20 }}
      transition={{ duration: 0.35, ease: "easeIn" }}
    >
      {/* Envelope */}
      <motion.div
        animate={isOpening ? { y: -12 } : { y: [0, -4, 0] }}
        transition={isOpening
          ? { duration: 0.4 }
          : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
        onClick={handleOpen}
        className="relative cursor-pointer select-none"
        style={{ width: 300, height: 190, perspective: 700 }}
      >
        {/* Envelope body + static fold lines */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(160deg, #F7EDD8 55%, #EDD8B2 100%)",
            boxShadow:
              "0 24px 64px rgba(0,0,0,0.75), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,240,200,0.5)",
            border: "1px solid rgba(196,160,90,0.45)",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 300 190"
            preserveAspectRatio="none"
          >
            {/* Shadow triangles for depth */}
            <polygon points="0,0 0,190 150,95" fill="rgba(0,0,0,0.04)" />
            <polygon points="300,0 300,190 150,95" fill="rgba(0,0,0,0.05)" />
            <polygon points="0,190 300,190 150,95" fill="rgba(100,60,10,0.08)" />
            {/* Fold crease lines */}
            <line x1="0" y1="0" x2="150" y2="95" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <line x1="300" y1="0" x2="150" y2="95" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <line x1="0" y1="190" x2="150" y2="95" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <line x1="300" y1="190" x2="150" y2="95" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            {/* Border */}
            <rect x="1" y="1" width="298" height="188" rx="7" fill="none" stroke="#C4A060" strokeWidth="0.8" opacity="0.4" />
          </svg>
        </div>

        {/* Top flap — rotates open */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transformOrigin: "top center",
            zIndex: 5,
          }}
          animate={isOpening ? { rotateX: -165 } : { rotateX: 0 }}
          transition={{ duration: 0.52, delay: 0.08, ease: [0.4, 0, 0.8, 1] }}
        >
          <svg
            width="300"
            height="96"
            viewBox="0 0 300 96"
            style={{ display: "block" }}
          >
            <polygon points="0,0 300,0 150,96" fill="#EDD8B0" />
            <line x1="0" y1="0" x2="150" y2="96" stroke="#C4A060" strokeWidth="0.7" opacity="0.35" />
            <line x1="300" y1="0" x2="150" y2="96" stroke="#C4A060" strokeWidth="0.7" opacity="0.35" />
            <line x1="0" y1="0" x2="300" y2="0" stroke="#C4A060" strokeWidth="0.7" opacity="0.35" />
          </svg>
        </motion.div>

        {/* Wax seal */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
          animate={isOpening ? { scale: 0.1, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill="#8B6914" />
            <circle cx="32" cy="32" r="26" fill="#D4A843" />
            <circle cx="32" cy="32" r="22" fill="#C4952A" />
            <circle cx="32" cy="32" r="19" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.6" />
            <text x="32" y="28" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fontWeight="bold" fill="#1C0F06">
              R ✦ A
            </text>
            <text x="32" y="40" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.5" fill="#1C0F06" letterSpacing="1.5">
              2026
            </text>
          </svg>
        </motion.div>
      </motion.div>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h1 className="font-serif text-3xl text-ivory leading-snug">
          {WEDDING.couple.groom}
          <span className="text-gold-500 mx-2.5">&</span>
          {WEDDING.couple.bride}
        </h1>
        <p className="text-gold-400/55 text-[10px] tracking-[0.3em] font-sans mt-1">
          WEDDING INVITATION · APRIL 2026
        </p>
      </motion.div>

      {/* CTA button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleOpen}
        disabled={isOpening}
        className="relative overflow-hidden px-9 py-2.5 rounded-full border border-gold-500/60 text-gold-300 text-sm tracking-widest font-sans group transition-colors hover:text-night-900 disabled:opacity-50 cursor-pointer"
      >
        <span className="absolute inset-0 bg-gold-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10">
          {isOpening ? "Opening…" : "Open Invitation →"}
        </span>
      </motion.button>
    </motion.div>
  );
}
