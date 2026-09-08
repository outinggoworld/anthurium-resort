import type { Metadata } from "next";
import { AccommodationSection } from "@/components/sections/AccommodationSection";
import { BookingCalendar } from "@/components/sections/BookingCalendar";

export const metadata: Metadata = {
  title: "Stay — Anthurium Resort",
  description:
    "Glamping pods, suites and villas — peaceful stays surrounded by nature.",
};

export default function StayPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <AccommodationSection />
      <BookingCalendar />
    </div>
  );
}
