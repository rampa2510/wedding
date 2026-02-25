"use client";
import { motion } from "framer-motion";

interface OrnateHeadingProps {
  title: string;
  hindiText?: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function OrnateHeading({
  title,
  hindiText,
  subtitle,
  light = false,
  className = "",
}: OrnateHeadingProps) {
  const textColor = light ? "text-ivory" : "text-maroon-800";
  const subColor = light ? "text-ivory/60" : "text-burgundy/60";
  const lineColor = light
    ? "from-transparent via-gold-500/60 to-transparent"
    : "from-transparent via-gold-500 to-transparent";

  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {hindiText && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hindi text-gold-500/50 text-sm tracking-[0.3em] mb-3"
        >
          {hindiText}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${textColor} mb-4`}
      >
        {title}
      </motion.h2>

      {/* Decorative mandala line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-3 mb-4"
      >
        <div className={`h-px w-12 md:w-20 bg-gradient-to-r ${lineColor}`} />
        <svg className="w-6 h-6 text-gold-500 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <circle
              key={a}
              cx={12 + 6 * Math.cos((a * Math.PI) / 180)}
              cy={12 + 6 * Math.sin((a * Math.PI) / 180)}
              r="1.5"
              opacity="0.5"
            />
          ))}
        </svg>
        <div className={`h-px w-12 md:w-20 bg-gradient-to-l ${lineColor}`} />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`font-sans text-base md:text-lg ${subColor} max-w-lg mx-auto`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
