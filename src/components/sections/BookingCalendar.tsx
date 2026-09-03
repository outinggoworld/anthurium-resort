"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AmbientParticles } from "./AmbientParticles";
import { bookedDates } from "@/data/booking";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function toKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function BookingCalendar() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState<string | null>(null);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  // Convert Sun(0)-Sat(6) to Mon(0)-Sun(6) so the grid starts on Monday.
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: { day: number; inMonth: boolean; key: string }[] = [];
  for (let i = firstWeekday - 1; i >= 0; i--) {
    cells.push({ day: daysInPrevMonth - i, inMonth: false, key: `prev-${i}` });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, key: toKey(year, month, d) });
  }
  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length, inMonth: false, key: `next-${cells.length}` });
  }

  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());

  const goMonth = (dir: 1 | -1) =>
    setCursor(new Date(year, month + dir, 1));

  return (
    <section className="relative overflow-hidden bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <AmbientParticles />
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-leaf">
            Availability
          </p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Book Your Dates Now
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-charcoal/70">
            Pick a date and reach out — our team will confirm your stay,
            activities, wedding or corporate event.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-forest text-white shadow-xl">
            <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 px-6 py-6 sm:flex-row sm:px-10">
              <h3 className="font-display text-2xl text-sand">Resort Booking</h3>
              <div className="flex items-center gap-6 text-xs">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
                  Available Dates
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                  Booked Dates
                </span>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-10">
              <div className="flex items-center justify-between">
                <button
                  aria-label="Previous month"
                  onClick={() => goMonth(-1)}
                  className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
                >
                  <ChevronLeft size={18} />
                </button>
                <p className="font-display text-xl">
                  {MONTH_NAMES[month]} {year}
                </p>
                <button
                  aria-label="Next month"
                  onClick={() => goMonth(1)}
                  className="rounded-full border border-white/20 p-2 transition-colors hover:bg-white/10"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-y-2 text-center text-xs font-semibold uppercase tracking-wide text-white/50">
                {WEEKDAYS.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-7 gap-y-2 text-center">
                {cells.map((cell) => {
                  const isBooked = cell.inMonth && bookedDates.includes(cell.key);
                  const isPast =
                    cell.inMonth && cell.key < todayKey;
                  const isToday = cell.key === todayKey;
                  const isSelected = cell.key === selected;
                  const disabled = !cell.inMonth || isBooked || isPast;

                  return (
                    <button
                      key={cell.key}
                      disabled={disabled}
                      onClick={() => setSelected(cell.key)}
                      className={cn(
                        "mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors",
                        !cell.inMonth && "text-transparent",
                        cell.inMonth && !isBooked && !isPast && "text-white hover:bg-white/10",
                        isBooked && "cursor-not-allowed text-coral/70 line-through",
                        isPast && cell.inMonth && !isBooked && "cursor-not-allowed text-white/25",
                        isToday && "ring-1 ring-sand",
                        isSelected && "bg-sand text-forest font-semibold hover:bg-sand"
                      )}
                    >
                      {cell.day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 border-t border-white/10 px-6 py-6 sm:flex-row sm:justify-between sm:px-10">
              <p className="text-sm text-white/70">
                {selected
                  ? `Selected: ${selected}`
                  : "Select a date, then send us your enquiry."}
              </p>
              <Button
                href={
                  selected
                    ? `${site.whatsappUrl}%20for%20${selected}`
                    : site.whatsappUrl
                }
                variant="primary"
                className="bg-sand text-forest hover:bg-white"
                external
              >
                {site.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-charcoal/40">
          [CONTENT REQUIRED] — this calendar currently shows placeholder
          availability (all dates open). Connect it to real booking data
          before launch.
        </p>
      </div>
    </section>
  );
}
