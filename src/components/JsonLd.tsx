import { SITE } from "@/lib/constants";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: SITE.name,
    alternateName: SITE.legalName,
    description:
      "Privé transport, BOB pick-up + eigen auto, airport transfers en platformritten vanuit IJmuiden / Haarlem.",
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
    image: `${SITE.url}/images/brand/taxi-hero.png`,
    logo: `${SITE.url}/images/logo-wa-bubble.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4607,
      longitude: 4.6194,
    },
    areaServed: [
      { "@type": "City", name: "IJmuiden" },
      { "@type": "City", name: "Haarlem" },
      { "@type": "City", name: "Amsterdam" },
      { "@type": "Airport", name: "Amsterdam Airport Schiphol", iataCode: "AMS" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [SITE.m5Url, SITE.whatsappUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
