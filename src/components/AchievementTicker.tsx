import { PROFILE_FACTS } from "@/lib/constants";

const ITEMS = [
  "★ Platinum chauffeur",
  `${PROFILE_FACTS.ridesApprox} ritten in ${PROFILE_FACTS.ridesPeriod}`,
  "Uitstekende service ×12",
  "Boven verwachting ×10",
  "Vrolijke chauffeur ×3",
  "Leuk gesprek ×2",
  `Talen: ${PROFILE_FACTS.languages.join(" · ")}`,
] as const;

export function AchievementTicker() {
  const line = ITEMS.join("   ·   ");
  return (
    <div
      className="overflow-hidden border-b border-white/10 bg-[#0a0a0a]"
      role="region"
      aria-label="Achievements van Thierry"
    >
      <p className="sr-only">
        {ITEMS.join(". ")}. Bron: Uber chauffeursprofiel, zelf gepresenteerd.
      </p>
      <div className="group flex overflow-hidden py-3.5">
        <div className="flex min-w-full shrink-0 animate-[marquee_40s_linear_infinite] whitespace-nowrap motion-reduce:animate-none">
          <span className="px-8 text-sm font-semibold tracking-wide text-amber-300">
            {line}
            <span className="mx-8 text-white/40">·</span>
            {line}
          </span>
        </div>
      </div>
    </div>
  );
}
