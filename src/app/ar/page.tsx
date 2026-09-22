import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "سائق خاص IJmuiden و Schiphol | Thierry's Taxi",
  description:
    "تاكسي فاخر وسائق خاص من IJmuiden: توصيل مطار Schiphol وأمستردام وخدمة BOB في سيارتك. موثوق وبسرية — السعر الثابت عند الطلب.",
  alternates: { canonical: "https://thierrystaxi.nl/ar/" },
};

export default function ArHome() {
  return (
    <main lang="ar" dir="rtl" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <h1 className="text-3xl font-bold">سائق خاص IJmuiden و Schiphol</h1>
      <p className="mt-4 text-white/70">Thierry&apos;s Taxi — Uber Platinum.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="/#reserveren" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">احجز</a>
        <a href={SITE.whatsappUrl} className="rounded-full border border-white/20 px-6 py-3 text-sm">واتساب</a>
        <a href={`tel:${SITE.phoneTel}`} className="rounded-full border border-white/20 px-6 py-3 text-sm">اتصل {SITE.phoneDisplay}</a>
      </div>
      <p className="mt-6"><a href="/" className="text-amber-300 underline">NL homepage</a></p>
    </main>
  );
}
