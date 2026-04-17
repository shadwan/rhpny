import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";

const siteUrl = "https://rhpny.com";

export const metadata: Metadata = {
  title: "Precision Hair Restoration for Men and Women",
  description:
    "Physician-led regenerative hair restoration in NYC. Personalized biologic-driven protocols for thinning hair, receding hairlines, and hair loss in men and women. No surgery. Virtual consultations available.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/precision-hair-restoration-for-men-and-women`,
    siteName: "Regen Health Physicians",
    title:
      "Precision Hair Restoration for Men and Women | Regen Health Physicians",
    description:
      "Physician-led regenerative hair restoration in NYC. Personalized biologic-driven protocols for thinning hair, receding hairlines, and hair loss in men and women.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Precision Hair Restoration for Men and Women | Regen Health Physicians",
    description:
      "Physician-led regenerative hair restoration in NYC. Personalized biologic-driven protocols for thinning hair, receding hairlines, and hair loss.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/precision-hair-restoration-for-men-and-women`,
  },
};

const candidateCards = [
  {
    title: "Early thinning or widening part",
    description:
      "Hair density begins to decrease, making the part line appear wider than usual.",
  },
  {
    title: "Receding hairline",
    description:
      "Gradual hair loss around the temples or forehead causing the hairline to move backward.",
  },
  {
    title: "Crown thinning",
    description:
      "Noticeable reduction in hair density at the top or back of the scalp.",
  },
  {
    title: "Postpartum shedding",
    description:
      "Temporary hair loss experienced after pregnancy due to hormonal changes.",
  },
  {
    title: "Stress-related hair loss",
    description:
      "Hair shedding triggered by physical or emotional stress affecting the hair growth cycle.",
  },
  {
    title: "Diffuse thinning",
    description:
      "Overall reduction in hair volume across the scalp rather than in one specific area.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Private Consultation",
    description:
      "Comprehensive evaluation of scalp condition, hair history, and contributing biological factors.",
  },
  {
    num: "02",
    title: "Personalized Plan",
    description:
      "A regenerative protocol designed around your specific pattern, goals, and physiology.",
  },
  {
    num: "03",
    title: "Precision Treatment",
    description: "Physician-led application using advanced techniques.",
  },
  {
    num: "04",
    title: "Ongoing Monitoring",
    description:
      "Follow-up and adjustments to support long-term scalp health and maintenance.",
  },
];

export default function HairRestorationPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-stone-50 pt-28 pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Hair Restoration
                </span>
                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Precision Hair Restoration for{" "}
                  <span className="text-blue-900">Men and Women</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl lg:leading-[1.6]">
                  Physician-led regenerative treatments designed to support
                  follicle vitality and natural regrowth without surgery and
                  without assembly-line medicine. Personalized protocols.
                  Biologic-driven care. NYC-based with virtual consultations
                  available worldwide.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                  >
                    Book a Hair Consultation
                  </Link>
                  <Link
                    href="#candidate"
                    className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
                  >
                    See If You&apos;re a Candidate
                  </Link>
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/services/hair-restoration-hero.jpeg"
                    alt="Hair restoration treatment"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Why Section — image + text split ─────────────────────── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hair-restoration/cellular.png"
                    alt="Woman experiencing hair loss frustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Why It Matters
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Hair Loss Is Personal.{" "}
                  <span className="text-gray-400">
                    Your Treatment Should Be Too.
                  </span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Hair thinning and loss can impact confidence, identity, and
                  how you show up in the world. Most clinics offer standardized
                  injection sessions or transplant packages. We approach hair
                  restoration differently.
                </p>
                <p className="mt-4 text-base font-medium text-gray-900 sm:text-lg">
                  Because regrowth depends on biology — not just procedures.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ─── Physician-Led — text + consultation image ────────────── */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Physician-Led Care
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Physician-Led Regenerative Hair Restoration
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Hair restoration at our clinic is not delegated or templated.
                  Led by Dr. Ajit Dhaliwal, our approach integrates regenerative
                  medicine principles to support follicular signaling, tissue
                  quality, and long-term scalp health.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-900">
                  No technician-run assembly lines. No high-pressure packages.
                  Every plan is individualized.
                </p>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hair-restoration/patient-male.jpg"
                    alt="Dr. Dhaliwal consulting with a patient"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── We Evaluate + Treatment Plans — with scalp/injection images */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* We Evaluate */}
              <FadeUp>
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
                  <div className="relative aspect-[3/1.2] overflow-hidden">
                    <Image
                      src="/images/hair-restoration/scalp-closeup.png"
                      alt="Scalp and follicle health assessment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      We evaluate:
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {[
                        "Pattern and stage of hair loss",
                        "Scalp health and inflammation",
                        "Hormonal and systemic contributors",
                        "Stress, recovery, and lifestyle factors",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>

              {/* Treatment Plans */}
              <FadeUp>
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
                  <div className="relative aspect-[3/1.2] overflow-hidden">
                    <Image
                      src="/images/hair-restoration/results-2.png"
                      alt="Precision scalp injection treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      Treatment plans may include:
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {[
                        "Regenerative biologic therapies",
                        "Precision scalp injections",
                        "Personalized recovery support",
                        "Integration with longevity or hormone optimization when appropriate",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ─── Before/After Results ─────────────────────────────────── */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Real Results
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Before &amp; After
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
              <StaggerItem>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hair-restoration/consultation.jpeg"
                    alt="Hair restoration before and after — patient 1"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hair-restoration/before-after.jpg"
                    alt="Hair restoration before and after — patient 2"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ─── Candidate Section ────────────────────────────────────── */}
        <section id="candidate" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Is This Right for You?
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                You May Be a Candidate If You&apos;re Experiencing:
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {candidateCards.map((card) => (
                <StaggerItem key={card.title}>
                  <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                    <div className="mb-3 h-1 w-8 rounded-full bg-blue-900 transition-all duration-300 group-hover:w-12" />
                    <h3 className="font-heading text-base font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {card.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp className="mt-10 text-center">
              <p className="text-sm font-medium text-gray-600">
                Early intervention supports better outcomes. A private
                consultation determines suitability.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ─── Cellular Level — full-width image + overlaid text ────── */}
        <section className="relative bg-[#0a1628] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  The Science
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Supporting Follicle Health at the Cellular Level
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  Hair follicles rely on healthy cellular signaling and tissue
                  support. Our focus is restoring the biological environment that
                  supports growth — not masking loss.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Follicle vitality",
                    "Scalp microenvironment",
                    "Tissue quality",
                    "Circulatory support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <span className="text-sm font-medium text-blue-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hair-restoration/scalp-closeup.png"
                    alt="Cellular-level follicle health visualization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Comparison: Transplant vs. Regenerative ──────────────── */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Understanding Your Options
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Surgical Transplants vs. Regenerative Hair Restoration
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                Hair transplantation and regenerative therapies serve different
                purposes. Understanding the difference helps determine which
                approach — or combination — may be appropriate.
              </p>
            </FadeUp>

            <FadeUp className="mt-14">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
                  {/* Regenerative */}
                  <div className="relative bg-white p-8 sm:p-10">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      Regen Health
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-gray-900">
                      Regenerative Hair Restoration
                    </h3>
                    <p className="mt-3 text-xs font-medium text-gray-500">
                      Best suited for: Early to moderate thinning where
                      follicles remain present but weakened.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {[
                        "Aim to biologically stimulate dormant or weakened follicles",
                        "Support the follicular microenvironment by improving circulation and cellular signaling",
                        "May reduce inflammation and support the active growth phase",
                        "Are non-surgical and involve minimal downtime",
                        "Do not move or add follicles — they work to revive viable ones",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </span>
                          <span className="text-sm leading-relaxed text-gray-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Transplant */}
                  <div className="bg-gray-50/50 p-8 sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Traditional
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-gray-400">
                      Hair Transplant (FUE / FUT)
                    </h3>
                    <p className="mt-3 text-xs font-medium text-gray-400">
                      Best suited for: Patients with stable hair loss patterns
                      and strong donor density.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {[
                        "Physically relocates existing hair follicles from a donor area to thinning regions",
                        "Redistributes the hair you already have — no new follicles are created",
                        "Can produce permanent results in transplanted areas",
                        "Is limited by donor hair supply",
                        "Does not address the biological causes of ongoing hair loss",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                          <span className="text-sm leading-relaxed text-gray-400 line-through decoration-gray-300/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ─── Process Steps — with treatment image ─────────────────── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <FadeUp>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Our Approach
                  </span>
                  <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How It Works
                  </h2>
                </FadeUp>

                <div className="mt-10 space-y-8">
                  {processSteps.map((step, i) => (
                    <FadeUp key={step.num} delay={i * 0.1}>
                      <div className="flex gap-5">
                        <span className="shrink-0 font-mono text-3xl font-bold text-blue-900/20">
                          {step.num}
                        </span>
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-gray-500">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>

              <FadeIn>
                <div className="sticky top-28 space-y-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src="/images/hair-restoration/hero-banner.png"
                      alt="Physician performing scalp treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src="/images/hair-restoration/stem-cell.jpg"
                      alt="Precision scalp injection close-up"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Men & Women ──────────────────────────────────────────── */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                For Everyone
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hair Restoration for Men &amp; Women
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
              <StaggerItem>
                <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/hair-restoration/treatment-process.jpeg"
                      alt="Male hair restoration patient"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      For Men
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      Address receding hairlines and crown thinning with
                      regenerative, non-surgical options tailored to male
                      pattern loss.
                    </p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/hair-restoration/patient-female.png"
                      alt="Female hair restoration patient"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      For Women
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      Support diffuse thinning, part widening, and
                      hormone-related changes with personalized, biologically
                      guided care.
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ─── Testimonials ─────────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Patient Experiences
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hear from Our Patients
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "I had been noticing thinning for years. The consultation here felt different \u2014 detailed, thoughtful, and medically grounded. The personalized plan gave me confidence moving forward.",
                  name: "Robert M.",
                  image: "/images/hair-restoration/profile-1.png",
                },
                {
                  quote:
                    "The approach was comprehensive. I appreciated that they evaluated more than just my scalp.",
                  name: "Sarah J.",
                  image: "/images/hair-restoration/profile-2.png",
                },
                {
                  quote:
                    "The treatment plan felt responsible and professionally guided. It wasn\u2019t about quick fixes; it was about a long-term strategy.",
                  name: "Elena S.",
                  image: "/images/hair-restoration/profile-3.png",
                },
              ].map((t) => (
                <StaggerItem key={t.name}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50/50 p-8">
                    <div>
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── Final CTA ────────────────────────────────────────────── */}
        <section className="bg-blue-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  Get Started
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Start With a Regenerative Consultation
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-200/70 sm:text-lg">
                  If hair thinning is affecting your confidence, the first step
                  is a private evaluation. Every treatment plan begins with
                  determining candidacy and appropriate options.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Book Regenerative Consultation
                  </Link>
                  <Link
                    href="#candidate"
                    className="rounded-full border border-white/25 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/5"
                  >
                    See If You Qualify
                  </Link>
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hair-restoration/woman-portrait.jpeg"
                    alt="DNA helix visualization representing regenerative science"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
