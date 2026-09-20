import { PROFILE_FACTS } from "@/lib/constants";

const CARDS = [
  { label: "Platinum chauffeur", detail: "Status" },
  { label: `${PROFILE_FACTS.ridesApprox} ritten`, detail: `in ${PROFILE_FACTS.ridesPeriod}` },
  { label: "Uitstekende service", detail: "×12" },
  { label: "Boven verwachting", detail: "×10" },
  { label: "Vrolijke chauffeur", detail: "×3" },
  { label: "Leuk gesprek", detail: "×2" },
] as const;

export function PlatinumPride() {
  return (
    <section
      id="platinum"
      className="border-b border-white/10 bg-black"
      aria-labelledby="platinum-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="text-sm font-medium uppercase tracking-wider text-amber-300/90">
          Echte awards · Uber
        </p>
        <h2
          id="platinum-heading"
          className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Platinum. En terecht.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Thierry rijdt niet zomaar ritten — passagiers merken het. Platinum-status, honderden
          complimenten, altijd persoonlijk.
        </p>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[240px_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/uber/thierry-platinum-profile.jpg"
              alt="Uber chauffeursprofiel — Thierry Platinum"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-4 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/uber/compliments-row.jpg"
              alt="Uber complimenten: uitstekende service ×12, boven verwachting ×10, vrolijke chauffeur ×3, leuk gesprek ×2"
              className="mx-auto h-auto w-full max-w-2xl object-contain"
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-white/40">
          Afbeeldingen: /images/uber/thierry-platinum-profile.jpg + compliments-row.jpg (echte
          Uber-screenshots; geen fake sterren).
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-lg font-bold text-amber-300">{c.label}</p>
              <p className="mt-1 text-sm text-white/60">{c.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/50">
          {PROFILE_FACTS.sourceLabel}. Geen verzonnen reviews. Talen:{" "}
          {PROFILE_FACTS.languages.join(" · ")}.
        </p>
      </div>
    </section>
  );
}
