import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp } from "@/components/motion";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { formatDate } from "@/sanity/lib/utils";

const siteUrl = "https://www.rhpny.com";

export const metadata: Metadata = {
  title: "Blog | Regenerative Medicine Insights",
  description:
    "Physician-authored articles on regenerative medicine, hair restoration, aesthetics, peptides, longevity, and chronic disease care from Regen Health Physicians.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: "Regen Health Physicians Blog",
    description:
      "Physician-authored insights on regenerative medicine, longevity, and concierge care.",
  },
};

type PostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  mainImage?: Parameters<typeof urlForImage>[0];
  author?: { name: string };
  categories?: { title: string; slug: string }[];
};

export default async function BlogIndex() {
  const posts = ((await sanityFetch({ query: postsQuery })) as PostCard[] | null) ?? [];

  return (
    <>
      <Header />
      <main>
        <section className="bg-stone-50 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                Insights
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                The Regen Health Blog
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Physician-authored articles on regenerative medicine, longevity,
                and concierge care.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500">
                No posts published yet. Check back soon.
              </p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article key={post._id} className="group flex flex-col">
                    <Link href={`/blog/${post.slug}`} className="flex flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                        {post.mainImage && (
                          <Image
                            src={urlForImage(post.mainImage)
                              .width(800)
                              .auto("format")
                              .url()}
                            alt={post.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="mt-4 flex flex-1 flex-col">
                        {post.categories?.[0] && (
                          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                            {post.categories[0].title}
                          </span>
                        )}
                        <h2 className="mt-2 font-heading text-xl font-semibold leading-snug tracking-tight text-gray-900 group-hover:text-blue-900">
                          {post.title}
                        </h2>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                          {post.author?.name && <span>{post.author.name}</span>}
                          {post.author?.name && <span>·</span>}
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt)}
                          </time>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
