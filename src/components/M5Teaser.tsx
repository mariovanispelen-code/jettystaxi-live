import { SITE } from "@/lib/constants";

export function M5Teaser() {
  return (
    <section className="border-b border-white/10 bg-black" aria-labelledby="m5-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10">
        <p className="text-sm font-medium uppercase tracking-wider text-amber-300/90">M5 Wedding</p>
        <h2 id="m5-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          BMW M5 met privéchauffeur
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/70">
          Intro €{SITE.m5LitePrice}* / 2 uur. Uitsluitend met chauffeur — nooit self-drive.
        </p>
        <a
          href={SITE.m5Url}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black hover:bg-amber-200"
          rel="noopener noreferrer"
        >
          Bekijk M5 Wedding →
        </a>
      </div>
    </section>
  );
}
