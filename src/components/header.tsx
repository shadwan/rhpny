"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL,
  ADDRESSES,
  BOOKING_URL,
} from "@/lib/constants";

type SubLink = { label: string; href: string; description?: string };
type NavSection = {
  id: string;
  label: string;
  links: SubLink[];
};

const sections: NavSection[] = [
  {
    id: "services",
    label: "Services",
    links: [
      {
        label: "Hair Restoration",
        href: "/precision-hair-restoration-for-men-and-women",
        description: "Regenerative treatments for follicle health.",
      },
      {
        label: "Regenerative Medicine",
        href: "/regenerative-medicine-for-joint-back-and-shoulder-pain",
        description: "Advanced biologic therapies for healing.",
      },
      {
        label: "Joint / Back / Orthopedic",
        href: "/joint-back-orthopedic",
        description: "Non-surgical pain and recovery care.",
      },
      {
        label: "Aesthetics",
        href: "/aesthetics",
        description: "Physician-led skin and rejuvenation.",
      },
      {
        label: "Peptides",
        href: "#services",
        description: "Precision peptide protocols.",
      },
    ],
  },
];

const flatLinks: { label: string; href: string }[] = [
  { label: "Longevity Programs", href: "#programs" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeSection = sections.find((s) => s.id === openId);

  return (
    <>
      <header
        onMouseLeave={() => setOpenId(null)}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || openId
            ? "border-b border-gray-200/70 bg-white/90 backdrop-blur-md"
            : "bg-white/40 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:h-20 lg:px-10">
          {/* Left: Desktop nav */}
          <nav
            className="hidden items-center gap-1 justify-self-start lg:flex"
            aria-label="Primary"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onMouseEnter={() => setOpenId(section.id)}
                onFocus={() => setOpenId(section.id)}
                onClick={() =>
                  setOpenId(openId === section.id ? null : section.id)
                }
                aria-expanded={openId === section.id}
                aria-haspopup="true"
                className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  openId === section.id
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {section.label}
                <svg
                  className={`h-3 w-3 transition-transform duration-300 ${
                    openId === section.id ? "rotate-180" : ""
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            ))}
            {flatLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setOpenId(null)}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile placeholder for grid balance */}
          <span className="lg:hidden" />

          {/* Center: Logo with city labels */}
          <Link
            href="/"
            className="flex items-center gap-3 justify-self-center"
            aria-label="Regen Health Physicians — Home"
          >
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
              NYC
            </span>
            <Image
              src="/logo.svg"
              alt="Regen Health Physicians"
              width={200}
              height={38}
              className="h-8 w-auto lg:h-10"
              priority
            />
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
              SLC
            </span>
          </Link>

          {/* Right: phone + CTA + mobile toggle */}
          <div className="flex items-center gap-4 justify-self-end">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-900 xl:flex"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {PHONE_NUMBER}
            </a>
            <Link
              href={BOOKING_URL}
              className="hidden rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/15 lg:inline-flex"
            >
              Book a Consultation
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-9 w-9 items-center justify-center lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                    mobileOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                    mobileOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop dropdown panel */}
        <AnimatePresence>
          {activeSection && (
            <motion.div
              key={activeSection.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-gray-100 bg-white lg:block"
            >
              <div className="mx-auto max-w-7xl px-10 py-10">
                <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                      {activeSection.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {activeSection.id === "services"
                        ? "Physician-designed protocols, biologically personalized, delivered through concierge medicine."
                        : "A practice built on physician insight, real outcomes, and personal accountability."}
                    </p>
                  </div>

                  <ul className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-5">
                    {activeSection.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setOpenId(null)}
                          className="group block rounded-lg px-3 py-2 -mx-3 transition-colors hover:bg-blue-50/60"
                        >
                          <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-900">
                            {link.label}
                            <svg
                              className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
                          {link.description && (
                            <span className="mt-1 block text-xs leading-relaxed text-gray-500">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 overflow-y-auto bg-white pt-16 lg:hidden"
          >
            <div className="px-6 pb-12 pt-8">
              {sections.map((section) => (
                <div key={section.id} className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    {section.label}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-base font-medium text-gray-900 hover:text-blue-900"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mb-8">
                <ul className="space-y-3">
                  {flatLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-base font-semibold text-gray-900 hover:text-blue-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  Get in Touch
                </p>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li>
                    <a href={PHONE_HREF} className="block hover:text-blue-900">
                      {PHONE_NUMBER}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="block hover:text-blue-900"
                    >
                      {EMAIL}
                    </a>
                  </li>
                  <li className="pt-2 text-xs leading-relaxed text-gray-500">
                    {ADDRESSES.nyc.street}
                    <br />
                    {ADDRESSES.nyc.city}
                  </li>
                </ul>
              </div>

              <Link
                href={BOOKING_URL}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
