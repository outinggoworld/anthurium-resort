"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages, GalleryCategory } from "@/data/gallery";

const categories: ("All" | GalleryCategory)[] = [
  "All",
  "Resort",
  "Activities",
  "Accommodation",
  "Weddings",
  "Events",
];

export function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  const close = () => setLightbox(null);
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setLightbox((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  return (
    <section id="gallery" className="bg-sage px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Gallery
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            A Glimpse of Anthurium
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-forest text-white"
                  : "bg-white text-charcoal/70 hover:bg-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden rounded-xl"
              style={{ breakInside: "avoid" }}
            >
              <div
                className="h-56 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/30">
                <Expand
                  size={20}
                  className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-6"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
          tabIndex={-1}
          ref={(el) => el?.focus()}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-6 top-6 text-white/80 hover:text-white"
          >
            <X size={28} />
          </button>
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-4 text-white/70 hover:text-white sm:left-8"
          >
            <ChevronLeft size={32} />
          </button>
          <div
            className="h-[70vh] w-full max-w-3xl rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url('${filtered[lightbox].src}')` }}
          />
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-4 text-white/70 hover:text-white sm:right-8"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
