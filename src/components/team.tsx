"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/components/motion";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  phone?: string;
  phoneHref?: string;
  calendar?: string;
};

const team: TeamMember[] = [
  {
    name: "Dr. Ravneet Dhaliwal",
    role: "Medical Director",
    image: "/images/team/ravneet-dhaliwal.jpg",
    bio: "Dr. Dhaliwal has worked at the front lines of acute inpatient care, managing patients during critical and transitional moments in their health. This experience has given her a deep understanding of both the strengths and limitations of traditional treatment pathways.",
  },
  {
    name: "Ajit Dhaliwal MD, MBA",
    role: "Founder and Clinical Vision",
    image: "/images/team/ajit-dhaliwal.jpeg",
    bio: "Internal Medicine\u2013trained physician with a performance-driven approach to health strategy. Regenerative and longevity-focused clinical advisor, educator, and program developer.",
  },
  {
    name: "Jay Maly",
    role: "Health Coach",
    image: "/images/team/jay-maly-v2.png",
    bio: "I\u2019m focused on growing my brand, improving my products, and finding smarter ways to market and package my work. I\u2019m driven, curious, and committed to turning my design skills into something bigger.",
  },
  {
    name: "Jhonelle Gravesandy",
    role: "Family Nurse Practitioner",
    image: "/images/team/jhonelle-gravesandy-v2.png",
    bio: "Jhonelle Gravesandy, FNP-BC \u2014 ANCC board-certified Family Nurse Practitioner with over a decade of experience in orthopedics, pain management, functional nutrition, regenerative medicine, and medical aesthetics. Her work blends evidence-based medicine with integrative, longevity-focused therapies to support healing, performance, and aesthetics wellness.",
  },
  {
    name: "Irene Kim, PA-C",
    role: "Physician Assistant",
    image: "/images/team/irene-kim.jpg",
    bio: "Most people don\u2019t expect their regenerative medicine clinician to have a neurosurgery background. Irene Kim, PA-C does. Years managing some of the most complex cases in medicine \u2014 traumatic injuries, degenerative disorders, patients who had run out of options \u2014 before bringing that depth to regenerative and aesthetic care. She doesn\u2019t just treat the symptom. She understands the system behind it. That\u2019s exactly the kind of clinician we have on this team. That\u2019s who\u2019s waiting for you at Regen Health Physicians.",
  },
  {
    name: "Debra Moll\u00e9",
    role: "VP of Patient Advocacy",
    image: "/images/team/debra-molle.jpg",
    bio: "15,000+ patients guided. 30+ years of experience. Debra Moll\u00e9 joins Regen Health Physicians as VP of Patient Advocacy, bringing a career spent helping people navigate the most important health decisions of their lives with clarity, compassion, and confidence. Since 2013, she has specialised in regenerative medicine, working alongside physicians and clinical teams to educate patients on advanced stem cell protocols and ensure every individual feels seen, heard, and supported. Her background spans Life Time Fitness, Advocate Good Shepherd Hospital, and Rush Copley Medical Center. She is a member of The American College of Regenerative Medicine (TACRM) and a recipient of the Who\u2019s Who in America award.",
    phone: "+1 (630) 518-0014",
    phoneHref: "tel:+16305180014",
    calendar: "https://calendly.com/dmolle-rhpny/30min",
  },
];

function TeamCard({
  member,
  onClick,
}: {
  member: TeamMember;
  onClick: () => void;
}) {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Read bio for ${member.name}`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[3/4]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Name + role */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white sm:text-base">
              {member.name}
            </h3>
            <p className="mt-0.5 line-clamp-2 text-[11px] font-medium leading-snug text-white/70 sm:text-xs">
              {member.role}
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9">
            <svg
              className="h-3.5 w-3.5 text-gray-900 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BioModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Bio for ${member.name}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr]">
          {/* Photo */}
          <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 640px) 240px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                {member.role}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-gray-900">
                {member.name}
              </h3>

              <div className="mt-5 h-px w-10 bg-blue-900/20" />

              <p className="mt-5 text-sm leading-[1.7] text-gray-600">
                {member.bio}
              </p>

              {(member.phone || member.calendar) && (
                <div className="mt-6 flex flex-col gap-2 border-t border-gray-100 pt-5 sm:flex-row sm:flex-wrap sm:gap-3">
                  {member.phone && (
                    <a
                      href={member.phoneHref ?? `tel:${member.phone.replace(/[^+\d]/g, "")}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 transition-all hover:border-blue-900 hover:bg-blue-900 hover:text-white sm:text-sm"
                    >
                      <svg
                        className="h-4 w-4 text-blue-900 transition-colors group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a.992.992 0 0 1-1.16.392 13.512 13.512 0 0 1-6.586-6.586.992.992 0 0 1 .392-1.16l1.293-.97c.362-.271.527-.733.417-1.173L7.332 3.852A1.125 1.125 0 0 0 6.24 3H4.5A2.25 2.25 0 0 0 2.25 5.25v1.5Z"
                        />
                      </svg>
                      {member.phone}
                    </a>
                  )}
                  {member.calendar && (
                    <a
                      href={member.calendar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-lg sm:text-sm"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0V11.25A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                      Book Consultation
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          aria-label="Close"
        >
          <svg
            className="h-4 w-4 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export function Team() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
            Our Medical Advisers
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Led by Experts
          </h2>
        </FadeUp>

        <FadeUp className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              onClick={() => setActiveMember(member)}
            />
          ))}
        </FadeUp>
      </div>

      {/* Bio modal */}
      <AnimatePresence>
        {activeMember && (
          <BioModal
            member={activeMember}
            onClose={() => setActiveMember(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
