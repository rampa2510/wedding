"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAutoplayedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio("/audio/wedding-music.mp4");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Try immediate autoplay (works if browser allows it)
    audioRef.current.play().then(() => {
      setIsPlaying(true);
      hasAutoplayedRef.current = true;
    }).catch(() => {
      // Browser blocked autoplay — wait for first user interaction
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Autoplay on first user interaction if not already playing
  useEffect(() => {
    const startOnInteraction = () => {
      if (hasAutoplayedRef.current || !audioRef.current) return;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        hasAutoplayedRef.current = true;
      }).catch(() => {});
    };

    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((e) => window.addEventListener(e, startOnInteraction, { once: true, passive: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, startOnInteraction));
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    hasAutoplayedRef.current = true;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-maroon-800/95 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-4 w-64 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-serif text-gold-500 text-sm">Wedding Music</span>
              <button
                onClick={() => setExpanded(false)}
                className="text-ivory/40 hover:text-ivory transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-burgundy rounded-full mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gold-500 rounded-full"
                animate={isPlaying ? { width: ["0%", "100%"] } : {}}
                transition={isPlaying ? { duration: 30, repeat: Infinity } : {}}
                style={{ width: isPlaying ? undefined : "0%" }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-gold-500 text-burgundy-dark flex items-center justify-center hover:bg-gold-400 transition-colors shadow-gold"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setExpanded(true); if (!isPlaying) togglePlay(); }}
            className={`w-14 h-14 rounded-full bg-maroon-800 border-2 border-gold-500/50 flex items-center justify-center shadow-lg ${
              isPlaying ? "animate-pulse-gold" : ""
            }`}
          >
            {isPlaying ? (
              /* Equalizer bars animation */
              <div className="flex items-end gap-0.5 h-5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gold-500 rounded-full"
                    animate={{ height: ["8px", "20px", "12px", "18px", "8px"] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            ) : (
              <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
