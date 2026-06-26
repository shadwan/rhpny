import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PortableText } from "@/components/portable-text";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  postBySlugQuery,
  postMetaQuery,
  postSlugsQuery,
} from "@/sanity/lib/queries";
import { urlForImage, urlForImageWidth, hasImageAsset } from "@/sanity/lib/image";
import { estimateReadingTime, formatDate, portableTextToPlain } from "@/sanity/lib/utils";

const siteUrl = "https://www.rhpny.com";

export async function generateStaticParams() {
  const slugs =
    ((await sanityFetch({ query: postSlugsQuery })) as
      | { slug: string }[]
      | null) ?? [];
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await sanityFetch({
    query: postMetaQuery,
    params: { slug },
  })) as PostMeta | null;

  if (!post) return { title: "Post not found" };

  const url = `${siteUrl}/blog/${post.slug}`;
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogSource = hasImageAsset(post.seo?.ogImage)
    ? post.seo!.ogImage
    : hasImageAsset(post.mainImage)
      ? post.mainImage
      : null;
  const ogImage = ogSource
    ? urlForImageWidth(ogSource, 1200)
    : `${url}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: post.seo?.canonicalUrl || url },
    robots: post.seo?.noIndex ? { index: false, follow: false } : undefined,
    keywords: post.seo?.keywords,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

type PostMeta = {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  _updatedAt: string;
  mainImage?: Parameters<typeof urlForImage>[0];
  authorName?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: Parameters<typeof urlForImage>[0];
    canonicalUrl?: string;
    keywords?: string[];
    noIndex?: boolean;
  };
};

type FullPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt: string;
  readingTime?: number;
  tags?: string[];
  mainImage?: Parameters<typeof urlForImage>[0] & { alt?: string };
  body: PortableTextBlock[];
  author?: {
    name: string;
    slug: string;
    image?: Parameters<typeof urlForImage>[0];
    role?: string;
    bio?: string;
    sameAs?: string[];
  };
  categories?: { title: string; slug: string }[];
  related?: {
    title: string;
    slug: string;
    excerpt: string;
    mainImage?: Parameters<typeof urlForImage>[0];
    publishedAt: string;
  }[];
  seo?: PostMeta["seo"];
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await sanityFetch({
    query: postBySlugQuery,
    params: { slug },
  })) as FullPost | null;

  if (!post) notFound();

  const url = `${siteUrl}/blog/${post.slug}`;
  const readingTime = estimateReadingTime(post.body, post.readingTime);
  const ogSource = hasImageAsset(post.seo?.ogImage)
    ? post.seo!.ogImage
    : hasImageAsset(post.mainImage)
      ? post.mainImage
      : null;
  const ogImage = ogSource ? urlForImageWidth(ogSource, 1200) : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: ogImage ? [ogImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    wordCount: portableTextToPlain(post.body).split(/\s+/).filter(Boolean).length,
    keywords: post.seo?.keywords?.join(", ") || post.tags?.join(", "),
    articleSection: post.categories?.map((c) => c.title),
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
          url: `${siteUrl}/blog/author/${post.author.slug}`,
          sameAs: post.author.sameAs,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Regen Health Physicians",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />
      <main>
        <article className="bg-white pt-32 pb-20 sm:pt-40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs text-gray-500" aria-label="Breadcrumb">
              <Link href="/blog" className="hover:text-blue-900">
                Blog
              </Link>
              {post.categories?.[0] && (
                <>
                  <span className="mx-2">/</span>
                  <span className="text-blue-900">
                    {post.categories[0].title}
                  </span>
                </>
              )}
            </nav>

            <header>
              <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                {post.author && (
                  <span className="flex items-center gap-2">
                    {hasImageAsset(post.author.image) && (
                      <Image
                        src={urlForImage(post.author.image)
                          .width(64)
                          .height(64)
                          .auto("format")
                          .url()}
                        alt={post.author.name}
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                    )}
                    <span className="font-medium text-gray-700">
                      {post.author.name}
                    </span>
                  </span>
                )}
                <span>·</span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span>·</span>
                <span>{readingTime} min read</span>
              </div>
            </header>

            {hasImageAsset(post.mainImage) && (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={urlForImage(post.mainImage)
                    .width(1600)
                    .auto("format")
                    .url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose-content mt-10">
              <PortableText value={post.body} />
            </div>

            {/* Author bio */}
            {post.author?.bio && (
              <div className="mt-14 flex gap-4 rounded-2xl border border-gray-200 bg-stone-50 p-6">
                {hasImageAsset(post.author.image) && (
                  <Image
                    src={urlForImage(post.author.image)
                      .width(120)
                      .height(120)
                      .auto("format")
                      .url()}
                    alt={post.author.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-heading text-sm font-semibold text-gray-900">
                    {post.author.name}
                    {post.author.role && (
                      <span className="font-normal text-gray-500">
                        {" "}
                        — {post.author.role}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Related */}
          {post.related && post.related.length > 0 && (
            <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-900">
                Related Articles
              </h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {post.related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                      {hasImageAsset(r.mainImage) && (
                        <Image
                          src={urlForImage(r.mainImage)
                            .width(600)
                            .auto("format")
                            .url()}
                          alt={r.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-gray-900 group-hover:text-blue-900">
                      {r.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
