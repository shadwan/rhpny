"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";

const Orb = dynamic(() => import("@/components/Orb"), { ssr: false });

type ProtocolSection = {
  title: string;
  items: string[];
  footer?: string;
};

type Program = {
  title: string;
  shortDesc: string;
  image: string;
  protocols: ProtocolSection[];
  targets?: string[];
  caution?: string;
};

const programs: Program[] = [
  {
    title: "Musculoskeletal & Pain",
    shortDesc: "Comprehensive joint preservation and spine regeneration protocols.",
    image: "/images/programs/musculoskeletal.jpg",
    protocols: [
      {
        title: "Comprehensive Joint Preservation Programs",
        items: [
          "Stem cells + PRP + exosomes (staged protocol)",
          "Ultrasound-guided injections",
          "Physical therapy or rehab coordination",
          "Anti-inflammatory peptide support (BPC-157, TB-500*)",
          "IV NAD+ or glutathione",
        ],
        footer: "Target: athletes, early arthritis patients, post-surgical alternatives.",
      },
      {
        title: "Spine & Disc Regeneration",
        items: [
          "Facet joint injections",
          "SI joint therapy",
          "Disc biologics (where legally permissible)",
          "Nerve support peptides",
          "Pain-reduction IVs",
        ],
      },
    ],
  },
  {
    title: "Sexual Health",
    shortDesc: "High demand protocols for male and female intimate rejuvenation.",
    image: "/images/programs/sexual-health.jpeg",
    protocols: [
      {
        title: "Male Sexual Health",
        items: [
          "Stem cells / PRP for erectile function",
          "Exosomes for vascular support",
          "Peptides (PT-141, kisspeptin*)",
          "Testosterone optimization (if licensed)",
        ],
      },
      {
        title: "Female Intimate Rejuvenation",
        items: [
          "Vaginal PRP / stem cell support",
          "Urinary incontinence protocols",
          "Libido & hormonal peptide programs",
        ],
      },
    ],
  },
  {
    title: "Neurologic & Brain Optimization",
    shortDesc: "Brain longevity and recovery from executive burnout.",
    image: "/images/programs/neurologic.jpg",
    protocols: [
      {
        title: "Brain Longevity Programs",
        items: [
          "Stem cells (systemic protocols)",
          "Exosomes (neurotrophic signaling)",
          "NAD+ IVs",
          "BPC-157 / cerebrolysin-style peptide protocols*",
          "Hyperbaric oxygen (if added later)",
        ],
      },
    ],
    targets: ["Executives", "Post-COVID brain fog", "Early cognitive decline", "Concussion recovery"],
  },
  {
    title: "Autoimmune & Inflammatory",
    shortDesc: "Inflammation reduction for autoimmune and chronic fatigue.",
    image: "/images/programs/autoimmune.jpeg",
    protocols: [
      {
        title: "Immune Reset / Inflammation Reduction Programs",
        items: [
          "IV stem cell protocols",
          "Exosomes for immune signaling",
          "Peptides (thymosin alpha-1*)",
          "High-dose vitamin C IVs",
          "Gut repair protocols",
        ],
      },
    ],
    targets: ["Lupus", "Rheumatoid arthritis", "Crohn\u2019s", "Hashimoto\u2019s", "Chronic fatigue / long COVID"],
  },
  {
    title: "Cardiometabolic & Longevity",
    shortDesc: "Recurring memberships focusing on vascular health.",
    image: "/images/programs/cardiometabolic.jpeg",
    protocols: [
      {
        title: "Longevity Membership Programs",
        items: [
          "Quarterly stem cell or exosome therapy",
          "Monthly IV therapy",
          "Ongoing peptide cycles",
          "Lab monitoring",
          "Lifestyle + supplement guidance",
        ],
        footer: "Ideal for: Ages 40\u201370, affluent, proactive patients.",
      },
      {
        title: "Cardiovascular Optimization",
        items: [
          "Endothelial repair protocols",
          "Stem cell IVs",
          "Exosomes for vascular signaling",
          "Peptides for metabolic health",
          "Nitric oxide optimization",
        ],
      },
    ],
  },
  {
    title: "Dermatology & Aesthetics",
    shortDesc: "Stem cell enhanced microneedling and scar revision.",
    image: "/images/programs/dermatology.jpeg",
    protocols: [
      {
        title: "Advanced Aesthetic Protocols",
        items: [
          "Stem cell\u2013enhanced microneedling",
          "Scar revision (acne, surgical scars)",
          "Burn or radiation skin recovery",
          "Stem cell facial fat graft support",
          "Anti-aging \u201cskin longevity\u201d programs",
        ],
      },
    ],
  },
  {
    title: "Hair Restoration",
    shortDesc: "18-month follicle signaling plans beyond standard PRP.",
    image: "/images/services/hair-restoration.jpeg",
    protocols: [
      {
        title: "Beyond PRP",
        items: [
          "Stem cell scalp injections",
          "Exosomes for follicle signaling",
          "Peptides for hair cycling",
          "Red light therapy integration",
        ],
      },
    ],
  },
  {
    title: "Fertility & Reproductive",
    shortDesc: "Niche protocols for ovarian and endometrial rejuvenation.",
    image: "/images/programs/fertility.jpg",
    protocols: [
      {
        title: "Depending on Licensing",
        items: [
          "Ovarian rejuvenation support",
          "Endometrial receptivity enhancement",
          "Sperm quality optimization",
          "Hormonal peptides + IV support",
        ],
      },
    ],
  },
  {
    title: "Post-Surgical Recovery",
    shortDesc: "Accelerated healing drips and scar minimization.",
    image: "/images/programs/post-surgical.jpg",
    protocols: [
      {
        title: "Partner With Surgeons",
        items: [
          "Orthopedic surgeons",
          "Plastic surgeons",
          "Dentists / oral surgeons",
        ],
      },
      {
        title: "Offer",
        items: [
          "Accelerated healing protocols",
          "Stem cells + PRP + peptides",
          "IV recovery drips",
          "Scar minimization",
        ],
      },
    ],
  },
  {
    title: "Executive & Corporate Health",
    shortDesc: "Concierge care for burnout and high-performance.",
    image: "/images/programs/executive.jpeg",
    protocols: [
      {
        title: "Executive Health Programs",
        items: [
          "On-site or concierge regenerative care",
          "Longevity optimization packages",
          "Burnout recovery programs",
          "Cognitive performance optimization",
        ],
      },
    ],
  },
];

function ProtocolModal({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Protocols for ${program.title}`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* Hero image */}
        <div className="relative aspect-[3/1] w-full">
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              Specialized Program
            </p>
            <h3 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
              {program.title}
            </h3>
            <p className="mt-2 text-sm text-white/75">
              {program.shortDesc}
            </p>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
            aria-label="Close"
          >
            <svg className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Protocol sections */}
        <div className="p-6 sm:p-8">
          <div className="space-y-8">
            {program.protocols.map((section) => (
              <div key={section.title}>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-blue-900">
                  {section.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                      <span className="text-sm leading-relaxed text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {section.footer && (
                  <p className="mt-4 rounded-lg bg-blue-50 px-4 py-3 text-xs leading-relaxed text-blue-900">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}

            {program.targets && program.targets.length > 0 && (
              <div>
                <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-blue-900">
                  Conditions & Targets
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {program.targets.map((target) => (
                    <span
                      key={target}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <Link
              href={BOOKING_URL}
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-lg sm:w-auto"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AccordionRow({
  program,
  index,
  hoveredIndex,
  onHover,
  onClick,
}: {
  program: Program;
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
  onClick: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  const isHovered = hoveredIndex === index;
  const protocolCount = program.protocols.reduce(
    (acc, s) => acc + s.items.length,
    0
  );

  return (
    <motion.div
      layout
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View protocols for ${program.title}`}
      className="group cursor-pointer overflow-hidden border-b border-white/10"
    >
      {/* Collapsed row — always visible */}
      <div className="flex items-center gap-4 py-5 sm:gap-6 sm:py-6">
        {/* Number */}
        <span
          className={`shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 sm:text-sm ${
            isHovered ? "text-blue-400" : "text-white/70"
          }`}
        >
          {num}
        </span>

        {/* Animated indicator dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isHovered
                ? "animate-ping bg-blue-400/60"
                : "bg-transparent"
            }`}
          />
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              isHovered ? "bg-blue-400" : "bg-white/60"
            }`}
          />
        </span>

        {/* Title */}
        <h3
          className={`flex-1 font-heading text-base font-semibold tracking-tight transition-colors duration-300 sm:text-lg md:text-xl ${
            isHovered ? "text-white" : "text-white/85"
          }`}
        >
          {program.title}
        </h3>

        {/* Protocol count — visible on hover */}
        <span
          className={`hidden shrink-0 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 sm:block ${
            isHovered
              ? "translate-x-0 text-blue-400/80 opacity-100"
              : "translate-x-4 text-white/0 opacity-0"
          }`}
        >
          {protocolCount} protocols
        </span>

        {/* Arrow */}
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isHovered
              ? "bg-blue-900 text-white"
              : "bg-white/15 text-white/70"
          }`}
        >
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              isHovered ? "translate-x-0.5" : ""
            }`}
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
        </span>
      </div>

      {/* Expanded content — visible on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex items-end justify-between gap-8 pb-6 pl-[3.25rem] sm:pl-[3.75rem]">
              <p className="max-w-lg text-sm leading-relaxed text-white/50">
                {program.shortDesc}
              </p>
              <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400 lg:block">
                View Protocol &rarr;
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Programs() {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="programs" className="relative overflow-hidden bg-[#0a1628] py-20 sm:py-28">
      {/* Orb background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Orb
          hue={210}
          hoverIntensity={0.1}
          rotateOnHover={false}
          forceHoverState
          backgroundColor="#0a1628"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Specialized Programs
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Comprehensive Care Pathways
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50">
            10 doctor-designed programs spanning regeneration, longevity, and
            performance.
          </p>
        </FadeUp>

        {/* Accordion stack */}
        <div className="mt-14 border-t border-white/10">
          {programs.map((program, i) => (
            <AccordionRow
              key={program.title}
              program={program}
              index={i}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onClick={() => setActiveProgram(program)}
            />
          ))}
        </div>
      </div>

      {/* Protocol modal */}
      <AnimatePresence>
        {activeProgram && (
          <ProtocolModal
            program={activeProgram}
            onClose={() => setActiveProgram(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
