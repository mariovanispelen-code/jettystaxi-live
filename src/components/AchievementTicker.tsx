import type { LandingCopy } from "@/lib/copy";
import { PROFILE_FACTS } from "@/lib/profile";

function buildItems(copy: LandingCopy): { text: string; pride?: boolean }[] {
  return [
    { text: `★ ${copy.achievementPlatinum}`, pride: true },
    { text: `★ ${copy.achievementFiveStar}`, pride: true },
    {
      text: `${PROFILE_FACTS.ridesApprox} ritten / ${PROFILE_FACTS.ridesPeriod}`,
    },
    ...PROFILE_FACTS.compliments.map((c) => ({
      text: `${c.label} ×${c.count}`,
    })),
    { text: PROFILE_FACTS.sourceShort },
  ];
}

export default function AchievementTicker({ copy }: { copy: LandingCopy }) {
  const items = buildItems(copy);
  const plain = items.map((i) => i.text);
  return (
    <div
      className="achievement-ticker"
      role="region"
      aria-label={copy.tickerAria}
    >
      <p className="sr-only">
        {plain.join(". ")}. {PROFILE_FACTS.sourceLabel}.
      </p>
      <div className="achievement-ticker__track">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="achievement-ticker__marquee"
            aria-hidden={dup === 1 ? true : undefined}
          >
            <span className="achievement-ticker__text">
              {items.map((item, i) => (
                <span key={`${dup}-${i}`}>
                  <span
                    className={
                      item.pride ? "achievement-ticker__pride" : undefined
                    }
                  >
                    {item.text}
                  </span>
                  <span className="achievement-ticker__sep" aria-hidden="true">
                    ·
                  </span>
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
