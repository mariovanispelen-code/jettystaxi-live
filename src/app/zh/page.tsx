import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { COPY, HREFLANG } from "@/lib/copy";

export const metadata: Metadata = {
  title: { absolute: COPY.zh.seoTitle },
  description: COPY.zh.seoDescription,
  alternates: {
    canonical: "https://thierrystaxi.nl/zh",
    languages: HREFLANG,
  },
  openGraph: {
    images: [{ url: "/hero-premium.jpg" }],
  },
};

export default function Zh() {
  return <Landing copy={COPY.zh} />;
}
