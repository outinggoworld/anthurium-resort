import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex justify-center">
          <div className="aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl bg-forest shadow-xl">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              poster="/images/about/about-resort.jpg"
            >
              <source src="/videos/resort-tour.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            {about.heading}
          </h2>
          <p className="mt-4 text-lg italic text-charcoal/60">{about.supporting}</p>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            {about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
