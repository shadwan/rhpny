import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL, ADDRESSES } from "@/lib/constants";

const siteUrl = "https://rhpny.com";

export const metadata: Metadata = {
  title: "About | Our Medical Advisers",
  description:
    "Regen Health Physicians — a physician-led concierge medical practice founded by Dr. Ajit Dhaliwal. Meet the medical team delivering regenerative care across New York City and Salt Lake City.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/about`,
    siteName: "Regen Health Physicians",
    title: "About | Regen Health Physicians",
    description:
      "Physician-led concierge regenerative medicine. Meet the team across NYC and SLC.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Regen Health Physicians",
    description: "Physician-led concierge regenerative medicine.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
};

const team: Member[] = [
  {
    name: "Ajit Dhaliwal MD, MBA",
    role: "Founder and Clinical Vision",
    image: "/images/team/ajit-dhaliwal.jpeg",
    bio: "Internal Medicine–trained physician with a performance-driven approach to health strategy. Regenerative and longevity-focused clinical advisor, educator, and program developer.",
    specialties: [
      "Internal Medicine",
      "Regenerative Protocols",
      "Longevity Strategy",
      "Program Development",
    ],
  },
  {
    name: "Dr. Ravneet Dhaliwal",
    role: "Medical Director",
    image: "/images/team/ravneet-dhaliwal.jpg",
    bio: "Dr. Dhaliwal has worked at the front lines of acute inpatient care, managing patients during critical and transitional moments in their health. This experience has given her a deep understanding of both the strengths and limitations of traditional treatment pathways.",
    specialties: [
      "Acute Inpatient Care",
      "Clinical Oversight",
      "Transitional Medicine",
    ],
  },
  {
    name: "Jhonelle Gravesandy",
    role: "Family Nurse Practitioner",
    image: "/images/team/jhonelle-gravesandy-v2.png",
    bio: "Jhonelle Gravesandy, FNP-BC — ANCC board-certified Family Nurse Practitioner with over a decade of experience in orthopedics, pain management, functional nutrition, regenerative medicine, and medical aesthetics. Her work blends evidence-based medicine with integrative, longevity-focused therapies to support healing, performance, and aesthetics wellness.",
    specialties: [
      "Orthopedics",
      "Pain Management",
      "Functional Nutrition",
      "Medical Aesthetics",
    ],
  },
  {
    name: "Will Michael",
    role: "Strategic Leadership & Platform Architecture",
    image: "/images/team/will-michael-v2.png",
    bio: "Will is a health executive and systems strategist focused on the future of regenerative and precision medicine. As a Partner of RegenHealth Physicians, he leads growth, innovation, and strategic development across concierge longevity, biologic therapies, and performance optimization programs.",
    specialties: [
      "Systems Strategy",
      "Concierge Longevity",
      "Platform Architecture",
    ],
  },
  {
    name: "Jay Maly",
    role: "Health Coach",
    image: "/images/team/jay-maly-v2.png",
    bio: "Health coach focused on performance, recovery, and the daily habits that support long-term outcomes. Works alongside our clinical team to translate protocols into sustainable lifestyle change.",
    specialties: [
      "Performance Coaching",
      "Recovery Support",
      "Lifestyle Integration",
    ],
  },
];

const principles = [
  {
    title: "Physician-designed",
    body: "Every protocol originates with a physician. Not delegated. Not templated.",
  },
  {
    title: "Biologically personalized",
    body: "Treatment matched to your biology, goals, and stage — not a packaged menu.",
  },
  {
    title: "Concierge-delivered",
    body: "Unhurried consultations. Direct access. Continuity of care through every follow-up.",
  },
];

const stats = [
  { number: "500+", label: "Patients served" },
  { number: "10+", label: "Years combined experience" },
  { number: "2", label: "Cities — NYC & SLC" },
  { number: "100%", label: "Physician-led" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-stone-50 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                About Regen Health Physicians
              </span>
              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Medicine should be{" "}
                <span className="text-blue-900">
                  personal, precise, and accountable.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl lg:leading-[1.6]">
                A physician-led concierge practice built on regenerative
                biology and honest clinical judgment. No volume clinics. No
                assembly lines. Protocols designed and overseen at the
                physician level — then carried through with concierge-level
                care.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={BOOKING_URL}
                  className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="#team"
                  className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
                >
                  Meet the Team
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-stone-50 px-4 py-8 sm:grid-cols-4 sm:gap-6 sm:px-10 sm:py-10">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`text-center ${
                      i < stats.length - 1
                        ? "sm:border-r sm:border-gray-200"
                        : ""
                    }`}
                  >
                    <p className="font-heading text-3xl font-semibold tracking-tight text-blue-900 sm:text-4xl">
                      {s.number}
                    </p>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-xs">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Founder story */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/team/ajit-dhaliwal.jpeg"
                    alt="Dr. Ajit Dhaliwal"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Founder&apos;s Perspective
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Practice Built on Physician Insight
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  Founded by Dr. Ajit Dhaliwal — an Internal Medicine–trained
                  physician with a performance-driven approach to health
                  strategy. Clinical vision, protocol development, and outcome
                  standards are set at the physician level and carried through
                  every patient journey.
                </p>
                <blockquote className="mt-8 rounded-2xl border-l-4 border-blue-900 bg-stone-50 p-6">
                  <p className="text-lg italic leading-relaxed text-gray-800">
                    &ldquo;Medicine should be personal, precise, and
                    accountable.&rdquo;
                  </p>
                  <footer className="mt-3 text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Dr. Ajit Dhaliwal — Founder
                  </footer>
                </blockquote>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                How We Practice
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Three Principles. No Exceptions.
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3">
              {principles.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                    <span className="font-mono text-xs font-semibold text-blue-900/60">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-gray-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {p.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team full list */}
        <section id="team" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Our Medical Advisers
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Led by Experts
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                A team assembled around clinical rigor, regenerative medicine,
                and long-term patient outcomes.
              </p>
            </FadeUp>

            <div className="mt-16 divide-y divide-gray-200">
              {team.map((m, i) => (
                <article
                  key={m.name}
                  className={`grid items-start gap-10 py-16 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-14 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:lg:order-2" : ""
                  }`}
                >
                  <FadeIn className="lg:col-span-4">
                    <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-2xl lg:max-w-[320px]">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 320px, 260px"
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>

                  <FadeUp className="lg:col-span-8">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold tabular-nums text-blue-900/60">
                          0{i + 1}
                        </span>
                        <span className="h-px flex-1 bg-gray-200 lg:flex-none lg:w-12" />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-900">
                          {m.role}
                        </span>
                      </div>

                      <h3 className="mt-5 font-heading text-[1.75rem] font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-[2.25rem] lg:leading-[1.15]">
                        {m.name}
                      </h3>

                      <p className="mt-5 text-base leading-[1.7] text-gray-600">
                        {m.bio}
                      </p>

                      <div className="mt-8 border-t border-gray-100 pt-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                          Focus Areas
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {m.specialties.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-gray-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeUp className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Where We Practice
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Two Cities. One Standard.
              </h2>
            </FadeUp>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <FadeUp>
                <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Primary Clinic
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-gray-900">
                    {ADDRESSES.nyc.label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {ADDRESSES.nyc.street}
                    <br />
                    {ADDRESSES.nyc.city}
                  </p>
                  <p className="mt-6 text-sm text-gray-500">
                    Upper East Side concierge clinic — private clinical
                    setting for in-person consultations, evaluations, and
                    regenerative treatment.
                  </p>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    Secondary Clinic
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-gray-900">
                    {ADDRESSES.utah.label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {ADDRESSES.utah.street}
                    <br />
                    {ADDRESSES.utah.city}
                  </p>
                  <p className="mt-6 text-sm text-gray-500">
                    Same protocols, same physician oversight. Serving
                    patients across the Mountain West.
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeUp className="mt-10 rounded-2xl border border-blue-900/10 bg-blue-50/40 px-6 py-5 text-center">
              <p className="text-sm text-gray-700">
                Virtual consultations available for out-of-state and
                international patients.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-950 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                Begin Here
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Start With a Private Consultation
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-200/70 sm:text-lg">
                Whether you&apos;re exploring hair restoration, regenerative
                orthopedics, aesthetic care, or long-term optimization — the
                first step is a confidential consultation with our clinical
                team.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={BOOKING_URL}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
                >
                  Book Consultation
                </Link>
                <Link
                  href={BOOKING_URL}
                  className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/5"
                >
                  Request Virtual Visit
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
