"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FadeUp } from "@/components/motion";

type CardTone = "light" | "blue" | "dark" | "cream";

type Testimonial = {
  name: string;
  context: string;
  treatment: string;
  quote: string;
  avatar: string;
  tone: CardTone;
};

const testimonials: Testimonial[] = [
  {
    name: "Jan Shah",
    context: "Flew in from Canada",
    treatment: "Lower back",
    quote:
      "Wanted to express great gratitude to the amazing people of Regen Health Physicians. I flew in all the way from Canada with my father. For stem cell treatment for my dad's lower back. He's had multiple surgeries and nothing worked. First off the whole process was seamless. Dr. Ajit Dhaliwal was very professional and made the whole process very easy. From pre to post procedure. The results are absolutely amazing. The tissue in the lower back was able to regenerate due to the stem cell therapy. The most important part my father was able to go back to everyday life and life pain free. Such a blessing. 10/10 \uD83D\uDE4F",
    avatar: "/images/testimonials/jan-shah.png",
    tone: "light",
  },
  {
    name: "Janel Nobles",
    context: "Salt Lake City, UT",
    treatment: "Knee",
    quote:
      "I was referred to RegenHealth by a friend, and although I live in SLC, Utah, I made the decision to fly to NY, to get stem cell treatment. I have done my research on stem cell therapy in the U.S., and can see that RegenHealth is at the top. I felt comfortable while there, as I was informed of every step clearly. The facility was clean and comfortable and I was confident in my personalized treatment plan. I love that there was zero downtime and I was able to fly back home and continue my normal routine the same day. I felt great as I left, and have full confidence that my body is benefiting from this cutting edge treatment.",
    avatar: "/images/testimonials/janel-nobles.png",
    tone: "dark",
  },
  {
    name: "Regina Cafarchio",
    context: "New York, NY",
    treatment: "Knee",
    quote:
      "I've had developing knee pain over the past few years that started to affect my ability to workout. I heard about stem cell treatment and after doing some research I decided to give it a shot. After my injection I am able to run again with no pain and extremely relieved no surgery is needed. Highly recommend Dr. Dhaliwal and steam cell treatment, you'll be happy that you did!",
    avatar: "/images/testimonials/regina-cafarchio.png",
    tone: "cream",
  },
  {
    name: "Mike Butterfield",
    context: "Cross-country to NYC",
    treatment: "Back & shoulders",
    quote:
      "I flew across country to NYC after hearing about RegenHealth and their reputation as one of the top clinics for stem cell treatment and peptides in America. I was blown away by their team of medical doctors. After a thorough examination, we decided that direct injections were the best way to tackle my chronic lower back pain and severe issues in both shoulders. While the stem cells will take time to fully rebuild, I felt immediate relief in my shoulders, and just three days later, I can already sense my lower back starting to heal. The whole experience made me feel like I was their top priority, and I'm beyond relieved that I won't have to go through another surgery. If you're dealing with similar pain, this is absolutely the place to go\u2014they're the real deal.",
    avatar: "/images/testimonials/mike-butterfield.png",
    tone: "blue",
  },
  {
    name: "Fredrik H",
    context: "Sports recovery",
    treatment: "Knee",
    quote:
      "I chose Dr Dhaliwal to see if he could help me fix my knee. I've had a lot of issues with it over the past year. I've visited countless of physiotherapists who's given me a ton of exercises, but without seeing any progress. I got tired of it, so I reached out to Dr Dhaliwal. He is super-friendly, knowledgeable, and solutions-oriented. He gave me a so-called stem cell treatment for my knee, something I was not really familiar with. But he explained how it works and the positive effect it can have on injuries and pain. Little did I know that this was the solution! I will most definitely recommend Dr Dhaliwal to my family and friends.",
    avatar: "/images/testimonials/fredrik-h.png",
    tone: "light",
  },
  {
    name: "Binder Dhaliwal",
    context: "Aesthetics patient",
    treatment: "Under-eyes & cheeks",
    quote:
      "Dr. Ajit injected stem cells to my under eyes and cheeks and I have to say, his technique and bedside manner was superb. I saw the long lasting effects a few weeks after and it is far superior to Botox. Highly recommend him for aesthetics!",
    avatar: "/images/testimonials/binder-dhaliwal.png",
    tone: "cream",
  },
  {
    name: "Pooja Bhatnagar",
    context: "Dance injury",
    treatment: "Shoulder & neck",
    quote:
      "My experience with Dr. Dhaliwal was absolute magic. I have been dealing with crippling shoulder and neck pain after a dance injury and I was referred to Dr. Dhaliwal. I decided to give his stem cell treatment a shot and after my treatment, my pain significantly improved. This procedure alone changed my everyday living and I am now able to dance freely like I used to before my injury. I am beyond grateful to have been introduced to Dr. Dhaliwal and received his treatment and care!",
    avatar: "/images/testimonials/pooja-bhatnagar.png",
    tone: "dark",
  },
  {
    name: "Jarnail Singh",
    context: "Sports injury recovery",
    treatment: "Knee",
    quote:
      "Dr. Dhaliwal has been an absolute pleasure to work with. His level of service and professionalism is top notch. He recently conducted an injection for my knee after a major sports injury - I feel as good as new! I have recommended several friends, as this has changed the quality of life for me and my family.",
    avatar: "/images/testimonials/jarnail-singh.png",
    tone: "light",
  },
  {
    name: "ECF MMA Gym",
    context: "Combat athletes",
    treatment: "Multiple joints",
    quote:
      "this was an absolute game changer!! my quality of life has changed in a positive way. I had stem cell injections in my left elbow, both shoulders, both knees, and my L4 L5 in my back and I'm happy to say that has this helped me in ways that I can't even explain ! I am able to train mma again , lift weights and do things that I haven't done in years due to injury! I highly recommend stem cell treatment!",
    avatar: "/images/testimonials/ecf-mma-gym.png",
    tone: "blue",
  },
];

const toneStyles: Record<
  CardTone,
  {
    card: string;
    eyebrow: string;
    quote: string;
    name: string;
    context: string;
    star: string;
    border: string;
  }
> = {
  light: {
    card: "bg-white",
    eyebrow: "text-blue-900",
    quote: "text-gray-800",
    name: "text-gray-900",
    context: "text-gray-500",
    star: "text-amber-400",
    border: "border-gray-200/80",
  },
  cream: {
    card: "bg-stone-100",
    eyebrow: "text-blue-900",
    quote: "text-gray-800",
    name: "text-gray-900",
    context: "text-gray-500",
    star: "text-amber-500",
    border: "border-stone-200",
  },
  blue: {
    card: "bg-blue-900",
    eyebrow: "text-blue-200",
    quote: "text-white",
    name: "text-white",
    context: "text-blue-200/80",
    star: "text-amber-300",
    border: "border-blue-800",
  },
  dark: {
    card: "bg-gray-950",
    eyebrow: "text-blue-300",
    quote: "text-gray-100",
    name: "text-white",
    context: "text-gray-400",
    star: "text-amber-300",
    border: "border-gray-800",
  },
};

function StarRow({ className }: { className: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5 fill-current"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const t = toneStyles[testimonial.tone];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`mb-5 break-inside-avoid rounded-3xl border ${t.card} ${t.border} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8`}
    >
      {/* Top: stars + treatment tag */}
      <div className="flex items-center justify-between">
        <StarRow className={t.star} />
        <span className={`text-[10px] font-semibold uppercase tracking-widest ${t.eyebrow}`}>
          {testimonial.treatment}
        </span>
      </div>

      {/* Quote */}
      <blockquote
        className={`mt-5 text-[15px] leading-relaxed ${t.quote}`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Footer: avatar + name + context */}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-current/10 pt-5">
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 ring-2 ring-current/10">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </span>
        <div className="min-w-0">
          <p className={`text-sm font-semibold leading-tight ${t.name}`}>
            {testimonial.name}
          </p>
          <p className={`mt-0.5 text-xs ${t.context}`}>
            {testimonial.context}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Real People, Real Results
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Patient Stories
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            From cross-country travelers to NYC locals — outcomes that put
            patients back in motion.
          </p>
        </FadeUp>

        {/* Masonry wall — uses CSS columns so cards of different heights pack naturally */}
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
