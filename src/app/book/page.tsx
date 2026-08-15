import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const siteUrl = "https://www.rhpny.com";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a private consultation with Regen Health Physicians. Concierge regenerative medicine in New York City and Salt Lake City. Virtual consultations available.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/book`,
    siteName: "Regen Health Physicians",
    title: "Book a Consultation | Regen Health Physicians",
    description: "Book a private consultation with Regen Health Physicians.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | Regen Health Physicians",
    description: "Book a private consultation with Regen Health Physicians.",
    images: ["/images/og-image.jpg"],
  },
