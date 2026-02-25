"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

const INK = "#1E0F07";
const INK_MED = "#3D2010";
const INK_MUTED = "#8B6030";
const GOLD_BRIGHT = "#D4A843";

export default function VenueCardPage() {
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
        Location
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 26, marginBottom: 22 }}
      >
        Where &amp; When
      </motion.h2>

      {/* Address block */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 22 }}
      >
        <span style={{ fontSize: 20, marginTop: 1 }}>📍</span>
        <div>
          <p style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>
            {WEDDING.venue.name}
          </p>
          <p style={{ color: "#5C3518", fontSize: 11, marginTop: 5, lineHeight: 1.65 }}>
            {WEDDING.venue.address}
          </p>
        </div>
      </motion.div>

      {/* Gold rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          height: 1,
          width: "100%",
          background: `linear-gradient(to right, transparent, ${GOLD_BRIGHT}60, transparent)`,
          marginBottom: 22,
        }}
      />

      {/* Ceremony schedule */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {WEDDING.ceremonies.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: c.accentColor,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 14, fontWeight: 500, flex: 1 }}>
              {c.name}
            </span>
            <div style={{ textAlign: "right" }}>
              <p style={{ color: INK_MED, fontSize: 10 }}>{c.date}</p>
              <p style={{ color: INK_MUTED, fontSize: 10 }}>{c.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.62 }}
        style={{ color: "rgba(30,15,7,0.3)", fontSize: 10, textAlign: "center", marginTop: 20, letterSpacing: "0.12em" }}
      >
        Prayagraj, Uttar Pradesh — India
      </motion.p>
    </div>
  );
}
