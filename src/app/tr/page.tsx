import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IJmuiden & Schiphol özel şoför | Thierry's Taxi",
  description:
    "IJmuiden’den premium taksi ve özel şoför: Schiphol transferleri, Amsterdam, kendi aracınızda BOB hizmeti. Güvenilir ve zarif; sabit fiyat talep üzerine.",
  alternates: { canonical: "https://thierrystaxi.nl/tr/" },
};

export default function TrHome() {
  return (
    <main lang="tr" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <h1 className="text-3xl font-bold">IJmuiden & Schiphol özel şoför</h1>
      <p className="mt-4 text-white/70">Thierry&apos;s Taxi — Uber Platinum.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="/#reserveren" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">Rezervasyon</a>
        <a href={SITE.whatsappUrl} className="rounded-full border border-white/20 px-6 py-3 text-sm">WhatsApp</a>
        <a href={`tel:${SITE.phoneTel}`} className="rounded-full border border-white/20 px-6 py-3 text-sm">Ara {SITE.phoneDisplay}</a>
      </div>
      <p className="mt-6"><a href="/" className="text-amber-300 underline">NL homepage</a></p>
    </main>
  );
}
