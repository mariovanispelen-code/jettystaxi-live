import { SITE } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 px-3 py-2 backdrop-blur md:hidden"
      aria-label="Snel reserveren of contact"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href="#reserveren"
          className="rounded-full bg-amber-300 px-2 py-2.5 text-center text-xs font-bold text-black"
        >
          Reserveren
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-2 py-2.5 text-center text-xs font-semibold text-white"
        >
          WhatsApp
        </a>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="rounded-full border border-white/20 px-2 py-2.5 text-center text-xs font-semibold text-white"
        >
          Bel
        </a>
      </div>
    </nav>
  );
}
