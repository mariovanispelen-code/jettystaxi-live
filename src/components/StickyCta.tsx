type Props = {
  belLabel: string;
  waLabel: string;
  waHref: string;
  bookLabel: string;
  bookHref: string;
  bookExternal?: boolean;
};

export default function StickyCta({
  belLabel,
  waLabel,
  waHref,
  bookLabel,
  bookHref,
  bookExternal = false,
}: Props) {
  return (
    <div
      className="sticky-cta"
      role="navigation"
      aria-label="Boeken — Plan rit, bel of WhatsApp"
    >
      <a
        href={bookHref}
        className="btn btn--primary"
        {...(bookExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {bookLabel}
      </a>
      <a href="tel:+31683555034" className="btn btn--ghost">
        {belLabel}
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--wa"
      >
        {waLabel}
      </a>
    </div>
  );
}
