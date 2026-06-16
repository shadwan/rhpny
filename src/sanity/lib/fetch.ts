import type { QueryParams } from "next-sanity";

import { isSanityConfigured } from "../env";
import { client } from "./client";

// Tag used for on-demand revalidation. The Sanity webhook hits /api/revalidate
// which calls revalidateTag("post") → all blog pages refresh without a rebuild.
export const POSTS_TAG = "post";

// Cached read wrapper. Tags every blog query so a single webhook invalidates
// the whole blog. Long revalidate as a safety net; webhook does the real work.
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  tags = [POSTS_TAG],
  revalidate = 3600,
}: {
  query: QueryString;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number | false;
}) {
  // Before the Sanity project is wired up, return nothing so the site builds.
  if (!isSanityConfigured) return null;
  return client.fetch(query, params, {
    next: { revalidate: tags.length ? false : revalidate, tags },
  });
}
