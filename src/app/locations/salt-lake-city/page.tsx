import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocationPageView } from "@/components/location-page";
import { clinicJsonLd } from "@/lib/location-schema";
import { LOCATIONS } from "@/lib/locations";

const siteUrl = "https://www.rhpny.com";
const loc = LOCATIONS["salt-lake-city"];
const path = "/locations/salt-lake-city";

export const metadata: Metadata = {
  title: "Salt Lake City Clinic | Regenerative Medicine in Utah",
  description:
    "Regen Health Physicians in Salt Lake City, Utah — physician-led regenerative medicine, hair restoration, aesthetics, peptides, and longevity care. 1345 East 3900 South. Book a consultation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${path}`,
    siteName: "Regen Health Physicians",
    title: "Salt Lake City Clinic | Regen Health Physicians",
    description:
      "Physician-led regenerative medicine in Salt Lake City, Utah.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt Lake City Clinic | Regen Health Physicians",
    description: "Physician-led regenerative medicine in Salt Lake City, Utah.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: `${siteUrl}${path}` },
};

export default function SaltLakeCityLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd(loc, path)) }}
      />
      <Header />
      <LocationPageView slug="salt-lake-city" />
      <Footer />
    </>
  );
}
