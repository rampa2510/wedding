"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";
import OrnateHeading from "@/components/ui/OrnateHeading";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import RangoliBorder from "@/components/decorative/RangoliBorder";

const ceremonyEmojis: Record<string, string> = {
  mehendi: "🌿",
  haldi: "🌼",
  wedding: "💍",
};

const ceremonyBgs: Record<string, string> = {
  haldi: "from-yellow-900/20 via-amber-800/10 to-transparent",
  mehendi: "from-green-900/20 via-emerald-800/10 to-transparent",
  wedding: "from-maroon-900/30 via-maroon-800/10 to-transparent",
};

function CeremonyCard({
  ceremony,
  index,
}: {
  ceremony: (typeof WEDDING.ceremonies)[0];
  index: number;
}) {
  return (
    <FadeInOnScroll delay={index * 0.18} className="w-full">
      <motion.div
        whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gold-500/10 shadow-sm hover:shadow-xl hover:shadow-gold-500/10 transition-shadow duration-500 h-full"
      >
        {/* Coloured gradient top half */}
        <div
          className={`h-40 bg-gradient-to-br ${ceremonyBgs[ceremony.slug] ?? "from-maroon-900/20 to-transparent"} relative overflow-hidden flex items-center justify-center`}
          style={{ borderBottom: `2px solid ${ceremony.accentColor}20` }}
        >
          {/* Mandala watermark */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="80" stroke={ceremony.accentColor} strokeWidth="0.8" />
            <circle cx="100" cy="100" r="60" stroke={ceremony.accentColor} strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" stroke={ceremony.accentColor} strokeWidth="0.5" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <ellipse
                key={a}
                cx="100" cy="100" rx="8" ry="30"
                fill={ceremony.accentColor}
                fillOpacity="0.3"
                transform={`rotate(${a} 100 100)`}
              />
            ))}
          </svg>

          {/* Emoji */}
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            className="text-6xl md:text-7xl relative z-10 drop-shadow-sm"
          >
            {ceremonyEmojis[ceremony.icon]}
          </motion.span>

          {/* Accent bottom line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, transparent, ${ceremony.accentColor}60, transparent)` }}
          />
        </div>

        <div className="p-6 md:p-8">
          {/* Name */}
          <div className="flex items-baseline gap-3 mb-1">
            <h3 className="font-serif text-2xl md:text-3xl text-maroon-800 leading-tight">
              {ceremony.name}
            </h3>
            <span
              className="font-hindi text-base leading-none"
              style={{ color: ceremony.accentColor }}
            >
              {ceremony.nameHindi}
            </span>
          </div>

          {/* Description */}
          <p className="font-sans text-burgundy/65 text-sm leading-relaxed mb-6 mt-3">
            {ceremony.description}
          </p>

          {/* Details */}
          <div className="space-y-2.5 pt-4 border-t border-gold-500/10">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `${ceremony.accentColor}15` }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={ceremony.accentColor} strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-burgundy/80 font-sans">{ceremony.date}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `${ceremony.accentColor}15` }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={ceremony.accentColor} strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-burgundy/80 font-sans">{ceremony.time}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `${ceremony.accentColor}15` }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke={ceremony.accentColor} strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </span>
              <span className="text-burgundy/80 font-sans italic">{ceremony.dressCode}</span>
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `inset 0 0 30px ${ceremony.accentColor}08` }}
        />
      </motion.div>
    </FadeInOnScroll>
  );
}

export default function CeremoniesSection() {
  return (
    <section
      id="ceremonies"
      className="relative py-20 md:py-32 bg-gradient-to-b from-cream via-maroon-50/20 to-cream overflow-hidden"
    >
      <RangoliBorder />

      {/* Background mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="90" stroke="#800020" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" stroke="#800020" strokeWidth="0.5" />
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((a) => (
            <ellipse key={a} cx="100" cy="100" rx="5" ry="22" fill="#800020"
              transform={`rotate(${a} 100 100)`} />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <OrnateHeading
          title="Celebrations"
          hindiText="समारोह"
          subtitle="Join us through each beautiful ceremony as we celebrate our union"
        />

        {/* 3-column grid, centred for 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WEDDING.ceremonies.map((ceremony, i) => (
            <CeremonyCard key={ceremony.slug} ceremony={ceremony} index={i} />
          ))}
        </div>
      </div>

      <RangoliBorder flip className="mt-16" />
    </section>
  );
}
