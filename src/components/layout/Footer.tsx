"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-burgundy-dark text-ivory overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="font-serif text-5xl md:text-6xl text-gold-500 animate-glow inline-block">
            R & A
          </span>
        </motion.div>

        {/* Names */}
        <p className="font-serif text-xl text-gold-300/80 mb-2">
          {WEDDING.couple.groomFull} & {WEDDING.couple.brideFull}
        </p>

        {/* Hindi text */}
        <p className="font-hindi text-gold-500/40 text-sm mb-8">
          {WEDDING.couple.taglineHindi}
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/30" />
          <svg
            className="w-4 h-4 text-gold-500/50"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/30" />
        </div>

        {/* Date */}
        <p className="text-ivory/50 text-sm tracking-widest uppercase mb-12">
          April 28, 2026
        </p>

        {/* Bottom text */}
        <p className="text-ivory/30 text-xs">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
}
