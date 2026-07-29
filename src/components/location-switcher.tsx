"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  LOCATIONS,
  LOCATION_LIST,
  LOCATION_COOKIE,
  DEFAULT_LOCATION,
  isLocationSlug,
  type LocationSlug,
} from "@/lib/locations";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

// Header control: remembers a preferred clinic in a cookie and localizes the
// phone number shown. Additive — does not alter existing navigation.
export function LocationSwitcher() {
  const [slug, setSlug] = useState<LocationSlug>(DEFAULT_LOCATION);
  const [chosen, setChosen] = useState(true); // false until we know a cookie exists
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = readCookie(LOCATION_COOKIE);
    if (isLocationSlug(v)) {
      setSlug(v);
      setChosen(true);
    } else {
      setChosen(false);
    }
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const pick = (s: LocationSlug) => {
    document.cookie = `${LOCATION_COOKIE}=${s};path=/;max-age=31536000;samesite=lax`;
    setSlug(s);
    setChosen(true);
    setOpen(false);
  };

  const loc = LOCATIONS[slug];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-900/30 hover:text-blue-900"
      >
        <svg className="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <span className="tabular-nums">{loc.short}</span>
        {!chosen && <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />}
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          <p className="border-b border-gray-100 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Choose your location
          </p>
          {LOCATION_LIST.map((l) => (
            <div
              key={l.slug}
              className={`px-4 py-3 ${l.slug === slug ? "bg-blue-50/50" : ""}`}
            >
              <button
                type="button"
                onClick={() => pick(l.slug)}
                className="flex w-full items-start justify-between gap-3 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold text-gray-900">{l.label}</span>
                  <span className="block text-xs text-gray-500">{l.street}</span>
                  <span className="block text-xs text-gray-500">{l.hoursShort}</span>
                </span>
                {l.slug === slug && (
                  <svg className="mt-1 h-4 w-4 shrink-0 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </button>
              <div className="mt-2 flex items-center gap-4">
                <a href={l.phoneHref} className="text-xs font-medium text-blue-900 hover:underline">
                  {l.phoneDisplay}
                </a>
                <Link
                  href={`/locations/${l.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-xs font-medium text-gray-500 hover:text-blue-900"
                >
                  View clinic &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
