import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      description: "e.g. Medical Director, Health Writer",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "sameAs",
      title: "Social / profile URLs",
      description: "Used for Person structured data (LinkedIn, X, etc.).",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
