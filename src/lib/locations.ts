// Single source of truth for the two clinics. Powers the location pages, the
// header location switcher, and per-location structured data. Additive — does
// not modify existing constants.

export type LocationSlug = "new-york" | "salt-lake-city";

export type ClinicLocation = {
  slug: LocationSlug;
  label: string; // "New York City"
  short: string; // "NYC"
  region: string; // "NY"
  street: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  hours: { days: string; opens: string; closes: string }[];
  hoursShort: string;
  geo: { lat: number; lng: number };
  mapUrl: string;
  mapEmbed: string;
  tagline: string;
};

export const LOCATIONS: Record<LocationSlug, ClinicLocation> = {
  "new-york": {
    slug: "new-york",
    label: "New York City",
    short: "NYC",
    region: "New York",
    street: "575 Madison Ave, Suite 2300",
    addressLocality: "New York City",
    addressRegion: "NY",
    postalCode: "10022",
    phoneDisplay: "+1 (929) 577-3424",
    phoneHref: "tel:+19295773424",
    email: "admin@rhpny.com",
    hours: [
      { days: "Monday – Friday", opens: "10:00", closes: "20:00" },
      { days: "Saturday", opens: "12:00", closes: "17:00" },
    ],
    hoursShort: "Mon–Fri 10am–8pm · Sat 12–5pm",
    geo: { lat: 40.7624, lng: -73.9722 },
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=575+Madison+Ave+Suite+2300+New+York+NY+10022",
    mapEmbed:
      "https://www.google.com/maps?q=575+Madison+Ave,+New+York,+NY+10022&output=embed",
    tagline: "Our Midtown Manhattan concierge clinic.",
  },
  "salt-lake-city": {
    slug: "salt-lake-city",
    label: "Salt Lake City",
    short: "SLC",
    region: "Utah",
    street: "1345 East 3900 South, Suite 110",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    postalCode: "84124",
    phoneDisplay: "+1 (385) 442-7744",
    phoneHref: "tel:+13854427744",
    email: "admin@rhpny.com",
    hours: [{ days: "Monday – Friday", opens: "08:00", closes: "17:00" }],
    hoursShort: "Mon–Fri 8am–5pm",
    geo: { lat: 40.6839, lng: -111.8535 },
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=1345+East+3900+South+Suite+110+Salt+Lake+City+UT+84124",
    mapEmbed:
      "https://www.google.com/maps?q=1345+East+3900+South,+Salt+Lake+City,+UT+84124&output=embed",
    tagline: "Serving patients across the Mountain West.",
  },
};

export const LOCATION_LIST: ClinicLocation[] = [
  LOCATIONS["new-york"],
  LOCATIONS["salt-lake-city"],
];

export const DEFAULT_LOCATION: LocationSlug = "new-york";

// Cookie the header switcher writes so the site can remember a preferred clinic.
export const LOCATION_COOKIE = "rhp_location";

export function isLocationSlug(v: unknown): v is LocationSlug {
  return v === "new-york" || v === "salt-lake-city";
}
