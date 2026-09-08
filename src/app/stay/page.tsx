import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { accommodations } from "@/data/accommodations";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return accommodations.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stay = accommodations.find((s) => s.slug === slug);
  if (!stay) return { title: "Stay — Anthurium Resort" };
  return {
    title: `${stay.name} — Anthurium Resort`,
    description: stay.description,
  };
}

export default async function AccommodationDetailPage({ params }: Props) {
  const { slug } = await params;
  const stay = accommodations.find((s) => s.slug === slug);

  if (!stay) {
    notFound();
  }

  return (
    <div className="bg-ivory pt-32 lg:pt-28">
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden lg:h-[55vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${stay.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-6 pb-10 lg:px-10">
          <Link
            href="/stay"
            className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to all stays
          </Link>
          <h1 className="font-display text-4xl text-white sm:text-5xl">
            {stay.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-charcoal/80">
              {stay.description}
            </p>

            <h2 className="mt-10 font-display text-2xl text-forest">
              What&apos;s Included
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {stay.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-charcoal/75"
                >
                  <Check size={15} className="text-leaf" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center gap-1.5 text-sm text-charcoal/60">
              <Clock size={15} />
              Check-in {stay.checkIn} · Check-out {stay.checkOut}
            </p>
            {stay.extraGuestNote && (
              <p className="mt-2 text-sm italic text-charcoal/50">
                {stay.extraGuestNote}
              </p>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-3xl border border-forest/10 bg-white p-7 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-2">
                {stay.originalPrice && (
                  <span className="text-base text-charcoal/40 line-through">
                    Rs {stay.originalPrice}
                  </span>
                )}
                <span className="font-display text-3xl text-forest">
                  Rs {stay.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-charcoal/50">{stay.priceNote}</p>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href="https://outinggo.in/#booking"
                  variant="primary"
                  className="w-full justify-center"
                  external
                >
                  Book Now
                </Button>
                <Button
                  href={site.whatsappUrl}
                  variant="ghost"
                  external
                  className="w-full justify-center"
                >
                  Enquire on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-forest/10 pt-10">
          <h2 className="font-display text-2xl text-forest">Other Stays</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {accommodations
              .filter((s) => s.slug !== stay.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/stay/${s.slug}`}
                  className="group relative block h-40 overflow-hidden rounded-2xl bg-sage"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${s.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 font-display text-lg text-white">
                    {s.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
