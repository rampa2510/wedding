"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

const INK = "#1E0F07";
const INK_MUTED = "#8B6030";
const GOLD = "#8B6914";

const EMOJIS: Record<string, string> = {
  haldi: "🌼",
  mehendi: "🌿",
  wedding: "✨",
};

export default function CeremoniesCardPage() {
  return (
    <div
      className="relative w-full flex flex-col px-7 py-9 select-none"
      style={{ minHeight: 540 }}
    >
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06 }}
        style={{ color: INK_MUTED, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 4 }}
      >
        Celebrations
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 26, marginBottom: 24 }}
      >
        Join Us For
      </motion.h2>

      {/* Ceremony rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {WEDDING.ceremonies.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 + i * 0.12 }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              background: "rgba(139,90,20,0.06)",
              borderRadius: 14,
              padding: "12px 14px",
              border: "1px solid rgba(139,90,20,0.16)",
              borderLeftWidth: 3,
              borderLeftColor: c.accentColor,
            }}
          >
            <span style={{ fontSize: 22, marginTop: 2 }}>{EMOJIS[c.slug]}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" as const }}>
                <span style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 15 }}>
                  {c.name}
                  <span style={{ fontFamily: "var(--font-hindi)", color: GOLD, fontSize: 11, marginLeft: 6 }}>
                    ({c.nameHindi})
                  </span>
                </span>
                <span style={{ color: INK_MUTED, fontSize: 10 }}>{c.date}</span>
              </div>
              <p style={{ color: "#5C3518", fontSize: 11, marginTop: 2 }}>{c.time}</p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 6,
                  fontSize: 10,
                  padding: "2px 10px",
                  borderRadius: 20,
                  border: `1px solid ${c.accentColor}50`,
                  color: c.accentColor,
                  background: `${c.accentColor}12`,
                  letterSpacing: "0.05em",
                }}
              >
                {c.dressCode}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        style={{ color: "rgba(30,15,7,0.32)", fontSize: 10, textAlign: "center", marginTop: 18, letterSpacing: "0.1em" }}
      >
        All ceremonies at {WEDDING.venue.name}
      </motion.p>
    </div>
  );
}
