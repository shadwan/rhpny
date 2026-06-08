import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { LetterAvatar } from "@/components/letter-avatar";
import { BOOKING_URL } from "@/lib/constants";

const siteUrl = "https://www.rhpny.com";

export const metadata: Metadata = {
  title: "Aesthetic Treatments | Regenerative Skin Medicine",
  description:
    "Physician-led regenerative aesthetic treatments at Regen Health. Stem cell therapy, PRP, and peptide protocols for collagen rebuilding, skin renewal, and compounding long-term results. NYC & Salt Lake City.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/aesthetics`,
    siteName: "Regen Health Physicians",
    title: "Aesthetic Treatments | Regen Health Physicians",
    description:
      "Regenerative aesthetic medicine that works at the cellular level — stem cell, PRP, and peptide protocols. Physician-led, concierge-delivered.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Treatments | Regen Health Physicians",
    description:
      "Regenerative aesthetic medicine that works at the cellular level.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/aesthetics`,
  },
};

const treatments = [
  {
    tag: "Treatment 01",
    title: "Stem Cell Therapy for Skin Rejuvenation",
    tagline: "The pinnacle of regenerative aesthetics.",
    body: "Stem cell therapy represents the frontier of modern aesthetic medicine. Rather than masking the signs of aging, stem cell treatments signal your skin to regenerate — activating dormant repair mechanisms and restoring the conditions of younger, healthier tissue.",
    bullets: [
      "Deep structural collagen rebuilding",
      "Reduction of fine lines, wrinkles, and skin laxity",
      "Evening of skin tone and texture at the cellular level",
      "Restoration of volume and elasticity without synthetic fillers",
      "Accelerated healing and skin renewal",
    ],
    footnote:
      "Stem cell therapy works progressively, with results that deepen over weeks and months as your biology responds.",
    location: "Available in Salt Lake City and New York City.",
    cta: "Request a Stem Cell Consultation",
    image: "/images/aesthetics/treatment-1.jpeg",
    imageAlt: "Serene woman with luminous skin — stem cell rejuvenation",
  },
  {
    tag: "Treatment 02",
    title: "PRP — Platelet-Rich Plasma",
    tagline: "Your body's own power, amplified.",
    body: "Platelet-Rich Plasma therapy harnesses the regenerative compounds already present in your blood — concentrated and delivered precisely where your skin needs renewal most. Because PRP is derived from your own biology, it works in harmony with your body rather than introducing foreign substances.",
    bullets: [
      "Fine lines and surface wrinkles",
      "Skin texture, tone, and luminosity",
      "Under-eye hollowing and discoloration",
      "Collagen stimulation for lasting firmness",
      "Scalp and hairline rejuvenation",
    ],
    footnote:
      "PRP is frequently combined with our stem cell or peptide protocols for a compounding regenerative effect.",
    cta: "Build Your PRP Protocol",
    image: "/images/aesthetics/treatment-2.jpeg",
    imageAlt: "Golden plasma droplet — PRP therapy",
  },
  {
    tag: "Treatment 03",
    title: "Peptide Treatments",
    tagline: "Precision signals for youthful skin.",
    body: "Peptides are the messengers your skin uses to communicate, repair, and renew. As we age, these signals weaken — and so does the skin's ability to respond to them. Peptide therapy restores that communication, instructing your skin to produce collagen, retain moisture, and behave the way younger skin does.",
    bullets: [
      "Collagen and elastin production",
      "Skin hydration and barrier restoration",
      "Reduction of fine lines and surface aging",
      "Brightening and tone correction",
      "Long-term skin quality and resilience",
    ],
    footnote:
      "Clinical-grade compounds prescribed and administered by our medical team.",
    cta: "Explore Your Peptide Protocol",
    image: "/images/aesthetics/treatment-3.jpeg",
    imageAlt: "Blue serum vial on marble — peptide protocol",
  },
];

const whyPoints = [
  "Every aesthetic protocol is designed and overseen by our medical team — not aestheticians, not sales staff",
  "We use only clinical-grade, rigorously sourced compounds and biologics",
  "Treatments available across Salt Lake City and New York City locations",
  "Regenerative approach means results that compound — not treatments you repeat endlessly just to maintain a baseline",
  "Concierge-level care from first consultation through every follow-up",
];

const testimonials = [
  {
    quote:
      "I've done everything — fillers, lasers, the works. Nothing has come close to what I experienced at Regen Health. My skin looks the way it did ten years ago, and it keeps getting better.",
    location: "New York City",
    prompt:
      "Warm black-and-white portrait of a confident woman in her 50s, soft studio light, timeless elegance, square crop",
  },
  {
    quote:
      "The stem cell treatment was unlike anything I'd tried before. Three months in and people keep asking what I'm doing differently. I tell them — everything.",
    location: "Salt Lake City",
    prompt:
      "Natural-light headshot of a woman smiling softly outdoors, muted background, editorial portrait, square crop",
  },
  {
    quote:
      "I was skeptical about peptides until I saw the results. My skin is firmer, clearer, and more hydrated than it's been in years. It actually feels healthy.",
    location: "New York City",
    prompt:
      "Close-up portrait of a woman with radiant skin, gentle side lighting, cream backdrop, editorial minimalism, square crop",
  },
];

const faqs = [
  {
    q: "Are these treatments safe?",
    a: "All Regen Health aesthetic protocols are physician-designed and administered under medical supervision. Stem cell therapy, PRP, and peptide treatments have well-established safety profiles when conducted in a clinical setting with properly sourced compounds — which is the only standard we operate to.",
  },
  {
    q: "How soon will I see results?",
    a: "PRP patients often notice improved luminosity and texture within 2–4 weeks. Peptide protocols show progressive results over 4–8 weeks. Stem cell therapy produces results that deepen over 3–6 months as your biology responds — the most dramatic outcomes typically emerge at the 90-day mark.",
  },
  {
    q: "Can these treatments be combined?",
    a: "Yes — and they are most powerful when combined. Our physicians frequently design layered protocols that use stem cell therapy, PRP, and peptides in sequence for compounding regenerative results.",
  },
  {
    q: "Do I need to visit in person?",
    a: "An initial consultation can be conducted virtually. Treatment requires an in-person visit at our Salt Lake City or New York City location.",
  },
  {
    q: "How do I get started?",
    a: "Request your custom treatment plan using the button below. Our medical team will review your goals and reach out to schedule your consultation.",
  },
];

export default function AestheticsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-stone-50 pt-28 pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Aesthetic Treatments
                </span>
                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Where regenerative science meets{" "}
                  <span className="text-blue-900">timeless beauty.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:leading-[1.6]">
                  The most advanced aesthetic medicine today doesn&apos;t just
                  treat the surface — it works at the cellular level, restoring
                  your skin&apos;s ability to renew itself from within. Our
                  protocols are built on the same regenerative science used in
                  elite longevity and performance medicine. The result is skin
                  that doesn&apos;t just look younger — it genuinely is.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                  >
                    Request Your Custom Plan
                  </Link>
                  <Link
                    href="#treatments"
                    className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
                  >
                    Explore Treatments
                  </Link>
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/aesthetics/hero.jpeg"
                    alt="Woman with radiant, luminous skin"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* The Regen Aesthetics Difference */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/aesthetics/difference.jpeg"
                    alt="Collagen fibers — regenerative biology visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  The Difference
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  The Regen Aesthetics Difference
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Most aesthetic clinics offer the same menu of injectables you
                  can find anywhere. We go further.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Our protocols begin with regenerative biology — the science
                  of how your cells communicate, repair, and rebuild. We pair
                  that foundation with the most advanced aesthetic treatments
                  available, creating outcomes that conventional med-spas simply
                  cannot replicate.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-900 sm:text-base">
                  Every patient receives a comprehensive aesthetic assessment
                  before any treatment is recommended. Your skin, your biology,
                  your goals — your plan.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Our Treatments
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Three Protocols. Compounding Results.
              </h2>
            </FadeUp>

            <div className="mt-16 space-y-24">
              {treatments.map((t, i) => (
                <div
                  key={t.title}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <FadeIn>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                      <Image
                        src={t.image}
                        alt={t.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>

                  <FadeUp>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      {t.tag}
                    </span>
                    <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {t.title}
                    </h3>
                    <p className="mt-4 text-base font-medium italic text-blue-900 sm:text-lg">
                      {t.tagline}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                      {t.body}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {t.footnote}
                    </p>
                    {t.location && (
                      <p className="mt-2 text-xs italic text-gray-500">
                        {t.location}
                      </p>
                    )}
                    <Link
                      href={BOOKING_URL}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blue-900 transition-all hover:bg-blue-900 hover:text-white"
                    >
                      {t.cta}
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Regen Health */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Why Regen Health
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Physician-led. Evidence-based. Results-obsessed.
                </h2>
              </FadeUp>

              <StaggerContainer className="space-y-4">
                {whyPoints.map((p, i) => (
                  <StaggerItem key={p}>
                    <div className="flex gap-4 rounded-2xl border border-gray-200 bg-stone-50 p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/40">
                      <span className="shrink-0 font-mono text-xs font-semibold tabular-nums text-blue-900/60">
                        0{i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-gray-800 sm:text-base">
                        {p}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Patient Experiences
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Patients Say
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <StaggerItem key={i}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg">
                    <div>
                      <svg
                        className="h-7 w-7 text-blue-200"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179Z" />
                      </svg>
                      <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <LetterAvatar letter={t.location} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Patient
                        </p>
                        <p className="text-xs text-gray-500">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Your Skin Reimagined CTA */}
        <section className="bg-blue-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  Your Skin. Reimagined.
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Not chasing youth. Restoring what is genuinely yours.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-200/70 sm:text-lg">
                  The vitality, clarity, and confidence that come from skin
                  that is functioning the way it was designed to. If you are
                  ready to experience regenerative aesthetics at the highest
                  level, we are ready to build your plan.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Request Your Custom Plan
                  </Link>
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full border border-white/25 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/5"
                  >
                    Virtual Consultation
                  </Link>
                </div>
                <p className="mt-6 text-xs italic text-blue-200/60">
                  Consultations available in Salt Lake City and New York City.
                  Virtual consultations also available.
                </p>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/aesthetics/skin-reimagined.jpeg"
                    alt="Luminous skin — regenerative aesthetics"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                FAQ
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </FadeUp>

            <div className="mt-12 divide-y divide-gray-200 border-t border-b border-gray-200">
              {faqs.map((f) => (
                <FadeUp key={f.q}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <h3 className="font-heading text-base font-semibold text-gray-900 sm:text-lg">
                        {f.q}
                      </h3>
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all group-open:rotate-45 group-open:border-blue-900 group-open:bg-blue-900 group-open:text-white">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {f.a}
                    </p>
                  </details>
                </FadeUp>
              ))}
            </div>

            <FadeUp className="mt-12 text-center">
              <Link
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
              >
                Request Your Custom Treatment Plan
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
