"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/components/motion";

type Member = {
  name: string;
  role: string;
  image?: string; // omitted → initials avatar (headshot to be added)
  bio: string;
};

// Salt Lake City team as listed on the Utah practice's About page. The six
// members shared with the NYC roster reuse their existing photos; the four
// Utah-only members show an initials avatar until headshots are added.
const team: Member[] = [
  {
    name: "Ajit Dhaliwal MD, MBA",
    role: "Founder and Clinical Vision",
    image: "/images/team/ajit-dhaliwal.jpeg",
    bio: "Internal Medicine–trained doctor with a performance-driven approach to health strategy. Regenerative and longevity-focused clinical advisor, educator, and program developer.",
  },
  {
    name: "Dr. Ravneet Dhaliwal",
    role: "Medical Director",
    image: "/images/team/reenu.jpg",
    bio: "Family Medicine–trained doctor with broad procedural expertise and advanced fellowship training. Focus areas span family medicine and procedural care, acute inpatient care, obesity medicine, and regenerative protocols and longevity strategy — with an emphasis on collaboration in personalized patient protocols.",
  },
  {
    name: "Jhonny Nobles",
    role: "Founding Partner",
    bio: "With more than 20 years of experience in business development and relationship management, Jhonny brings deep Salt Lake City community ties and a background in medical staffing and healthcare. A medical and wellness entrepreneur focused on building patient-centered care in Utah.",
  },
  {
    name: "Mike Butterfield",
    role: "Founding Partner",
    image: "/images/utah/team/mike-butterfield.webp",
    bio: "20+ years of executive leadership with more than $185M in revenue growth managed. Mike brings strategic business leadership, clinic operations and growth expertise, executive talent and coaching, and a commitment to patient-centric care models.",
  },
  {
    name: "Debra Mollé",
    role: "VP of Patient Advocacy",
    image: "/images/team/debra-molle.jpg",
    bio: "15,000+ patients guided. 30+ years of experience. Debra Mollé serves as VP of Patient Advocacy, helping people navigate the most important health decisions of their lives with clarity, compassion, and confidence. Since 2013 she has specialised in regenerative medicine, educating patients on advanced stem cell protocols. A member of The American College of Regenerative Medicine (TACRM) and a recipient of the Who's Who in America award.",
  },
  {
    name: "Irene Kim, PA-C",
    role: "Physician Assistant",
    image: "/images/team/irene-kim.jpg",
    bio: "Irene Kim, PA-C brings a neurosurgery background to regenerative and aesthetic care — years managing some of the most complex cases in medicine before bringing that depth to the team. She understands the system behind the symptom.",
  },
  {
    name: "Jhonelle Gravesandy",
    role: "Family Nurse Practitioner",
    image: "/images/team/jhonelle-gravesandy-v2.png",
    bio: "Jhonelle Gravesandy, FNP-BC — ANCC board-certified Family Nurse Practitioner with over a decade of experience in orthopedics, pain management, functional nutrition, regenerative medicine, and medical aesthetics. Her work blends evidence-based medicine with integrative, longevity-focused therapies.",
  },
  {
    name: "Jay Maly",
    role: "Health Coach",
    image: "/images/team/jay-maly-v2.png",
    bio: "Health coach focused on performance, recovery, and the daily habits that support long-term outcomes. Works alongside the clinical team to translate protocols into sustainable lifestyle change.",
  },
  {
    name: "Valerie Charlton",
    role: "Physician Associate",
    bio: "Valerie Charlton is a board-certified Physician Associate and Utah native dedicated to helping patients optimize their health, vitality, and longevity through regenerative medicine. She completed training and board certification in nuclear medicine and CT technology at the University of Utah before earning her Master of Science in Physician Assistant Studies at Dominican University of California. Her clinical experience spans primary care, gastroenterology, and dermatology, with a current focus on stem cell therapy, peptide therapy, and aesthetic treatments.",
  },
  {
    name: "Justin Loder",
    role: "Physician Assistant",
    image: "/images/utah/team/justin-loder.webp",
    bio: "Justin is an accomplished Physician Assistant with deep experience in orthopedic surgery and sports medicine. He earned his degree from Eastern Virginia Medical School and served in the United States Navy as a commissioned Medical and Naval Officer for 12 years, including an Orthopedic Surgery Fellowship at Naval Medical Center Portsmouth. With over 15 years in the health industry, he brings extensive expertise in the diagnosis, management, and surgical assistance of sports and musculoskeletal injuries — and is glad to be back home in Utah serving the community.",
  },
];

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function Avatar({ member }: { member: Member }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950">
      <span className="font-heading text-4xl font-bold uppercase tracking-wide text-white/90">
        {initials(member.name)}
      </span>
    </div>
  );
}

export function UtahTeam() {
  const [active, setActive] = useState<Member | null>(null);

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Our Salt Lake City Team
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Led by Experts
          </h2>
        </FadeUp>

        <FadeUp className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="group cursor-pointer"
              onClick={() => setActive(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(member);
                }
              }}
              aria-label={`Read bio for ${member.name}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[3/4]">
                  <Avatar member={member} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[11px] font-medium leading-snug text-white/70 sm:text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Bio for ${active.name}`}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr]">
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-full">
                  <Avatar member={active} />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                    {active.role}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-gray-900">
                    {active.name}
                  </h3>
                  <div className="mt-5 h-px w-10 bg-blue-900/20" />
                  <p className="mt-5 text-sm leading-[1.7] text-gray-600">
                    {active.bio}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
                aria-label="Close"
              >
                <svg className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
