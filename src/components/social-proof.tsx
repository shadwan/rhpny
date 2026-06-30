"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

const partners = [
  { name: "NFL", logo: "/images/partners/nfl.png" },
  { name: "FDNY", logo: "/images/partners/fdny.png" },
  { name: "MMA", logo: "/images/partners/mma.png" },
];

export function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Hundreds of patients served globally, including individuals affiliated with
          </p>
        </FadeUp>

        <StaggerContainer className="mt-10 flex items-center justify-center gap-12 sm:gap-16 lg:gap-20">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={80}
                className="h-16 w-auto transition-transform duration-300 hover:scale-105 sm:h-20"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="mt-10 text-center">
          <p className="text-sm font-medium tracking-wide text-gray-500">
            Doctor-led care. Private protocols. No volume medicine.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
