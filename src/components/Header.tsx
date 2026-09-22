import { NAV, SITE } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:px-10">
        <a href="/" className="font-bold tracking-tight text-white">
          Thierry&apos;s <span className="text-amber-300">Taxi</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Hoofdnavigatie">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="rounded-full bg-amber-300 px-4 py-2 text-xs font-bold text-black"
        >
          Bel
        </a>
      </div>
    </header>
  );
}
