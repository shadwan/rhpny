"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, PHONE_NUMBER, PHONE_HREF, BOOKING_URL } from "@/lib/constants";

const leftLinks = NAV_LINKS.slice(0, 2); // Services, Programs
const rightLinks = NAV_LINKS.slice(2);   // About

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between lg:h-20">

          {/* Left nav items */}
          <nav className="hidden flex-1 items-center gap-8 lg:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase text-gray-700 transition-colors hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="relative z-50 flex shrink-0 items-center">
            <Image
              src="/images/logos/regen-health-logo.png"
              alt="Regen Health Physicians"
              width={160}
              height={44}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </Link>

          {/* Right nav items */}
          <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase text-gray-700 transition-colors hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-900"
            >
              {PHONE_NUMBER}
            </a>
            <Link
              href={BOOKING_URL}
              className="rounded-full bg-blue-900 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-blue-800 hover:shadow-lg"
            >
              Book a Consultation
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
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
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium uppercase tracking-wide text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                className="text-lg text-gray-600"
              >
                {PHONE_NUMBER}
              </a>
              <Link
                href={BOOKING_URL}
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-blue-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Book a Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
