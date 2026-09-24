import type { LandingCopy, Locale } from "@/lib/copy";
import { LOCALE_PATH } from "@/lib/copy";

const SWITCH: { locale: Locale; key: keyof LandingCopy["langs"] }[] = [
  { locale: "nl", key: "nl" },
  { locale: "en", key: "en" },
  { locale: "zh", key: "zh" },
  { locale: "ja", key: "ja" },
];

export default function SiteHeader({ copy }: { copy: LandingCopy }) {
  const loc = copy.locale;
  const base = copy.homeHref === "/" ? "" : copy.homeHref;
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href={copy.homeHref}>
          <img
            className="site-header__logo"
            src="/logo-mark-on-yellow.svg"
            alt=""
            width={72}
            height={72}
          />
          <span>{copy.brand}</span>
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          <a href={`${base}#diensten`}>{copy.navServices}</a>
          <a href={`${base}#reviews`}>{copy.navReviews}</a>
          <a href={`${base}#online-boeken`}>{copy.navBook}</a>
          <a href={`${base}#reserveren`}>{copy.navReserve}</a>
          {SWITCH.map(({ locale, key }) => (
            <a
              key={locale}
              className={`lang-link${loc === locale ? " is-active" : ""}`}
              href={LOCALE_PATH[locale]}
              hrefLang={locale === "zh" ? "zh-Hans" : locale}
            >
              {copy.langs[key]}
            </a>
          ))}
          <a
            className="site-header__cta btn btn--primary"
            href={`${base}#online-boeken`}
            style={{ minHeight: 36, padding: "6px 16px", fontSize: 13 }}
          >
            {copy.navBook}
          </a>
        </nav>
      </div>
    </header>
  );
}
