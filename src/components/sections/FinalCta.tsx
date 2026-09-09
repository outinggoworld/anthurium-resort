import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { videos } from "@/data/videos";

export function FinalCta() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-forest px-6 py-24 text-center lg:px-10">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/cta/sunset-resort.jpg"
      >
        <source src={videos.finalCta} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/40" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Ready for Your Next Getaway?
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Come away for a weekend full of adventures.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={site.whatsappUrl}
              variant="primary"
              className="bg-sand text-forest hover:bg-white"
              external
            >
              {site.secondaryCta}
            </Button>
            <Button
              href="https://outinggo.in/anthurium.html#book-anthurium"
              variant="secondary"
              external
            >
              Book Now
            </Button>
            <Button href="/activities" variant="secondary">
              Explore Anthurium
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
