"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

const INK = "#1E0F07";
const INK_MUTED = "#8B6030";
const GOLD_BRIGHT = "#D4A843";

export default function LoveStoryCardPage() {
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
        A Love Story
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 26, marginBottom: 22 }}
      >
        Our Story
      </motion.h2>

      {/* Scrollable timeline */}
      <div style={{ flex: 1, overflowY: "auto", paddingRight: 4 }}>
        <div style={{ position: "relative", paddingLeft: 24 }}>
          {/* Vertical gold line */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 0,
              bottom: 0,
              width: 1,
              background: `linear-gradient(to bottom, ${GOLD_BRIGHT}90, ${GOLD_BRIGHT}30, transparent)`,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {WEDDING.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                style={{ position: "relative" }}
              >
                {/* Pulsing dot */}
                <span
                  style={{
                    position: "absolute",
                    left: -23,
                    top: 6,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: GOLD_BRIGHT,
                    boxShadow: `0 0 0 4px ${GOLD_BRIGHT}28`,
                    display: "block",
                  }}
                />

                {/* Date badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: GOLD_BRIGHT,
                    borderRadius: 20,
                    padding: "2px 10px",
                    marginBottom: 5,
                  }}
                >
                  <span style={{ color: INK, fontSize: 10, fontWeight: 600, letterSpacing: "0.05em" }}>
                    {item.date} {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 15, lineHeight: 1.3, marginBottom: 3 }}>
                  {item.title}
                </h3>
                {/* Description */}
                <p style={{ color: "#5C3518", fontSize: 11, lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
