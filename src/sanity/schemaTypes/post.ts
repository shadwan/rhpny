import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO & Social" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "1–2 sentence summary. Used on the blog list and as the default meta description.",
      validation: (r) =>
        r.required().min(50).max(200).error("Excerpt must be 50–200 characters."),
    }),
    defineField({
      name: "mainImage",
      title: "Main / hero image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          validation: (r) => r.required().error("Alt text is required for SEO."),
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      group: "content",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      group: "content",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      group: "content",
      validation: (r) => r.required().min(1).error("Add at least one category."),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      group: "content",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Reading time (minutes)",
      type: "number",
      group: "content",
      description:
        "Optional. If omitted, it is estimated automatically from the body.",
    }),
    defineField({
      name: "featured",
      title: "Featured post",
      type: "boolean",
      group: "content",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle
          ? new Date(subtitle).toLocaleDateString()
          : "No date",
        media,
      };
    },
  },
});
