import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WeddingPetals } from "./WeddingPetals";
import { wedding } from "@/data/events";
import { site } from "@/data/site";
import { videos } from "@/data/videos";

export function WeddingSection() {
  return (
    <section
      id="weddings"
      className="relative overflow-hidden bg-ivory px-6 py-24 lg:px-10 lg:py-32"
    >
      {/* subtle decorative organic shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-coral/10 blur-3xl"
      />
      <WeddingPetals />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="h-[420px] w-full overflow-hidden rounded-3xl bg-cover bg-center lg:h-[540px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={wedding.image}
            >
              <source src={videos.weddings} type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-coral">
            Weddings
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            {wedding.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            {wedding.body}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {wedding.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-charcoal/85"
              >
                <Check size={16} className="mt-0.5 flex-shrink-0 text-leaf" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={site.whatsappUrl} variant="primary" external>
              {site.secondaryCta}
            </Button>
            <Button
              href="https://outinggo.in/anthurium.html#book-anthurium"
              variant="ghost"
              external
            >
              Book Now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
