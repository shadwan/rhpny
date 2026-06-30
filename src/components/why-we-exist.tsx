"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { FadeUp } from "@/components/motion";

const comparison = {
  left: {
    eyebrow: "Most Clinics",
    label: "Volume-First",
    items: [
      "Cookie-cutter protocols",
      "High-volume turnover",
      "Surface-level treatments",
      "Limited doctor oversight",
      "Generic intake, quick in-and-out",
    ],
  },
  right: {
    eyebrow: "Regen Health",
    label: "Patient-First",
    items: [
      "Doctor-designed protocols",
      "Biologically personalized care",
      "Real, lasting outcomes",
      "Direct access to your doctor",
      "Concierge consultation, unhurried",
    ],
  },
};

const stats = [
  { value: 500, suffix: "+", label: "Patients Served" },
  { value: 6, suffix: "", label: "Specialties" },
  { value: 2, suffix: "", label: "Cities" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function WhyWeExist() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              Why We Exist
            </span>
          </FadeUp>
          <FadeUp>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Not a Med Spa.{" "}
              <span className="text-gray-400">Not a Volume Clinic.</span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We specialize in precision-driven regenerative care for people who
              want real outcomes, not surface-level treatments.
            </p>
          </FadeUp>
        </div>

        {/* Comparison split */}
        <FadeUp className="mt-14 sm:mt-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
              {/* Left: Regen Health */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white p-8 sm:p-10"
              >
                {/* Brand accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700" />
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  {comparison.right.eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-gray-900">
                  {comparison.right.label}
                </h3>
                <ul className="mt-8 space-y-4">
                  {comparison.right.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-start gap-3"
                    >
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
                      <span className="text-sm leading-relaxed text-gray-800">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: Most Clinics */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gray-50/50 p-8 sm:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {comparison.left.eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-gray-400">
                  {comparison.left.label}
                </h3>
                <ul className="mt-8 space-y-4">
                  {comparison.left.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-400">
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
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-gray-400 line-through decoration-gray-300/70">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-8 sm:gap-6 sm:px-10 sm:py-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    i < stats.length - 1 ? "border-r border-gray-100" : ""
                  }`}
                >
                  <p className="font-heading text-3xl font-semibold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Closing */}
        <FadeUp className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-gray-600">
            Hair restoration, aesthetics, and longevity are not separate
            services here. They are part of one integrated approach to restoring
            and optimizing the body.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
