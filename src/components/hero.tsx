"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { BOOKING_URL } from "@/lib/constants";

const LineWaves = dynamic(() => import("@/components/LineWaves"), {
  ssr: false,
});

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-amber-400"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  // Defer the 589KB video until it scrolls near the viewport so it doesn't
  // compete for bandwidth during initial paint / LCP. Poster shows meanwhile.
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!showVideo || !el) return;
    el.load();
    el.play().catch(() => {});
  }, [showVideo]);

  const handleUnmute = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.currentTime = 0;
    try {
      await video.play();
      setMuted(false);
    } catch {
      // Autoplay with sound was blocked — keep button visible
      video.muted = true;
    }
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    setMuted(true);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-50 pt-28">
      {/* Animated line waves background */}
      <div className="absolute inset-0">
        <LineWaves
          color1="#1f2021"
          color2="#707070"
          color3="#a8a8a8"
          speed={0.18}
          warpIntensity={0.5}
          brightness={0.28}
          innerLineCount={28}
          outerLineCount={36}
          rotation={-30}
          colorCycleSpeed={0.3}
          enableMouseInteraction
          mouseInfluence={3.5}
        />
        <div className="pointer-events-none absolute inset-0 bg-white/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-stone-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.5)_70%,rgba(250,250,249,0.9)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        {/* Google + stars + clients */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200">
            <GoogleIcon className="h-5 w-5" />
          </div>
          <div className="flex flex-col items-start">
            <StarRating />
            <span className="mt-0.5 text-xs font-medium text-gray-600">
              Trusted by 500+ Clients
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-balance font-heading text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
        >
          Precision Hair Restoration,
          <br className="hidden md:inline" /> Aesthetic Medicine, and{" "}
          <span className="text-blue-900">Longevity Care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base font-normal leading-[1.65] text-gray-700 sm:text-lg lg:text-xl lg:leading-[1.6]"
        >
          Physician-led regenerative treatments, personalized to your biology
          and delivered through concierge medicine in New York City.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href={BOOKING_URL}
            className="rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-md ring-1 ring-gray-200 transition-all hover:shadow-xl sm:text-sm"
          >
            Book a Private Consultation
          </Link>
          <Link
            href="#services"
            className="rounded-full bg-blue-900 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-900/15 sm:text-sm"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto mt-8 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-2xl shadow-gray-900/10 lg:mt-10"
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster="/videos/hero-poster.jpg"
            className="h-full w-full object-cover"
          >
            {showVideo && <source src="/videos/hero.mp4" type="video/mp4" />}
          </video>

          {/* Tap to unmute / mute toggle */}
          <AnimatePresence mode="wait">
            {muted ? (
              <motion.button
                key="unmute"
                type="button"
                onClick={handleUnmute}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group/unmute absolute inset-0 flex items-center justify-center"
                aria-label="Tap to unmute and play from the start"
              >
                {/* Subtle dim layer to make button pop */}
                <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300 group-hover/unmute:opacity-100" />

                {/* Center stack */}
                <span className="relative flex flex-col items-center gap-3">
                  {/* Pulsing icon button */}
                  <span className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                    {/* Pulse rings */}
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2.4s]" />
                    <span className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-md" />
                    {/* Solid core */}
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-2xl shadow-black/30 ring-1 ring-white/60 transition-transform duration-300 group-hover/unmute:shadow-black/50">
                      <svg
                        className="h-7 w-7 text-blue-900 sm:h-8 sm:w-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M11.553 3.064A.75.75 0 0 1 12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 0 1 .808-.13Z" />
                        <path d="M15.95 6.05a.75.75 0 0 1 1.06 0 8.5 8.5 0 0 1 0 11.9.75.75 0 0 1-1.06-1.06 7 7 0 0 0 0-9.78.75.75 0 0 1 0-1.06Z" />
                        <path d="M18.78 3.22a.75.75 0 0 1 1.06 0 12.5 12.5 0 0 1 0 17.56.75.75 0 1 1-1.06-1.06 11 11 0 0 0 0-15.44.75.75 0 0 1 0-1.06Z" />
                      </svg>
                    </span>
                  </span>

                  {/* Label pill */}
                  <span className="rounded-full bg-black/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:text-sm">
                    Tap to Unmute
                  </span>
                </span>
              </motion.button>
            ) : (
              <motion.button
                key="mute"
                type="button"
                onClick={handleMute}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                aria-label="Mute"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
