"use client";
import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { WEDDING } from "@/lib/constants";
import OrnateHeading from "@/components/ui/OrnateHeading";

function FlipUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={display}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flip-card"
      >
        <div className="relative bg-burgundy-dark border border-gold-500/20 rounded-xl px-4 py-3 md:px-6 md:py-5 min-w-[70px] md:min-w-[100px] shadow-lg">
          {/* Top half gradient */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          {/* Middle line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
          <span className="font-serif text-4xl md:text-6xl lg:text-7xl text-gold-500 block text-center relative z-10">
            {display}
          </span>
        </div>
      </motion.div>
      <span className="text-gold-300/60 text-xs md:text-sm uppercase tracking-widest mt-3 font-sans">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const countdown = useCountdown(WEDDING.date);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-maroon-800 via-burgundy-dark to-maroon-800 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gold-500/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold-500/3" />
        {/* Gold sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-500"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${5 + Math.random() * 90}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <OrnateHeading
          title="Counting the Days"
          hindiText="उल्टी गिनती"
          subtitle="Until we say 'I do'"
          light
        />

        {/* Countdown units */}
        <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-8">
          <FlipUnit value={countdown.days} label="Days" />
          <span className="font-serif text-3xl md:text-5xl text-gold-500/40 mt-[-20px]">:</span>
          <FlipUnit value={countdown.hours} label="Hours" />
          <span className="font-serif text-3xl md:text-5xl text-gold-500/40 mt-[-20px]">:</span>
          <FlipUnit value={countdown.minutes} label="Minutes" />
          <span className="font-serif text-3xl md:text-5xl text-gold-500/40 mt-[-20px] hidden sm:block">:</span>
          <div className="hidden sm:block">
            <FlipUnit value={countdown.seconds} label="Seconds" />
          </div>
        </div>

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 font-sans text-gold-300/50 tracking-widest text-sm"
        >
          APRIL 28, 2026
        </motion.p>
      </div>
    </section>
  );
}
