"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

function PhotoTile({
  img,
  index,
  onClick,
}: {
  img: { src: string; alt: string };
  index: number;
  onClick: () => void;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 + index * 0.04 }}
      onClick={errored ? undefined : onClick}
      style={{
        aspectRatio: "1",
        borderRadius: 10,
        overflow: "hidden",
        border: "1.5px solid rgba(139,90,20,0.2)",
        cursor: errored ? "default" : "pointer",
        padding: 0,
        background: "rgba(139,90,20,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      whileHover={errored ? {} : { scale: 1.04, boxShadow: "0 0 0 2px #D4A843" }}
    >
      {errored ? (
        /* Placeholder shown while photo hasn't been added yet */
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(139,90,20,0.4)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span style={{ fontSize: 7, color: "rgba(139,90,20,0.4)", letterSpacing: "0.05em" }}>
            add photo
          </span>
        </div>
      ) : (
        <Image
          src={img.src}
          alt={img.alt}
          width={200}
          height={200}
          className="w-full h-full object-cover"
          unoptimized
          onError={() => setErrored(true)}
        />
      )}
    </motion.button>
  );
}

const INK = "#1E0F07";
const INK_MUTED = "#8B6030";

export default function GalleryCardPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = GALLERY_IMAGES.slice(0, 12);

  return (
    <div
      className="relative w-full flex flex-col px-7 py-9 select-none"
      style={{ minHeight: 540 }}
    >
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06 }}
        style={{ color: INK_MUTED, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 4 }}
      >
        Gallery
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        style={{ fontFamily: "var(--font-serif)", color: INK, fontSize: 26, marginBottom: 18 }}
      >
        Memories
      </motion.h2>

      {/* Photo grid */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          {images.map((img, i) => (
            <PhotoTile
              key={i}
              img={img}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <GalleryLightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </div>
  );
}
