import Link from "next/link";
import Image from "next/image";
import { companyLinks, accommodationLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest px-6 pb-28 pt-16 text-white lg:px-10 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/logo.png"
                alt="Anthurium Resort"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <p className="font-display text-2xl tracking-[0.15em]">{site.name}</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">
              Accommodation
            </p>
            <ul className="mt-4 space-y-2.5">
              {accommodationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms" className="hover:text-white/80">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="hover:text-white/80">
              Privacy
            </Link>
            <span>{site.attribution}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
