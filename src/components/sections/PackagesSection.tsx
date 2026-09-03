import { Check, MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  banquetPackages,
  banquetNote,
  destinationWeddingPackage,
} from "@/data/packages";
import { dayPackages } from "@/data/dayPackages";
import { site } from "@/data/site";

const tierStyles: Record<string, string> = {
  silver: "bg-white text-charcoal border border-forest/10",
  gold: "bg-sand/20 text-charcoal border border-sand",
  platinum: "bg-forest text-white border border-forest",
};

const tierCheckColor: Record<string, string> = {
  silver: "text-leaf",
  gold: "text-sand",
  platinum: "text-sand",
};

export function PackagesSection() {
  return (
    <section id="packages" className="bg-sage px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Day & Evening Packages */}
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Day Visit
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Day &amp; Evening Packages
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dayPackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
                <h3 className="font-display text-2xl text-forest">{pkg.name}</h3>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Weekdays
                    </p>
                    <p className="mt-1">
                      {pkg.weekdayOriginal && (
                        <span className="mr-2 text-sm text-charcoal/40 line-through">
                          Rs {pkg.weekdayOriginal}
                        </span>
                      )}
                      <span className="font-display text-xl text-forest">Rs {pkg.weekdayPrice}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Weekends
                    </p>
                    <p className="mt-1">
                      {pkg.weekendOriginal && (
                        <span className="mr-2 text-sm text-charcoal/40 line-through">
                          Rs {pkg.weekendOriginal}
                        </span>
                      )}
                      <span className="font-display text-xl text-forest">Rs {pkg.weekendPrice}</span>
                    </p>
                  </div>
                </div>
                {pkg.note && (
                  <p className="mt-2 text-xs italic text-charcoal/50">{pkg.note} + Taxes</p>
                )}

                <ul className="mt-5 space-y-2 text-sm text-charcoal/75">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-leaf" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 flex items-center gap-1.5 text-xs text-charcoal/50">
                  <Clock size={13} />
                  Check-in {pkg.checkIn} · Check-out {pkg.checkOut}
                </p>

                <div className="mt-6">
                  <Button href={site.whatsappUrl} variant="ghost" external className="w-full">
                    Enquire
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banquet Hall Packages */}
        <Reveal className="mt-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Banquet Hall
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Banquet Hall Packages
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-charcoal/60">
            {banquetNote}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {banquetPackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1}>
              <div
                className={`h-full rounded-3xl p-8 shadow-sm ${tierStyles[pkg.tier]}`}
              >
                <h3 className="font-display text-2xl">{pkg.name}</h3>
                <p className="mt-2 text-2xl font-semibold">{pkg.price}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${tierCheckColor[pkg.tier]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={site.whatsappUrl}
                    variant={pkg.tier === "platinum" ? "secondary" : "ghost"}
                    external
                    className="w-full"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Destination Wedding Package */}
        <Reveal delay={0.1} className="mt-24">
          <div className="overflow-hidden rounded-3xl bg-forest text-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div
                className="h-64 bg-cover bg-center lg:h-auto"
                style={{ backgroundImage: "url('/images/weddings/wedding-hero.jpg')" }}
              />
              <div className="p-8 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand">
                  Destination Wedding
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">
                  {destinationWeddingPackage.resortName}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin size={14} />
                  {destinationWeddingPackage.location}
                </p>

                <p className="mt-6 inline-block rounded-full bg-white/10 px-5 py-2 font-display text-2xl text-sand">
                  {destinationWeddingPackage.price}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Inclusions
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {destinationWeddingPackage.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                      <Check size={15} className="mt-0.5 flex-shrink-0 text-sand" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button
                    href={site.whatsappUrl}
                    variant="primary"
                    className="bg-sand text-forest hover:bg-white"
                    external
                  >
                    {site.secondaryCta}
                  </Button>
                  <a
                    href={`tel:+91${destinationWeddingPackage.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Phone size={15} />
                    {destinationWeddingPackage.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
