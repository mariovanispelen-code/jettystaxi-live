import { SITE } from "@/lib/constants";

/** Legal-safe: no telephone in JSON-LD */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "@id": "https://thierrystaxi.nl/#taxiservice",
        name: "Thierry's Taxi",
        url: "https://thierrystaxi.nl/",
        inLanguage: ["nl-NL", "tr-TR", "ar"],
        description:
          "Premium privéchauffeur en taxi vanuit IJmuiden: Schiphol-transfers, Amsterdam, BOB in je eigen auto, zakelijk en VIP-vervoer.",
        provider: { "@id": "https://thierrystaxi.nl/#business" },
        areaServed: [
          { "@type": "City", name: "IJmuiden" },
          { "@type": "City", name: "Amsterdam" },
          { "@type": "Airport", name: "Amsterdam Airport Schiphol", iataCode: "AMS" },
          { "@type": "AdministrativeArea", name: "Noord-Holland" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://thierrystaxi.nl/",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://thierrystaxi.nl/#business",
        name: "Thierry's Taxi",
        legalName: SITE.legalName,
        url: "https://thierrystaxi.nl/",
        email: SITE.email,
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        identifier: {
          "@type": "PropertyValue",
          name: "KvK",
          value: SITE.kvk,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
