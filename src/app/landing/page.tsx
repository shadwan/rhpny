"use client";

import { useState } from "react";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Gymcft7ndCPwa35xV8fl/webhook-trigger/63219b07-3106-4aae-8978-af0db9f66a98";
const REDIRECT_URL = "https://rhpny.com/thankyou";

export default function StemCellOfferPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async () => {
    setError("");

    if (!form.first_name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          full_name: `${form.first_name} ${form.last_name}`.trim(),
          source: "Landing Page - Stem Cell $3,999",
          page_url: typeof window !== "undefined" ? window.location.href : "",
          submitted_at: new Date().toISOString(),
        }),
      });

      // Fire Facebook Lead event if the pixel is present
      if (typeof window !== "undefined" && (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...a: unknown[]) => void }).fbq("track", "Lead");
      }

      window.location.href = REDIRECT_URL;
    } catch {
      // Even if the webhook hiccups, still send them to thank-you so the UX isn't broken.
      window.location.href = REDIRECT_URL;
    }
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .scc-page *, .scc-page *::before, .scc-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .scc-page {
          --black: #0e0e0e; --near-black: #1a1a1a; --dark: #2a2a2a; --mid: #666666;
          --light: #999999; --border: #e8e8e8; --bg: #ffffff; --off-white: #F6F2F0;
          --blue: #1F6FB2; --sage: #3AA17E; --accent: #1F6FB2;
          font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--black);
          overflow-x: hidden; -webkit-font-smoothing: antialiased;
        }

        .scc-page .brand-bar { border-bottom: 1px solid var(--border); padding: 18px 40px; display: flex; align-items: center; justify-content: space-between; }
        .scc-page .brand-logo { display: flex; align-items: center; }
        .scc-page .brand-logo img { height: 38px; width: auto; display: block; }
        .scc-page .brand-badge { font-size: 0.72em; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--light); }
        @media (max-width: 600px) { .scc-page .brand-bar { padding: 14px 20px; } .scc-page .brand-badge { display: none; } .scc-page .brand-logo img { height: 32px; } }

        .scc-page .hero { display: grid; grid-template-columns: 1fr 580px; min-height: calc(100vh - 75px); align-items: stretch; }
        @media (max-width: 960px) { .scc-page .hero { grid-template-columns: 1fr; min-height: auto; } }

        .scc-page .hero-left { padding: 80px 72px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid var(--border); background: var(--bg); }
        @media (max-width: 1100px) { .scc-page .hero-left { padding: 72px 52px; } }
        @media (max-width: 960px)  { .scc-page .hero-left { padding: 60px 36px 48px; border-right: none; border-bottom: 1px solid var(--border); } }
        @media (max-width: 500px)  { .scc-page .hero-left { padding: 48px 24px 40px; } }

        .scc-page .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 0.72em; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--light); margin-bottom: 32px; }
        .scc-page .eyebrow-line { width: 32px; height: 1px; background: var(--border); }
        .scc-page .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: sccblink 2.5s infinite; }
        @keyframes sccblink { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .scc-page .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.8em, 4.8vw, 5.2em); font-weight: 900; line-height: 1.0; letter-spacing: -0.03em; color: var(--black); margin-bottom: 32px; }
        .scc-page .hero h1 .italic { font-style: italic; }
        .scc-page .hero h1 .gray   { color: #b8b8b8; }
        .scc-page .hero h1 .accent { color: var(--accent); }

        .scc-page .hero-sub { font-size: 1.08em; color: var(--mid); line-height: 1.7; max-width: 480px; margin-bottom: 44px; }

        .scc-page .hero-price-block { display: flex; align-items: center; gap: 20px; margin-bottom: 10px; flex-wrap: wrap; }
        .scc-page .price-big { font-family: 'DM Sans', sans-serif; font-size: 3.8em; font-weight: 700; color: var(--black); letter-spacing: -0.04em; line-height: 1; }
        .scc-page .price-right { display: flex; flex-direction: column; gap: 4px; }
        .scc-page .price-right s { font-size: 1.3em; font-weight: 400; color: #ccc; letter-spacing: -0.02em; }
        .scc-page .savings-tag { display: inline-block; background: var(--accent); color: white; font-size: 0.72em; font-weight: 700; letter-spacing: 0.5px; padding: 4px 10px; border-radius: 4px; }
        .scc-page .price-caption { font-size: 0.85em; color: var(--light); margin-bottom: 40px; font-style: italic; }

        .scc-page .checklist { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .scc-page .checklist li { display: flex; align-items: center; gap: 14px; font-size: 0.96em; color: var(--dark); font-weight: 400; }
        .scc-page .chk { width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.65em; color: var(--accent); font-weight: 700; }

        .scc-page .hero-right { background: var(--off-white); display: flex; flex-direction: column; justify-content: center; padding: 72px 64px; }
        @media (max-width: 1100px) { .scc-page .hero-right { padding: 64px 48px; } }
        @media (max-width: 960px)  { .scc-page .hero-right { padding: 56px 36px 64px; } }
        @media (max-width: 500px)  { .scc-page .hero-right { padding: 48px 24px 56px; } }

        .scc-page .form-kicker { font-size: 0.7em; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
        .scc-page .form-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.6em, 2.5vw, 2em); font-weight: 800; color: var(--black); line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 28px; }

        .scc-page .lead-form { display: flex; flex-direction: column; gap: 16px; }
        .scc-page .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 420px) { .scc-page .field-row { grid-template-columns: 1fr; } }
        .scc-page .field { display: flex; flex-direction: column; gap: 6px; }
        .scc-page .field label { font-size: 0.74em; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: var(--mid); }
        .scc-page .field input, .scc-page .field select {
          font-family: 'DM Sans', sans-serif; font-size: 1em; color: var(--black);
          padding: 14px 16px; border: 1px solid var(--border); border-radius: 8px;
          background: var(--bg); outline: none; transition: border-color 0.15s, box-shadow 0.15s; width: 100%;
        }
        .scc-page .field input:focus, .scc-page .field select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(31,111,178,0.12); }
        .scc-page .field select { appearance: none; -webkit-appearance: none; cursor: pointer; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2.5'><path d='M6 9l6 6 6-6'/></svg>"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; }

        .scc-page .submit-btn {
          margin-top: 8px; background: var(--accent); color: #fff; border: none;
          font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1.05em;
          padding: 16px 24px; border-radius: 8px; cursor: pointer;
          transition: background 0.2s, transform 0.15s, opacity 0.2s;
        }
        .scc-page .submit-btn:hover:not(:disabled) { background: #1a5f99; transform: translateY(-1px); }
        .scc-page .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .scc-page .form-error { font-size: 0.82em; color: #c0392b; margin-top: 2px; }
        .scc-page .form-note { font-size: 0.72em; color: var(--light); text-align: center; margin-top: 14px; line-height: 1.6; }

        .scc-page .trust-bar { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 20px 40px; }
        .scc-page .trust-inner { max-width: 1080px; margin: 0 auto; display: flex; justify-content: center; align-items: center; gap: 48px; flex-wrap: wrap; font-size: 0.82em; font-weight: 500; color: var(--mid); }
        .scc-page .trust-item { display: flex; align-items: center; gap: 8px; }
        @media (max-width: 700px) { .scc-page .trust-inner { gap: 18px 28px; font-size: 0.78em; } }

        .scc-page .physician-section { padding: 112px 40px; background: var(--off-white); border-top: 1px solid var(--border); }
        .scc-page .physician-inner { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: 480px 1fr; gap: 80px; align-items: center; }
        @media (max-width: 960px) { .scc-page .physician-section { padding: 80px 40px; } .scc-page .physician-inner { grid-template-columns: 1fr; gap: 48px; } }
        @media (max-width: 500px) { .scc-page .physician-section { padding: 64px 24px; } }
        .scc-page .physician-image { position: relative; border-radius: 16px; overflow: hidden; background: var(--bg); border: 1px solid var(--border); aspect-ratio: 4 / 5; }
        .scc-page .physician-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .scc-page .physician-image::after { content: ''; position: absolute; inset: 0; border-radius: 16px; pointer-events: none; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04); }
        .scc-page .physician-content { display: flex; flex-direction: column; }
        .scc-page .physician-kicker { font-size: 0.7em; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
        .scc-page .physician-kicker .eyebrow-line { width: 24px; height: 1px; background: var(--accent); opacity: 0.4; }
        .scc-page .physician-h2 { font-family: 'Playfair Display', serif; font-size: clamp(2.2em, 3.8vw, 3.4em); font-weight: 900; color: var(--black); letter-spacing: -0.03em; line-height: 1.0; margin-bottom: 28px; }
        .scc-page .physician-h2 em { font-style: italic; color: var(--accent); }
        .scc-page .physician-content p { font-size: 1em; color: var(--mid); line-height: 1.75; margin-bottom: 18px; }
        .scc-page .physician-content p strong { color: var(--dark); font-weight: 600; }
        .scc-page .physician-credentials { margin-top: 16px; padding-top: 24px; border-top: 1px solid var(--border); display: flex; align-items: center; gap: 16px; }
        .scc-page .physician-sig-name { font-family: 'Playfair Display', serif; font-size: 1.3em; font-weight: 800; color: var(--black); letter-spacing: -0.01em; }
        .scc-page .physician-sig-role { font-size: 0.75em; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--light); border-left: 1px solid var(--border); padding-left: 16px; }

        .scc-page .product-section { padding: 112px 40px; background: var(--bg); }
        .scc-page .product-inner { max-width: 1080px; margin: 0 auto; }
        .scc-page .section-kicker { font-size: 0.7em; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--light); text-align: center; margin-bottom: 16px; }
        .scc-page .product-h2 { font-family: 'Playfair Display', serif; font-size: clamp(2.4em, 4.5vw, 4em); font-weight: 900; text-align: center; color: var(--black); letter-spacing: -0.03em; line-height: 1.0; margin-bottom: 16px; }
        .scc-page .product-h2 em { font-style: italic; color: var(--accent); }
        .scc-page .product-intro { text-align: center; font-size: 1.05em; color: var(--mid); max-width: 560px; margin: 0 auto 72px; line-height: 1.75; }
        .scc-page .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 64px; }
        @media (max-width: 860px) { .scc-page .product-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .scc-page .product-grid { grid-template-columns: 1fr; } }
        .scc-page .p-card { background: var(--bg); padding: 40px 36px; transition: background 0.2s; }
        .scc-page .p-card:hover { background: var(--off-white); }
        .scc-page .p-card-num { font-family: 'Playfair Display', serif; font-size: 2.2em; font-weight: 900; color: var(--border); line-height: 1; margin-bottom: 16px; letter-spacing: -0.04em; }
        .scc-page .p-card h3 { font-size: 1em; font-weight: 700; color: var(--black); margin-bottom: 10px; }
        .scc-page .p-card p { font-size: 0.87em; color: var(--mid); line-height: 1.7; }
        .scc-page .p-card strong { color: var(--dark); font-weight: 600; }

        .scc-page .compare-block { border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
        .scc-page .compare-header { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); }
        .scc-page .c-head { padding: 20px 36px; font-size: 0.72em; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
        .scc-page .c-head.them { color: var(--light); border-right: 1px solid var(--border); }
        .scc-page .c-head.us   { color: var(--accent); }
        .scc-page .c-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); }
        .scc-page .c-row:last-child { border-bottom: none; }
        .scc-page .c-cell { padding: 18px 36px; font-size: 0.9em; display: flex; align-items: center; gap: 10px; }
        .scc-page .c-cell.them { color: var(--light); border-right: 1px solid var(--border); }
        .scc-page .c-cell.us   { color: var(--dark); font-weight: 500; background: var(--off-white); }
        @media (max-width: 640px) { .scc-page .c-head, .scc-page .c-cell { padding: 14px 20px; font-size: 0.8em; } }

        .scc-page .final-cta { background: var(--black); padding: 96px 40px; text-align: center; }
        .scc-page .final-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(2em, 4vw, 3.6em); font-weight: 900; color: white; letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 16px; }
        .scc-page .final-cta h2 em { font-style: italic; color: var(--accent); }
        .scc-page .final-cta p { font-size: 1em; color: #888; margin-bottom: 36px; line-height: 1.7; }
        .scc-page .final-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--bg); color: var(--black); font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 1.05em; padding: 18px 40px; border-radius: 8px; text-decoration: none; transition: background 0.2s, transform 0.2s; cursor: pointer; border: none; }
        .scc-page .final-btn:hover { background: #f0f0f0; transform: translateY(-2px); }

        .scc-page .disclaimer { padding: 32px 40px; text-align: center; font-size: 0.7em; color: #b8b8b8; line-height: 1.7; max-width: 800px; margin: 0 auto; border-top: 1px solid var(--border); }
      `}</style>

      <div className="scc-page">
        <header className="brand-bar">
          <div className="brand-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Regen Health Physicians" />
          </div>
          <div className="brand-badge">New York · Regenerative Medicine</div>
        </header>

        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-dot"></span>
              Now Available in New York
            </div>

            <h1>
              <span className="gray italic">
                New York Clinics Charge $15,000
                <br />
                for Stem Cell Therapy.
              </span>
              <br />
              <span className="accent">
                Get It Here
                <br />
                for $3,999.
              </span>
            </h1>

            <p className="hero-sub">
              Same FDA-registered lab. Same premium MSC stem cells. No markup, no
              games — available now at Regen Health Physicians in New York,
              administered by a licensed medical team.
            </p>

            <div className="hero-price-block">
              <div className="price-big">$3,999</div>
              <div className="price-right">
                <s>$4,999</s>
                <span className="savings-tag">Save $1,000</span>
              </div>
            </div>
            <p className="price-caption">All-inclusive. No hidden fees.</p>

            <ul className="checklist">
              <li>
                <span className="chk">✓</span> Premium MSC stem cells from an
                FDA-registered U.S. lab
              </li>
              <li>
                <span className="chk">✓</span> Third-party verified cell count — not
                just marketing claims
              </li>
              <li>
                <span className="chk">✓</span> IV infusions and injections available
              </li>
              <li>
                <span className="chk">✓</span> Physician-led care under Ajit Dhaliwal,
                MD, MBA
              </li>
            </ul>
          </div>

          <div className="hero-right" id="formSection">
            <div className="form-kicker">Free · No Commitment</div>
            <h2 className="form-heading">
              Get the Details
              <br />
              Sent to You
            </h2>

            <div className="lead-form">
              <div className="field-row">
                <div className="field">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    id="first_name"
                    type="text"
                    autoComplete="given-name"
                    value={form.first_name}
                    onChange={(e) => update("first_name", e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    id="last_name"
                    type="text"
                    autoComplete="family-name"
                    value={form.last_name}
                    onChange={(e) => update("last_name", e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="reason">What brings you in?</label>
                <select
                  id="reason"
                  value={form.reason}
                  onChange={(e) => update("reason", e.target.value)}
                >
                  <option value="">Select one…</option>
                  <option value="Joint / Knee Pain">Joint / Knee Pain</option>
                  <option value="Back / Spine">Back / Spine</option>
                  <option value="Arthritis">Arthritis</option>
                  <option value="Sports Injury">Sports Injury</option>
                  <option value="Anti-Aging / Longevity">Anti-Aging / Longevity</option>
                  <option value="Neuropathy">Neuropathy</option>
                  <option value="General Wellness">General Wellness</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {error && <div className="form-error">{error}</div>}

              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Request Information →"}
              </button>
            </div>

            <p className="form-note">
              We&apos;ll reach out within a few hours with everything you need to
              know — pricing, availability, and next steps. No commitment required.
            </p>
          </div>
        </section>

        <div className="trust-bar">
          <div className="trust-inner">
            <div className="trust-item">🇺🇸 U.S.-Sourced MSC Stem Cells</div>
            <div className="trust-item">📍 New York Clinic</div>
            <div className="trust-item">🛡️ Non-Vaccinated Donors</div>
            <div className="trust-item">🔬 Lab-Verified Cell Count</div>
            <div className="trust-item">👩‍⚕️ Physician-Led Care</div>
          </div>
        </div>

        <section className="physician-section">
          <div className="physician-inner">
            <div className="physician-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/team/physician-authority.jpeg"
                alt="Ajit Dhaliwal, MD, MBA — Founder of Regen Health Physicians"
              />
            </div>
            <div className="physician-content">
              <div className="physician-kicker">
                <span className="eyebrow-line"></span>
                Physician Authority
              </div>
              <h2 className="physician-h2">
                Physician Insight
                <br />
                <em>Still Matters.</em>
              </h2>
              <p>
                Founded and led by <strong>Dr. Ajit Dhaliwal</strong>, our clinic is
                built on one principle: medicine should be personal, precise, and
                accountable.
              </p>
              <p>
                Today, Dr. Dhaliwal focuses on clinical vision, protocol development,
                and outcome standards — bringing physician-level insight to the
                systems and care models that guide every patient journey.
              </p>
              <div className="physician-credentials">
                <div className="physician-sig-name">Ajit Dhaliwal, MD, MBA</div>
                <div className="physician-sig-role">Founder · Clinical Vision</div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-inner">
            <div className="section-kicker">What You&apos;re Getting</div>
            <h2 className="product-h2">
              Clinic-Grade Quality.
              <br />
              <em>Clinic-Fair Price.</em>
            </h2>
            <p className="product-intro">
              Top clinics charge $8,000–$15,000 for the same MSC stem cells available
              at Regen Health Physicians. Here&apos;s exactly what&apos;s in your
              treatment.
            </p>

            <div className="product-grid">
              <div className="p-card">
                <div className="p-card-num">01</div>
                <h3>Umbilical Cord MSCs</h3>
                <p>
                  Mesenchymal stem cells from donated umbilical cord tissue — among
                  the youngest, most potent sources available.{" "}
                  <strong>No painful extraction from your own body.</strong>
                </p>
              </div>
              <div className="p-card">
                <div className="p-card-num">02</div>
                <h3>Third-Party Lab Verified</h3>
                <p>
                  Every vial is independently tested for actual cell count before it
                  reaches you.{" "}
                  <strong>Some clinics charge $15,000 for unverified products</strong>{" "}
                  — we verify everything.
                </p>
              </div>
              <div className="p-card">
                <div className="p-card-num">03</div>
                <h3>FDA-Registered Lab Source</h3>
                <p>
                  We source directly — <strong>no brokers, no middlemen</strong>{" "}
                  adding markup. That&apos;s how we keep this at $3,999 instead of
                  $12,000. Same lab. Same cells. Lower price.
                </p>
              </div>
              <div className="p-card">
                <div className="p-card-num">04</div>
                <h3>Cold-Chain Protected</h3>
                <p>
                  Cryo-preserved and shipped in temperature-monitored containers. Cell
                  integrity is verified on arrival to ensure{" "}
                  <strong>maximum cell viability</strong> for your treatment.
                </p>
              </div>
              <div className="p-card">
                <div className="p-card-num">05</div>
                <h3>Screened Donors</h3>
                <p>
                  Non-vaccinated donor mothers with full medical history review. Fully
                  compliant with all FDA guidelines for human cell and tissue products{" "}
                  <strong>(HCT/Ps)</strong>.
                </p>
              </div>
              <div className="p-card">
                <div className="p-card-num">06</div>
                <h3>Administered by Regen Health</h3>
                <p>
                  Regen Health Physicians&apos; licensed medical professionals
                  administer your treatment at our New York clinic.{" "}
                  <strong>IV infusions and targeted injections available.</strong>
                </p>
              </div>
            </div>

            <div className="compare-block">
              <div className="compare-header">
                <div className="c-head them">Other Clinics</div>
                <div className="c-head us">Regen Health Physicians</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;$8,000–$15,000 per treatment</div>
                <div className="c-cell us">✓ &nbsp;$3,999 all-inclusive</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;Hidden pricing — &quot;come in first&quot;</div>
                <div className="c-cell us">✓ &nbsp;Price listed right here, no games</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;Commissioned sales staff, pressure tactics</div>
                <div className="c-cell us">✓ &nbsp;Zero commission, zero pressure</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;IV only — no injection option</div>
                <div className="c-cell us">✓ &nbsp;IV infusions and injections available</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;Unverified or undisclosed cell counts</div>
                <div className="c-cell us">✓ &nbsp;Third-party lab verified, every vial</div>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <h2>
            Ready to Feel
            <br />
            <em>Your Best?</em>
          </h2>
          <p>
            $3,999 all-inclusive. IV infusions and injections at Regen Health
            Physicians in New York.
          </p>
          <a className="final-btn" href="#formSection">
            Request Information
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </section>

        <div className="disclaimer">
          <strong>Medical Disclaimer:</strong> Stem cell therapy is not FDA-approved
          to treat, cure, or prevent any disease or medical condition. Individual
          results vary and are not guaranteed. This page does not constitute medical
          advice. Consult with a licensed healthcare provider before beginning any
          treatment. Promotional pricing valid during offer period only.
        </div>
      </div>
    </>
  );
}
