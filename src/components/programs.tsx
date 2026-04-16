"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const programs = [
  {
    title: "Musculoskeletal & Pain",
    description: "Joint preservation and spine regeneration.",
    image: "/images/programs/musculoskeletal.jpg",
  },
  {
    title: "Sexual Health",
    description: "Male and female intimate rejuvenation.",
    image: "/images/programs/sexual-health.jpeg",
  },
  {
    title: "Neurologic & Brain Optimization",
    description: "Brain longevity and burnout recovery.",
    image: "/images/programs/neurologic.jpg",
  },
  {
    title: "Autoimmune & Inflammatory",
    description: "Inflammation reduction and immune modulation.",
    image: "/images/programs/autoimmune.jpeg",
  },
  {
    title: "Cardiometabolic & Longevity",
    description: "Vascular health and metabolic optimization.",
    image: "/images/programs/cardiometabolic.jpeg",
  },
  {
    title: "Dermatology & Aesthetics",
    description: "Stem cell enhanced microneedling and skin renewal.",
    image: "/images/programs/dermatology.jpeg",
  },
  {
    title: "Hair Restoration",
    description: "18-month follicle signaling plans.",
    image: "/images/services/hair-restoration.jpeg",
  },
  {
    title: "Fertility & Reproductive",
    description: "Ovarian and endometrial rejuvenation.",
    image: "/images/programs/fertility.jpg",
  },
  {
    title: "Post-Surgical Recovery",
    description: "Accelerated healing and tissue repair.",
    image: "/images/programs/post-surgical.jpg",
  },
  {
    title: "Executive & Corporate Health",
    description: "Concierge care for high-performance individuals.",
    image: "/images/programs/executive.jpeg",
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Specialized Programs
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Comprehensive Care Pathways
          </h2>
        </FadeUp>

        <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-sm font-semibold text-white">
                    {program.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60 transition-all duration-300 group-hover:text-white/80">
                    {program.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
