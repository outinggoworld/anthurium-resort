import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Us — Anthurium Resort",
  description: "Learn about Anthurium Resort — our story, philosophy and location.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <AboutSection />
    </div>
  );
}
