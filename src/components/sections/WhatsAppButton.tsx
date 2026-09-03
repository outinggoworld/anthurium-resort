import { MessageCircle, Phone, PencilLine } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppButton() {
  return (
    <>
      {/* Desktop floating button */}
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-7 right-7 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-lg transition-transform duration-300 hover:scale-105 lg:flex"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf/50" />
        <MessageCircle size={24} className="relative" />
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-forest/10 bg-ivory/95 backdrop-blur-md lg:hidden">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-0.5 py-3 text-leaf"
        >
          <MessageCircle size={20} />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href="tel:+919049090500"
          className="flex flex-1 flex-col items-center gap-0.5 border-x border-forest/10 py-3 text-forest"
        >
          <Phone size={20} />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href="/booking"
          className="flex flex-1 flex-col items-center gap-0.5 py-3 text-forest"
        >
          <PencilLine size={20} />
          <span className="text-[11px] font-semibold">Enquire</span>
        </a>
      </div>
    </>
  );
}
