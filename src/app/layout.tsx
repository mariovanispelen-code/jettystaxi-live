import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thierry's Taxi | Privé chauffeur, BOB & Schiphol | IJmuiden–Haarlem",
  description:
    "Privé transport, BOB pick-up (ook in uw auto) en airport transfers. Persoonlijk, veilig, direct bereikbaar. Thierry's Taxi — IJmuiden / Haarlem e.o.",
  openGraph: {
    title: "Thierry's Taxi — privé chauffeur · BOB · Schiphol",
    description:
      "Privé transport, BOB pick-up (ook in uw auto) en airport transfers. Uber Platinum chauffeur.",
    locale: "nl_NL",
    type: "website",
  },
  alternates: { canonical: "https://thierrystaxi.nl/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-black font-sans antialiased text-white">{children}</body>
    </html>
  );
}
