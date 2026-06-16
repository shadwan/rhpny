import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { POSTS_TAG } from "@/sanity/lib/fetch";

// Sanity webhook receiver. Configure a webhook in Sanity (manage.sanity.io →
// API → Webhooks) pointing here, filtered to `_type == "post"`, with the
// secret stored in SANITY_REVALIDATE_SECRET. On publish/unpublish it
// invalidates the blog cache so changes go live in seconds — no rebuild.
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ slug?: { current?: string } }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    // Invalidate every tagged blog query + the routes themselves.
    // Next 16 requires the two-arg form; "max" = stale-while-revalidate.
    revalidateTag(POSTS_TAG, "max");
    revalidatePath("/blog");
    if (body?.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("Revalidate webhook error:", err);
    return new NextResponse("Error revalidating", { status: 500 });
  }
}
