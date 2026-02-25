"use client";
import dynamic from "next/dynamic";
import StarField from "@/components/decorative/StarField";

const CardApp = dynamic(() => import("@/components/card/CardApp"), { ssr: false });

const MusicPlayer = dynamic(() => import("@/components/music/MusicPlayer"), {
  ssr: false,
});

const GoldCursorTrail = dynamic(
  () => import("@/components/decorative/GoldCursorTrail"),
  { ssr: false }
);

const FloatingPetals = dynamic(
  () => import("@/components/decorative/FloatingPetals"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-night-900 overflow-hidden">
      {/* Fixed background layers */}
      <StarField />
      <GoldCursorTrail />
      <FloatingPetals />

      {/* Persistent music player */}
      <MusicPlayer />

      {/* Card experience */}
      <main className="relative z-10">
        <CardApp />
      </main>
    </div>
  );
}
