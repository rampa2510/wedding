"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import OrnateHeading from "@/components/ui/OrnateHeading";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import { GALLERY_IMAGES } from "@/lib/constants";
import GalleryLightbox from "./GalleryLightbox";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <OrnateHeading
          title="Our Gallery"
          hindiText="तस्वीरें"
          subtitle="Moments frozen in time, memories that last forever"
        />

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <FadeInOnScroll key={i} delay={i * 0.05}>
              <div
                className="mb-4 md:mb-6 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover gallery-image-hover rounded-xl"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end p-4">
                  <span className="text-ivory font-sans text-sm">{img.alt}</span>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-gold-500/40 transition-all duration-500" />
              </div>
            </FadeInOnScroll>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        images={GALLERY_IMAGES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
      />
    </section>
  );
}
