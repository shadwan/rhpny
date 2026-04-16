import Link from "next/link";
import Image from "next/image";
import {
  SITE_NAME,
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL,
  ADDRESSES,
  BOOKING_URL,
} from "@/lib/constants";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top CTA */}
        <div className="border-b border-white/10 pb-12">
          <p className="text-sm text-gray-400">
            We bring the years, global experience, and stamina to guide our
            clients through new and often disruptive realities.
          </p>
          <Link
            href={BOOKING_URL}
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gray-900 transition-all hover:bg-blue-50"
          >
            Book a Private Consultation
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/logos/regen-health-logo.png"
              alt={SITE_NAME}
              width={120}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {SITE_NAME}
            </p>
            <p className="mt-1 text-xs text-gray-600">
              New York City and Salt Lake City
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NYC */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {ADDRESSES.nyc.label}
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {ADDRESSES.nyc.street}
              <br />
              {ADDRESSES.nyc.city}
            </p>
          </div>

          {/* Utah + Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {ADDRESSES.utah.label}
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {ADDRESSES.utah.street}
              <br />
              {ADDRESSES.utah.city}
            </p>
            <div className="mt-6 space-y-1.5">
              <a
                href={PHONE_HREF}
                className="block text-sm text-gray-500 transition-colors hover:text-white"
              >
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-sm text-gray-500 transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs text-gray-600">
            &copy;{new Date().getFullYear()} RegenHealth Physicians. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
