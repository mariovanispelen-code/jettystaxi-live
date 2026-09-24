/**
 * Verified Uber chauffeursprofiel facts only — no invented averages or quotes.
 * Google Agenda booking: paste appointment-schedule URL when Mario provides it.
 */

export const PROFILE_FACTS = {
  languages: ["NL", "EN", "IT"] as const,
  area: "Haarlem / IJmuiden e.o.",
  family: "Trots vader van 2 dochters",
  note: "Love to drive",
  status: "Platinum",
  statusLabel: "Uber Pro Platinum",
  ridesApprox: 1197,
  ridesPeriod: "2 jaar",
  fiveStarCount: 700,
  sourceLabel: "Uit het Uber chauffeursprofiel (zelf gepresenteerd)",
  sourceShort: "Bron: Uber-profiel",
  compliments: [
    { label: "Uitstekende service", count: 12 },
    { label: "Boven verwachting", count: 10 },
    { label: "Vrolijke chauffeur", count: 3 },
    { label: "Leuk gesprek", count: 2 },
  ] as const,
} as const;

/**
 * STAGING: paste the approved Google Calendar Appointment Schedule URL here.
 * Example shape: https://calendar.app.google/... or https://calendar.google.com/calendar/appointments/schedules/...
 * Empty = UI shows prominent “Online boeken / Plan rit” placeholder (no fake link).
 * Never invent a Place ID or Appointment Schedule URL.
 */
export const GOOGLE_BOOKING_TAXI_URL = "";

export const GOOGLE_REVIEW_SEARCH_URL =
  "https://www.google.com/search?q=Thierry%27s+Taxi+IJmuiden";

export function bookingEnabled(): boolean {
  return GOOGLE_BOOKING_TAXI_URL.trim().length > 0;
}
