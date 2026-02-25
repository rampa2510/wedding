"use client";
import { useEffect, useState, useCallback } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const particlesConfig: ISourceOptions = {
  fullScreen: { enable: false },
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    number: { value: 50, density: { enable: true } },
    color: { value: ["#FFD700", "#FFA500", "#FFFACD", "#E8B4B8"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.2, max: 0.7 },
      animation: { enable: true, speed: 0.5 },
    },
    size: {
      value: { min: 1, max: 4 },
      animation: { enable: true, speed: 1 },
    },
    move: {
      enable: true,
      direction: "bottom" as const,
      speed: { min: 0.5, max: 2 },
      straight: false,
      outModes: { default: "out" as const },
      random: true,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 5,
    },
    life: {
      count: 0,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" as const },
    },
    modes: {
      repulse: { distance: 80, speed: 0.5 },
    },
  },
};

export default function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Particles
        id="hero-particles"
        options={particlesConfig}
        particlesLoaded={particlesLoaded}
        className="w-full h-full"
      />
    </div>
  );
}
