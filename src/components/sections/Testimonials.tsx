"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/gallery";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
              Testimonials
            </p>
            <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
              What Our Guests Say
            </h2>
            <p className="mt-6 rounded-2xl border border-dashed border-forest/20 bg-sage/50 px-6 py-8 text-sm text-charcoal/60">
              [CONTENT REQUIRED] — add real, verified guest reviews here. No
              reviews have been added yet, so none are shown.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  const t = testimonials[index];

  return (
    <section id="testimonials" className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            What Our Guests Say
          </h2>

          <div className="mt-10 flex justify-center gap-1 text-sand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="mt-6 font-display text-2xl leading-snug text-charcoal/85">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold text-forest">
            {t.name}
            {t.source ? (
              <span className="ml-2 font-normal text-charcoal/50">— {t.source}</span>
            ) : null}
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              className="rounded-full border border-forest/20 p-2.5 text-forest hover:bg-sage"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="rounded-full border border-forest/20 p-2.5 text-forest hover:bg-sage"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
