"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const principles = [
  {
    title: "Physician-designed",
    description: "Every protocol is created and overseen by licensed physicians.",
  },
  {
    title: "Biologically personalized",
    description:
      "Treatments tailored to your unique biology, not one-size-fits-all.",
  },
  {
    title: "Delivered through concierge medicine",
    description:
      "Private, unhurried care with direct access to your clinical team.",
  },
];

export function WhyWeExist() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              want real outcomes, not surface-level treatments. Every protocol is:
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {principles.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50">
                <div className="mb-4 h-1 w-8 rounded-full bg-blue-900 transition-all duration-300 group-hover:w-12" />
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-gray-600">
            Hair restoration, aesthetics, and longevity are not separate services
            here. They are part of one integrated approach to restoring and
            optimizing the body.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
