import Image from "next/image";
import Link from "next/link";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";
import { LOCATION_LIST } from "@/lib/locations";

export type ServiceData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  ctaLabel: string;
  conditionsHeading: string;
  conditionsIntro: string;
  conditions: { title: string; body: string }[];
  protocolsHeading: string;
  protocols: { tag: string; title: string; body: string; bullets: string[] }[];
  protocolsFootnote?: string;
  mechanism: { heading: string; intro: string; points: string[]; note?: string };
  processHeading: string;
  process: { step: string; title: string; body: string }[];
  candidatesHeading: string;
  candidates: string[];
  sectionImage?: string;
  sectionImageAlt?: string;
  disclaimer: string;
};

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

export function ServicePage({ data }: { data: ServiceData }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              {data.eyebrow}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              {data.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {data.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={BOOKING_URL}
                className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
              >
                {data.ctaLabel}
              </Link>
              <Link
                href={BOOKING_URL}
                className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
              >
                See If You&rsquo;re a Candidate
              </Link>
            </div>
          </FadeUp>
          <FadeIn>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
              <Image
                src={data.heroImage}
                alt={data.heroAlt}
                fill
                priority
                sizes="(min-width: 1024px) 448px, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              Conditions We Treat
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.conditionsHeading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              {data.conditionsIntro}
            </p>
          </FadeUp>
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.conditions.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-2xl border border-gray-200 bg-stone-50 p-7 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {c.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Protocols */}
      <section className="bg-[#0a1628] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Our Protocols
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {data.protocolsHeading}
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {data.protocols.map((p) => (
              <FadeUp key={p.title}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {p.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span className="text-sm leading-relaxed text-white/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
          {data.protocolsFootnote && (
            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/40">
              {data.protocolsFootnote}
            </p>
          )}
        </div>
      </section>

      {/* Mechanism */}
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              The Mechanism
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.mechanism.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              {data.mechanism.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {data.mechanism.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm leading-relaxed text-gray-800">{pt}</span>
                </li>
              ))}
            </ul>
            {data.mechanism.note && (
              <p className="mt-6 rounded-xl bg-blue-50 px-5 py-4 text-sm leading-relaxed text-blue-900">
                {data.mechanism.note}
              </p>
            )}
          </FadeUp>
          {data.sectionImage && (
            <FadeIn>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src={data.sectionImage}
                  alt={data.sectionImageAlt || ""}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              Our Process
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.processHeading}
            </h2>
          </FadeUp>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((s) => (
              <FadeUp key={s.title}>
                <div className="h-full rounded-2xl border border-gray-200 p-7">
                  <span className="font-mono text-xs font-semibold text-blue-900/60">
                    {s.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {s.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates */}
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              Who This Is For
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.candidatesHeading}
            </h2>
          </FadeUp>
          <FadeUp className="mt-10">
            <ul className="mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-2">
              {data.candidates.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4">
                  <Check />
                  <span className="text-sm leading-relaxed text-gray-800">{c}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Locations + CTA */}
      <section className="bg-blue-950 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              Begin Here
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start With a Private Consultation
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-200/70">
              Physician-led care in New York City and Salt Lake City, with virtual
              consultations for out-of-state patients.
            </p>
          </FadeUp>
          <FadeUp className="mt-10 grid gap-4 sm:grid-cols-2">
            {LOCATION_LIST.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-left transition-colors hover:border-white/40 hover:bg-white/[0.06]"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                  {loc.region}
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-white">
                  {loc.label}
                </p>
                <p className="mt-1 text-sm text-blue-200/60">{loc.street}</p>
                <p className="mt-1 text-sm text-blue-200/60">{loc.hoursShort}</p>
              </Link>
            ))}
          </FadeUp>
          <FadeUp className="mt-10">
            <Link
              href={BOOKING_URL}
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              {data.ctaLabel}
            </Link>
          </FadeUp>
          <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-blue-200/40">
            {data.disclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
