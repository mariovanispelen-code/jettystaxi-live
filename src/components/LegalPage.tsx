import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <article className="container-site section-pad max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-wider text-champagne">
        Juridisch · concept
      </p>
      <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      {updated && <p className="mt-2 text-sm text-muted">Laatst bijgewerkt: {updated}</p>}
      <div className="prose-legal mt-8">{children}</div>
    </article>
  );
}
