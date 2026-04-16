"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const team = [
  {
    name: "Dr. Ravneet Dhaliwal",
    role: "Medical Director",
    image: "/images/team/ravneet-dhaliwal.jpeg",
  },
  {
    name: "Ajit Dhaliwal MD, MBA",
    role: "Founder and Clinical Vision",
    image: "/images/team/ajit-dhaliwal.png",
  },
  {
    name: "Jay Maly",
    role: "Health Coach",
    image: "/images/team/jay-maly.png",
  },
  {
    name: "Will Michael",
    role: "Strategic Leadership and Platform Architecture",
    image: "/images/team/will-michael.png",
  },
  {
    name: "Jhonelle Gravesandy",
    role: "Family Nurse Practitioner",
    image: "/images/team/jhonelle-gravesandy.png",
  },
];

export function Team() {
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

        <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
