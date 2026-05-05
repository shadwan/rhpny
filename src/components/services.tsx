"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  /** Bento grid spans applied at md+ breakpoint */
  spanClass: string;
  /** Aspect ratio used on mobile (no grid spans active) */
  mobileAspect: string;
};

const services: Service[] = [
  {
    title: "Hair Restoration",
    description:
      "Non-surgical, regenerative approaches designed to restore follicle health at the cellular level — for men and women seeking natural, lasting results.",
    image: "/images/services/hair-restoration-hero.jpeg",
    href: "/precision-hair-restoration-for-men-and-women",
    featured: true,
    spanClass: "md:col-span-2 md:row-span-2",
    mobileAspect: "aspect-[4/5]",
  },
  {
    title: "Regenerative Medicine",
    description: "Advanced biologic therapies for healing, repair, and recovery.",
    image: "/images/services/regenerative-medicine.png",
    href: "/regenerative-medicine-for-joint-back-and-shoulder-pain",
    spanClass: "",
    mobileAspect: "aspect-[4/3]",
  },
  {
    title: "Aesthetics",
    description:
      "Physician-performed treatments for skin quality, structure, and rejuvenation — without overcorrection.",
    image: "/images/services/aesthetics.jpeg",
    href: "/aesthetics",
    spanClass: "",
    mobileAspect: "aspect-[4/3]",
  },
  {
    title: "Joint / Back / Orthopedic",
    description: "Non-surgical regenerative care for pain and mobility.",
    image: "/images/programs/musculoskeletal.jpg",
    href: "/joint-back-orthopedic",
    spanClass: "",
    mobileAspect: "aspect-[4/3]",
  },
  {
    title: "Peptides",
    description:
      "Precision peptide protocols supporting recovery, performance, metabolism, and longevity.",
    image: "/images/peptides/hero.jpeg",
    href: "/peptides",
    spanClass: "",
    mobileAspect: "aspect-[4/3]",
  },
  {
    title: "Chronic Disease",
    description:
      "Root-cause regenerative and functional care for autoimmune, metabolic, and chronic inflammatory conditions.",
    image: "/images/chronic-disease/difference.jpeg",
    href: "/chronic-disease",
    spanClass: "",
    mobileAspect: "aspect-[4/3]",
  },
];

function ArrowIcon({
  external,
  className,
}: {
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <svg
        className={className ?? "h-4 w-4"}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    );
  }
  return (
    <svg
      className={className ?? "h-4 w-4"}
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
  );
}

function ServiceTile({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  const inner = (
    <>
      {/* Image */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes={
          service.featured
            ? "(min-width: 1024px) 50vw, (min-width: 768px) 66vw, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
        }
        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${
          service.featured
            ? "bg-gradient-to-t from-blue-950/90 via-blue-950/35 to-blue-950/10"
            : "bg-gradient-to-t from-gray-950/85 via-gray-950/35 to-gray-950/5"
        }`}
      />

      {/* Top row: number + external badge */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
        <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-white/85 backdrop-blur-md">
          {number}
        </span>
        {service.external && (
          <span className="flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md">
            External
            <ArrowIcon external className="h-3 w-3" />
          </span>
        )}
      </div>

      {/* Bottom: content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3
          className={`font-heading font-semibold tracking-tight text-white ${
            service.featured
              ? "text-2xl sm:text-3xl lg:text-4xl"
              : "text-lg sm:text-xl"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-white/75 ${
            service.featured
              ? "max-w-md text-sm sm:text-base"
              : "text-xs sm:text-sm"
          }`}
        >
          {service.description}
        </p>
        <div
          className={`mt-4 inline-flex items-center gap-2 text-white transition-all duration-300 group-hover:gap-3 ${
            service.featured ? "text-sm" : "text-xs"
          } font-semibold uppercase tracking-widest`}
        >
          <span>{service.external ? "Visit" : "Explore"}</span>
          <ArrowIcon external={service.external} className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Subtle inner ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/20" />
    </>
  );

  const className =
    "group relative block h-full w-full overflow-hidden rounded-3xl bg-gray-900 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-900/20";

  if (service.external) {
    return (
      <a
        href={service.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={service.href} className={className}>
      {inner}
    </Link>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Our Services
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Integrated Regenerative Care
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Six specialties, one physician-led practice. Every protocol
            personalized to your biology.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[260px] lg:gap-5">
          {services.map((service, i) => (
            <StaggerItem
              key={service.title}
              className={`${service.spanClass} ${service.mobileAspect} md:aspect-auto`}
            >
              <ServiceTile service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
