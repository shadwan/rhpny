import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";

const siteUrl = "https://www.rhpny.com";

export const metadata: Metadata = {
  title: "Regenerative Medicine for Joint, Back and Shoulder Pain",
  description:
    "Doctor-led biologic therapies designed to support tissue repair, reduce inflammation, and improve function — without immediate surgery. Personalized regenerative care in New York City. Virtual consultations available.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/regenerative-medicine-for-joint-back-and-shoulder-pain`,
    siteName: "Regen Health Physicians",
    title:
      "Regenerative Medicine for Joint, Back and Shoulder Pain | Regen Health Physicians",
    description:
      "Doctor-led biologic therapies designed to support tissue repair, reduce inflammation, and improve function without immediate surgery.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Regenerative Medicine for Joint, Back and Shoulder Pain | Regen Health Physicians",
    description:
      "Doctor-led biologic therapies designed to support tissue repair, reduce inflammation, and improve function without immediate surgery.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/regenerative-medicine-for-joint-back-and-shoulder-pain`,
  },
};

const areas = [
  "Knee pain",
  "Rotator cuff issues",
  "Hip discomfort",
  "Lower back pain",
  "Degenerative joint changes",
  "Shoulder injuries",
  "Tendon and ligament strain",
  "Sports-related injuries",
];

const cellularMechanisms = [
  "Reduce localized inflammation",
  "Improve cellular signaling",
  "Support tissue integrity",
  "Enhance circulation to affected areas",
];

const therapyAttributes = [
  "Doctor-evaluated",
  "Individualized",
  "Non-surgical",
  "Structural tissue health",
];

const approachPoints = [
  "Evaluate thoroughly",
  "Recommend responsibly",
  "Refer when surgery is truly indicated",
];

const processSteps = [
  {
    num: "01",
    title: "Comprehensive Consultation",
    description:
      "Review of symptoms, history, imaging, and functional limitations.",
  },
  {
    num: "02",
    title: "Candidacy Assessment",
    description:
      "Evaluation of whether regenerative therapy is appropriate.",
  },
  {
    num: "03",
    title: "Personalized Treatment Plan",
    description:
      "Precision-guided therapy based on anatomy and condition.",
  },
  {
    num: "04",
    title: "Monitoring & Follow-Up",
    description:
      "Ongoing evaluation of function, mobility, and response.",
  },
];

const candidacyPoints = [
  "You have early to moderate joint degeneration",
  "You are seeking biologically guided treatment",
  "You are an active individual looking to preserve mobility",
  "You want to explore non-surgical options",
  "You are not ready for surgery",
];

const testimonials = [
  {
    headline: "A Transparent Alternative to Surgery",
    quote:
      "I was exploring surgery for my knee but wanted to see if there were alternatives. The evaluation here was thorough, honest, and helped me understand my biology better.",
    name: "Robert M.",
    context: "Knee Patient",
    image: "/images/regenerative-medicine/testim-1.png",
  },
  {
    headline: "Medically Grounded Care",
    quote:
      "The treatment plan felt responsible and professionally guided. It wasn’t about quick fixes; it was about a long-term strategy for my shoulder mobility.",
    name: "Elena S.",
    context: "Shoulder & Rotator Cuff",
    image: "/images/regenerative-medicine/testim-2.png",
  },
  {
    headline: "Regained My Active Lifestyle",
    quote:
      "After months of lower back discomfort, the doctor-led approach gave me a clear path forward. I felt like a candidate for a specific therapy, not just a number.",
    name: "Wedly",
    context: "Lumbar Spine Patient",
    image: "/images/regenerative-medicine/testim-3.png",
  },
];

export default function RegenerativeMedicinePage() {
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
                  Regenerative Medicine
                </span>
                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Regenerative Medicine for{" "}
                  <span className="text-blue-900">
                    Joint, Back and Shoulder Pain
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl lg:leading-[1.6]">
                  Doctor-led biologic therapies designed to support tissue
                  repair, reduce inflammation, and improve function without
                  immediate surgery. Personalized care in New York City.
                  Virtual consultations available for out-of-state and
                  international patients.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                  >
                    Book Regenerative Consultation
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
                    src="/images/regenerative-medicine/physician.jpg"
                    alt="Doctor evaluating joint function with patient"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Problem statement */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/regenerative-medicine/patient-1.jpg"
                    alt="Doctor treating lower back of patient"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Pain Changes Everything
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Pain Changes How You Live.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Joint and spine pain can limit movement, disrupt sleep, and
                  reduce quality of life. Many patients are told their only
                  options are:
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Anti-inflammatory medications",
                    "Cortisone injections",
                    "Physical therapy alone",
                    "Surgery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-gray-400" />
                      <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-medium text-gray-900 sm:text-base">
                  While sometimes necessary, these are not always the first or
                  only solution. Regenerative medicine offers a biologically
                  focused alternative for appropriate candidates.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Areas commonly addressed */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Areas Commonly Addressed
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We Work With Patients Experiencing:
              </h2>
            </FadeUp>

            <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
              <StaggerContainer className="grid gap-3 sm:grid-cols-2">
                {areas.map((area) => (
                  <StaggerItem key={area}>
                    <div className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all hover:border-blue-200 hover:shadow-md">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900 transition-colors group-hover:bg-blue-900 group-hover:text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {area}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeIn>
                <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl lg:w-80">
                  <Image
                    src="/images/regenerative-medicine/treatment-3.png"
                    alt="Common pain areas — knee, back, and shoulder"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* How regenerative medicine works */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  The Science
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  How Regenerative Medicine Works
                </h2>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Supporting Tissue Repair at the Cellular Level
                </p>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Regenerative medicine focuses on supporting the body&apos;s
                  natural repair mechanisms.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {cellularMechanisms.map((m) => (
                    <li
                      key={m}
                      className="rounded-xl border border-gray-200 bg-stone-50 px-4 py-3 text-sm font-medium text-gray-800"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-600 sm:text-base">
                  These approaches are designed to support function and
                  mobility — particularly in early to moderate degenerative
                  conditions.
                </p>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/regenerative-medicine/treatment-7.png"
                    alt="Knee joint cellular repair visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stem cell & biologic therapies */}
        <section className="relative overflow-hidden bg-[#0a1628] py-20 sm:py-28">
          <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-900/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/regenerative-medicine/treatment-4.png"
                    alt="Stem cell microscopy visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  Advanced Regenerative Therapies
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Stem Cell &amp; Biologic Therapies
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  In appropriate cases, stem cell–based and biologic
                  therapies may be integrated into a personalized treatment
                  plan. These therapies are applied with precision and are:
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {therapyAttributes.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <span className="text-sm font-medium text-blue-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/60">
                  They are not marketed as universal solutions and are not
                  appropriate for every condition. A consultation determines
                  candidacy.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Exploring non-surgical options */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Non-Surgical First
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Exploring Non-Surgical Options First
                </h2>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Removing or Delaying Surgery
                </p>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Many patients seek regenerative care to potentially remove or
                  delay the need for surgery. While surgery may be necessary in
                  advanced structural damage, early-stage degeneration or
                  injury may respond to biologically guided interventions. Our
                  approach is:
                </p>
                <ul className="mt-6 space-y-3">
                  {approachPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-gray-800 sm:text-base">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/regenerative-medicine/treatment-2.png"
                    alt="Knee joint recovery visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <FadeUp>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Our Process
                  </span>
                  <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our Approach
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
                      src="/images/regenerative-medicine/clinic.jpg"
                      alt="Dr. Dhaliwal in consultation with patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src="/images/regenerative-medicine/patient-2.jpg"
                      alt="Personalized treatment planning session"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Candidate section */}
        <section id="candidate" className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Who This Is For
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                You May Be a Candidate If:
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {candidacyPoints.map((point) => (
                <StaggerItem key={point}>
                  <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                    <div className="mb-3 h-1 w-8 rounded-full bg-blue-900 transition-all group-hover:w-12" />
                    <p className="text-sm font-medium leading-relaxed text-gray-800">
                      {point}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Doctor authority */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl lg:max-w-none">
                  <Image
                    src="/images/regenerative-medicine/dr-ajit.png"
                    alt="Dr. Ajit Dhaliwal, Founder of Regen Health Physicians"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Doctor Authority
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Doctor-Led Regenerative Care
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Care is led by Dr. Ajit Dhaliwal, with extensive experience
                  in regenerative approaches to joint, shoulder, and spinal
                  concerns.
                </p>
                <div className="mt-8 rounded-2xl border border-gray-200 bg-stone-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Our Lead
                  </p>
                  <p className="mt-2 font-heading text-lg font-semibold text-gray-900">
                    Dr. Ajit Dhaliwal
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Doctor-Led Clinical Vision
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Testimonials
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hear from Our Patients
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                How our patients are regaining mobility and exploring
                non-surgical alternatives.
              </p>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg">
                    <div>
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-3.5 w-3.5 fill-current"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-blue-900">
                        {t.headline}
                      </p>
                      <blockquote className="mt-3 text-sm leading-relaxed text-gray-700">
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
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-500">{t.context}</p>
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
                  Get Started
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Start With a Regenerative Consultation
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-200/70 sm:text-lg">
                  If joint or back pain is limiting your movement or
                  performance, the first step is a private evaluation. Every
                  treatment plan begins with determining candidacy and
                  appropriate options.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Book Consultation
                  </Link>
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full border border-white/25 px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/5"
                  >
                    Request Virtual Visit
                  </Link>
                </div>
              </FadeUp>

              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/regenerative-medicine/treatment-5.png"
                    alt="Joint vascular regeneration visualization"
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
