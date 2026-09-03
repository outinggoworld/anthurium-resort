import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { terms } from "@/data/terms";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Anthurium Resort",
  description: "Cancellation, payment, and booking policy for Anthurium Resort.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ivory px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Anthurium Resort
        </Link>

        <h1 className="mt-6 font-display text-4xl text-forest sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm uppercase tracking-wide text-charcoal/50">
          Cancellation Policy
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-xl text-forest">Cancellation Policy</h2>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">
              {terms.cancellationPolicy}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest">Payment</h2>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{terms.payment}</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest">Booking Policy</h2>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">
              {terms.bookingPolicy}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest">Other Information</h2>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{terms.kidsPolicy}</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest">Kitchen Times</h2>
            <ul className="mt-2 space-y-1.5">
              {terms.kitchenTimes.map((slot) => (
                <li key={slot.label} className="flex justify-between text-base text-charcoal/80 sm:max-w-sm">
                  <span>{slot.label}</span>
                  <span className="font-medium">{slot.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-coral">{terms.kitchenClosingNote}</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-forest">Transport</h2>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{terms.transport}</p>
          </section>
        </div>

        <div className="mt-14 rounded-2xl bg-sage px-6 py-5 text-sm text-charcoal/70">
          Questions about a booking? Reach out on{" "}
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest hover:underline">
            WhatsApp
          </a>
          .
        </div>
      </div>
    </main>
  );
}
