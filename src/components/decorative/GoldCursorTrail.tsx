"use client";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function GoldCursorTrail() {
  const isDesktop = useMediaQuery("(min-width: 1024px) and (hover: hover)");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; life: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animId = useRef<number>(0);

  useEffect(() => {
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      points.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.current.length > 20) {
        points.current.shift();
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i];
        point.life -= 0.02;

        if (point.life <= 0) {
          points.current.splice(i, 1);
          i--;
          continue;
        }

        const size = point.life * 4;
        const alpha = point.life * 0.5;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`;
        ctx.fill();
      }

      animId.current = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId.current);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[99] pointer-events-none"
      aria-hidden="true"
    />
  );
}
