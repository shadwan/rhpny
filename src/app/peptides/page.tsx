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
  title: "Peptide Therapy | Precision Protocols for Recovery, Longevity & Performance",
  description:
    "Doctor-prescribed peptide protocols at Regen Health. Clinical-grade peptides for recovery, longevity, metabolic health, cognition, hair, and aesthetics. NYC & Salt Lake City.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/peptides`,
    siteName: "Regen Health Physicians",
    title: "Peptide Therapy | Regen Health Physicians",
    description:
      "Clinical-grade peptide protocols designed and overseen by doctors. Recovery, longevity, performance.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Therapy | Regen Health Physicians",
    description:
      "Clinical-grade peptide protocols designed and overseen by doctors.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/peptides`,
  },
};

const protocols = [
  {
    tag: "Protocol 01",
    title: "Recovery & Tissue Repair",
    tagline: "Healing signals, amplified.",
    body: "Recovery peptides instruct the body to accelerate tissue repair, reduce inflammation, and restore connective integrity. Used by elite athletes and post-surgical patients to compress recovery timelines and rebuild stronger.",
    bullets: [
      "Soft-tissue and tendon repair support",
      "Reduced post-injury and post-surgical inflammation",
      "Joint and ligament resilience",
      "Gut lining and mucosal healing",
      "Nerve regeneration support",
    ],
    footnote:
      "Often layered with PRP or stem cell protocols for compounding regenerative effect.",
    cta: "Build Your Recovery Protocol",
    image: "/images/peptides/recovery.jpeg",
    imageAlt: "Runner mid-stride in golden light — recovery and tissue repair",
  },
  {
    tag: "Protocol 02",
    title: "Longevity & Cognition",
    tagline: "Slow the clock at the cellular level.",
    body: "Longevity peptides target the upstream drivers of biological aging — mitochondrial function, autophagy, growth hormone signaling, and neuroplasticity. The result is sharper cognition, deeper sleep, and measurably better biomarkers over time.",
    bullets: [
      "Mitochondrial energy production",
      "Cognitive performance and focus",
      "Deeper sleep and recovery cycles",
      "Cellular repair and autophagy",
      "Neuroprotective signaling",
    ],
    footnote:
      "Protocols are dosed and titrated to your bloodwork, biomarkers, and goals.",
    cta: "Explore Longevity Peptides",
    image: "/images/peptides/longevity.jpeg",
    imageAlt: "Luminous peptide vial on dark slate — longevity and cognition",
  },
  {
    tag: "Protocol 03",
    title: "Metabolic & Body Composition",
    tagline: "Rewire how your body burns and builds.",
    body: "Metabolic peptides — including growth hormone secretagogues and GLP-1 class compounds — restore the hormonal signals that govern fat oxidation, lean muscle, insulin sensitivity, and recovery. Built around your labs, not a one-size-fits-all menu.",
    bullets: [
      "Visceral fat reduction",
      "Lean muscle preservation and growth",
      "Insulin sensitivity and glycemic control",
      "Sleep architecture and recovery",
      "Energy and endurance",
    ],
    footnote:
      "All metabolic protocols include lab tracking, periodic re-evaluation, and concierge clinical support.",
    cta: "Build Your Metabolic Protocol",
    image: "/images/peptides/metabolic.jpeg",
    imageAlt: "Fresh whole foods and training gear — metabolic and body composition",
  },
  {
    tag: "Protocol 04",
    title: "Skin, Hair & Aesthetic Peptides",
    tagline: "Programmable signals for visible renewal.",
    body: "Aesthetic peptides drive collagen synthesis, follicle activation, and barrier restoration. They work as standalone protocols or as precision amplifiers alongside our PRP and stem cell aesthetic offerings.",
    bullets: [
      "Collagen and elastin production",
      "Follicle stimulation for hair density",
      "Skin hydration and barrier repair",
      "Brightening and tone correction",
      "Long-term skin quality and resilience",
    ],
    footnote:
      "Frequently paired with our regenerative aesthetic treatments for compounding results.",
    cta: "Pair With Aesthetic Care",
    image: "/images/peptides/skin-hair.jpeg",
    imageAlt: "Woman with luminous skin — skin, hair, and aesthetic peptides",
  },
  {
    tag: "Protocol 05",
    title: "Sexual & Hormonal Health",
    tagline: "Restore the signals behind vitality.",
    body: "Targeted peptides support libido, hormonal balance, and sexual function for both men and women. Designed alongside hormone optimization where indicated, and always under doctor supervision.",
    bullets: [
      "Libido and arousal support",
      "Hormonal axis modulation",
      "Energy and mood",
      "Sleep and recovery",
      "Adjunct to hormone optimization where indicated",
    ],
    footnote:
      "Care is integrated with our concierge longevity and hormone programs.",
    cta: "Discuss Hormonal Peptides Privately",
    image: "/images/peptides/sexual-hormonal.jpeg",
    imageAlt: "Couple in warm light — sexual and hormonal health",
  },
];

const whyPoints = [
  "Every peptide protocol is doctor-designed and overseen — not sold by a clinic counter",
  "We use only clinical-grade, properly sourced compounds from licensed compounding pharmacies",
  "Protocols are titrated to your bloodwork, biomarkers, and goals — not generic dosing",
  "Available across our Salt Lake City and New York City locations, with virtual follow-ups",
  "Concierge-level support from first consultation through every cycle and re-evaluation",
];

const testimonials = [
  {
    quote:
      "I was skeptical until I ran my own labs. Six weeks in, the markers moved. My recovery between training sessions is the best it has been in a decade.",
    location: "New York City",
    prompt:
      "Black-and-white portrait of a fit man in his 40s, soft studio light, athletic editorial portrait, square crop",
  },
  {
    quote:
      "Sleep, focus, mood — all shifted within the first month. The team explained the why behind every compound. It felt like real medicine, not a wellness pitch.",
    location: "Salt Lake City",
    prompt:
      "Natural-light portrait of a woman in her late 30s smiling subtly, neutral background, square editorial crop",
  },
  {
    quote:
      "I came in for recovery support after surgery. I left with a longevity plan I actually trust. Most thoughtful medical experience I've had.",
    location: "New York City",
    prompt:
      "Warm natural-light portrait of a man in his 50s, calm expression, muted backdrop, editorial square crop",
  },
];

const faqs = [
  {
    q: "Are peptides safe?",
    a: "All Regen Health peptide protocols are doctor-designed, prescribed, and monitored. We use only clinical-grade compounds from licensed compounding pharmacies and titrate dosing to your individual biology and labs.",
  },
  {
    q: "How soon will I see results?",
    a: "Recovery and sleep effects are often felt within 2–4 weeks. Body-composition, metabolic, and longevity markers shift progressively over 8–16 weeks, with compounding benefit across cycles when paired with lifestyle and lab tracking.",
  },
  {
    q: "Are peptides legal?",
    a: "The peptides we prescribe are dispensed by licensed U.S. compounding pharmacies under doctor prescription. Regulatory frameworks evolve — your doctor will discuss current status, sourcing, and what is appropriate for your situation.",
  },
  {
    q: "Can peptides be combined with stem cells, PRP, or hormone therapy?",
    a: "Yes. Our doctors frequently design layered protocols that combine peptides with regenerative therapies and hormone optimization for compounding effect. Combinations are always evaluated for safety and synergy.",
  },
  {
    q: "Do I need to visit in person?",
    a: "Initial consultations and most follow-ups can be conducted virtually. Some protocols, labs, or in-office treatments require an in-person visit at our Salt Lake City or New York City location.",
  },
  {
    q: "How do I get started?",
    a: "Request your custom plan using the button below. Our medical team will review your goals, order baseline labs where appropriate, and design a protocol built specifically for you.",
  },
];

export default function PeptidesPage() {
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
                  Peptide Therapy
                </span>
                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Precision signals.{" "}
                  <span className="text-blue-900">Programmable biology.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:leading-[1.6]">
                  Peptides are the messengers your body uses to repair, recover,
                  and regenerate. Our doctor-formulated protocols restore
                  those signals — instructing your biology to perform the way
                  it was designed to. Clinical-grade compounds, individualized
                  dosing, concierge-level oversight.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                  >
                    Build Your Peptide Protocol
                  </Link>
                  <Link
                    href="#protocols"
                    className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
                  >
                    Explore Protocols
                  </Link>
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/peptides/hero.jpeg"
                    alt="Clinical peptide vial on stone surface"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* The Difference */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/peptides/difference.jpeg"
                    alt="Peptide molecular chains visualization"
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
                  Not a menu. A protocol.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Most clinics sell peptides off a shelf. We start with your
                  bloodwork, your biology, and your goals — then design a
                  protocol around them.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Every compound is doctor-prescribed, sourced from licensed
                  compounding pharmacies, and titrated to a target. Cycles are
                  monitored, re-evaluated, and adjusted. The standard is
                  outcomes — not throughput.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-900 sm:text-base">
                  Your biology, your biomarkers, your protocol.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Protocols */}
        <section id="protocols" className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Our Protocols
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Five Pillars. Compounding Results.
              </h2>
            </FadeUp>

            <div className="mt-16 space-y-24">
              {protocols.map((p, i) => (
                <div
                  key={p.title}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <FadeIn>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>

                  <FadeUp>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      {p.tag}
                    </span>
                    <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-base font-medium italic text-blue-900 sm:text-lg">
                      {p.tagline}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                      {p.body}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {p.footnote}
                    </p>
                    <Link
                      href={BOOKING_URL}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blue-900 transition-all hover:bg-blue-900 hover:text-white"
                    >
                      {p.cta}
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
                  Doctor-led. Lab-driven. Built around you.
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

        {/* Final CTA */}
        <section className="bg-blue-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  Build Your Protocol
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Programmed signals. Measurable change.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-200/70 sm:text-lg">
                  If you are ready for a peptide protocol designed around your
                  biology — and overseen by doctors who track results — we
                  are ready to build it.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Build Your Peptide Protocol
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
                    src="/images/peptides/cta.jpeg"
                    alt="Peptide vial with halo of light"
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
                Build Your Peptide Protocol
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
