import Link from "next/link";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";
import { LOCATIONS, LOCATION_LIST, type LocationSlug } from "@/lib/locations";

const services = [
  { label: "Hair Restoration", href: "/precision-hair-restoration-for-men-and-women" },
  { label: "Regenerative Medicine", href: "/regenerative-medicine-for-joint-back-and-shoulder-pain" },
  { label: "Joint, Back & Orthopedic", href: "/joint-back-orthopedic" },
  { label: "Aesthetics", href: "/aesthetics" },
  { label: "Peptide Therapy", href: "/peptides" },
  { label: "Chronic Disease Care", href: "/chronic-disease" },
  { label: "Men's Sexual Health", href: "/mens-sexual-health" },
  { label: "Women's Sexual Health", href: "/womens-sexual-health" },
  { label: "Longevity Program", href: "/longevity-program" },
];

export function LocationPageView({ slug }: { slug: LocationSlug }) {
  const loc = LOCATIONS[slug];
  const other = LOCATION_LIST.find((l) => l.slug !== slug)!;

  return (
    <main>
      {/* Hero */}
      <section className="bg-stone-50 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              {loc.region} Clinic
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3rem] lg:leading-[1.05]">
              Regenerative Medicine in {loc.label}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Physician-led regenerative and longevity care — {loc.tagline} Same
              protocols, same physician oversight, delivered through a concierge
              model.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={BOOKING_URL}
                className="rounded-full bg-blue-900 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl"
              >
                Book a Consultation
              </Link>
              <a
                href={loc.phoneHref}
                className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-blue-900/30 hover:text-blue-900"
              >
                Call {loc.phoneDisplay}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Clinic details + map */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeUp>
            <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-stone-50 p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                Visit Our {loc.label} Clinic
              </h2>
              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-blue-900">Address</dt>
                  <dd className="mt-2 leading-relaxed text-gray-700">
                    {loc.street}
                    <br />
                    {loc.addressLocality}, {loc.addressRegion} {loc.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-blue-900">Hours</dt>
                  <dd className="mt-2 space-y-1 text-gray-700">
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span className="tabular-nums text-gray-500">
                          {formatTime(h.opens)} – {formatTime(h.closes)}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-blue-900">Contact</dt>
                  <dd className="mt-2 space-y-1 text-gray-700">
                    <a href={loc.phoneHref} className="block hover:text-blue-900">{loc.phoneDisplay}</a>
                    <a href={`mailto:${loc.email}`} className="block hover:text-blue-900">{loc.email}</a>
                  </dd>
                </div>
              </dl>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:underline"
              >
                Get directions
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-gray-200">
              <iframe
                title={`Map to Regen Health Physicians ${loc.label}`}
                src={loc.mapEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              Services in {loc.short}
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything We Offer, in {loc.label}
            </h2>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.href}>
                <Link
                  href={s.href}
                  className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-5 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50"
                >
                  <span className="font-heading text-base font-semibold text-gray-900 group-hover:text-blue-900">
                    {s.label}
                  </span>
                  <svg className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Shared team + testimonials */}
      <Team />
      <Testimonials />

      {/* CTA + other location */}
      <section className="bg-blue-950 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start With a Private Consultation in {loc.label}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-200/70">
              Virtual consultations available for out-of-state and international
              patients.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={BOOKING_URL}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl"
              >
                Book Consultation
              </Link>
              <Link
                href={`/locations/${other.slug}`}
                className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/50 hover:bg-white/5"
              >
                Visit our {other.short} clinic
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hr} ${period}` : `${hr}:${String(m).padStart(2, "0")} ${period}`;
}
