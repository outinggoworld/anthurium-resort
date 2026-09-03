import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery — Anthurium Resort",
  description: "Photo gallery of Anthurium Resort — activities, accommodation, weddings and events.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <Gallery />
    </div>
  );
}
