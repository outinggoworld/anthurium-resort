import type { Metadata } from "next";
import { WeddingSection } from "@/components/sections/WeddingSection";

export const metadata: Metadata = {
  title: "Weddings — Anthurium Resort",
  description: "Weddings and celebrations at Anthurium Resort.",
};

export default function WeddingsPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <WeddingSection />
    </div>
  );
}
