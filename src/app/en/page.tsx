import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { COPY, HREFLANG } from "@/lib/copy";

export const metadata: Metadata = {
  title: { absolute: COPY.en.seoTitle },
  description: COPY.en.seoDescription,
  alternates: {
    canonical: "https://thierrystaxi.nl/en",
    languages: HREFLANG,
  },
  openGraph: {
    images: [{ url: "/hero-premium.jpg" }],
  },
};

export default function En() {
  return <Landing copy={COPY.en} />;
}
