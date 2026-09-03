import type { Metadata } from "next";
import { CorporateSection } from "@/components/sections/CorporateSection";

export const metadata: Metadata = {
  title: "Corporate — Anthurium Resort",
  description: "Corporate off-sites, MICE and team events at Anthurium Resort.",
};

export default function CorporatePage() {
  return (
    <div className="pt-32 lg:pt-28">
      <CorporateSection />
    </div>
  );
}
