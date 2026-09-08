"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { Button } from "@/components/ui/Button";
import { SectionVideoBackground } from "@/components/ui/SectionVideoBackground";
import { ActivityParticles } from "./ActivityParticles";
import { activities, activitiesLink } from "@/data/activities";
import { videos } from "@/data/videos";

export function ActivitiesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-forest px-6 py-24 lg:px-10 lg:py-32"
    >
      <SectionVideoBackground
        src={videos.activities}
        className="opacity-25"
        overlayClassName="bg-forest/70"
      />
      <ActivityParticles />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand">
              Activities
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl text-white sm:text-5xl">
              Come Away for a Weekend Full of Adventures
            </h2>
          </Reveal>

          <div className="hidden gap-3 sm:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scroll(-1)}
              className="rounded-full border border-white/25 p-3 text-white transition-colors hover:bg-white/10"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scroll(1)}
              className="rounded-full border border-white/25 p-3 text-white transition-colors hover:bg-white/10"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={activitiesLink} variant="secondary">
            View All
          </Button>
          <Button
            href="/booking"
            variant="secondary"
            className="bg-sand text-forest border-sand hover:bg-white"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
