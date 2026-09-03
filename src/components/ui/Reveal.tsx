import { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-reveal wrapper — pure CSS, no JavaScript required.
 *
 * Earlier versions used Framer Motion's whileInView (IntersectionObserver)
 * and later a manual scroll-listener fallback, both of which some mobile
 * browsers failed to run reliably, leaving content permanently invisible.
 * This version uses a CSS @keyframes animation (see globals.css) that
 * plays automatically as soon as the element is painted — it cannot get
 * stuck hidden, because visibility never depends on any script executing.
 *
 * Trade-off: since this doesn't detect scroll position, content animates
 * in shortly after the page paints rather than exactly when scrolled into
 * view. That's a fair trade for guaranteed visibility everywhere.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal-onload", className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
