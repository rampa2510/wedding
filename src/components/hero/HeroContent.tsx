"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";
import { useCountdown } from "@/hooks/useCountdown";

export default function HeroContent() {
  const countdown = useCountdown(WEDDING.date);

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
      {/* Hindi accent */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-hindi text-gold-500/60 text-sm md:text-base tracking-[0.3em] mb-4"
      >
        शुभ विवाह
      </motion.p>

      {/* Groom name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory tracking-wider"
      >
        {WEDDING.couple.groom}
      </motion.h1>

      {/* Ampersand */}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-500 my-2 md:my-4 animate-float inline-block"
      >
        &
      </motion.span>

      {/* Bride name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory tracking-wider"
      >
        {WEDDING.couple.bride}
      </motion.h1>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent my-6"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="font-sans text-gold-300/80 text-sm md:text-base tracking-widest uppercase mb-2"
      >
        {WEDDING.couple.tagline}
      </motion.p>

      {/* Date */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="font-sans text-ivory/60 text-xs md:text-sm tracking-[0.3em] mb-8"
      >
        APRIL 28, 2026 &bull; PRAYAGRAJ
      </motion.p>

      {/* Mini countdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="flex items-center gap-4 md:gap-6"
      >
        {[
          { value: countdown.days, label: "Days" },
          { value: countdown.hours, label: "Hours" },
          { value: countdown.minutes, label: "Min" },
          { value: countdown.seconds, label: "Sec" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <span className="font-serif text-2xl md:text-3xl text-gold-500 block">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-ivory/40 text-[10px] md:text-xs uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gold-400 text-[10px] tracking-[0.3em] uppercase font-sans">
            Scroll
          </span>
          {/* Mouse/scroll pill */}
          <div className="w-6 h-10 rounded-full border-2 border-gold-500/60 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-gold-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
