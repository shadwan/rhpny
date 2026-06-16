import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// projectId falls back to a syntactically-valid placeholder so createClient
// never throws at import time before the real project is configured. Reads are
// gated by isSanityConfigured in fetch.ts, so the placeholder is never queried.

// Read-only client used by the frontend. Uses the CDN for fast cached reads;
// fresh content is delivered via on-demand revalidation (revalidateTag) when
// the Sanity webhook fires, so the CDN cache never serves stale blog content.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
