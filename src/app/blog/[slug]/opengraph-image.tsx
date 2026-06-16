import { ImageResponse } from "next/og";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postMetaQuery } from "@/sanity/lib/queries";
import { urlForImageWidth } from "@/sanity/lib/image";

export const alt = "Regen Health Physicians blog article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Meta = {
  title: string;
  authorName?: string;
  mainImage?: Parameters<typeof urlForImageWidth>[0];
};

// Auto-generates a branded 1200×630 social card per post when no custom
// ogImage is set. Uses the hero image as a dim background + the headline.
export default async function OgImage({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await sanityFetch({
    query: postMetaQuery,
    params: { slug: params.slug },
  })) as Meta | null;

  const title = post?.title || "Regen Health Physicians";
  const bg = post?.mainImage ? urlForImageWidth(post.mainImage, 1200, 60) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: bg ? `#0a1628` : "#0a1628",
          position: "relative",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {bg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bg}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.35,
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0.92) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#6ab4e4",
              marginBottom: 24,
            }}
          >
            Regen Health Physicians
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {post?.authorName && (
            <div style={{ marginTop: 28, fontSize: 26, color: "#b8ddf5" }}>
              {post.authorName}
            </div>
          )}
        </div>
      </div>
    ),
    size
  );
}
