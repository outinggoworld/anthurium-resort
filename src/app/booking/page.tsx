import type { Metadata } from "next";
import { BookingCalendar } from "@/components/sections/BookingCalendar";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Book Now — Anthurium Resort",
  description: "Check availability and enquire to book your stay at Anthurium Resort.",
};

export default function BookingPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <BookingCalendar />
      <ContactSection />
    </div>
  );
}
