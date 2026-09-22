import { SITE } from "@/lib/constants";
import { ShortReserveForm } from "@/components/ShortReserveForm";

export function ReserveCTA() {
  return (
    <section id="reserveren" className="border-b border-white/10 bg-zinc-950" aria-labelledby="reserve-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
        <h2 id="reserve-heading" className="text-3xl font-bold text-white">Reserveren</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">Bel, WhatsApp of vul het korte formulier in — Thierry reageert persoonlijk.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">Bel {SITE.phoneDisplay}</a>
          <a href={SITE.whatsappUrl} className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <ShortReserveForm />
      </div>
    </section>
  );
}
