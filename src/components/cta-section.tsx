"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { BOOKING_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeUp>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Small Changes, Big Results
          </span>
        </FadeUp>
        <FadeUp>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Begin With a Private Consultation
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-200/70">
            Whether you&apos;re exploring hair restoration, aesthetic care, or
            long-term optimization, the first step is a confidential
            consultation with our clinical team.
          </p>
        </FadeUp>
        <FadeUp>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={BOOKING_URL}
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-blue-950 transition-all hover:bg-blue-50 hover:shadow-xl hover:shadow-white/10"
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
  );
}
