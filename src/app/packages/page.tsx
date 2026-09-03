import type { Metadata } from "next";
import { PackagesSection } from "@/components/sections/PackagesSection";

export const metadata: Metadata = {
  title: "Packages — Anthurium Resort",
  description: "Banquet, day-outing and destination wedding packages at Anthurium Resort.",
};

export default function PackagesPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <PackagesSection />
    </div>
  );
}
