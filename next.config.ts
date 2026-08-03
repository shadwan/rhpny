import type { NextConfig } from "next";

// Host-based 301s for the retired Utah site. These fire once rhputah.com is
// pointed at this Vercel project and added as a domain (see merge report).
// rhputah.com URL → canonical rhpny.com equivalent.
const RHPUTAH_HOST = "(www\\.)?rhputah\\.com";
const RHPUTAH_MAP: [string, string][] = [
  ["/", "/locations/salt-lake-city"],
  ["/about-us", "/about"],
  ["/aesthetic-treatments", "/aesthetics"],
  ["/hair-restoration", "/precision-hair-restoration-for-men-and-women"],
  ["/peptide-therapy", "/peptides"],
  ["/chronic-disease-management", "/chronic-disease"],
  ["/regenerative-medicine", "/regenerative-medicine-for-joint-back-and-shoulder-pain"],
  ["/joint-back-orthopedic", "/joint-back-orthopedic"],
  ["/longevity-program", "/longevity-program"],
  ["/mens-sexual-health", "/mens-sexual-health"],
  ["/womens-sexual-health", "/womens-sexual-health"],
  ["/book", "/book"],
];
const rhputahRedirects = [
  ...RHPUTAH_MAP.map(([from, to]) => ({
    source: from,
    has: [{ type: "host" as const, value: RHPUTAH_HOST }],
    destination: `https://www.rhpny.com${to}`,
    permanent: true,
  })),
  // Catch-all for any remaining Utah URL (WordPress feeds, wp-json, etc.)
  {
    source: "/:path*",
    has: [{ type: "host" as const, value: RHPUTAH_HOST }],
    destination: "https://www.rhpny.com/",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  redirects: async () => [
    {
      source: "/terms-and-conditions",
      destination: "/about",
      permanent: true,
    },
    {
      source: "/privacy-policy",
      destination: "/about",
      permanent: true,
    },
    ...rhputahRedirects,
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],
};

export default nextConfig;
