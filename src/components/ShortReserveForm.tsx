"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export function ShortReserveForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [done, setDone] = useState(false);
  const [draft, setDraft] = useState<Record<string, string>>({});

  function onStep1(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    fd.forEach((v, k) => {
      next[k] = String(v);
    });
    setDraft(next);
    setStep(2);
  }

  function onStep2(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = { ...draft };
    fd.forEach((v, k) => {
      if (k !== "website") lines[k] = String(v);
    });
    const text =
      "Thierry's Taxi aanvraag\n" +
      Object.entries(lines)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
    window.open(
      `https://wa.me/${SITE.phoneWhatsApp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-8 rounded-2xl border border-amber-300/30 bg-white/5 p-6 text-white">
        Aanvraag ontvangen. Thierry neemt zo snel mogelijk contact op.
      </p>
    );
  }

  if (step === 1) {
    return (
      <form onSubmit={onStep1} className="mx-auto mt-8 max-w-lg space-y-4 text-left">
        <label className="block text-sm text-white/70">
          Type rit *
          <select name="type" required defaultValue="" className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white">
            <option value="" disabled>Kies…</option>
            <option value="Privé">Privé</option>
            <option value="Schiphol">Schiphol</option>
            <option value="BOB">BOB</option>
            <option value="Zakelijk">Zakelijk</option>
            <option value="M5-aanvraag">M5-aanvraag</option>
            <option value="Overig">Overig</option>
          </select>
        </label>
        <label className="block text-sm text-white/70">
          Datum *
          <input name="datum" type="date" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
        </label>
        <label className="block text-sm text-white/70">
          Vertrekadres *
          <input name="vertrek" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
        </label>
        <label className="block text-sm text-white/70">
          Telefoon *
          <input name="telefoon" type="tel" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
        </label>
        <button type="submit" className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">Volgende</button>
        <p className="text-center text-xs text-white/50">Nog geen definitieve boeking — wij bevestigen eerst.</p>
      </form>
    );
  }

  return (
    <form onSubmit={onStep2} className="mx-auto mt-8 max-w-lg space-y-4 text-left">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="block text-sm text-white/70">Naam *
        <input name="naam" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">E-mail *
        <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">Bestemming *
        <input name="bestemming" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">Tijd *
        <input name="tijd" type="time" required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">Passagiers *
        <input name="passagiers" type="number" min={1} max={8} defaultValue={1} required className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">Bagage (optioneel)
        <input name="bagage" className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">Vluchtnummer (optioneel)
        <input name="vlucht" className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="block text-sm text-white/70">Wensen (optioneel)
        <textarea name="wensen" rows={3} className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-white" />
      </label>
      <label className="flex items-start gap-2 text-sm text-white/70">
        <input name="akkoord" type="checkbox" required className="mt-1" />
        Ik ga akkoord met de algemene voorwaarden *
      </label>
      <button type="submit" className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black">Verstuur aanvraag</button>
      <button type="button" onClick={() => setStep(1)} className="w-full text-xs text-white/50 underline">Terug</button>
    </form>
  );
}
