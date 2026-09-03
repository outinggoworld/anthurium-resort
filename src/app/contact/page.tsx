import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Anthurium Resort",
  description: "Get in touch with Anthurium Resort to plan your visit.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 lg:pt-28">
      <ContactSection />
    </div>
  );
}
