import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionVideoBackground } from "@/components/ui/SectionVideoBackground";
import { CorporateGrid } from "./CorporateGrid";
import { corporate } from "@/data/events";
import { site } from "@/data/site";
import { videos } from "@/data/videos";

export function CorporateSection() {
  return (
    <section id="corporate" className="relative overflow-hidden bg-forest px-6 py-24 lg:px-10 lg:py-32">
      <SectionVideoBackground
        src={videos.corporate}
        className="opacity-15"
        overlayClassName="bg-forest/80"
      />
      <CorporateGrid />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand">
            Corporate
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl text-white sm:text-5xl">
            {corporate.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
            {corporate.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corporate.events.map((item, i) => (
            <Reveal key={item} delay={i * 0.07}>
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sand/20 text-sand">
                  <Briefcase size={18} />
                </span>
                <span className="font-display text-lg text-white">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button href={site.whatsappUrl} variant="secondary" external>
            {site.secondaryCta}
          </Button>
          <Button href="/booking" variant="secondary" className="bg-sand text-forest border-sand hover:bg-white">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
