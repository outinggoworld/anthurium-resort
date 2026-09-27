// Dates that are booked, mapped to their booking status.
// "full"    -> entire property booked, date is disabled on the calendar
// "partial" -> only some rooms booked, date still selectable but highlighted

export type BookingStatus = "full" | "partial";

export const bookedDates: Record<string, BookingStatus> = {
  // 22–23 Aug 2026 — full property
  "2026-08-22": "full",
  "2026-08-23": "full",

  // 3 Sep 1pm check-in – 4 Sep 10pm check-out (F.J. booking)
  "2026-09-03": "full",
  "2026-09-04": "full",

  // 3–4 Oct 2026 (F.J. booking)
  "2026-10-03": "full",
  "2026-10-04": "full",

  // 26 Oct 11pm check-in – 27 Oct 11pm check-out — 15 rooms only
  "2026-10-26": "partial",
  "2026-10-27": "partial",

  // 23–27 Nov 2026 (F.J. booking)
  "2026-11-23": "full",
  "2026-11-24": "full",
  "2026-11-25": "full",
  "2026-11-26": "full",
  "2026-11-27": "full",

  // 2–3 Dec 2026 — full property
  "2026-12-02": "full",
  "2026-12-03": "full",

  // 12 Dec 2pm check-in – 13 Dec 12pm/midnight check-out — all property
  "2026-12-12": "full",
  "2026-12-13": "full",

  // 26 Dec 2026 — all property
  "2026-12-26": "full",

  // 28 Jan 4pm check-in – 29 Jan 5pm check-out 2027 — full property
  "2027-01-28": "full",
  "2027-01-29": "full",

  // 11 Feb 2027 — full resort
  "2027-02-11": "full",
  // 12 Feb 2027 — 15 rooms booked only
  "2027-02-12": "partial",

  // 1 Mar 2027 — resort booking
  "2027-03-01": "full",
};