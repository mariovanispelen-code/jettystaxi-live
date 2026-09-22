const WA_PREFILL =
  "Hallo Thierry, ik wil een rit aanvragen op [datum] van [vertrek] naar [bestemming].";

export const SITE = {
  name: "Thierry's Taxi",
  legalName: "Thierone Mobility Services",
  personTitle: "PRIVATE CHAUFFEUR",
  displayPerson: "Thierry van Ispelen",
  legalPartyPlaceholder: "[EXACTE KVK-CONTRACTSPARTIJ NOG CONTROLEREN]",
  kvk: "97694932",
  btwPlaceholder: "[btw-nummer invullen]",
  address: { street: "Bik- en Arnoldkade 94", postalCode: "1975 CJ", city: "IJmuiden", country: "NL" },
  phoneDisplay: "+31 6 83555034",
  phoneTel: "+31683555034",
  phoneWhatsApp: "31683555034",
  email: "info@thierrystaxi.nl",
  url: "https://thierrystaxi.nl",
  m5Url: "https://m5wedding.nl",
  whatsappPrefill: WA_PREFILL,
  whatsappUrl: "https://wa.me/31683555034?text=" + encodeURIComponent(WA_PREFILL),
  marioPhone: "+31629366824",
  marioPhoneDisplay: "06 2936 6824",
  trustLine: "De vereiste chauffeursbevoegdheden, vergunningen en verzekeringen zijn aanwezig.",
  m5PackagePrice: 999,
  m5PackageLabel: "4-uur pakket",
  m5LitePrice: 499,
  m5LiteLabel: "M5 LITE — 2 uur",
  introOffer: {
    price: 499,
    hours: 2,
    includedKm: 100,
    promoCode: "M5WEDDING",
    validityLabel: "september of oktober 2026",
    validityMonths: ["2026-09", "2026-10"] as const,
  },
  waitIncludedMin: 10,
  waitPerMin: 0.75,
  cancelUnder24h: "100%",
  cancel48to24: "50%",
  cancelOver48: "0%",
  braakMin: 175,
  smokeFee: 150,
  conditionsVersion: "2026-09-14",
  conditionsLabel: "Algemene Voorwaarden Thierry's Taxi — versie 14 september 2026",
  conditionsPath: "/algemene-voorwaarden",
  locale: "nl-NL",
  tagline: "Thierry's Taxi services — PRIVATE CHAUFFEUR",
  heroHeadline: "Privé vervoer. BOB. Airport. Wanneer u wilt.",
} as const;

export const NAV = [
  { href: "/#platinum", label: "Platinum" },
  { href: "/#diensten", label: "Diensten" },
  { href: "/#reserveren", label: "Reserveren" },
  { href: "https://m5wedding.nl", label: "M5 Wedding" },
] as const;

export const FOOTER_LEGAL = [
  { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
  { href: "/klachten", label: "Klachtenregeling" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
] as const;

export const PROFILE_FACTS = {
  languages: ["NL", "EN", "IT"],
  area: "Haarlem / IJmuiden e.o.",
  family: "Trots vader van 2 dochters",
  note: "Love to drive",
  status: "Platinum",
  ridesApprox: 1197,
  ridesPeriod: "2 jaar",
  sourceLabel: "Uit het Uber chauffeursprofiel (zelf gepresenteerd)",
} as const;
