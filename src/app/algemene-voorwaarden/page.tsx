import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — Thierry's Taxi",
  description:
    "Algemene voorwaarden Thierry's Taxi / Thierone Mobility Services — versie 14 september 2026.",
  alternates: { canonical: "https://thierrystaxi.nl/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="section" style={{ paddingTop: 48, paddingBottom: 96 }}>
      <div className="section__inner" style={{ maxWidth: 720 }}>
        <p className="section__label">Juridisch</p>
        <h1 className="section__title" style={{ maxWidth: "20ch" }}>
          Algemene voorwaarden
        </h1>
        <p className="section__lead">
          Versie 14 september 2026 · Thierone Mobility Services, KvK 97694932,
          Bik- en Arnoldkade 94, 1975 CJ IJmuiden, h.o.d.n. Thierry&apos;s Taxi.
          Tel. +31 6 83 55 50 34. NL prevaleert.
        </p>

        <div className="reserve-box" style={{ marginTop: 28 }}>
          <p>
            Door te boeken, &quot;akkoord&quot; te antwoorden of in te stappen
            aanvaardt u deze voorwaarden. Concept tot advocaatcheck.
          </p>
        </div>

        <article style={{ marginTop: 40, lineHeight: 1.6, color: "var(--muted)" }}>
          <h2 style={{ color: "var(--text)", fontSize: "1.25rem" }}>
            Art. 1–3 Identiteit en toepasselijkheid
          </h2>
          <p>
            Vervoerder: Thierone Mobility Services / Thierry&apos;s Taxi.
            Voorwaarden gelden voor iedere rit, BOB, platformrit en
            reservering. Dwingend consumentenrecht gaat voor.
          </p>

          <h2 style={{ color: "var(--text)", fontSize: "1.25rem", marginTop: 28 }}>
            Art. 4 Diensten
          </h2>
          <p>
            Taxi, luchthaven, BOB (ook in uw auto), Uber/Bolt,
            evenementen/M5 Wedding. Nooit self-drive.
          </p>

          <h2 style={{ color: "var(--text)", fontSize: "1.25rem", marginTop: 28 }}>
            Art. 5–7 Totstandkoming, prijzen, annulering
          </h2>
          <p>
            Overeenkomst bij schriftelijke bevestiging, platformacceptatie of
            start rit. Geen herroepingsrecht (art. 6:230p BW). WhatsApp geldt
            als bewijs. Annulering: tot 48 u 0%; 48–24 u 50%; binnen 24 u /
            no-show 100% + extra kosten.
          </p>

          <h2 style={{ color: "var(--text)", fontSize: "1.25rem", marginTop: 28 }}>
            Art. 8–11 Rit, wacht, luchthaven, BOB
          </h2>
          <p>
            Wachttijd 10 min inbegrepen, daarna €0,75/min. Luchthaven: landing
            +45 min (niet-Schengen +60). BOB in uw auto: opdracht (titel 7.7
            BW); u garandeert APK + verzekering andere bestuurder.
          </p>

          <h2 style={{ color: "var(--text)", fontSize: "1.25rem", marginTop: 28 }}>
            Art. 12–16 Platforms, M5, gedrag, aansprakelijkheid
          </h2>
          <p>
            M5 Wedding: nooit self-drive. Gordel verplicht. Vervuiling/braak
            min. €175. Roken min. €150. Letsel niet uitgesloten waar wet dat
            verbiedt.
          </p>

          <h2 style={{ color: "var(--text)", fontSize: "1.25rem", marginTop: 28 }}>
            Art. 17–22 Overmacht, privacy, klachten, recht
          </h2>
          <p>
            Nederlands recht. Klacht binnen 7 dagen. Toezicht Kiwa/ILT.
            Aanvaarding door boeken, akkoord, instappen of platformrit.
          </p>
        </article>

        <p style={{ marginTop: 40 }}>
          <Link href="/" className="btn btn--primary">
            Terug naar home
          </Link>
        </p>
      </div>
    </main>
  );
}
