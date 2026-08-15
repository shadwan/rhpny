import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const siteUrl = "https://www.rhpny.com";

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
    description: "Book a private consultation with Regen Health Physicians.",
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

const locations = [
  {
    city: "New York City",
    address: "575 Madison Ave, Suite 2300",
    cityState: "New York, NY 10022",
  },
  {
    city: "Salt Lake City",
    address: "1345 East 3900 South, Suite 110",
    cityState: "Salt Lake City, UT 84124",
  },
];

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F6F2F0]">
        {/* Hero */}
        <section className="pt-32 pb-10 px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#1F6FB2] font-medium mb-4">
              New York · Salt Lake City · Regenerative Medicine
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900">
              Book a Private Consultation
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
              Share a few details and our clinical team will follow up to see
              if you&apos;re a candidate and schedule your consultation.
              Virtual visits are available for out-of-state patients.
            </p>
          </div>
        </section>

        {/* Quick contact - call or text */}
        <section className="px-6 md:px-10 lg:px-16 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-neutral-200 rounded-2xl px-6 py-6 md:px-10 md:py-8 shadow-sm">
              <p className="text-center text-sm md:text-base text-neutral-600 mb-5">
                Prefer to talk to someone right now? Call or text our patient
                advocacy team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                
                  href="tel:+19295773424"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F6FB2] text-white px-8 py-4 text-base font-medium hover:bg-[#195a91] transition-colors"
                >
                  Call (929) 577-3424
                </a>
                
                  href="sms:+19295773424"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1F6FB2] text-[#1F6FB2] px-8 py-4 text-base font-medium hover:bg-[#1F6FB2]/5 transition-colors"
                >
                  Text Us
                </a>
              </div>
              <p className="text-center text-xs text-neutral-400 mt-4">
                Or email{" "}
                
                  href="mailto:admin@rhpny.com"
                  className="underline hover:text-[#1F6FB2]"
                >
                  admin@rhpny.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <section className="px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              or request a callback
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
        </section>

        {/* Form */}
        <section className="px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#F6F2F0] rounded-2xl overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/SqNnpYiINMPRb0UmrbM8"
                style={{
                  width: "100%",
                  height: "559px",
                  border: "none",
                  borderRadius: "4px",
                }}
                id="inline-SqNnpYiINMPRb0UmrbM8"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Book Form"
                data-height="559"
                data-layout-iframe-id="inline-SqNnpYiINMPRb0UmrbM8"
                data-form-id="SqNnpYiINMPRb0UmrbM8"
                title="Book Form"
              />
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="px-6 md:px-10 lg:px-16 pb-24">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-white border border-neutral-200 rounded-2xl px-6 py-6"
              >
                <p className="font-heading text-lg text-neutral-900 mb-2">
                  {loc.city}
                </p>
                <p className="text-sm text-neutral-600">{loc.address}</p>
                <p className="text-sm text-neutral-600">{loc.cityState}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
