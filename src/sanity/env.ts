// Sanity environment configuration. Values come from env vars so the same
// codebase works across local / preview / production on Vercel.
//
// These are intentionally soft (no throw on missing): the marketing site must
// build before the Sanity project exists. `isSanityConfigured` gates the blog
// data fetches — they no-op until NEXT_PUBLIC_SANITY_PROJECT_ID is set.

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const studioUrl = "/studio";

export const isSanityConfigured = Boolean(projectId);
