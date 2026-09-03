"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // On inner pages there is no full-bleed hero behind the header, so the
  // header should always render solid there (transparent-over-hero is a
  // homepage-only effect).
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_4px_24px_rgba(22,74,58,0.08)]"
          : "bg-transparent"
      )}
    >
      {/* Row 1: logo + nav (desktop) + Book Now — same on every screen size */}
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-6 lg:px-10",
          solid ? "py-3" : "py-4 lg:py-6"
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/brand/logo.png"
            alt="Anthurium Resort"
            width={44}
            height={44}
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11"
            priority
          />
          <span
            className={cn(
              "font-display text-base tracking-[0.1em] transition-colors sm:text-xl sm:tracking-[0.15em] lg:text-2xl",
              solid ? "text-forest" : "text-white"
            )}
          >
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:opacity-70",
                solid ? "text-charcoal" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/booking"
          className="inline-flex shrink-0 items-center rounded-full bg-forest px-3.5 py-2 text-xs font-semibold text-ivory transition-all duration-300 hover:bg-leaf sm:px-5 sm:py-2.5 sm:text-sm lg:px-6"
        >
          Book Now
        </Link>
      </div>

      {/* Row 2: same nav links, horizontally scrollable — mobile & tablet only */}
      <div
        className={cn(
          "border-t transition-colors duration-500 lg:hidden",
          solid ? "border-forest/10" : "border-white/15"
        )}
      >
        <nav
          className="scrollbar-none flex items-center gap-5 overflow-x-auto whitespace-nowrap px-4 py-2.5 sm:gap-7 sm:px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 text-xs font-medium tracking-wide transition-colors hover:opacity-70 sm:text-sm",
                solid ? "text-charcoal" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
