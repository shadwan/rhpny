# Utah → RHPNY Merge — Completion Report

Branch: **`utah-merge`** · commit `9d8123f` · build: passing (236 static pages)

Goal: fold rhputah.com into rhpny.com. Bring over everything the Utah site had,
add a two-location system, set up redirects — without changing any existing
rhpny page content.

---

## ✅ Done (on-site, in the `utah-merge` branch)

### New pages (5) — full SEO + JSON-LD
| Route | Notes |
|---|---|
| `/mens-sexual-health` | ED, low T, Peyronie's, PE, performance decline, post-surgical. Two protocol programs, process, candidates. `MedicalWebPage` schema. |
| `/womens-sexual-health` | Libido, hormones, dryness, energy, mood. Hormonal restoration + intimate wellness programs. `MedicalWebPage` schema. |
| `/longevity-program` | Standalone page that **reuses the existing Programs section** (all 10 programs) unchanged + a hero. |
| `/locations/new-york` | Upper East Side clinic — address, hours, map, services, team, testimonials. `MedicalClinic` schema. |
| `/locations/salt-lake-city` | SLC clinic — same structure, Utah NAP/hours. `MedicalClinic` schema. |

Each has: unique `<title>` + meta description + keywords, canonical, OpenGraph +
Twitter cards, and JSON-LD. All render as static pages.

### Content + images
- Copy adapted from the live rhputah.com pages. **Fixed a copy bug** on the Utah
  site (its "Premature Ejaculation" card described hair loss) — rewritten correctly.
- **Images pulled from rhputah.com** → `public/images/utah/` (6 WebP photos: hero,
  men's, women's, section images).

### Salt Lake City team (differs from NYC)
The Utah About page has a **different roster** than rhpny — six shared, four
Utah-only. The SLC location page now renders its own team (`utah-team.tsx`); the
NYC page keeps the shared `<Team />`.
- **Shared with NYC (real photos reused):** Ajit Dhaliwal, Dr. Ravneet Dhaliwal
  (Utah bio: Family Medicine–trained), Debra Mollé, Irene Kim PA-C, Jhonelle
  Gravesandy, Jay Maly.
- **Utah-only (new — initials avatar until a headshot is added):**
  - **Jhonny Nobles** — Founding Partner
  - **Mike Butterfield** — Founding Partner
  - **Valerie Charlton** — Physician Associate (Utah native)
  - **Justin Loder** — Physician Assistant (orthopedics / sports medicine, ex-Navy)
  - ⚠️ Headshots for these four are on rhputah.com's About page but the Elementor
    markup couldn't be mapped to each person reliably (one was an AI placeholder).
    **Send the four photos and I'll wire them in.**

### Location system
- `src/lib/locations.ts` — single source of truth for both clinics (address, phone,
  hours, geo, map, GBP-ready).
- `src/lib/location-schema.ts` — per-clinic `MedicalClinic` structured data.
- **Header location switcher** (`location-switcher.tsx`) — cookie-based, remembers a
  preferred clinic and **localizes the phone number** shown; dropdown lists both
  clinics with address, hours, phone, and a link to each location page.
- Location links added **additively** to the header (desktop dropdown = new service
  pages; mobile menu = both locations) and the footer.

### SEO / infra
- 5 new routes added to `sitemap.ts`.
- **rhputah.com → rhpny 301 map** in `next.config.ts` (host-based redirects, incl. a
  catch-all for WordPress feeds/wp-json). Ready to fire once the domain is attached.
- **No existing rhpny page copy was changed.** Header/footer edits are additive
  (new nav links + the switcher replacing the static phone with a location-aware one).

---

## ⚠️ Verify before merging to main
- **SLC geo coordinates** in `locations.ts` are approximate (`40.6839, -111.8535`).
  Replace with the exact clinic coordinates.
- **SLC map + GBP link** currently use a Google Maps *search* URL. Swap in the real
  Google Business Profile / place link once available.
- Confirm SLC phone `(385) 442-7744` and hours `Mon–Fri 8am–5pm` are current.
- Visual QA of the 5 pages in a browser.

---

## 🔧 Off-site work — must be done outside the codebase

These cannot be done from the repo. In priority order:

1. **Fix Vercel auto-deploy.** It has been broken since ~June 26 (pushes aren't
   deploying). Nothing in this branch — or the pending doctor/phone/video fixes —
   goes live until that's restored. Check Vercel → Settings → Git.

2. **Point rhputah.com at the rhpny Vercel project.**
   - Update rhputah.com DNS to Vercel, and **add `rhputah.com` as a domain** on the
     rhpny project. Only then do the `next.config` host redirects activate.
   - Verify a few 301s resolve (e.g. `rhputah.com/hair-restoration` →
     `www.rhpny.com/precision-hair-restoration-for-men-and-women`).

3. **Google Business Profile (Utah).** Update the SLC profile's website URL to
   `https://www.rhpny.com/locations/salt-lake-city`. Keep name/address/phone
   identical to the location page + schema (NAP consistency drives the local pack).

4. **Google Search Console.**
   - Submit the updated `sitemap.xml`.
   - For rhputah.com: use **Change of Address** to rhpny.com after redirects are live;
     monitor coverage + the redirect report.
   - Watch that Utah keywords hold their rankings post-migration.

5. **Decommission WordPress** only after redirects + rankings are verified stable.
   Keep the rhputah.com domain registered and redirecting long-term (protects
   backlinks + direct traffic).

---

## Optional / future
- Geo/IP auto-suggest for the location switcher on first visit (currently a subtle
  "unset" dot until the user picks).
- Distinct Utah team bios / testimonials if the SLC clinic has its own staff.
- Per-location booking links if Typeform routing should differ by clinic.

---

## Files changed
**New:** `mens-sexual-health/`, `womens-sexual-health/`, `longevity-program/`,
`locations/new-york/`, `locations/salt-lake-city/` pages · `service-page.tsx` ·
`location-page.tsx` · `location-switcher.tsx` · `lib/locations.ts` ·
`lib/location-schema.ts` · `public/images/utah/*` (6 images)
**Modified (additive):** `header.tsx` · `footer.tsx` · `sitemap.ts` · `next.config.ts`
