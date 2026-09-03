import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    title: "Activities",
    copy: "Adventure, recreation and fun.",
    href: "/activities",
    image: "/images/intro/activities.jpg",
  },
  {
    title: "Accommodation",
    copy: "Peaceful stays surrounded by nature.",
    href: "/stay",
    image: "/images/intro/accommodation.jpg",
  },
  {
    title: "Events",
    copy: "Weddings, corporate events and celebrations.",
    href: "/weddings",
    image: "/images/intro/events.jpg",
  },
];

export function IntroCards() {
  return (
    <section className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            The Resort
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-4xl text-forest sm:text-5xl">
            Everything You Need for a Perfect Getaway
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/booking" variant="ghost">
              Book Now
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <Link
                href={card.href}
                className="group relative block h-[420px] overflow-hidden rounded-3xl bg-sage"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-display text-2xl text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{card.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sand">
                    Discover
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
