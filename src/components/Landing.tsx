import type { LandingCopy } from "@/lib/copy";
import {
  GOOGLE_BOOKING_TAXI_URL,
  bookingEnabled,
} from "@/lib/profile";
import SiteHeader from "./SiteHeader";
import StickyCta from "./StickyCta";
import LocaleDocument from "./LocaleDocument";
import AchievementTicker from "./AchievementTicker";
import Reviews from "./Reviews";

const GALLERY = [
  { src: "/images/gallery/thierry-taxi-heemstede-1.jpg", w: 1600, h: 1200 },
  { src: "/images/gallery/thierry-taxi-heemstede-2.jpg", w: 1600, h: 1200 },
  { src: "/images/gallery/thierry-taxi.jpg", w: 1200, h: 900 },
] as const;

export default function Landing({ copy }: { copy: LandingCopy }) {
  const canBook = bookingEnabled();
  const bookHref = canBook ? GOOGLE_BOOKING_TAXI_URL.trim() : "#online-boeken";
  const base = copy.homeHref === "/" ? "" : copy.homeHref;

  return (
    <>
      <LocaleDocument locale={copy.locale} />
      <SiteHeader copy={copy} />
      <AchievementTicker copy={copy} />

      <section className="card-band" aria-label="Thierry's Taxi — business card">
        <div className="card-band__inner">
          <div className="card-band__lockup">
            <img
              className="card-band__mark"
              src="/logo-mark-on-yellow.svg"
              alt=""
              width={96}
              height={96}
            />
            <p className="card-band__name">{copy.cardName}</p>
            <p className="card-band__role">{copy.cardRole}</p>
            <a className="card-band__phone" href="tel:+31683555034">
              <span className="card-band__phone-icon" aria-hidden="true">
                ☎
              </span>
              {copy.cardPhone}
            </a>
            <p className="card-band__contact">
              <a href="https://thierrystaxi.nl">thierrystaxi.nl</a>
              {" | "}
              <a href="mailto:thierry@thierrystaxi.nl">thierry@thierrystaxi.nl</a>
            </p>
            <p className="card-band__services">{copy.cardServices}</p>
          </div>
          <div className="card-band__side">
            <h2 className="card-band__side-title">{copy.cardSideTitle}</h2>
            <p className="card-band__side-body">{copy.cardSideBody}</p>
            <div className="btn-row">
              <a href="tel:+31683555034" className="btn btn--primary">
                {copy.ctaPrimary}
              </a>
              <a
                href={copy.waHref}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.ctaGhost}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hero hero--prestige" aria-label="Hero">
        <div className="hero__media">
          <img
            src="/hero-premium.jpg"
            alt={copy.heroAlt}
            width={1600}
            height={1417}
            fetchPriority="high"
          />
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__glass fade-up">
            <div className="hero__brand">
              <img
                className="hero__logo"
                src="/logo-mark-on-yellow.svg"
                alt={copy.brand}
                width={160}
                height={160}
              />
            </div>
            <p className="hero__eyebrow">{copy.eyebrow}</p>
            <h1 className="hero__title">{copy.title}</h1>
            <p className="hero__promise">{copy.promise}</p>

            <div className="hero__pride" aria-label={copy.tickerAria}>
              <span className="hero__pride-pill">
                <span>★</span> {copy.achievementPlatinum}
              </span>
              <span className="hero__pride-pill">
                <span>★</span> {copy.achievementFiveStar}
              </span>
            </div>

            <div className="btn-row">
              {canBook ? (
                <a
                  href={bookHref}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.bookCta}
                </a>
              ) : (
                <a href="#online-boeken" className="btn btn--primary">
                  {copy.bookCta}
                </a>
              )}
              <a href="tel:+31683555034" className="btn btn--ghost">
                {copy.ctaPrimary}
              </a>
              <a
                href={copy.waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                {copy.ctaGhost}
              </a>
            </div>
          </div>
        </div>
      </section>

      <aside className="trust-strip" aria-label={copy.trustAria}>
        <div className="trust-strip__inner">
          <a
            className="trust-strip__kiwa"
            href="https://www.kiwa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/trust/kiwa-logo.svg"
              alt="Kiwa"
              width={100}
              height={35}
            />
            <div>
              <strong>{copy.trustKiwaTitle}</strong>
              <span>{copy.trustKiwaCaption}</span>
            </div>
          </a>
          <div className="trust-strip__pride">
            <span className="trust-strip__pill">
              ★ {copy.achievementPlatinum}
            </span>
            <span className="trust-strip__pill">
              ★ {copy.achievementFiveStar}
            </span>
          </div>
        </div>
      </aside>

      <section className="amenity" aria-labelledby="amenity-heading">
        <div className="amenity__inner">
          <div className="amenity__badge" aria-hidden="true">
            ♨
          </div>
          <div>
            <p className="amenity__label">{copy.amenityLabel}</p>
            <h2 id="amenity-heading" className="amenity__title">
              {copy.amenityTitle}
            </h2>
            <p className="amenity__body">{copy.amenityBody}</p>
          </div>
        </div>
      </section>

      <section
        className="section section--tight photo-strip"
        aria-labelledby="photo-strip-heading"
      >
        <div className="section__inner">
          <p className="section__label">{copy.galleryLabel}</p>
          <h2 id="photo-strip-heading" className="section__title">
            {copy.galleryTitle}
          </h2>
          <p className="section__lead">{copy.galleryLead}</p>
          <div className="photo-strip__grid">
            {GALLERY.map((shot, i) => (
              <figure key={shot.src} className="photo-strip__item">
                <img
                  src={shot.src}
                  alt={copy.galleryAlts[i] ?? copy.cineAlt}
                  width={shot.w}
                  height={shot.h}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="online-boeken"
        className="section section--tight book-online"
        aria-labelledby="book-heading"
      >
        <div className="section__inner">
          <p className="section__label">{copy.bookLabel}</p>
          <h2 id="book-heading" className="section__title">
            {copy.bookTitle}
          </h2>
          <p className="section__lead">{copy.bookBody}</p>
          <div className="book-online__box">
            {canBook ? (
              <>
                <a
                  className="btn btn--primary"
                  href={GOOGLE_BOOKING_TAXI_URL.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.bookCta}
                </a>
                <p className="book-online__fallback">{copy.bookFallback}</p>
              </>
            ) : (
              <>
                <p className="book-online__placeholder">
                  {copy.bookPlaceholder}
                </p>
                <p className="book-online__hint">{copy.bookPlaceholderHint}</p>
                <div className="btn-row">
                  <a href="tel:+31683555034" className="btn btn--primary">
                    {copy.reserveCall}
                  </a>
                  <a
                    href={copy.waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--wa"
                  >
                    {copy.reserveWa}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Reviews copy={copy} />

      <section id="diensten" className="section">
        <div className="section__inner">
          <p className="section__label">{copy.servicesLabel}</p>
          <h2 className="section__title">{copy.servicesTitle}</h2>
          <p className="section__lead">{copy.servicesLead}</p>
          <div className="services">
            <article className="service-card">
              <div className="service-card__icon" aria-hidden="true">
                ✈
              </div>
              <h3>{copy.schipholTitle}</h3>
              <p>{copy.schipholBody}</p>
            </article>
            <article className="service-card">
              <div className="service-card__icon" aria-hidden="true">
                ◉
              </div>
              <h3>{copy.bobTitle}</h3>
              <p>{copy.bobBody}</p>
            </article>
            <article className="service-card">
              <div className="service-card__icon" aria-hidden="true">
                ◆
              </div>
              <h3>{copy.priveTitle}</h3>
              <p>{copy.priveBody}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--band section--tight">
        <div className="section__inner about">
          <div className="about__photo">
            <img
              src="/thierry-portrait.jpg"
              alt={copy.aboutPhotoAlt}
              width={720}
              height={720}
              loading="lazy"
            />
          </div>
          <div className="about__body">
            <h2>{copy.aboutTitle}</h2>
            <p>{copy.aboutBody}</p>
            <p className="about__note">
              {copy.m5Note}{" "}
              <a href={copy.m5Href} rel="noopener noreferrer">
                {copy.m5Link}
              </a>
              .
            </p>
            <p className="about__google-note">{copy.aboutGoogleNote}</p>
          </div>
        </div>
      </section>

      <section className="m5-film section--band" aria-labelledby="m5-film-title">
        <div className="m5-film__inner">
          <div>
            <p className="m5-film__label">{copy.m5FilmLabel}</p>
            <h2 id="m5-film-title" className="m5-film__title">
              {copy.m5FilmTitle}
            </h2>
            <p className="m5-film__body">{copy.m5FilmBody}</p>
            <div className="m5-film__cta btn-row">
              <a
                href={copy.m5Href}
                className="btn btn--primary"
                rel="noopener noreferrer"
              >
                {copy.m5FilmCta}
              </a>
            </div>
          </div>
          <div className="m5-film__frame">
            <img src="/videos/m5-film-poster.jpg" alt="" className="film-still" width={1280} height={720} loading="lazy" />
          </div>
        </div>
      </section>

      <figure className="cine">
        <img
          src="/hero-premium.jpg"
          alt={copy.cineAlt}
          width={1600}
          height={1067}
          loading="lazy"
        />
        <figcaption className="cine__caption">
          <p>{copy.cineCaption}</p>
        </figcaption>
      </figure>

      <section id="reserveren" className="section">
        <div className="section__inner">
          <p className="section__label">{copy.reserveLabel}</p>
          <h2 className="section__title">{copy.reserveTitle}</h2>
          <div className="reserve-box">
            <p>{copy.reserveBody}</p>
            <div className="btn-row">
              <a href={`${base}#online-boeken`} className="btn btn--primary">
                {copy.bookCta}
              </a>
              <a href="tel:+31683555034" className="btn btn--ghost">
                {copy.reserveCall}
              </a>
              <a
                href={copy.waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--wa"
              >
                {copy.reserveWa}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src="/logo-mark-on-yellow.svg"
            alt={copy.brand}
            width={96}
            height={96}
          />
          <div>
            <p>{copy.footer}</p>
            <p className="site-footer__legal">{copy.footerLegal}</p>
          </div>
        </div>
        <div className="site-footer__kiwa">
          <img
            src="/images/trust/kiwa-logo.svg"
            alt="Kiwa"
            width={100}
            height={35}
          />
          <span>{copy.trustKiwaCaption}</span>
        </div>
        <div className="site-footer__inner">
          <div className="site-footer__links lang-switch">
            <a
              className={copy.locale === "nl" ? "is-active" : undefined}
              href="/"
              hrefLang="nl"
            >
              {copy.langs.nl}
            </a>
            <a
              className={copy.locale === "en" ? "is-active" : undefined}
              href="/en"
              hrefLang="en"
            >
              {copy.langs.en}
            </a>
            <a
              className={copy.locale === "zh" ? "is-active" : undefined}
              href="/zh"
              hrefLang="zh-Hans"
            >
              {copy.langs.zh}
            </a>
            <a
              className={copy.locale === "ja" ? "is-active" : undefined}
              href="/ja"
              hrefLang="ja"
            >
              {copy.langs.ja}
            </a>
            <a href="/algemene-voorwaarden">{copy.footerTerms}</a>
            <a href={copy.m5Href}>{copy.m5Link}</a>
          </div>
        </div>
      </footer>

      <StickyCta
        belLabel={copy.stickyBel}
        waLabel={copy.stickyWa}
        waHref={copy.waHref}
        bookLabel={copy.bookCta}
        bookHref={canBook ? GOOGLE_BOOKING_TAXI_URL.trim() : "#online-boeken"}
        bookExternal={canBook}
      />
    </>
  );
}
