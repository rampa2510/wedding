"use client";
import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gold" | "maroon";
  className?: string;
}

export default function SectionDivider({ variant = "gold", className = "" }: SectionDividerProps) {
  const color = variant === "gold" ? "#FFD700" : "#800020";

  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <motion.svg
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        className="opacity-60"
      >
        {/* Left line */}
        <line x1="0" y1="20" x2="35" y2="20" stroke={color} strokeWidth="0.5" />
        {/* Center mandala pattern */}
        <circle cx="60" cy="20" r="12" stroke={color} strokeWidth="0.5" fill="none" />
        <circle cx="60" cy="20" r="8" stroke={color} strokeWidth="0.5" fill="none" />
        <circle cx="60" cy="20" r="3" fill={color} fillOpacity="0.3" />
        {/* Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="60"
            cy="20"
            rx="2"
            ry="6"
            fill={color}
            fillOpacity="0.15"
            transform={`rotate(${angle} 60 20)`}
          />
        ))}
        {/* Right line */}
        <line x1="85" y1="20" x2="120" y2="20" stroke={color} strokeWidth="0.5" />
      </motion.svg>
    </div>
  );
}
