"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const testimonials = [
  {
    name: "Jan Shah",
    text: "I had a lower back stem cell treatment and avoided surgery entirely. The recovery was faster than I ever imagined.",
  },
  {
    name: "Janel Nobles",
    text: "I traveled from Utah for stem cell treatment on my knee. The team made the entire process seamless and the results speak for themselves.",
  },
  {
    name: "Regina Cafarchio",
    text: "My knee pain is gone after the stem cell treatment. I wish I had done this years ago instead of dealing with cortisone shots.",
  },
  {
    name: "Mike Butterfield",
    text: "Got stem cell injections for my back and shoulders. The improvement in my daily life has been remarkable.",
  },
  {
    name: "Fredrik H",
    text: "After stem cell treatment for my knee issues, I'm back to my active lifestyle. The care here is truly world-class.",
  },
  {
    name: "Binder Dhaliwal",
    text: "The stem cell treatment for my under-eyes and cheeks gave me natural-looking results. No one can tell I had anything done.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Real People, Real Results
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Patient Stories
          </h2>
        </FadeUp>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-all duration-300 hover:border-blue-100 hover:bg-white hover:shadow-lg hover:shadow-blue-50">
                {/* Star rating */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Video placeholder */}
        <FadeUp className="mt-14 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p className="mt-4 text-sm font-medium text-gray-400">
              Video testimonials coming soon
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
