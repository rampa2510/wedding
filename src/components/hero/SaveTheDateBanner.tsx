"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

export default function SaveTheDateBanner() {
  return (
    <section className="relative bg-cream overflow-hidden py-16 md:py-24">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #800020 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Corner mandala ornaments */}
      <div className="absolute top-4 left-4 w-20 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M0 80 Q0 0 80 0" stroke="#FFD700" strokeWidth="0.8" fill="none"/>
          <path d="M0 60 Q0 0 60 0" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
          <circle cx="5" cy="5" r="3" fill="#FFD700" fillOpacity="0.6"/>
          {[0,20,40,60,80].map(v => (
            <circle key={v} cx={v} cy={0} r="1.5" fill="#FFD700" fillOpacity="0.3"/>
          ))}
          {[0,20,40,60,80].map(v => (
            <circle key={v} cx={0} cy={v} r="1.5" fill="#FFD700" fillOpacity="0.3"/>
          ))}
        </svg>
      </div>
      <div className="absolute top-4 right-4 w-20 h-20 opacity-10 pointer-events-none scale-x-[-1]">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M0 80 Q0 0 80 0" stroke="#FFD700" strokeWidth="0.8" fill="none"/>
          <path d="M0 60 Q0 0 60 0" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
          <circle cx="5" cy="5" r="3" fill="#FFD700" fillOpacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20 opacity-10 pointer-events-none scale-y-[-1]">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M0 80 Q0 0 80 0" stroke="#FFD700" strokeWidth="0.8" fill="none"/>
          <path d="M0 60 Q0 0 60 0" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
          <circle cx="5" cy="5" r="3" fill="#FFD700" fillOpacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-20 h-20 opacity-10 pointer-events-none scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M0 80 Q0 0 80 0" stroke="#FFD700" strokeWidth="0.8" fill="none"/>
          <path d="M0 60 Q0 0 60 0" stroke="#FFD700" strokeWidth="0.5" fill="none"/>
          <circle cx="5" cy="5" r="3" fill="#FFD700" fillOpacity="0.6"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Top ornate line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold-500/60" />
          <svg className="w-5 h-5 text-gold-500/60 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold-500/60" />
        </motion.div>

        {/* "Save the Date" label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs md:text-sm tracking-[0.5em] uppercase text-gold-700/70 mb-5"
        >
          Save the Date
        </motion.p>

        {/* Big date */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-maroon-800 leading-none mb-3"
        >
          28
          <span className="text-gold-500 mx-2 md:mx-4 text-3xl sm:text-4xl md:text-5xl align-top mt-2 inline-block">th</span>
          April
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-serif text-2xl md:text-3xl text-maroon-800/60 tracking-widest mb-8"
        >
          2026
        </motion.p>

        {/* Middle ornate divider with names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/40" />
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg md:text-xl text-maroon-800/80">
              {WEDDING.couple.groomFull}
            </span>
            <span className="text-gold-500 text-2xl font-serif">&amp;</span>
            <span className="font-serif text-lg md:text-xl text-maroon-800/80">
              {WEDDING.couple.brideFull}
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/40" />
        </motion.div>

        {/* Hindi text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-hindi text-base md:text-lg text-gold-700/50 mb-4"
        >
          {WEDDING.couple.taglineHindi}
        </motion.p>

        {/* Venue pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/25 bg-white/40 backdrop-blur-sm"
        >
          <svg className="w-3.5 h-3.5 text-gold-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span className="font-sans text-xs md:text-sm text-burgundy/70 tracking-wider">
            {WEDDING.venue.name} &bull; Prayagraj
          </span>
        </motion.div>

        {/* Bottom ornate line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold-500/60" />
          <svg className="w-5 h-5 text-gold-500/60 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold-500/60" />
        </motion.div>
      </div>
    </section>
  );
}
