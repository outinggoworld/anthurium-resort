"use client";

import { useEffect, useRef } from "react";

/**
 * Slow-falling petal particles for the Weddings section.
 * Romantic, gentle motion — coral + soft white, low density.
 * Respects prefers-reduced-motion and scales down on mobile.
 */
export function WeddingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const count = isMobile ? 8 : 16;
    type Petal = {
      x: number;
      y: number;
      size: number;
      vy: number;
      vx: number;
      rot: number;
      vr: number;
      o: number;
      color: string;
    };

    const colors = ["rgba(233,154,122,0.55)", "rgba(255,255,255,0.6)"];

    const petals: Petal[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 7 + 5,
      vy: Math.random() * 0.35 + 0.15,
      vx: (Math.random() - 0.5) * 0.3,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.01,
      o: Math.random() * 0.4 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf = 0;

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.o;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of petals) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y * 0.01) * 0.3;
        p.rot += p.vr;
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        drawPetal(p);
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
