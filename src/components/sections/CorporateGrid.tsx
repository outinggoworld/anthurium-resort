"use client";

import { useEffect, useRef } from "react";

/**
 * Minimal geometric dot-grid for the Corporate section. Deliberately
 * restrained — professional mood, so no organic shapes or bright color.
 * A faint grid of dots with a slow diagonal drift and a soft highlight
 * that sweeps through, like a subtle "data/network" feel.
 */
export function CorporateGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const spacing = 46;
    let offset = 0;
    let raf = 0;

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let x = -spacing; x < width + spacing; x += spacing) {
        for (let y = -spacing; y < height + spacing; y += spacing) {
          const dx = x + (offset % spacing);
          const dy = y;
          // distance-based highlight sweeping diagonally
          const dist = Math.abs((dx + dy - offset * 2) % 600);
          const highlight = dist < 120 ? (1 - dist / 120) * 0.25 : 0;
          ctx.beginPath();
          ctx.arc(dx, dy, 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201,168,106,${0.08 + highlight})`;
          ctx.fill();
        }
      }

      offset += 0.15;
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
