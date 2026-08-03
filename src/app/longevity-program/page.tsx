import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Programs } from "@/components/programs";
import { FadeUp } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";
import { LOCATION_LIST } from "@/lib/locations";

const siteUrl = "https://www.rhpny.com";
const path = "/longevity-program";

export const metadata: Metadata = {
  title: "Longevity Program | Physician-Designed Regenerative & Performance Care",
  description:
    "Ten physician-designed longevity and performance programs — musculoskeletal, sexual health, brain optimization, cardiometabolic, and more. Concierge regenerative care in New York City and Salt Lake City.",
  keywords: [
    "longevity program",
    "regenerative medicine",
    "performance medicine",
    "concierge longevity",
    "stem cell therapy",
    "peptide therapy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${path}`,
    siteName: "Regen Health Physicians",
    title: "Longevity Program | Regen Health Physicians",
    description:
      "Ten physician-designed longevity and performance programs across regeneration, brain health, and metabolic optimization.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Longevity Program | Regen Health Physicians",
    description:
      "Ten physician-designed longevity and performance programs.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: `${siteUrl}${path}` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Longevity Program",
  url: `${siteUrl}${path}`,
  description: metadata.description,
  provider: {
    "@type": "MedicalBusiness",
    name: "Regen Health Physicians",
    url: siteUrl,
  },
};

export default function LongevityProgramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-stone-50 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Longevity & Performance
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                The Longevity Program
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Ten physician-designed programs spanning regeneration, longevity,
                and performance — from musculoskeletal repair to brain
                optimization and cardiometabolic health. Every protocol is built
                around your biology, delivered through concierge care in New York
                City and Salt Lake City.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={BOOKING_URL}
                  className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                >
                  Book a Consultation
                </Link>
                {LOCATION_LIST.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="rounded-full border border-gray-300 px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
                  >
                    {loc.short}
                  </Link>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Existing 10-program accordion, reused unchanged */}
        <Programs />
      </main>
      <Footer />
    </>
  );
}
