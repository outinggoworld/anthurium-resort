"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight ambient particle layer used behind the hero.
 *
 * This is a deliberately simple canvas-based stand-in for the full
 * Three.js / React Three Fiber scene described in the spec (floating
 * leaves, glowing dust, organic shapes with parallax + scroll motion).
 * It keeps the "calm, premium nature" feeling with near-zero bundle
 * cost, and respects prefers-reduced-motion and mobile performance.
 *
 * To upgrade to full 3D: swap this component for a React Three Fiber
 * <Canvas> scene (see /components/3d in the roadmap) — the Hero
 * component doesn't need to change, since it just renders whichever
 * ambient layer is passed in.
 */
export function AmbientParticles() {
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

    const count = isMobile ? 18 : 42;
    type Dust = { x: number; y: number; r: number; vy: number; vx: number; o: number };
    const dust: Dust[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.6,
      vy: -(Math.random() * 0.25 + 0.05),
      vx: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.5 + 0.15,
    }));

    let raf = 0;
    let mouseX = width / 2;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
    };
    if (!isMobile) window.addEventListener("mousemove", onMove);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const parallax = ((mouseX - width / 2) / width) * 6;

      for (const p of dust) {
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x + parallax, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 106, ${p.o})`;
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (!isMobile) window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
