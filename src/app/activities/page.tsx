import type { Metadata } from "next";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";

export const metadata: Metadata = {
  title: "Activities — Anthurium Resort",
  description: "Adventure, recreation and fun activities at Anthurium Resort.",
};

export default function ActivitiesPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <ActivitiesSection />
    </div>
  );
}
