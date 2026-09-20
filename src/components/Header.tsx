"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href="/" className="group flex items-center gap-2.5 font-semibold tracking-tight" aria-label={`${SITE.name} — naar homepage`}>
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-taxi/40 bg-taxi shadow-[0_0_16px_rgba(255,212,0,0.35)]">
            <Image src="/images/logo-wa-bubble.png" alt="" fill className="object-cover" sizes="40px" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-lg text-white group-hover:text-taxi transition-colors">Thierry&apos;s <span className="text-taxi">Taxi</span></span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-muted sm:block">{SITE.personTitle}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Hoofdnavigatie">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-taxi">{item.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href={`tel:${SITE.phoneTel}`} className="btn-secondary !py-2 !px-3 text-sm">Bel</a>
          <a href={SITE.whatsappUrl} className="btn-primary !py-2 !px-3 text-sm" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <button type="button" className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-white xl:hidden" aria-expanded={open} aria-controls="mobiel-menu" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>{open ? (<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />) : (<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />)}</svg>
        </button>
      </div>
      {open && (
        <div id="mobiel-menu" className="border-t border-border bg-surface xl:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobiele navigatie">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 text-sm text-white hover:bg-surface-2 hover:text-taxi" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-1">
              <a href={`tel:${SITE.phoneTel}`} className="btn-secondary w-full text-sm">Bel Thierry</a>
              <a href={SITE.whatsappUrl} className="btn-primary w-full text-sm" target="_blank" rel="noopener noreferrer">WhatsApp ons</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
