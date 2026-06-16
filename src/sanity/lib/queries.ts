import { defineQuery } from "next-sanity";

// Shared projections ---------------------------------------------------------

const POST_FIELDS = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  _updatedAt,
  featured,
  readingTime,
  tags,
  mainImage,
  "author": author->{ name, "slug": slug.current, image, role },
  "categories": categories[]->{ title, "slug": slug.current },
  seo
`;

// List of posts for the /blog index (lightweight, no body).
export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(featured desc, publishedAt desc) {
    ${POST_FIELDS}
  }
`);

// Single post by slug (full body + resolved references).
export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    ${POST_FIELDS},
    body,
    "author": author->{ name, "slug": slug.current, image, role, bio, sameAs },
    "related": *[_type == "post" && slug.current != $slug
      && count(categories[@._ref in ^.^.categories[]._ref]) > 0]
      | order(publishedAt desc)[0...3] {
        title, "slug": slug.current, excerpt, mainImage, publishedAt
      }
  }
`);

// Just the slugs — for generateStaticParams + sitemap.
export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
    "slug": slug.current,
    "updatedAt": _updatedAt
  }
`);

// SEO/meta only — for generateMetadata.
export const postMetaQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    title,
    excerpt,
    "slug": slug.current,
    publishedAt,
    _updatedAt,
    mainImage,
    seo,
    "authorName": author->name
  }
`);

export const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(title asc) {
    title, "slug": slug.current, description
  }
`);
