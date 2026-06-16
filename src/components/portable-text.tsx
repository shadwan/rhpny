import Image from "next/image";
import Link from "next/link";
import {
  PortableText as BasePortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

import { urlForImage } from "@/sanity/lib/image";

function slugifyText(children: React.ReactNode): string {
  return String(children)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2
        id={slugifyText(children)}
        className="mt-12 scroll-mt-28 font-heading text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={slugifyText(children)}
        className="mt-9 scroll-mt-28 font-heading text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-7 font-heading text-lg font-semibold text-gray-900">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-blue-900 bg-stone-50 px-6 py-4 text-lg italic leading-relaxed text-gray-800">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-base leading-[1.8] text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-gray-700">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-blue-900">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const external = value?.openInNewTab || /^https?:\/\//.test(href);
      if (external) {
        return (
          <a
            href={href}
            target={value?.openInNewTab ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-medium text-blue-900 underline underline-offset-2 hover:text-blue-700"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="font-medium text-blue-900 underline underline-offset-2 hover:text-blue-700"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1600).auto("format").url();
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={url}
              alt={value.alt || ""}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <BasePortableText value={value} components={components} />;
}
