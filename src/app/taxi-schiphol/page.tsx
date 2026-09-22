import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Taxi Schiphol vanuit IJmuiden & Amsterdam | Thierry's Taxi",
  description:
    "Privé taxi van/naar Schiphol. Meet & Greet, bagagehulp, vaste prijs op aanvraag. Vanuit IJmuiden, Amsterdam en regio — Thierry's Taxi.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="text-3xl font-bold">Taxi Schiphol</h1>
      <p className="mt-4 text-white/70">Privé transfer van/naar Schiphol. Uber Platinum chauffeur Thierry.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/#reserveren" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">Reserveren</a>
        <a href={`tel:${SITE.phoneTel}`} className="rounded-full border border-white/20 px-6 py-3 text-sm">Bel {SITE.phoneDisplay}</a>
      </div>
    </main>
  );
}
