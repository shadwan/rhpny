"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const Threads = dynamic(() => import("@/components/Threads"), {
  ssr: false,
});

const features = [
  {
    title: "Personalized treatment planning",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.772.129A12.243 12.243 0 0 1 12 21a12.243 12.243 0 0 1-7.363-1.058l-.772-.129c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Regenerative and aesthetic integration",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Ongoing optimization and performance care",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Virtual and in-person concierge access",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.082-.146a2.25 2.25 0 0 1 1.028-.992l.58-.29c.292-.146.616-.22.942-.22h.38c.29 0 .57-.107.788-.307a.987.987 0 0 0 .176-1.14 1.125 1.125 0 0 1 .173-1.292l.263-.292a1.875 1.875 0 0 0-.4-2.874l-.024-.013a1.5 1.5 0 0 0-.8-.2H8.72a2.25 2.25 0 0 0-1.345.448l-.13.097a2.25 2.25 0 0 0-.845 1.759v.01c0 .564-.212 1.106-.588 1.525l-.167.183A3.375 3.375 0 0 0 5 10.31V12" />
      </svg>
    ),
  },
];

export function Longevity() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-20 sm:py-28">
      {/* Threads animated background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Threads
          color={[0.42, 0.71, 0.9]}
          amplitude={1.2}
          distance={0.15}
          enableMouseInteraction={false}
        />
      </div>
      {/* Radial blue glow for atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/15 blur-[120px]" />
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Longevity + Concierge Care
              </span>
            </FadeUp>
            <FadeUp>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Longevity Is Not a Treatment.{" "}
                <span className="text-blue-300">It&apos;s a Program.</span>
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Designed for individuals who think long-term about their health,
                appearance, and performance.
              </p>
            </FadeUp>
            <FadeUp>
              <Link
                href="#programs"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Explore Longevity Programs
                <svg
                  className="h-4 w-4"
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
              </Link>
            </FadeUp>
          </div>

          {/* Feature grid */}
          <StaggerContainer className="grid auto-rows-fr gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <StaggerItem key={feature.title} className="h-full">
                <div className="group flex h-full min-h-[170px] flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10">
                  <div className="text-blue-400 transition-colors group-hover:text-blue-300">
                    {feature.icon}
                  </div>
                  <p className="mt-6 text-sm font-medium leading-relaxed text-gray-300">
                    {feature.title}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
