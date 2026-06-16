import type { PortableTextBlock } from "sanity";

// Flatten Portable Text to plain text — for reading-time + JSON-LD wordCount.
export function portableTextToPlain(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !Array.isArray(block.children)) return "";
      return block.children.map((c) => ("text" in c ? c.text : "")).join("");
    })
    .join(" ")
    .trim();
}

export function estimateReadingTime(
  blocks: PortableTextBlock[] = [],
  explicit?: number
): number {
  if (explicit && explicit > 0) return explicit;
  const words = portableTextToPlain(blocks).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220)); // ~220 wpm
}

export function formatDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
