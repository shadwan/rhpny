import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { bodyFont } from "@/lib/fonts";
import { websiteSchema, medicalBusinessSchema } from "@/lib/schema";
import "./globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const siteUrl = "https://www.rhpny.com";

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
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
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
  verification: {
    google: "YGVWMkc5t2ILWh2J-YVlt-4v8IEZadsIKaiOijHAUyc",
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
      lang="en-US"
      className={cn("h-full", bodyFont.variable, "font-sans", figtree.variable)}
    >
      <head>
        {/* Structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PM65979G');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) — one library bootstraps gtag; both the GA4
            (analytics) and Google Ads (conversions) tags fire off it. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VDKYH4LPNW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VDKYH4LPNW');
gtag('config', 'AW-18239128927');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2881508452199712');
fbq('track', 'PageView');`}
        </Script>
        {/* End Meta Pixel */}
      </head>
      <body className="min-h-full flex flex-col font-body antialiased">
        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2881508452199712&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel (noscript) */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PM65979G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
