import type { LandingCopy } from "@/lib/copy";
import {
  GOOGLE_REVIEW_SEARCH_URL,
  PROFILE_FACTS,
} from "@/lib/profile";

/** Uber-profiel facts only — never invent review quotes. */
export default function Reviews({ copy }: { copy: LandingCopy }) {
  const cards = [
    {
      label: copy.achievementPlatinum,
      detail: PROFILE_FACTS.statusLabel,
    },
    {
      label: copy.achievementFiveStar,
      detail: "Uber",
    },
    {
      label: copy.achievementRides,
      detail: PROFILE_FACTS.ridesPeriod,
    },
    ...PROFILE_FACTS.compliments.map((c) => ({
      label: c.label,
      detail: `×${c.count}`,
    })),
  ];

  return (
    <section
      id="reviews"
      className="section section--band reviews"
      aria-labelledby="reviews-heading"
    >
      <div className="section__inner">
        <p className="section__label">{copy.reviewsLabel}</p>
        <h2 id="reviews-heading" className="section__title">
          {copy.reviewsTitle}
        </h2>
        <p className="section__lead">
          {copy.reviewsLead} {copy.reviewsSourceNote}
        </p>

        <div className="reviews__proof">
          <div className="reviews__profile">
            <img
              src="/images/uber/thierry-platinum-profile.jpg"
              alt={copy.profilePhotoAlt}
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="reviews__compliments">
            <img
              src="/images/uber/compliments-row.jpg"
              alt={copy.complimentsAlt}
              width={960}
              height={320}
              loading="lazy"
            />
          </div>
        </div>

        <div className="reviews__badges">
          <figure className="reviews__badge">
            <img
              src="/images/uber/uber-pro-platinum.jpg"
              alt={copy.platinumBadgeAlt}
              width={280}
              height={360}
              loading="lazy"
            />
          </figure>
          <figure className="reviews__badge">
            <img
              src="/images/uber/uber-700-five-star.jpg"
              alt={copy.fiveStarBadgeAlt}
              width={280}
              height={360}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="reviews__cards">
          {cards.map((a) => (
            <article key={a.label} className="reviews__card">
              <p className="reviews__card-label">{a.label}</p>
              <p className="reviews__card-detail">{a.detail}</p>
              <span className="reviews__card-badge">{copy.verifiedBadge}</span>
            </article>
          ))}
        </div>

        <p className="reviews__langs">
          {PROFILE_FACTS.languages.join(" · ")} · {PROFILE_FACTS.area}
        </p>

        <div className="reviews__cta">
          <a
            className="btn btn--primary"
            href={GOOGLE_REVIEW_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.googleReviewCta}
          </a>
          <p className="reviews__cta-note">{copy.googleReviewNote}</p>
        </div>
      </div>
    </section>
  );
}
