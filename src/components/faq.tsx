"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp } from "@/components/motion";

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    q: "What does Regen Health Physicians actually do?",
    a: (
      <p>
        We&rsquo;re a doctor-led regenerative medicine practice with locations
        in New York City and Salt Lake City. Our work spans six core specialties:
        hair restoration, regenerative medicine, aesthetics, joint and orthopedic
        care, peptide therapy, and chronic disease care. We also run ten longevity
        and performance programs covering everything from musculoskeletal pain to
        executive health. Every protocol is built around your biology &mdash; not
        a menu.
      </p>
    ),
  },
  {
    q: "How is this different from a med spa?",
    a: (
      <p>
        A med spa runs on volume, cookie-cutter protocols, and surface-level
        treatments. We don&rsquo;t. Our care is doctor-designed, biologically
        personalized, and delivered through a concierge model with direct access
        to your doctor. If you&rsquo;re looking for a quick walk-in injection,
        we&rsquo;re probably not the right fit. If you want a real clinical
        outcome, we are.
      </p>
    ),
  },
  {
    q: "Who is the clinical team?",
    a: (
      <p>
        Our practice is founded and led by Dr. Ajit Dhaliwal, with Dr. Ravneet
        Dhaliwal serving as Medical Director, alongside our Family Nurse
        Practitioner Jhonelle Gravesandy and Health Coach Jay Maly. We&rsquo;ve
        served 500+ patients globally, including individuals affiliated with the
        NFL, FDNY, and professional MMA.
      </p>
    ),
  },
  {
    q: "What does the first visit look like?",
    a: (
      <p>
        It starts with a private consultation &mdash; virtual or in person &mdash;
        where we review your goals, history, and biomarkers. From there, your
        doctor designs a personalized protocol. We don&rsquo;t pressure-sell
        packages, and we don&rsquo;t recommend treatments you don&rsquo;t need.
        Consultations are unhurried by design.
      </p>
    ),
  },
  {
    q: "Where are you located?",
    a: (
      <div className="space-y-4">
        <p>We have two locations:</p>
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-gray-900">New York City</p>
            <p>184 E 70th St, Level B1, Suite B1, New York, NY 10021</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Salt Lake City</p>
            <p>1345 East 3900 South, Suite 110, Salt Lake City, UT 84124</p>
          </div>
        </div>
        <p>
          You can reach us at{" "}
          <a
            href="tel:+19295773424"
            className="font-medium text-blue-900 underline-offset-2 hover:underline"
          >
            +1 (929) 577-3424
          </a>{" "}
          or{" "}
          <a
            href="mailto:admin@rhpny.com"
            className="font-medium text-blue-900 underline-offset-2 hover:underline"
          >
            admin@rhpny.com
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    q: "How do I pay for treatment? Do you take insurance?",
    a: (
      <p>
        Most regenerative and aesthetic treatments are elective and not covered
        by insurance, so we operate as a cash-pay practice. We accept all major
        credit and debit cards, HSA and FSA cards (for eligible services), and we
        offer financing through three trusted partners so cost doesn&rsquo;t have
        to be a barrier to care.
      </p>
    ),
  },
  {
    q: "What financing options do you offer?",
    a: (
      <div className="space-y-4">
        <p>
          We work with three patient financing partners so you can choose what
          fits your situation:
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
            <span>
              <span className="font-semibold text-gray-900">Cherry</span> &mdash;
              Soft credit check (no impact on your score), instant decisions,
              payment plans from 6 weeks to 60 months, with 0% APR options for
              qualifying patients. Apply in under 60 seconds.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
            <span>
              <a
                href="https://www.advancecarecard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-900 underline-offset-2 hover:underline"
              >
                Advance Care Card
              </a>{" "}
              &mdash; Interest-free promotional periods of 6 to 14 months for
              qualifying applicants, with longer-term plans available. No
              application or annual fees.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
            <span>
              <a
                href="https://mymedicalfunding.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-900 underline-offset-2 hover:underline"
              >
                My Medical Funding
              </a>{" "}
              &mdash; Installment loans with rates as low as 6.59%, ideal if you
              need a longer repayment timeline or weren&rsquo;t approved through
              the card programs.
            </span>
          </li>
        </ul>
        <p>
          We&rsquo;ll walk you through the options at your consultation and help
          you find the best fit. Apply ahead of your visit so funds are ready
          when you book.
        </p>
      </div>
    ),
  },
  {
    q: "Can I use my HSA or FSA?",
    a: (
      <p>
        Yes. Many of our medically necessary treatments &mdash; particularly
        within regenerative medicine, joint and orthopedic care, peptide therapy,
        and chronic disease protocols &mdash; are eligible for HSA and FSA
        payment. Aesthetic treatments are typically not eligible. We&rsquo;re
        happy to provide itemized receipts for reimbursement, but we always
        recommend confirming eligibility with your HSA or FSA administrator
        before your appointment.
      </p>
    ),
  },
  {
    q: "Are the treatments safe? Is there downtime?",
    a: (
      <p>
        Every protocol is delivered or directly overseen by a doctor, with
        treatments selected based on your individual biology, history, and goals.
        Most regenerative and aesthetic procedures involve minimal to no downtime
        &mdash; many of our patients fly in from out of state and return home the
        same day. Your doctor will walk you through any specific recovery
        considerations during your consultation.
      </p>
    ),
  },
];

function FaqRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-gray-200">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full items-start gap-5 py-6 text-left sm:gap-6 sm:py-7"
      >
        <span
          className={`mt-1 shrink-0 font-mono text-xs tabular-nums transition-colors sm:text-sm ${
            isOpen ? "text-blue-900" : "text-gray-400 group-hover:text-blue-900"
          }`}
        >
          {num}
        </span>
        <h3
          className={`flex-1 font-heading text-base font-semibold leading-snug tracking-tight transition-colors sm:text-lg md:text-xl ${
            isOpen ? "text-blue-900" : "text-gray-900 group-hover:text-blue-900"
          }`}
        >
          {item.q}
        </h3>
        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all sm:h-9 sm:w-9 ${
            isOpen
              ? "border-blue-900 bg-blue-900 text-white"
              : "border-gray-300 bg-white text-gray-700 group-hover:border-blue-900 group-hover:text-blue-900"
          }`}
          aria-hidden="true"
        >
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[2.25rem] pr-12 text-sm leading-relaxed text-gray-600 sm:pl-[2.75rem] sm:text-base">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-900">
              FAQ
            </span>
          </FadeUp>
          <FadeUp>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Everything you need to know before booking with Regen Health
              Doctors.
            </p>
          </FadeUp>
        </div>

        <FadeUp className="mt-14 sm:mt-16">
          <div className="border-t border-gray-200">
            {faqs.map((item, i) => (
              <FaqRow
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
