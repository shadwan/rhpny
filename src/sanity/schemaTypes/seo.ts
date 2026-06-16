import { defineField, defineType } from "sanity";

// Reusable SEO object embedded in documents. Validation enforces good SEO
// hygiene so the Viktor bot (or a human) cannot publish a search-broken post.
export const seo = defineType({
  name: "seo",
  title: "SEO & Social",
  type: "object",
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      description:
        "Overrides the <title>. Aim for 50–60 characters. Falls back to the post title.",
      validation: (r) =>
        r.max(60).warning("Keep under 60 characters to avoid truncation in search."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      description: "120–160 characters. Falls back to the excerpt.",
      validation: (r) =>
        r.max(160).warning("Keep under 160 characters to avoid truncation."),
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      type: "image",
      description:
        "Optional. 1200×630 recommended. If empty, an OG image is auto-generated from the title + main image.",
      options: { hotspot: true },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description:
        "Only set this if the canonical should point somewhere other than this post's own URL.",
    }),
    defineField({
      name: "keywords",
      title: "Focus keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "noIndex",
      title: "Hide from search engines (noindex)",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
