"use client";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING } from "@/lib/constants";

const WEDDING_DATE = new Date("2026-04-28T22:00:00");

const INK = "#1E0F07";
const INK_MED = "#3D2010";
const GOLD = "#8B6914";
const GOLD_BRIGHT = "#D4A843";
const DIVIDER = "rgba(139,90,20,0.35)";

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        style={{ color: INK, fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: 1 }}
        className="tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        style={{ color: GOLD, fontSize: 9, letterSpacing: "0.2em", marginTop: 4 }}
        className="uppercase"
      >
        {label}
      </span>
    </div>
  );
}

export default function CoverPage() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center px-8 py-10 select-none"
      style={{ minHeight: 540 }}
    >
      {/* Mandala watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.055 }}
      >
        <svg
          style={{ width: 300, height: 300, animation: "spin 20s linear infinite" }}
          viewBox="0 0 200 200"
          fill="none"
        >
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 100 100)`}>
              <ellipse cx="100" cy="48" rx="8" ry="22" fill={INK} />
              <ellipse cx="100" cy="48" rx="3" ry="10" fill={INK_MED} />
            </g>
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 100 100)`}>
              <path d="M100 30 Q115 60 100 80 Q85 60 100 30Z" fill={INK} />
            </g>
          ))}
          <circle cx="100" cy="100" r="22" stroke={INK} strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="14" stroke={INK} strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="6" fill={INK} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <circle
                key={deg}
                cx={100 + 30 * Math.cos(rad)}
                cy={100 + 30 * Math.sin(rad)}
                r="2.5"
                fill={INK}
              />
            );
          })}
        </svg>
      </div>

      {/* Hindi blessing */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ fontFamily: "var(--font-hindi)", color: GOLD, fontSize: 11, letterSpacing: "0.22em", marginBottom: 16 }}
      >
        शुभ विवाह
      </motion.p>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="text-center"
      >
        <span style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 48, lineHeight: 1 }}>
          {WEDDING.couple.groom}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.26 }}
        style={{ fontFamily: "var(--font-serif)", color: GOLD, fontSize: 26, margin: "4px 0" }}
      >
        &
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34 }}
        className="text-center"
        style={{ marginBottom: 18 }}
      >
        <span style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 48, lineHeight: 1 }}>
          {WEDDING.couple.bride}
        </span>
      </motion.div>

      {/* Gold divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.42, duration: 0.55 }}
        style={{ height: 1, width: 160, background: `linear-gradient(to right, transparent, ${GOLD_BRIGHT}, transparent)`, marginBottom: 14 }}
      />

      {/* Date */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ fontFamily: "var(--font-serif)", color: INK_MED, fontSize: 13, letterSpacing: "0.18em", marginBottom: 22 }}
      >
        28th April 2026
      </motion.p>

      {/* Countdown 2×2 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.58 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px 32px",
          background: "rgba(139,90,20,0.07)",
          border: "1px solid rgba(139,90,20,0.18)",
          borderRadius: 16,
          padding: "16px 28px",
          marginBottom: 22,
        }}
      >
        <CountdownCell value={days} label="Days" />
        <CountdownCell value={hours} label="Hours" />
        <CountdownCell value={minutes} label="Minutes" />
        <CountdownCell value={seconds} label="Seconds" />
      </motion.div>

      {/* Swipe hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ color: "rgba(30,15,7,0.3)", fontSize: 10, letterSpacing: "0.18em" }}
      >
        Swipe to continue →
      </motion.p>
    </div>
  );
}
