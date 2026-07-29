import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocationPageView } from "@/components/location-page";
import { clinicJsonLd } from "@/lib/location-schema";
import { LOCATIONS } from "@/lib/locations";

const siteUrl = "https://www.rhpny.com";
const loc = LOCATIONS["new-york"];
const path = "/locations/new-york";

export const metadata: Metadata = {
  title: "New York City Clinic | Regenerative Medicine on the Upper East Side",
  description:
    "Regen Health Physicians in New York City — physician-led regenerative medicine, hair restoration, aesthetics, peptides, and longevity care. 184 E 70th St, Upper East Side. Book a consultation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${path}`,
    siteName: "Regen Health Physicians",
    title: "New York City Clinic | Regen Health Physicians",
    description:
      "Physician-led regenerative medicine on the Upper East Side of New York City.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City Clinic | Regen Health Physicians",
    description: "Physician-led regenerative medicine in New York City.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: `${siteUrl}${path}` },
};

export default function NewYorkLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd(loc, path)) }}
      />
      <Header />
      <LocationPageView slug="new-york" />
      <Footer />
    </>
  );
}
