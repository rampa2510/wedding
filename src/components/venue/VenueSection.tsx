"use client";
import { motion } from "framer-motion";
import { WEDDING } from "@/lib/constants";
import OrnateHeading from "@/components/ui/OrnateHeading";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import RangoliBorder from "@/components/decorative/RangoliBorder";

const ceremonyColors: Record<string, string> = {
  haldi: "#DAA520",
  mehendi: "#228B22",
  wedding: "#800020",
};

export default function VenueSection() {
  return (
    <section id="venue" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      <RangoliBorder />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <OrnateHeading
          title="The Venue"
          hindiText="स्थान"
          subtitle="Where two families become one"
        />

        {/* Main venue card */}
        <FadeInOnScroll>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gold-500/10 shadow-md mb-10">
            {/* Top gradient band */}
            <div className="h-2 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700" />

            <div className="p-8 md:p-12">
              {/* House icon + name */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
                  className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0"
                >
                  <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </motion.div>

                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-maroon-800 leading-tight mb-1">
                    {WEDDING.venue.name}
                  </h3>
                  <p className="font-hindi text-gold-600/60 text-sm">अपना घर</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-cream/60 border border-gold-500/10">
                <svg className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-sans text-burgundy/80 text-sm md:text-base leading-relaxed">
                  {WEDDING.venue.address}
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-burgundy/60 text-sm md:text-base leading-relaxed mb-8 text-center max-w-lg mx-auto">
                {WEDDING.venue.description}
              </p>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/20" />
                <svg className="w-5 h-5 text-gold-500/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/20" />
              </div>

              {/* Ceremony schedule timeline */}
              <div className="space-y-3">
                <p className="font-sans text-xs uppercase tracking-widest text-gold-700/60 text-center mb-4">
                  Event Schedule
                </p>
                {WEDDING.ceremonies.map((c, i) => (
                  <motion.div
                    key={c.slug}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-cream/40 border border-gold-500/5 hover:border-gold-500/20 transition-colors"
                  >
                    {/* Colour dot */}
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: ceremonyColors[c.slug] ?? "#FFD700" }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-serif text-maroon-800 text-base">{c.name}</span>
                        <span className="font-hindi text-xs" style={{ color: ceremonyColors[c.slug] ?? "#FFD700" }}>
                          {c.nameHindi}
                        </span>
                      </div>
                      <p className="text-burgundy/50 text-xs mt-0.5">{c.venue}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-sans text-xs text-burgundy/70 font-medium">{c.date}</p>
                      <p className="font-sans text-xs text-gold-700/70">{c.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

      <RangoliBorder flip />
    </section>
  );
}
