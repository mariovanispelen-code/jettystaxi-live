import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privéchauffeur IJmuiden & Schiphol | Thierry's Taxi",
  description:
    "Premium taxi en privéchauffeur vanuit IJmuiden: Schiphol-transfers, Amsterdam, BOB in je eigen auto. Betrouwbaar, discreet, vaste prijs op aanvraag.",
  openGraph: {
    title: "Privéchauffeur IJmuiden & Schiphol | Thierry's Taxi",
    description:
      "Premium taxi en privéchauffeur vanuit IJmuiden: Schiphol-transfers, Amsterdam, BOB in je eigen auto. Betrouwbaar, discreet, vaste prijs op aanvraag.",
    locale: "nl_NL",
    type: "website",
    siteName: "Thierry's Taxi",
    url: "https://thierrystaxi.nl/",
  },
  alternates: {
    canonical: "https://thierrystaxi.nl/",
    languages: {
      "nl-NL": "https://thierrystaxi.nl/",
      "tr-TR": "https://thierrystaxi.nl/tr/",
      ar: "https://thierrystaxi.nl/ar/",
      "x-default": "https://thierrystaxi.nl/",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-black pb-20 font-sans antialiased text-white md:pb-0">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
