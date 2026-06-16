# Viktor → Sanity Blog Posting Contract

How the Viktor AI bot publishes blog posts directly into the Sanity Content
Lake. On publish, a Sanity webhook revalidates the Next.js blog within seconds —
no rebuild, no repo access.

> ⚠️ **Schema validation (required fields, alt text, slug uniqueness) is enforced
> in Sanity Studio, NOT on raw API mutations.** Viktor writes straight to the
> Content Lake, so **Viktor is responsible for sending every required field**
> listed below. A post missing them will publish but render/SEO-degrade.

---

## 1. Connection

| Param | Value |
|---|---|
| API host | `https://<projectId>.api.sanity.io` |
| Project ID | _(from manage.sanity.io)_ |
| Dataset | `production` |
| API version | `2025-02-19` |
| Mutate endpoint | `POST /v2025-02-19/data/mutate/production` |
| Asset endpoint | `POST /v2025-02-19/assets/images/production` |
| Auth | `Authorization: Bearer <WRITE_TOKEN>` |

**Token:** create in manage.sanity.io → **API → Tokens** with the **Editor**
role. Store it only in Viktor's secret config.

---

## 2. Publishing flow (per article)

```
1. Upload hero image      → returns asset _id  (asset._ref)
2. Upload any inline imgs → returns asset _ids
3. Ensure author + category docs exist (create once, then reference by _id)
4. createOrReplace the post document (deterministic _id = idempotent)
5. Done → webhook fires → live in seconds
```

### 2a. Upload an image

```bash
curl -X POST \
  "https://$PROJECT.api.sanity.io/v2025-02-19/assets/images/production" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: image/jpeg" \
  --data-binary @hero.jpg
```

Response → `document._id` (e.g. `image-abc123...-1200x630-jpg`). Use it as
`asset._ref` below.

### 2b. Create the post (mutation)

```bash
curl -X POST \
  "https://$PROJECT.api.sanity.io/v2025-02-19/data/mutate/production" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "mutations": [ { "createOrReplace": { ...postDocument } } ] }'
```

Use **`createOrReplace`** with a **deterministic `_id`** (e.g. a hash/slug like
`post-stem-cells-for-knees`). Re-running the same article updates in place
instead of creating duplicates.

> Publish = top-level `_id` (e.g. `post-...`). A `drafts.`-prefixed `_id` stays
> a draft and will NOT appear on the live site. Always publish with no prefix.

---

## 3. `post` document shape

```jsonc
{
  "_id": "post-<stable-slug-or-hash>",   // deterministic = idempotent
  "_type": "post",

  // --- required ---
  "title": "Stem Cell Therapy for Knee Osteoarthritis",
  "slug": { "_type": "slug", "current": "stem-cell-therapy-knee-osteoarthritis" },
  "excerpt": "A 50–200 char summary used on the blog list and as the default meta description.",
  "mainImage": {
    "_type": "image",
    "asset": { "_type": "reference", "_ref": "image-abc123...-1200x630-jpg" },
    "alt": "Physician preparing a regenerative knee injection"   // REQUIRED for SEO
  },
  "body": [ /* Portable Text — see §4 */ ],
  "author": { "_type": "reference", "_ref": "author-ajit-dhaliwal" },
  "categories": [ { "_type": "reference", "_ref": "category-regenerative-medicine", "_key": "c1" } ],
  "publishedAt": "2026-06-15T14:00:00.000Z",   // ISO 8601

  // --- optional ---
  "tags": ["stem cells", "knee pain", "orthopedics"],
  "readingTime": 6,            // omit → auto-estimated from body
  "featured": false,

  // --- SEO object (all optional; smart fallbacks applied) ---
  "seo": {
    "_type": "seo",
    "metaTitle": "Stem Cell Therapy for Knees | Regen Health",  // ≤60 chars; falls back to title
    "metaDescription": "How regenerative injections treat knee osteoarthritis...", // ≤160; falls back to excerpt
    "canonicalUrl": null,      // only set to override the default /blog/<slug>
    "keywords": ["stem cell knee therapy", "knee osteoarthritis treatment"],
    "noIndex": false,
    "ogImage": null            // omit → social card auto-generated from title + mainImage
  }
}
```

**Array items need a `_key`** (any unique string) — Sanity requires it for
`categories`, `tags`, `body` blocks, etc.

---

## 4. Body = Portable Text

`body` is a Portable Text array. Convert Markdown/HTML → Portable Text on
Viktor's side (e.g. `@portabletext/block-tools`, or `@sanity/client` helpers).

Supported styles: `normal`, `h2`, `h3`, `h4`, `blockquote`; lists `bullet` /
`number`; marks `strong`, `em`, `code`, and `link` (annotation with `href` +
optional `openInNewTab`); inline `image` blocks (**must include `alt`**).

Minimal example:

```jsonc
[
  {
    "_type": "block", "_key": "b1", "style": "h2",
    "children": [{ "_type": "span", "_key": "s1", "text": "Why it works" }]
  },
  {
    "_type": "block", "_key": "b2", "style": "normal",
    "markDefs": [{ "_type": "link", "_key": "l1", "href": "https://www.rhpny.com/peptides" }],
    "children": [
      { "_type": "span", "_key": "s2", "text": "Read more about " },
      { "_type": "span", "_key": "s3", "marks": ["l1"], "text": "peptide therapy" },
      { "_type": "span", "_key": "s4", "text": "." }
    ]
  }
]
```

Use H2/H3 for structure (they auto-generate anchor IDs and feed SEO). Add
**internal links** to service pages (`/peptides`, `/aesthetics`, etc.) for SEO.

---

## 5. Authors & categories

Create these **once**, then reference by `_id`:

```jsonc
// author
{ "_id": "author-ajit-dhaliwal", "_type": "author",
  "name": "Dr. Ajit Dhaliwal", "slug": { "_type": "slug", "current": "ajit-dhaliwal" },
  "role": "Founder", "bio": "...", "sameAs": ["https://www.instagram.com/regenhealthphysicians/"] }

// category
{ "_id": "category-regenerative-medicine", "_type": "category",
  "title": "Regenerative Medicine", "slug": { "_type": "slug", "current": "regenerative-medicine" },
  "description": "..." }
```

Bundle them in the same mutation as the post (use `createIfNotExists` for
author/category so they aren't overwritten):

```jsonc
{ "mutations": [
  { "createIfNotExists": { "_id": "author-ajit-dhaliwal", "_type": "author", ... } },
  { "createIfNotExists": { "_id": "category-regenerative-medicine", "_type": "category", ... } },
  { "createOrReplace": { "_id": "post-...", "_type": "post", ... } }
] }
```

---

## 6. JS example (`@sanity/client`)

```js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-02-19",
  token: WRITE_TOKEN,
  useCdn: false,
});

// 1. upload image
const asset = await client.assets.upload("image", fileBuffer, {
  filename: "hero.jpg",
});

// 2. publish post
await client.createOrReplace({
  _id: `post-${slug}`,
  _type: "post",
  title,
  slug: { _type: "slug", current: slug },
  excerpt,
  mainImage: { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt },
  body: portableText,
  author: { _type: "reference", _ref: "author-ajit-dhaliwal" },
  categories: [{ _type: "reference", _ref: "category-regenerative-medicine", _key: "c1" }],
  publishedAt: new Date().toISOString(),
  seo: { _type: "seo", keywords },
});
```

---

## 7. SEO checklist Viktor must satisfy

- [ ] `title` ≤ 120 chars, unique
- [ ] `slug.current` unique, kebab-case, stable
- [ ] `excerpt` 50–200 chars (becomes meta description)
- [ ] `mainImage.alt` present and descriptive
- [ ] every inline image has `alt`
- [ ] ≥ 1 `category` reference
- [ ] `publishedAt` ISO timestamp
- [ ] H2/H3 headings structure the body
- [ ] 1–3 internal links to RHP service pages
- [ ] `seo.keywords` set (focus keyword first)
- [ ] deterministic `_id` for idempotent re-runs
