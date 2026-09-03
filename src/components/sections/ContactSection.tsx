"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { contact, site } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-leaf focus:outline-none";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const mapQuery = encodeURIComponent(contact.address);

  return (
    <section id="contact" className="bg-sage px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            {contact.heading}
          </h2>
        </Reveal>

        {/* Map + contact cards, Royal-Garden-style layout in Anthurium colors */}
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Map */}
          <Reveal className="lg:col-span-3">
            <div className="relative h-[380px] overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-sm lg:h-full">
              <iframe
                title="Anthurium Resort location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-forest shadow-md hover:bg-sage"
              >
                Get Directions <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>

          {/* Two colored info cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl bg-sand p-7 text-forest">
                <h3 className="font-display text-2xl">Contact Us</h3>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-forest/70">
                  WhatsApp
                </p>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 font-medium hover:underline"
                >
                  <MessageCircle size={16} />
                  {contact.whatsapp}
                </a>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-forest/70">
                  Phone
                </p>
                <p className="mt-1 flex items-center gap-2 font-medium">
                  <Phone size={16} />
                  {contact.phone}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-3xl bg-forest p-7 text-white">
                <h3 className="font-display text-2xl">Drop a Line</h3>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-white/60">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 flex items-center gap-2 font-medium hover:underline"
                >
                  <Mail size={16} />
                  {contact.email}
                </a>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/60">
                  Address
                </p>
                <p className="mt-1 flex items-start gap-2 font-medium leading-relaxed">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  {contact.address}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Enquiry form */}
        <Reveal delay={0.15} className="mt-6">
          {submitted ? (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl bg-white p-10 text-center">
              <h3 className="font-display text-2xl text-forest">Thank you.</h3>
              <p className="mt-2 text-sm text-charcoal/70">
                Your enquiry has been noted. Our team will reach out shortly —
                or chat with us on WhatsApp right away.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // NOTE: wire this up to a real backend / email service —
                // form submissions must be validated server-side (see spec §48).
                setSubmitted(true);
              }}
              className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-6 sm:grid-cols-2 sm:p-8"
            >
              <input required name="name" placeholder="Name" className={inputClass} />
              <input required name="phone" placeholder="Phone" className={inputClass} />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className={`${inputClass} sm:col-span-2`}
              />
              <input
                type="date"
                name="preferredDate"
                aria-label="Preferred Date"
                className={inputClass}
              />
              <select name="interestedIn" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Interested In
                </option>
                <option>Stay</option>
                <option>Activities</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className={`${inputClass} sm:col-span-2`}
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-leaf sm:col-span-2"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

