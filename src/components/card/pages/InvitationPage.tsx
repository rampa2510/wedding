"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

const INK = "#1E0F07";
const INK_MED = "#3D2010";
const INK_MUTED = "#8B6030";
const GOLD = "#8B6914";
const GOLD_BRIGHT = "#D4A843";
const DIVIDER = "rgba(196,160,90,0.5)";

export default function InvitationPage() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center px-8 py-10 select-none"
      style={{ minHeight: 540 }}
    >
      {/* Italic intro */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          color: INK_MED,
          fontSize: 13,
          textAlign: "center",
          lineHeight: 1.7,
          maxWidth: 240,
          marginBottom: 18,
          opacity: 0.75,
        }}
      >
        With joyful hearts &amp; the blessings<br />of our families
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.18, duration: 0.5 }}
        style={{
          height: 1,
          width: 140,
          background: `linear-gradient(to right, transparent, ${GOLD_BRIGHT}, transparent)`,
          marginBottom: 18,
        }}
      />

      {/* Sub-label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.24 }}
        style={{
          color: INK_MUTED,
          fontSize: 9,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 14,
        }}
      >
        You are cordially invited to celebrate the union of
      </motion.p>

      {/* Groom name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontFamily: "var(--font-serif)",
          color: INK,
          fontSize: "clamp(1.5rem, 5vw, 1.85rem)",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 2,
        }}
      >
        {WEDDING.couple.groomFull}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.36 }}
        style={{ fontFamily: "var(--font-serif)", color: GOLD, fontSize: 22, margin: "4px 0" }}
      >
        &
      </motion.p>

      {/* Bride name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42 }}
        style={{
          fontFamily: "var(--font-serif)",
          color: INK,
          fontSize: "clamp(1.5rem, 5vw, 1.85rem)",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: 20,
        }}
      >
        {WEDDING.couple.brideFull}
      </motion.h2>

      {/* Thin rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.48, duration: 0.5 }}
        style={{
          height: 1,
          width: 110,
          background: `linear-gradient(to right, transparent, ${DIVIDER}, transparent)`,
          marginBottom: 20,
        }}
      />

      {/* Venue + date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.54 }}
        style={{ textAlign: "center" }}
      >
        <p style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 18, fontWeight: 600 }}>
          {WEDDING.venue.name}
        </p>
        <p style={{ color: INK_MED, fontSize: 12, marginTop: 4 }}>
          28 April 2026 · 10 PM onwards
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.62 }}
        style={{ color: INK_MUTED, fontSize: 11, marginTop: 10, textAlign: "center" }}
      >
        Prayagraj, Uttar Pradesh
      </motion.p>
    </div>
  );
}
