import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TYPEFORM_ID } from "@/lib/constants";

const siteUrl = "https://rhpny.com";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a private consultation with Regen Health Physicians. Concierge regenerative medicine in New York City and Salt Lake City. Virtual consultations available.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/book`,
    siteName: "Regen Health Physicians",
    title: "Book a Consultation | Regen Health Physicians",
    description:
      "Book a private consultation with Regen Health Physicians.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | Regen Health Physicians",
    description: "Book a private consultation with Regen Health Physicians.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/book`,
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-12 px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Book a Private Consultation
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-600">
              Share a few details and our clinical team will follow up to
              schedule your consultation. Virtual visits available for
              out-of-state patients.
            </p>
          </div>
        </section>

        <section className="pb-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div
              data-tf-live={TYPEFORM_ID}
              style={{ minHeight: "70vh" }}
            />
          </div>
        </section>
      </main>
      <Footer />
      <Script
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
