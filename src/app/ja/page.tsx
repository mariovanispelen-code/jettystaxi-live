import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { COPY, HREFLANG } from "@/lib/copy";

export const metadata: Metadata = {
  title: { absolute: COPY.ja.seoTitle },
  description: COPY.ja.seoDescription,
  alternates: {
    canonical: "https://thierrystaxi.nl/ja",
    languages: HREFLANG,
  },
  openGraph: {
    images: [{ url: "/hero-premium.jpg" }],
  },
};

export default function Ja() {
  return <Landing copy={COPY.ja} />;
}
