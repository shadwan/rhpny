"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const services = [
  {
    title: "Hair Restoration",
    tagline: "Science-led solutions for real growth.",
    description:
      "Non-surgical, regenerative approaches designed to restore follicle health at the cellular level—for both men and women seeking natural, lasting results.",
    image: "/images/services/hair-restoration.jpeg",
    href: "/precision-hair-restoration-for-men-and-women",
  },
  {
    title: "Regenerative Medicine",
    tagline: "The foundation beneath everything we do.",
    description:
      "Our clinical experience includes regenerative approaches for joint and back pain, orthopedic and sports-related injuries, tissue repair and recovery support.",
    image: "/images/services/regenerative-medicine.png",
    href: "/regenerative-medicine-for-joint-back-and-shoulder-pain",
  },
  {
    title: "Aesthetics",
    tagline: "Natural results, clinically guided.",
    description:
      "Physician-performed aesthetic treatments focused on skin quality, structure, and rejuvenation—without overcorrection or artificial outcomes.",
    image: "/images/services/aesthetics.jpeg",
    href: "#services",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Our Services
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Integrated Regenerative Care
          </h2>
        </FadeUp>

        <StaggerContainer className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-medium uppercase tracking-widest text-blue-900">
                      {service.tagline}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-900 transition-colors group-hover:text-blue-700">
                      Explore {service.title}
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
