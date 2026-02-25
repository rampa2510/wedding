"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { COUPLE_PHOTO, WEDDING } from "@/lib/constants";

const INK = "#1E0F07";
const INK_MED = "#3D2010";
const INK_MUTED = "#8B6030";
const GOLD_BRIGHT = "#D4A843";

export default function BlessingsPage() {
  return (
    <div
      className="relative w-full flex flex-col items-center px-7 py-8 select-none"
      style={{ minHeight: 540 }}
    >
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06 }}
        style={{
          color: INK_MUTED,
          fontSize: 9,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        आशीर्वाद
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        style={{
          fontFamily: "var(--font-serif)",
          color: INK,
          fontSize: 24,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Seek Your Blessings
      </motion.h2>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: 260,
          borderRadius: 16,
          overflow: "hidden",
          border: `2px solid ${GOLD_BRIGHT}60`,
          boxShadow: "0 8px 32px rgba(139,90,20,0.18)",
          flexShrink: 0,
        }}
      >
        <Image
          src={COUPLE_PHOTO}
          alt={`${WEDDING.couple.groomFull} & ${WEDDING.couple.brideFull}`}
          width={520}
          height={680}
          style={{ width: "100%", height: "auto", display: "block" }}
          unoptimized
          priority
        />
      </motion.div>

      {/* Gold divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        style={{
          height: 1,
          width: 120,
          background: `linear-gradient(to right, transparent, ${GOLD_BRIGHT}, transparent)`,
          margin: "18px 0 14px",
          flexShrink: 0,
        }}
      />

      {/* Blessing text */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          color: INK_MED,
          fontSize: 13,
          lineHeight: 1.75,
          textAlign: "center",
          maxWidth: 260,
        }}
      >
        As we begin this beautiful journey together,
        we humbly bow before you and seek your
        love, prayers &amp; blessings.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        style={{
          color: INK_MUTED,
          fontSize: 11,
          marginTop: 12,
          letterSpacing: "0.12em",
          textAlign: "center",
        }}
      >
        — {WEDDING.couple.groom} &amp; {WEDDING.couple.bride}
      </motion.p>
    </div>
  );
}
