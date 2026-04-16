"use client";

import Image from "next/image";
import { FadeUp, FadeIn } from "@/components/motion";

export function Physician() {
  return (
    <section id="about" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <FadeIn>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/team/ajit-dhaliwal.png"
                  alt="Dr. Ajit Dhaliwal, Founder of Regen Health Physicians"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-4 max-w-xs rounded-xl bg-white p-6 shadow-xl sm:-right-8">
                <blockquote className="text-sm italic leading-relaxed text-gray-700">
                  &ldquo;Medicine should be personal, precise, and accountable.&rdquo;
                </blockquote>
                <p className="mt-2 text-xs font-semibold text-blue-900">
                  — Dr. Ajit Dhaliwal
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Physician Authority
              </span>
            </FadeUp>
            <FadeUp>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Physician Insight{" "}
                <span className="text-gray-400">Still Matters</span>
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Founded and led by Dr. Ajit Dhaliwal, our clinic is built on one
                principle: medicine should be personal, precise, and accountable.
              </p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                Today, Dr. Dhaliwal focuses on clinical vision, protocol
                development, and outcome standards—bringing physician-level
                insight to the systems and care models that guide every patient
                journey.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
