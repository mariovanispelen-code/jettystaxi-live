import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { htmlLang, type Locale, LOCALES } from "@/lib/copy";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thierrystaxi.nl"),
  title: "Thierry's Taxi | Privé chauffeur IJmuiden & Schiphol",
  description:
    "Privé chauffeur IJmuiden & Schiphol. BOB, airport. M5 Wedding via m5wedding.nl.",
  icons: { icon: "/favicon.ico" },
};

function resolveLocale(headerLoc: string | null, path: string): Locale {
  if (headerLoc && (LOCALES as readonly string[]).includes(headerLoc)) {
    return headerLoc as Locale;
  }
  const seg = path.split("/").filter(Boolean)[0];
  if (seg && (LOCALES as readonly string[]).includes(seg)) {
    return seg as Locale;
  }
  return "nl";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const headerLoc = h.get("x-taxi-locale");
  const path = h.get("x-taxi-pathname") ?? "";
  const loc = resolveLocale(headerLoc, path);
  const lang = htmlLang(loc);

  return (
    <html lang={lang} dir="ltr" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
