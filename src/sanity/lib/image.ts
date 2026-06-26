import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: Image) => builder.image(source);

// True only when the image actually has an uploaded asset. A Sanity image
// field can exist with just alt text and no file (e.g. an incomplete post), in
// which case urlForImage() throws "Unable to resolve image URL from source".
// Guard every URL build with this so a malformed post degrades, not 500s.
export function hasImageAsset(
  source?: { asset?: { _ref?: string } } | null
): source is Image {
  return Boolean(source?.asset?._ref);
}

// Convenience helper for fixed-width responsive images (e.g. OG, hero).
export function urlForImageWidth(source: Image, width: number, quality = 80) {
  return urlForImage(source)
    .width(width)
    .quality(quality)
    .auto("format")
    .url();
}
