import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: Image) => builder.image(source);

// Convenience helper for fixed-width responsive images (e.g. OG, hero).
export function urlForImageWidth(source: Image, width: number, quality = 80) {
  return urlForImage(source)
    .width(width)
    .quality(quality)
    .auto("format")
    .url();
}
