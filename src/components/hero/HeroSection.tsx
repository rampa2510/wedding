"use client";
import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const MandalaScene = dynamic(() => import("./MandalaScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 opacity-20 animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#FFD700" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#FFD700" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="#FFD700" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" stroke="#FFD700" strokeWidth="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1="100"
              y1="100"
              x2={100 + 80 * Math.cos((a * Math.PI) / 180)}
              y2={100 + 80 * Math.sin((a * Math.PI) / 180)}
              stroke="#FFD700"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </div>
    </div>
  ),
});

const HeroParticles = dynamic(() => import("./HeroParticles"), {
  ssr: false,
});

export default function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-burgundy-dark via-maroon-800 to-burgundy"
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(61,0,27,0.4)_100%)]" />

      {/* 3D Mandala - desktop only, static fallback for mobile */}
      {isDesktop ? (
        <MandalaScene />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 opacity-15 animate-spin-slow">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="#FFD700" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="60" stroke="#FFD700" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" stroke="#FFD700" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="20" fill="#FFD700" fillOpacity="0.1" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
                <ellipse
                  key={a}
                  cx="100"
                  cy="100"
                  rx="6"
                  ry="25"
                  fill="#FFD700"
                  fillOpacity="0.1"
                  transform={`rotate(${a} 100 100)`}
                />
              ))}
            </svg>
          </div>
        </div>
      )}

      {/* Particles */}
      <HeroParticles />

      {/* Content */}
      <HeroContent />

      {/* Bottom gradient fade — starts lower so scroll indicator stays visible */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent z-30 pointer-events-none" />
    </section>
  );
}
