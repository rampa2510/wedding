"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { WEDDING } from "@/lib/constants";
import OrnateHeading from "@/components/ui/OrnateHeading";
import RangoliBorder from "@/components/decorative/RangoliBorder";

function TimelineItem({
  item,
  index,
}: {
  item: (typeof WEDDING.timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16 md:mb-28">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`w-full md:w-5/12 ${isEven ? "md:order-1" : "md:order-3"}`}
      >
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="w-full h-52 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gold corner accents */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold-500/60" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold-500/60" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-800/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="hidden md:flex md:order-2 items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
          className="relative"
        >
          <div className="w-5 h-5 rounded-full bg-gold-500 ring-4 ring-cream shadow-lg shadow-gold-500/40" />
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gold-500/30"
          />
        </motion.div>
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className={`w-full md:w-5/12 ${isEven ? "md:order-3" : "md:order-1"}`}
      >
        <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold-500/10 shadow-sm">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-20">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M0 0 L48 0 L48 48" fill="#FFD700" fillOpacity="0.3" />
              <circle cx="40" cy="8" r="4" fill="#FFD700" />
            </svg>
          </div>

          {/* Date badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-gold-500 text-burgundy-dark text-xs font-sans font-semibold px-3 py-1 rounded-full">
              {item.date}, {item.year}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-maroon-800 mb-3 leading-tight">
            {item.title}
          </h3>
          <p className="font-sans text-burgundy/70 text-sm md:text-base leading-relaxed">
            {item.description}
          </p>

          {/* Number indicator */}
          <div className="absolute -left-4 top-8 hidden md:flex w-8 h-8 rounded-full bg-cream border border-gold-500/20 items-center justify-center">
            <span className="font-serif text-xs text-gold-700">{index + 1}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LoveStorySection() {
  return (
    <section id="story" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      {/* Top decorative border */}
      <RangoliBorder />

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #800020 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <OrnateHeading
          title="Our Love Story"
          hindiText="हमारी प्रेम कहानी"
          subtitle="Every love story is beautiful, but ours is our favourite"
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical centre line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="w-full h-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, #FFD700 0%, #FFD70080 60%, transparent 100%)",
              }}
            />
          </div>

          {WEDDING.timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom decorative border */}
      <RangoliBorder flip />
    </section>
  );
}
