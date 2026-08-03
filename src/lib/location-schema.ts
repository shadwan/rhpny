import type { ClinicLocation } from "./locations";

const siteUrl = "https://www.rhpny.com";

const DAY_MAP: Record<string, string[]> = {
  "Monday – Friday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Saturday: ["Saturday"],
  Sunday: ["Sunday"],
};

// MedicalClinic structured data for a single location — feeds local SEO and the
// Google Business Profile for each city.
export function clinicJsonLd(loc: ClinicLocation, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}${path}#clinic`,
    name: `Regen Health Physicians — ${loc.label}`,
    url: `${siteUrl}${path}`,
    telephone: loc.phoneHref.replace("tel:", ""),
    email: loc.email,
    image: `${siteUrl}/images/og-image.jpg`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.addressLocality,
      addressRegion: loc.addressRegion,
      postalCode: loc.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    hasMap: loc.mapUrl,
    openingHoursSpecification: loc.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_MAP[h.days] ?? [h.days],
      opens: h.opens,
      closes: h.closes,
    })),
    medicalSpecialty: ["Physician", "Pain Management Physician"],
    parentOrganization: {
      "@type": "MedicalBusiness",
      name: "Regen Health Physicians",
      url: siteUrl,
    },
  };
}
