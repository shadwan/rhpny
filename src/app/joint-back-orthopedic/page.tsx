import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";

const siteUrl = "https://rhpny.com";

export const metadata: Metadata = {
  title: "Joint, Back & Orthopedic Care",
  description:
    "Non-surgical regenerative care for joint pain, spine issues, and orthopedic injuries. Physician-led biologic therapies for athletes, active adults, and post-surgical recovery in New York City.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/joint-back-orthopedic`,
    siteName: "Regen Health Physicians",
    title: "Joint, Back & Orthopedic Care | Regen Health Physicians",
    description:
      "Non-surgical regenerative care for joint pain, spine issues, and orthopedic injuries. Physician-led biologic therapies.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joint, Back & Orthopedic Care | Regen Health Physicians",
    description:
      "Non-surgical regenerative care for joint pain, spine issues, and orthopedic injuries.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/joint-back-orthopedic`,
  },
};

const conditions = [
  {
    title: "Knees",
    description:
      "Cartilage wear, meniscus injury, ligament strain, post-sports recovery.",
  },
  {
    title: "Lower Back & Spine",
    description:
      "Disc degeneration, facet joint irritation, SI joint dysfunction, chronic lumbar pain.",
  },
  {
    title: "Shoulders",
    description:
      "Rotator cuff strain, impingement, frozen shoulder, range-of-motion loss.",
  },
  {
    title: "Hips",
    description:
      "Labral discomfort, early osteoarthritis, sports-related hip pain.",
  },
  {
    title: "Tendons & Ligaments",
    description:
      "Chronic tendinopathy, partial tears, sprains that resist conservative care.",
  },
  {
    title: "Post-Surgical Recovery",
    description:
      "Accelerated healing support after orthopedic procedures.",
  },
];

const jointProtocols = [
  "Stem cells + PRP + exosomes (staged protocol)",
  "Ultrasound-guided injections",
  "Physical therapy or rehab coordination",
  "Anti-inflammatory peptide support (BPC-157, TB-500*)",
  "IV NAD+ or glutathione",
];

const spineProtocols = [
  "Facet joint injections",
  "SI joint therapy",
  "Disc biologics (where legally permissible)",
  "Nerve support peptides",
  "Pain-reduction IVs",
];

const processSteps = [
  {
    num: "01",
    title: "Imaging & Intake Review",
    description:
      "MRI, X-ray, and functional history reviewed before your visit so clinical time stays focused.",
  },
  {
    num: "02",
    title: "Physical Evaluation",
    description:
      "In-person or virtual assessment of mobility, pain pattern, and structural factors.",
  },
  {
    num: "03",
    title: "Protocol Design",
    description:
      "Staged biologic therapy matched to your anatomy, activity level, and recovery goals.",
  },
  {
    num: "04",
    title: "Precision Delivery",
    description:
      "Ultrasound-guided injection and monitored recovery with scheduled follow-up.",
  },
];

const candidate = [
  "Early to moderate joint degeneration",
  "Active lifestyle you want to preserve",
  "Chronic pain unresolved by PT or cortisone",
  "Seeking alternatives to surgery",
  "Post-op patients wanting accelerated recovery",
  "Athletes recovering from sports injuries",
];

const testimonials = [
  {
    headline: "Avoided Surgery",
    quote:
      "I was exploring surgery for my knee but wanted to see if there were alternatives. The evaluation here was thorough, honest, and helped me understand my biology better.",
    name: "Robert M.",
    context: "Knee Patient",
    image: "/images/regenerative-medicine/testim-1.png",
  },
  {
    headline: "Long-Term Shoulder Strategy",
    quote:
      "The treatment plan felt responsible and professionally guided. It wasn’t about quick fixes; it was about a long-term strategy for my shoulder mobility.",
    name: "Elena S.",
    context: "Shoulder & Rotator Cuff",
    image: "/images/regenerative-medicine/testim-2.png",
  },
  {
    headline: "Path Forward After Lumbar Pain",
    quote:
      "After months of lower back discomfort, the physician-led approach gave me a clear path forward. I felt like a candidate for a specific therapy, not just a number.",
    name: "Wedly",
    context: "Lumbar Spine Patient",
    image: "/images/regenerative-medicine/testim-3.png",
  },
];

export default function JointBackOrthopedicPage() {
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
                  Joint / Back / Orthopedic
                </span>
                <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                  Non-Surgical Care for{" "}
                  <span className="text-blue-900">
                    Joints, Spine &amp; Sports Injuries
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl lg:leading-[1.6]">
                  Biologic therapies for knees, backs, shoulders, and hips —
                  guided by imaging, physician evaluation, and ultrasound
                  precision. Not a replacement for surgery when it&apos;s
                  indicated. A real alternative when it isn&apos;t.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                  >
                    Book Evaluation
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
                    src="/images/regenerative-medicine/treatment-7.png"
                    alt="Knee joint cellular repair visualization"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Conditions grid */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Conditions We Treat
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Built for Active Bodies
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                Regenerative protocols for musculoskeletal pain, chronic injury,
                and recovery — when early intervention matters most.
              </p>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {conditions.map((c) => (
                <StaggerItem key={c.title}>
                  <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                    <div className="mb-4 h-1 w-8 rounded-full bg-blue-900 transition-all group-hover:w-12" />
                    <h3 className="font-heading text-lg font-semibold text-gray-900">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {c.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Two protocol panels */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Our Protocols
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Two Integrated Programs
              </h2>
            </FadeUp>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <FadeUp>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/regenerative-medicine/treatment-2.png"
                      alt="Joint preservation visualization"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      Program 01
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-gray-900">
                      Joint Preservation
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      For athletes, early arthritis, and post-surgical
                      alternatives. Staged biologic therapy with rehab support.
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {jointProtocols.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/images/regenerative-medicine/treatment-5.png"
                      alt="Spine vascular regeneration visualization"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      Program 02
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-gray-900">
                      Spine &amp; Disc Regeneration
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      Carefully positioned for chronic lower back, facet joint,
                      and disc-related discomfort. Physician-led, imaging-guided.
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {spineProtocols.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span className="text-sm leading-relaxed text-gray-700">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            </div>

            <FadeUp className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                *Peptide availability subject to regulatory and licensing
                requirements.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* How it works — cellular */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="/images/regenerative-medicine/treatment-4.png"
                    alt="Cellular signaling visualization"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  The Mechanism
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Tissue Repair at the Cellular Level
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Regenerative therapies don&apos;t replace what&apos;s damaged
                  — they support the body&apos;s own repair response.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Reduce localized inflammation",
                    "Improve cellular signaling",
                    "Support tissue integrity",
                    "Enhance circulation to affected areas",
                  ].map((m) => (
                    <li
                      key={m}
                      className="rounded-xl border border-gray-200 bg-stone-50 px-4 py-3 text-sm font-medium text-gray-800"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-600 sm:text-base">
                  Most effective in early to moderate degenerative conditions.
                  Advanced structural damage may still require surgical
                  intervention.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <FadeUp>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Our Process
                  </span>
                  <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    From Imaging to Recovery
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
                      src="/images/regenerative-medicine/patient-1.jpg"
                      alt="Physician treating lower back"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src="/images/regenerative-medicine/physician.jpg"
                      alt="Joint examination in clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Candidate */}
        <section id="candidate" className="bg-white py-20 sm:py-28">
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
              {candidate.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-gray-200 bg-stone-50 p-6 transition-colors hover:border-blue-200 hover:bg-blue-50/40">
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
                    <span className="text-sm font-medium leading-relaxed text-gray-800">
                      {point}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Physician authority */}
        <section className="bg-stone-50 py-20 sm:py-28">
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
                  Physician Authority
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Led by Dr. Ajit Dhaliwal
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Internal Medicine–trained physician with extensive experience
                  in regenerative approaches to joint, shoulder, and spinal
                  concerns. Protocols designed and overseen at the physician
                  level — not delegated to a technician.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Physician-designed",
                    "Imaging-guided",
                    "Biologically personalized",
                    "Concierge access",
                  ].map((v) => (
                    <div
                      key={v}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800"
                    >
                      {v}
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Patient Outcomes
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Back in Motion
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-stone-50/50 p-8 transition-shadow hover:shadow-lg">
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
                  Move Better. Recover Smarter.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-blue-200/70 sm:text-lg">
                  Every protocol starts with a private evaluation — imaging
                  review, candidacy assessment, and an honest recommendation
                  about whether regenerative care fits your case.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={BOOKING_URL}
                    className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Book Evaluation
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
                    src="/images/regenerative-medicine/treatment-3.png"
                    alt="Active bodies — joint, back, shoulder care"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
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
