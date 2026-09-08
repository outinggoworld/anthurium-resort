"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionVideoBackground } from "@/components/ui/SectionVideoBackground";
import { AmbientParticles } from "./AmbientParticles";
import { site } from "@/data/site";
import { videos } from "@/data/videos";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-forest"
    >
      <SectionVideoBackground
        src={videos.hero}
        poster="/images/hero/hero-resort.jpg"
        overlayClassName="bg-gradient-to-b from-forest/35 via-[rgba(20,40,32,0.55)] to-[rgba(15,25,20,0.85)]"
      />
      <AmbientParticles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sand"
        >
          {site.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {site.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            href="/activities"
            variant="primary"
            className="bg-sand text-forest hover:bg-white"
          >
            Explore the Resort
          </Button>
          <Button href={site.whatsappUrl} variant="secondary" external>
            {site.secondaryCta}
          </Button>
          <Button
            href="https://outinggo.in/#booking"
            variant="secondary"
            external
          >
            Book Now
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 1.8 },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
