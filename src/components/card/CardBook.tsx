"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import CoverPage from "@/components/card/pages/CoverPage";
import InvitationPage from "@/components/card/pages/InvitationPage";
import CeremoniesCardPage from "@/components/card/pages/CeremoniesCardPage";
import LoveStoryCardPage from "@/components/card/pages/LoveStoryCardPage";
import VenueCardPage from "@/components/card/pages/VenueCardPage";
import GalleryCardPage from "@/components/card/pages/GalleryCardPage";

const PAGES = [
  CoverPage,
  InvitationPage,
  CeremoniesCardPage,
  LoveStoryCardPage,
  VenueCardPage,
  GalleryCardPage,
];

const LABELS = ["Cover", "Invitation", "Ceremonies", "Our Story", "Venue", "Gallery"];

const CONTENT_MIN_H = 540;
/** How many px the rod image overlaps the parchment edge — tuned to match image height */
const OVERLAP = 28;

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir < 0 ? 28 : -28 }),
};

function ScrollRoller() {
  return (
    <div style={{ position: "relative", zIndex: 20, flexShrink: 0, lineHeight: 0 }}>
      <Image
        src="/images/scroll-rod.png"
        alt="scroll rod"
        width={840}
        height={140}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
    </div>
  );
}

export default function CardBook() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    if (page < PAGES.length - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  }, [page]);

  const goPrev = useCallback(() => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  }, [page]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goNext();
    else if (info.offset.x > 60) goPrev();
  };

  const PageComponent = PAGES[page];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
      {/* Scroll */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{
          scaleY: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.12 },
        }}
        style={{
          transformOrigin: "top center",
          width: "100%",
          maxWidth: 420,
        }}
      >
        {/* Scroll assembly — rollers overlap parchment edges */}
        <div style={{ position: "relative" }}>

        {/* Top roller — sits above parchment, overlaps it by OVERLAP px */}
        <div style={{ position: "relative", zIndex: 20, marginBottom: -OVERLAP }}>
          <ScrollRoller />
        </div>

        {/* Parchment content — dark gradient at edges matches the roller */}
        <div
          style={{
            background: `linear-gradient(to bottom,
              #1A0804 0%,
              #7A3C12 ${OVERLAP * 0.5}px,
              #C8885A ${OVERLAP * 1.2}px,
              #EDD8B0 ${OVERLAP * 2.5}px,
              #F5E6CC ${OVERLAP * 4}px,
              #F7EACF calc(100% - ${OVERLAP * 4}px),
              #EDD8B0 calc(100% - ${OVERLAP * 2.5}px),
              #C8885A calc(100% - ${OVERLAP * 1.2}px),
              #7A3C12 calc(100% - ${OVERLAP * 0.5}px),
              #1A0804 100%)`,
            boxShadow:
              "inset 10px 0 24px rgba(100,60,8,0.09), inset -10px 0 24px rgba(100,60,8,0.09), 8px 0 20px rgba(0,0,0,0.35), -8px 0 20px rgba(0,0,0,0.35)",
            minHeight: CONTENT_MIN_H,
            position: "relative" as const,
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          {/* Subtle aged-paper texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 20% 20%, rgba(200,140,40,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(160,100,20,0.04) 0%, transparent 50%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Page content */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onPanEnd={handlePanEnd}
            style={{ touchAction: "pan-y" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeInOut" }}
                style={{ minHeight: CONTENT_MIN_H, position: "relative", zIndex: 1 }}
              >
                <PageComponent />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Left arrow */}
          {page > 0 && (
            <button
              onClick={goPrev}
              aria-label="Previous page"
              style={{
                position: "absolute",
                left: 6,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "rgba(139,90,20,0.1)",
                border: "1px solid rgba(139,90,20,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8B6914",
                cursor: "pointer",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right arrow */}
          {page < PAGES.length - 1 && (
            <button
              onClick={goNext}
              aria-label="Next page"
              style={{
                position: "absolute",
                right: 6,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "rgba(139,90,20,0.1)",
                border: "1px solid rgba(139,90,20,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8B6914",
                cursor: "pointer",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Bottom roller — overlaps parchment bottom edge */}
        <div style={{ position: "relative", zIndex: 20, marginTop: -OVERLAP }}>
          <ScrollRoller />
        </div>

        </div>{/* end scroll assembly */}
      </motion.div>

      {/* Page dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="flex items-center gap-2 mt-5"
      >
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > page ? 1 : -1);
              setPage(i);
            }}
            aria-label={LABELS[i]}
            style={{
              width: i === page ? 22 : 8,
              height: 8,
              borderRadius: 4,
              background: i === page ? "#D4A843" : "rgba(255,255,255,0.18)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </motion.div>

      {/* Page label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        style={{
          color: "rgba(255,249,240,0.22)",
          fontSize: 10,
          letterSpacing: "0.22em",
          marginTop: 8,
          textTransform: "uppercase" as const,
          fontFamily: "var(--font-sans)",
        }}
      >
        {LABELS[page]}
      </motion.p>
    </div>
  );
}
