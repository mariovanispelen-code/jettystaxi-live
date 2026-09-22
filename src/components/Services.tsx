const SERVICES = [
  {
    title: "Privé transport",
    text: "Van deur tot deur — lokaal, regionaal of zakelijk. Comfortabel en op tijd, met een vaste chauffeur.",
  },
  {
    title: "BOB + eigen auto",
    text: "Veilig thuiskomen: Thierry rijdt uw auto (of de zijne). BOB in klant-auto volgens speciale AV-regels.",
  },
  {
    title: "Airport",
    text: "Van en naar Schiphol (en andere luchthavens). Vluchtnummer doorgeven voor een soepele ophaling.",
  },
  {
    title: "Platformritten",
    text: "Ook beschikbaar via platforms zoals Uber — als optie naast rechtstreeks boeken bij Thierry's Taxi.",
  },
] as const;

export function Services() {
  return (
    <section id="diensten" className="border-b border-white/10 bg-zinc-950" aria-labelledby="diensten-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="text-sm font-medium uppercase tracking-wider text-amber-300/90">Diensten</p>
        <h2 id="diensten-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Wat Thierry voor u rijdt
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-amber-300">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
