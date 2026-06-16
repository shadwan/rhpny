"use client";

import { useState } from "react";

// Posts to your LeadConnector inbound webhook.
const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/jUwxkWp492R6zkJRFkON/webhook-trigger/11ac11c8-0bff-4b5b-8d1c-270221b76485";

type Status = "idle" | "submitting" | "success" | "error";

const ADDRESS_OPTIONS = [
  "Joint or back pain",
  "Neuropathy",
  "Sports or orthopedic injury",
  "Chronic or hard-to-treat condition",
  "Hair restoration",
  "Aesthetics",
  "Longevity / overall wellness",
  "Not sure yet",
];

const AGE_RANGES = [
  "Under 30",
  "30–39",
  "40–49",
  "50–59",
  "60–69",
  "70+",
];

const HEALTH_OPTIONS = [
  "Excellent",
  "Good",
  "Fair",
  "Managing one or more conditions",
];

const CONTACT_PREF = ["Phone call", "Text message", "Either is fine"];

const HEARD_OPTIONS = [
  "Google search",
  "Social media",
  "Referred by a friend or family member",
  "Referred by a doctor",
  "Saw an ad",
  "Other",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  address_concern: "",
  age_range: "",
  health_overall: "",
  contact_preference: "",
  heard_about: "",
};

export function BookForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof initialState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "rhpny.com /book",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-blue-900/15 bg-white p-10 text-center shadow-sm sm:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-900/10">
          <svg
            className="h-7 w-7 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-heading text-2xl text-gray-900">
          Thank you — we&apos;ve received your request.
        </h3>
        <p className="mt-3 text-base text-neutral-600">
          A member of our clinical team will reach out shortly to schedule your
          consultation.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-gray-900 transition-colors placeholder:text-neutral-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/15";
  const labelClass =
    "mb-2 block text-sm font-medium text-gray-800";

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-[#FBFAF8] p-6 shadow-sm sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-blue-900">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number <span className="text-blue-900">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(555) 555-5555"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-blue-900">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address_concern" className={labelClass}>
            What are you most looking to address?
          </label>
          <select
            id="address_concern"
            value={form.address_concern}
            onChange={update("address_concern")}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {ADDRESS_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="age_range" className={labelClass}>
            Age range
          </label>
          <select
            id="age_range"
            value={form.age_range}
            onChange={update("age_range")}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {AGE_RANGES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="health_overall" className={labelClass}>
            How would you describe your overall health?
          </label>
          <select
            id="health_overall"
            value={form.health_overall}
            onChange={update("health_overall")}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {HEALTH_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact_preference" className={labelClass}>
            Best way to reach you
          </label>
          <select
            id="contact_preference"
            value={form.contact_preference}
            onChange={update("contact_preference")}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {CONTACT_PREF.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="heard_about" className={labelClass}>
            How did you hear about us?
          </label>
          <select
            id="heard_about"
            value={form.heard_about}
            onChange={update("heard_about")}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {HEARD_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 text-sm text-red-600">
          Please add your name, phone, and email, then try again. If the problem
          continues, call us directly.
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "submitting"}
        className="mt-8 w-full rounded-full bg-blue-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request my consultation"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-neutral-500">
        By submitting, you agree to be contacted about your consultation. We
        respect your privacy and never share your information.
      </p>
    </div>
  );
}
