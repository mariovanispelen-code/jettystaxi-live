import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { COPY, HREFLANG } from "@/lib/copy";

export const metadata: Metadata = {
  title: COPY.nl.seoTitle,
  description: COPY.nl.seoDescription,
  alternates: {
    canonical: "https://thierrystaxi.nl",
    languages: HREFLANG,
  },
  openGraph: {
    images: [{ url: "/hero-premium.jpg" }],
  },
};

export default function Home() {
  return <Landing copy={COPY.nl} />;
}
