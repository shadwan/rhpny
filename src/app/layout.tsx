import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headingFont, bodyFont, editorialFont } from "@/lib/fonts";
import "./globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const siteUrl = "https://rhpny.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Regen Health Physicians | Regenerative Medicine NYC",
    template: "%s | Regen Health Physicians",
  },
  description:
    "Physician-led regenerative treatments, personalized to your biology and delivered through concierge medicine in New York City.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Regen Health Physicians",
    title: "Regen Health Physicians | Regenerative Medicine NYC",
    description:
      "Physician-led regenerative treatments, personalized to your biology and delivered through concierge medicine in New York City.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regen Health Physicians",
    description:
      "Physician-led regenerative treatments, personalized to your biology and delivered through concierge medicine in New York City.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", headingFont.variable, bodyFont.variable, editorialFont.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col font-body antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
