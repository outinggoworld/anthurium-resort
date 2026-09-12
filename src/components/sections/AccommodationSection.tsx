import Link from "next/link";
import { ArrowUpRight, Check, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AccommodationGlow } from "./AccommodationGlow";
import { accommodations, accommodationIntro } from "@/data/accommodations";
import { site } from "@/data/site";

export function AccommodationSection() {
  return (
    <section
      id="accommodation"
      className="relative overflow-hidden bg-sage px-6 py-24 lg:px-10 lg:py-32"
    >
      <AccommodationGlow />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Accommodation
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl text-forest sm:text-5xl">
            Peaceful Stays Surrounded by Nature
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/80">
            {accommodationIntro}
          </p>
          <div className="mt-6">
            <Button
              href="https://outinggo.in/anthurium.html#book-anthurium"
              variant="primary"
              className="bg-forest text-ivory hover:bg-leaf"
              external
            >
              Book Now
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6">
          {accommodations.map((stay, i) => (
            <Reveal key={stay.slug} delay={i * 0.1}>
              <div className="group grid overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl md:grid-cols-2">
                <div className="relative h-64 overflow-hidden md:h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${stay.image}')` }}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="font-display text-3xl text-forest">
                    {stay.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/75">
                    {stay.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-baseline gap-2">
                    {stay.soldOut ? (
                      <span className="text-lg font-semibold text-red-600">
                        Fully Booked
                      </span>
                    ) : (
                      <>
                        {stay.originalPrice && (
                          <span className="text-base text-charcoal/40 line-through">
                            Rs {stay.originalPrice}
                          </span>
                        )}
                        <span className="font-display text-2xl text-forest">
                          Rs {stay.price}
                        </span>
                        <span className="text-xs text-charcoal/50">
                          {stay.priceNote}
                        </span>
                      </>
                    )}
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {stay.inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-charcoal/70"
                      >
                        <Check size={13} className="text-leaf" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 flex items-center gap-1.5 text-xs text-charcoal/50">
                    <Clock size={13} />
                    Check-in {stay.checkIn} · Check-out {stay.checkOut}
                  </p>
                  {stay.extraGuestNote && (
                    <p className="mt-1 text-xs italic text-charcoal/45">
                      {stay.extraGuestNote}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/stay/${stay.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-transform duration-300 hover:translate-x-1"
                    >
                      View Details
                      <ArrowUpRight size={16} />
                    </Link>
                    {stay.soldOut ? (
                      <span className="inline-flex items-center rounded-full bg-charcoal/10 px-4 py-2 text-sm font-semibold text-charcoal/50">
                        Sold Out
                      </span>
                    ) : (
                      <Button
                        href={site.whatsappUrl}
                        variant="ghost"
                        external
                        className="text-sm"
                      >
                        Enquire
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
