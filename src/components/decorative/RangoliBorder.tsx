"use client";
import { motion } from "framer-motion";

interface RangoliBorderProps {
  flip?: boolean;
  className?: string;
}

export default function RangoliBorder({ flip = false, className = "" }: RangoliBorderProps) {
  return (
    <div className={`w-full overflow-hidden ${flip ? "scale-y-[-1]" : ""} ${className}`}>
      <motion.svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <pattern id="rangoli-dot" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Central diamond */}
            <polygon points="30,8 40,30 30,52 20,30" fill="none" stroke="#FFD700" strokeWidth="0.6" strokeOpacity="0.4" />
            {/* Corner dots */}
            <circle cx="30" cy="8" r="2" fill="#FFD700" fillOpacity="0.3" />
            <circle cx="40" cy="30" r="2" fill="#FFD700" fillOpacity="0.3" />
            <circle cx="30" cy="52" r="2" fill="#FFD700" fillOpacity="0.3" />
            <circle cx="20" cy="30" r="2" fill="#FFD700" fillOpacity="0.3" />
            {/* Small petals */}
            <ellipse cx="30" cy="19" rx="3" ry="6" fill="#800020" fillOpacity="0.12" />
            <ellipse cx="30" cy="41" rx="3" ry="6" fill="#800020" fillOpacity="0.12" />
            <ellipse cx="19" cy="30" rx="6" ry="3" fill="#800020" fillOpacity="0.12" />
            <ellipse cx="41" cy="30" rx="6" ry="3" fill="#800020" fillOpacity="0.12" />
            {/* Center dot */}
            <circle cx="30" cy="30" r="2.5" fill="#FFD700" fillOpacity="0.25" />
          </pattern>
        </defs>
        <rect width="1200" height="60" fill="url(#rangoli-dot)" />
        {/* Top shimmer line */}
        <line x1="0" y1="1" x2="1200" y2="1" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Bottom shimmer line */}
        <line x1="0" y1="59" x2="1200" y2="59" stroke="#FFD700" strokeWidth="0.5" strokeOpacity="0.3" />
      </motion.svg>
    </div>
  );
}
