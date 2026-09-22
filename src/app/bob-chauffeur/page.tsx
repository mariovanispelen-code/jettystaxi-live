import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BOB-chauffeur in uw eigen auto | Thierry's Taxi",
  description:
    "Professionele BOB-chauffeur rijdt jou veilig in je eigen auto. IJmuiden, Haarlem, Amsterdam e.o. — Thierry's Taxi.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="text-3xl font-bold">BOB-chauffeur</h1>
      <p className="mt-4 text-white/70">Professionele chauffeur rijdt jou veilig in je eigen auto. Uber Platinum.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/#reserveren" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">Reserveren</a>
        <a href={`tel:${SITE.phoneTel}`} className="rounded-full border border-white/20 px-6 py-3 text-sm">Bel {SITE.phoneDisplay}</a>
      </div>
    </main>
  );
}
