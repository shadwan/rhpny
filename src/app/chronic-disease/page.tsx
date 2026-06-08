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
  title: "Chronic Disease Management | Regenerative & Functional Medicine",
  description:
    "Physician-led care for autoimmune, metabolic, and chronic inflammatory conditions. Regenerative therapies, functional medicine, and concierge oversight in NYC and Salt Lake City.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/chronic-disease`,
    siteName: "Regen Health Physicians",
    title: "Chronic Disease Management | Regen Health Physicians",
    description:
      "Root-cause regenerative care for autoimmune, metabolic, and chronic inflammatory conditions.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronic Disease Management | Regen Health Physicians",
    description:
      "Root-cause regenerative care for chronic conditions.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/chronic-disease`,
  },
};

const conditions = [
  {
    tag: "Focus 01",
    title: "Autoimmune Conditions",
    tagline: "Calm the system. Restore the signal.",
    body: "Autoimmune disease is a signal problem — the immune system attacking the body's own tissue. Our protocols combine regenerative therapies, peptides, and functional medicine to reduce inflammation, modulate immune signaling, and support tissue repair where damage has already occurred.",
    bullets: [
      "Lupus and rheumatoid arthritis support",
      "Crohn's, ulcerative colitis, and gut-driven autoimmunity",
      "Hashimoto's and thyroid-related autoimmunity",
      "Psoriasis and inflammatory skin conditions",
      "Adjunct care alongside your rheumatologist or specialist",
    ],
    footnote:
      "We work in coordination with your specialists — not in place of them. Our role is the regenerative and functional layer most clinics do not provide.",
    cta: "Discuss an Autoimmune Plan",
    image: "/images/chronic-disease/autoimmune.jpeg",
    imageAlt: "Clinical chart, eyeglasses, and glass of water — autoimmune care",
  },
  {
    tag: "Focus 02",
    title: "Chronic Fatigue & Long COVID",
    tagline: "Energy at the cellular level.",
    body: "Chronic fatigue and post-viral syndromes share a common root: damaged mitochondria, persistent inflammation, and disrupted recovery signaling. Our protocols target mitochondrial function, immune regulation, and nervous system recovery — using peptides, IV therapies, and regenerative tools where indicated.",
    bullets: [
      "Mitochondrial energy support",
      "Post-viral and long COVID protocols",
      "Sleep and nervous system regulation",
      "Cognitive fog and brain energy",
      "Phased return to activity and exercise tolerance",
    ],
    footnote:
      "Recovery from chronic fatigue is non-linear. Our concierge model means continuous adjustment — not a one-visit fix.",
    cta: "Build a Recovery Plan",
    image: "/images/chronic-disease/fatigue.jpeg",
    imageAlt: "Steaming mug in soft morning light — chronic fatigue and long COVID",
  },
  {
    tag: "Focus 03",
    title: "Metabolic Disease & Insulin Resistance",
    tagline: "Reverse the trajectory, not just the number.",
    body: "Metabolic disease is the upstream driver behind much of modern chronic illness — cardiovascular disease, dementia, fatty liver, and accelerated aging. We treat the biology, not just the lab value, with integrated care across peptides, GLP-1 protocols, lifestyle medicine, and continuous monitoring.",
    bullets: [
      "Pre-diabetes and type 2 diabetes management",
      "Insulin resistance reversal protocols",
      "Visceral fat and body composition",
      "Cardiometabolic risk reduction",
      "Continuous glucose monitoring and lab tracking",
    ],
    footnote:
      "Outcomes are tracked across labs, body composition, and CGM data — adjusted continuously across the program.",
    cta: "Build a Metabolic Plan",
    image: "/images/chronic-disease/metabolic.jpeg",
    imageAlt: "Whole foods overhead — metabolic disease and insulin resistance",
  },
  {
    tag: "Focus 04",
    title: "Chronic Inflammation & Pain",
    tagline: "Treat the signal driving the pain.",
    body: "Chronic pain that persists past tissue healing is an inflammatory and nervous-system problem. We address it where it lives — combining regenerative biologics, peptide protocols, and targeted lifestyle medicine to reduce systemic inflammation and restore function.",
    bullets: [
      "Persistent musculoskeletal pain",
      "Post-injury and post-surgical pain syndromes",
      "Inflammatory pain from autoimmune disease",
      "Nerve pain and neuropathy support",
      "Coordination with our orthopedic and regenerative protocols",
    ],
    footnote:
      "When indicated, paired with our regenerative orthopedic and PRP protocols for tissue-level care.",
    cta: "Discuss Pain & Inflammation",
    image: "/images/chronic-disease/pain.jpeg",
    imageAlt: "Hands wrapped around warm cup — chronic inflammation and pain",
  },
];

const approach = [
  {
    title: "Comprehensive Assessment",
    body: "Detailed history, advanced labs, biomarkers, and imaging where indicated. We map the biology before we recommend the protocol.",
  },
  {
    title: "Individualized Protocol",
    body: "A plan built around your labs, your timeline, and your other care. No template medicine.",
  },
  {
    title: "Regenerative Layer",
    body: "Peptides, biologic therapies, IV protocols, and stem cell or PRP where indicated — integrated into the broader plan.",
  },
  {
    title: "Continuous Adjustment",
    body: "Concierge follow-up, periodic re-evaluation, and ongoing protocol refinement as your biology responds.",
  },
];

const whyPoints = [
  "Physician-led care that integrates with — not replaces — your existing specialists",
  "Access to regenerative tools (peptides, biologics, PRP, stem cell) most chronic-disease clinics do not offer",
  "Lab-driven protocols with continuous tracking and adjustment",
  "Concierge access for the long, non-linear arc of chronic illness",
  "Two clinical homes — Salt Lake City and New York City — with virtual continuity in between",
];

const testimonials = [
  {
    quote:
      "I had been managing Hashimoto's for years and accepted a baseline of fatigue. Six months into the protocol, my labs are the best they have been and I have my energy back.",
    location: "Salt Lake City",
    prompt:
      "Natural-light portrait of a woman in her 40s with calm confident expression, neutral backdrop, square editorial crop",
  },
  {
    quote:
      "Long COVID took eighteen months from me. The team built a plan that finally moved the needle — sleep, energy, cognition. The continuity of care made the difference.",
    location: "New York City",
    prompt:
      "Black-and-white portrait of a man in his 40s, soft natural light, calm and grounded, editorial square crop",
  },
  {
    quote:
      "My A1C, weight, and inflammatory markers all moved within a few months. More importantly, I understood what was happening and why. That changed everything.",
    location: "New York City",
    prompt:
      "Warm portrait of a woman in her 50s smiling subtly, soft light, muted background, editorial square crop",
  },
];

const faqs = [
  {
    q: "Will you replace my current specialist?",
    a: "No. We integrate with your existing care team — rheumatologist, endocrinologist, neurologist, and others. Our role is the regenerative and functional layer that complements their work.",
  },
  {
    q: "How is this different from a typical functional medicine clinic?",
    a: "We are physician-led and combine functional medicine with access to regenerative therapies — peptides, PRP, stem cell protocols, and biologics — alongside continuous lab tracking and concierge oversight. The depth of clinical access is the difference.",
  },
  {
    q: "How long do programs run?",
    a: "Chronic disease care is a long arc. Initial protocols typically run 3–6 months with periodic re-evaluation; many patients continue in maintenance care for years. Concierge access means ongoing adjustment, not episodic visits.",
  },
  {
    q: "Are these therapies safe alongside my current medications?",
    a: "All protocols are designed by physicians with full review of your current medications, conditions, and care plan. We coordinate with your specialists and adjust accordingly.",
  },
  {
    q: "Do I need to visit in person?",
    a: "Initial consultations and most follow-ups can be conducted virtually. Some treatments, labs, and assessments require an in-person visit at our Salt Lake City or New York City location.",
  },
  {
    q: "How do I get started?",
    a: "Request a private consultation using the button below. Our medical team will review your history, order baseline labs where appropriate, and outline a plan built around your specific condition and goals.",
  },
];

export default function ChronicDiseasePage() {
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
                  Chronic Disease Management
                </span>
                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Root-cause medicine for{" "}
                  <span className="text-blue-900">chronic conditions.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:leading-[1.6]">
                  Most chronic disease care manages symptoms. We work upstream
                  — combining regenerative therapies, peptides, and functional
                  medicine to address the inflammation, signaling, and cellular
                  dysfunction that drive autoimmune, metabolic, and post-viral
                  conditions.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                  >
                    Request a Private Consultation
                  </Link>
                  <Link
                    href="#conditions"
                    className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
                  >
                    Conditions We Treat
                  </Link>
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/chronic-disease/hero.jpeg"
                    alt="Physician in conversation with a patient"
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
                    src="/images/chronic-disease/difference.jpeg"
                    alt="Immune cells and signaling pathways visualization"
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
                  Beyond symptom management.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Chronic disease care is too often reactive — a prescription
                  for the latest flare, an adjustment when the labs drift. We
                  work upstream of the symptom, on the biology that drives it.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Our protocols pair regenerative biologics and peptides with
                  rigorous lab tracking, functional medicine, and continuous
                  physician oversight. The goal is durable change — not
                  endless management.
                </p>
                <p className="mt-4 text-sm font-medium text-gray-900 sm:text-base">
                  Your conditions, your biology, your protocol.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section id="conditions" className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Conditions We Treat
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Where Regenerative Care Changes the Trajectory.
              </h2>
            </FadeUp>

            <div className="mt-16 space-y-24">
              {conditions.map((c, i) => (
                <div
                  key={c.title}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <FadeIn>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>

                  <FadeUp>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      {c.tag}
                    </span>
                    <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-base font-medium italic text-blue-900 sm:text-lg">
                      {c.tagline}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                      {c.body}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {c.footnote}
                    </p>
                    <Link
                      href={BOOKING_URL}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blue-900 transition-all hover:bg-blue-900 hover:text-white"
                    >
                      {c.cta}
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

        {/* Our Approach */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Our Approach
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Four Phases. One Continuous Relationship.
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {approach.map((a, i) => (
                <StaggerItem key={a.title}>
                  <div className="h-full rounded-2xl border border-gray-200 bg-stone-50 p-6 transition-colors hover:border-blue-200 hover:bg-blue-50/40">
                    <span className="font-mono text-xs font-semibold tabular-nums text-blue-900/60">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-gray-900">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {a.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Regen Health */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Why Regen Health
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Physician-led. Integrative. Continuous.
                </h2>
              </FadeUp>

              <StaggerContainer className="space-y-4">
                {whyPoints.map((p, i) => (
                  <StaggerItem key={p}>
                    <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/40">
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
        <section className="bg-white py-20 sm:py-28">
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
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-stone-50 p-8 transition-shadow hover:shadow-lg">
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
                  Change the Trajectory
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  A different standard for chronic disease care.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-200/70 sm:text-lg">
                  If you are ready for an integrative, regenerative approach to
                  the condition you have been managing — designed by physicians
                  who track outcomes — we are ready to build your plan.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Request a Private Consultation
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
                    src="/images/chronic-disease/cta.jpeg"
                    alt="Patient chart and stethoscope still life"
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
                Request a Private Consultation
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
