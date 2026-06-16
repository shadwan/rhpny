/**
 * Embedded Sanity Studio, served at /studio on the same Vercel deployment.
 * All editing/admin happens here; no separate studio host to maintain.
 */
"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
