"use client";

import { useEffect } from "react";
import { htmlLang, type Locale } from "@/lib/copy";

export default function LocaleDocument({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
    document.documentElement.dir = "ltr";
  }, [locale]);
  return null;
}
