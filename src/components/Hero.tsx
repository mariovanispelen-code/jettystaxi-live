import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-black"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 md:px-10 md:pt-32">
        <div className="flex flex-wrap gap-2">
          <p className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
            Uber Platinum chauffeur
          </p>
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            {SITE.displayPerson} · {SITE.personTitle}
          </p>
        </div>

        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {SITE.heroHeadline}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          <strong className="text-white">Thierry&apos;s Taxi</strong> — privé transport, BOB
          pick-up (ook in uw eigen auto), airport transfers en ritten via platforms. Persoonlijk,
          veilig en direct bereikbaar.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#reserveren"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black hover:bg-amber-200"
          >
            Reserveren
          </a>
          <a
            href={SITE.whatsappUrl}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
          >
            Bel {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
