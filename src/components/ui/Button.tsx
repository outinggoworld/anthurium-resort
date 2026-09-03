import Link from "next/link";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";

  const variants = {
    primary: "bg-forest text-ivory hover:bg-leaf hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-white/70 text-white hover:bg-white hover:text-forest hover:-translate-y-0.5",
    ghost: "bg-sage text-forest hover:bg-sand hover:text-white",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}
