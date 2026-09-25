"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function StemCellOfferPage() {
  const [showSticky, setShowSticky] = useState(true);

  // Hide the mobile sticky CTA while the form is on screen
  useEffect(() => {
    const target = document.getElementById("formSection");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* GHL form embed script — required for the iframe to auto-resize + submit correctly */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

      <style>{`
        .scc-page *, .scc-page *::before, .scc-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .scc-page {
          --black: #0e0e0e; --dark: #2a2a2a; --mid: #5f5f5f;
          --light: #999999; --border: #e8e8e8; --bg: #ffffff; --off-white: #F6F2F0;
          --blue: #1F6FB2; --sage: #3AA17E; --accent: #1F6FB2;
          font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--black);
          overflow-x: hidden; -webkit-font-smoothing: antialiased;
        }
        .scc-page a:focus-visible, .scc-page summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

        /* Hero */
        .scc-page .hero { display: grid; grid-template-columns: 1fr 560px; align-items: stretch; }
        @media (max-width: 1100px) { .scc-page .hero { grid-template-columns: 1fr 480px; } }
        @media (max-width: 960px) { .scc-page .hero { grid-template-columns: 1fr; } }

        .scc-page .hero-left { padding: 56px 72px 64px; display: flex; flex-direction: column; justify-content: flex-start; border-right: 1px solid var(--border); }
        @media (max-width: 1100px) { .scc-page .hero-left { padding: 48px 48px 56px; } }
        @media (max-width: 960px)  { .scc-page .hero-left { padding: 44px 28px 36px; border-right: none; border-bottom: 1px solid var(--border); } }
        @media (max-width: 500px)  { .scc-page .hero-left { padding: 36px 22px 32px; } }

        .scc-page .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 0.85em; font-weight: 600; color: var(--accent); margin-bottom: 24px; }
        .scc-page .eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sage); animation: sccblink 2.5s infinite; }
        @keyframes sccblink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @media (prefers-reduced-motion: reduce) { .scc-page .eyebrow-dot { animation: none; } }

        .scc-page .hero-left > * { max-width: 820px; }
        .scc-page .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.4em, 4.4vw, 4.6em); font-weight: 900; line-height: 1.02; letter-spacing: -0.03em; color: var(--black); margin-bottom: 24px; }
        .scc-page .hero h1 .anchor { display: block; font-style: italic; color: #b3b3b3; font-size: 0.62em; line-height: 1.15; margin-bottom: 10px; }
        .scc-page .hero h1 .anchor s { text-decoration-thickness: 3px; }

        .scc-page .hero-sub { font-size: 1.08em; color: var(--mid); line-height: 1.7; max-width: 500px; margin-bottom: 32px; }

        .scc-page .hero-price-block { display: flex; align-items: center; gap: 18px; margin-bottom: 8px; flex-wrap: wrap; }
        .scc-page .price-big { font-size: 3.8em; font-weight: 700; color: var(--black); letter-spacing: -0.04em; line-height: 1; }
        .scc-page .price-right { display: flex; flex-direction: column; gap: 4px; }
        .scc-page .price-right s { font-size: 1.4em; color: #bdbdbd; letter-spacing: -0.02em; }
        .scc-page .savings-tag { display: inline-block; background: var(--sage); color: white; font-size: 0.78em; font-weight: 700; padding: 4px 10px; border-radius: 4px; }
        .scc-page .price-caption { font-size: 0.9em; color: var(--mid); margin-bottom: 32px; }

        .scc-page .mobile-jump { display: none; }
        @media (max-width: 960px) {
          .scc-page .mobile-jump { display: flex; justify-content: center; align-items: center; gap: 8px; width: 100%; background: var(--accent); color: #fff; font-weight: 700; font-size: 1.05em; padding: 17px 20px; border-radius: 8px; text-decoration: none; margin-bottom: 28px; }
        }

        .scc-page .checklist { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .scc-page .checklist li { display: flex; align-items: flex-start; gap: 12px; font-size: 0.97em; color: var(--dark); line-height: 1.5; }
        .scc-page .chk { width: 20px; height: 20px; border-radius: 50%; background: rgba(58,161,126,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.65em; color: var(--sage); font-weight: 700; margin-top: 1px; }

        .scc-page .hero-right { background: var(--off-white); display: flex; flex-direction: column; justify-content: flex-start; padding: 48px 56px 56px; }
        @media (max-width: 1100px) { .scc-page .hero-right { padding: 40px 40px 48px; } }
        @media (max-width: 960px)  { .scc-page .hero-right { padding: 44px 24px 52px; } }

        .scc-page .form-kicker { font-size: 0.85em; font-weight: 600; color: var(--sage); margin-bottom: 8px; }
        .scc-page .form-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.7em, 2.6vw, 2.2em); font-weight: 800; color: var(--black); line-height: 1.12; letter-spacing: -0.02em; margin-bottom: 10px; }
        .scc-page .form-sub { font-size: 0.95em; color: var(--mid); line-height: 1.6; margin-bottom: 22px; }

        .scc-page .ghl-form-wrap { width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 25px; overflow: hidden; min-height: 601px; box-shadow: 0 18px 40px -24px rgba(31,111,178,0.35); }
        .scc-page .ghl-form-wrap iframe { display: block; width: 100%; border: none; }

        .scc-page .form-note { font-size: 0.8em; color: var(--mid); text-align: center; margin-top: 14px; line-height: 1.6; }
        .scc-page .form-lock { font-size: 0.75em; color: var(--light); text-align: center; margin-top: 6px; }

        /* Trust bar */
        .scc-page .trust-bar { border-bottom: 1px solid var(--border); padding: 20px 40px; }
        .scc-page .trust-inner { max-width: 1080px; margin: 0 auto; display: flex; justify-content: center; align-items: center; gap: 44px; flex-wrap: wrap; font-size: 0.85em; font-weight: 500; color: var(--mid); }
        @media (max-width: 700px) { .scc-page .trust-inner { gap: 14px 24px; font-size: 0.8em; } }

        /* Shared section type */
        .scc-page .sec { padding: 104px 40px; }
        @media (max-width: 960px) { .scc-page .sec { padding: 76px 28px; } }
        @media (max-width: 500px) { .scc-page .sec { padding: 60px 22px; } }
        .scc-page .sec-inner { max-width: 1080px; margin: 0 auto; }
        .scc-page .sec-h2 { font-family: 'Playfair Display', serif; font-size: clamp(2.1em, 4vw, 3.4em); font-weight: 900; color: var(--black); letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 18px; }
        .scc-page .sec-h2.center { text-align: center; }
        .scc-page .sec-intro { font-size: 1.05em; color: var(--mid); max-width: 620px; line-height: 1.75; margin-bottom: 56px; }
        .scc-page .sec-intro.center { text-align: center; margin-left: auto; margin-right: auto; }

        /* Steps */
        .scc-page .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 860px) { .scc-page .steps { grid-template-columns: 1fr; } }
        .scc-page .step { border-top: 2px solid var(--accent); padding-top: 22px; }
        .scc-page .step-num { font-family: 'Playfair Display', serif; font-size: 2.4em; font-weight: 900; color: var(--accent); line-height: 1; margin-bottom: 12px; }
        .scc-page .step h3 { font-size: 1.1em; font-weight: 700; margin-bottom: 8px; }
        .scc-page .step p { font-size: 0.95em; color: var(--mid); line-height: 1.7; }

        /* Education */
        .scc-page .edu { background: var(--off-white); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .scc-page .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        @media (max-width: 960px) { .scc-page .edu-grid { grid-template-columns: 1fr; gap: 44px; } }
        .scc-page .edu-copy p { font-size: 1.02em; color: var(--mid); line-height: 1.8; margin-bottom: 18px; max-width: 540px; }
        .scc-page .edu-copy p strong { color: var(--dark); font-weight: 600; }
        .scc-page .edu-copy h3 { font-size: 1.15em; font-weight: 700; margin: 30px 0 10px; }
        .scc-page .ask-card { background: var(--bg); border: 1px solid var(--border); border-radius: 14px; padding: 36px 34px; }
        .scc-page .ask-card h3 { font-family: 'Playfair Display', serif; font-size: 1.6em; font-weight: 800; line-height: 1.15; margin-bottom: 8px; }
        .scc-page .ask-card > p { font-size: 0.93em; color: var(--mid); line-height: 1.6; margin-bottom: 24px; }
        .scc-page .ask-list { list-style: none; display: flex; flex-direction: column; }
        .scc-page .ask-list li { padding: 16px 0; border-top: 1px solid var(--border); }
        .scc-page .ask-q { font-weight: 700; font-size: 0.98em; color: var(--black); margin-bottom: 5px; }
        .scc-page .ask-a { font-size: 0.9em; color: var(--mid); line-height: 1.6; }
        .scc-page .ask-a b { color: var(--sage); font-weight: 700; }

        /* Product cards */
        .scc-page .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; margin-bottom: 64px; }
        @media (max-width: 860px) { .scc-page .product-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .scc-page .product-grid { grid-template-columns: 1fr; } }
        .scc-page .p-card { background: var(--bg); padding: 36px 32px; }
        .scc-page .p-card h3 { font-size: 1.02em; font-weight: 700; color: var(--black); margin-bottom: 10px; }
        .scc-page .p-card p { font-size: 0.9em; color: var(--mid); line-height: 1.7; }
        .scc-page .p-card strong { color: var(--dark); font-weight: 600; }

        /* Compare */
        .scc-page .compare-block { border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
        .scc-page .compare-header, .scc-page .c-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); }
        .scc-page .c-row:last-child { border-bottom: none; }
        .scc-page .c-head { padding: 18px 32px; font-size: 0.85em; font-weight: 700; }
        .scc-page .c-head.them { color: var(--light); border-right: 1px solid var(--border); }
        .scc-page .c-head.us { color: var(--accent); }
        .scc-page .c-cell { padding: 17px 32px; font-size: 0.92em; display: flex; align-items: center; gap: 10px; }
        .scc-page .c-cell.them { color: var(--light); border-right: 1px solid var(--border); }
        .scc-page .c-cell.us { color: var(--dark); font-weight: 500; background: var(--off-white); }
        @media (max-width: 640px) { .scc-page .c-head, .scc-page .c-cell { padding: 13px 16px; font-size: 0.8em; } }

        .scc-page .inline-cta { text-align: center; margin-top: 48px; }
        .scc-page .btn { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; font-weight: 700; font-size: 1.05em; padding: 18px 38px; border-radius: 8px; text-decoration: none; transition: background 0.2s; }
        .scc-page .btn:hover { background: #185a92; }
        .scc-page .btn-sub { display: block; font-size: 0.82em; color: var(--light); margin-top: 12px; }

        /* Physician */
        .scc-page .physician-inner { display: grid; grid-template-columns: 440px 1fr; gap: 72px; align-items: center; }
        @media (max-width: 960px) { .scc-page .physician-inner { grid-template-columns: 1fr; gap: 40px; } }
        .scc-page .physician-image { border-radius: 16px; overflow: hidden; border: 1px solid var(--border); aspect-ratio: 4 / 5; background: var(--off-white); }
        .scc-page .physician-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .scc-page .physician-content p { font-size: 1.02em; color: var(--mid); line-height: 1.75; margin-bottom: 18px; }
        .scc-page .physician-content p strong { color: var(--dark); font-weight: 600; }
        .scc-page .physician-credentials { margin-top: 12px; padding-top: 22px; border-top: 1px solid var(--border); }
        .scc-page .physician-sig-name { font-family: 'Playfair Display', serif; font-size: 1.3em; font-weight: 800; }
        .scc-page .physician-sig-role { font-size: 0.85em; color: var(--light); margin-top: 4px; }

        /* FAQ */
        .scc-page .faq { background: var(--off-white); border-top: 1px solid var(--border); }
        .scc-page .faq-list { max-width: 760px; margin: 0 auto; }
        .scc-page .faq-list details { border-bottom: 1px solid #ddd6d2; }
        .scc-page .faq-list summary { list-style: none; cursor: pointer; padding: 22px 0; font-weight: 700; font-size: 1.02em; display: flex; justify-content: space-between; gap: 20px; }
        .scc-page .faq-list summary::-webkit-details-marker { display: none; }
        .scc-page .faq-list summary::after { content: '+'; font-size: 1.4em; font-weight: 400; color: var(--accent); line-height: 1; }
        .scc-page .faq-list details[open] summary::after { content: '–'; }
        .scc-page .faq-list details p { font-size: 0.96em; color: var(--mid); line-height: 1.75; padding-bottom: 22px; max-width: 680px; }

        /* Final CTA */
        .scc-page .final-cta { background: var(--black); padding: 96px 40px; text-align: center; }
        .scc-page .final-cta h2 { font-family: 'Playfair Display', serif; font-size: clamp(2em, 4vw, 3.4em); font-weight: 900; color: white; letter-spacing: -0.03em; line-height: 1.08; margin-bottom: 16px; }
        .scc-page .final-cta p { font-size: 1.02em; color: #9a9a9a; margin: 0 auto 34px; line-height: 1.7; max-width: 520px; }
        .scc-page .final-cta s { color: #666; }
        .scc-page .final-btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; color: var(--black); font-weight: 700; font-size: 1.05em; padding: 18px 40px; border-radius: 8px; text-decoration: none; transition: background 0.2s; }
        .scc-page .final-btn:hover { background: #ececec; }

        .scc-page .disclaimer { padding: 32px 40px 40px; text-align: center; font-size: 0.72em; color: #aaa; line-height: 1.7; max-width: 820px; margin: 0 auto; }

        /* Sticky mobile CTA */
        .scc-page .sticky-cta { display: none; }
        @media (max-width: 960px) {
          .scc-page { padding-bottom: 76px; }
          .scc-page .sticky-cta { display: flex; position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; background: #fff; border-top: 1px solid var(--border); padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px)); align-items: center; justify-content: space-between; gap: 12px; transition: transform 0.25s; box-shadow: 0 -8px 24px -16px rgba(0,0,0,0.25); }
          .scc-page .sticky-cta.hidden { transform: translateY(110%); }
          .scc-page .sticky-price { font-weight: 700; font-size: 1.15em; line-height: 1.1; }
          .scc-page .sticky-price s { display: block; font-size: 0.7em; font-weight: 400; color: #aaa; }
          .scc-page .sticky-btn { background: var(--accent); color: #fff; font-weight: 700; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-size: 0.95em; white-space: nowrap; }
        }
      `}</style>

      <div className="scc-page">

        {/* ───────── HERO ───────── */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              Limited-time New York pricing
            </div>

            <h1>
              <span className="anchor">
                Other New York clinics charge up to <s>$15,000</s>.
              </span>
              Your stem cell therapy: $3,999.
            </h1>

            <p className="hero-sub">
              Premium umbilical cord MSCs, independently lab-verified and
              administered by a physician-led team in Manhattan. Answer a few quick
              questions to see if you&apos;re a candidate and lock in your price.
            </p>

            <div className="hero-price-block">
              <div className="price-big">$3,999</div>
              <div className="price-right">
                <s>$5,999</s>
                <span className="savings-tag">You save $2,000</span>
              </div>
            </div>
            <p className="price-caption">All-inclusive. No hidden fees. No obligation to find out more.</p>

            <a className="mobile-jump" href="#formSection">Check if I qualify</a>

            <ul className="checklist">
              <li><span className="chk">✓</span> Umbilical cord MSCs from an FDA-registered U.S. lab</li>
              <li><span className="chk">✓</span> Third-party verified cell count on every vial</li>
              <li><span className="chk">✓</span> IV infusion or targeted injection, based on your goals</li>
              <li><span className="chk">✓</span> Physician-led care under Ajit Dhaliwal, MD, MBA</li>
            </ul>
          </div>

          <div className="hero-right" id="formSection">
            <div className="form-kicker">Free · Takes about a minute</div>
            <h2 className="form-heading">See if you qualify for $3,999 pricing</h2>
            <p className="form-sub">
              Tell us a little about you. A patient coordinator will follow up to answer
              your questions and confirm your price.
            </p>

            <div className="ghl-form-wrap">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/1TwGZKUKxcGG33WBYMok"
                style={{ width: "100%", height: "601px", border: "none", borderRadius: "25px" }}
                id="inline-1TwGZKUKxcGG33WBYMok"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Simple Stem Cell Lead Form"
                data-height="601"
                data-layout-iframe-id="inline-1TwGZKUKxcGG33WBYMok"
                data-form-id="1TwGZKUKxcGG33WBYMok"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="Simple Stem Cell Lead Form"
              />
            </div>

            <p className="form-note">
              No pressure. No commission-based sales team. Just straight answers about
              whether this is right for you.
            </p>
            <p className="form-lock">🔒 Your information stays private and is never sold.</p>
          </div>
        </section>

        <div className="trust-bar">
          <div className="trust-inner">
            <div>🇺🇸 U.S.-sourced MSCs</div>
            <div>🔬 Lab-verified cell count</div>
            <div>📍 575 Madison Ave, NYC</div>
            <div>👩‍⚕️ Physician-led care</div>
          </div>
        </div>

        {/* ───────── PRODUCT EDUCATION ───────── */}
        <section className="sec edu">
          <div className="sec-inner edu-grid">
            <div className="edu-copy">
              <h2 className="sec-h2">What you&apos;re actually getting</h2>
              <p>
                <strong>Mesenchymal stem cells (MSCs)</strong> are signaling cells found in
                connective tissue throughout your body. They&apos;re being widely studied
                for how they communicate with your body&apos;s own repair and
                inflammation-response processes.
              </p>
              <p>
                The MSCs used at Regen Health come from <strong>donated umbilical cord
                tissue</strong> collected after healthy, full-term births. Cord tissue is one of
                the youngest MSC sources available, and there&apos;s no harvesting from your
                own fat or bone marrow.
              </p>

              <h3>Why the product matters more than the price tag</h3>
              <p>
                Not all stem cell products are equal. What counts is how many cells are
                <strong> alive and viable when they reach you</strong>, and whether anyone
                outside the seller has verified it. Many clinics can&apos;t show you that.
                We can.
              </p>
              <p>
                Every lot comes with a <strong>Certificate of Analysis</strong> from
                independent testing, and cells are shipped cold-chain and checked on
                arrival. You can ask to see the paperwork before you commit to anything.
              </p>
            </div>

            <div className="ask-card">
              <h3>4 questions to ask any stem cell clinic</h3>
              <p>Before you pay anyone for stem cell therapy, get clear answers to these.</p>
              <ul className="ask-list">
                <li>
                  <div className="ask-q">What&apos;s the viable cell count after thaw?</div>
                  <div className="ask-a"><b>Our answer:</b> Verified by third-party testing, and we&apos;ll show you the numbers.</div>
                </li>
                <li>
                  <div className="ask-q">Can I see the Certificate of Analysis?</div>
                  <div className="ask-a"><b>Our answer:</b> Yes. Just ask your coordinator.</div>
                </li>
                <li>
                  <div className="ask-q">Where do the cells come from, and how are donors screened?</div>
                  <div className="ask-a"><b>Our answer:</b> An FDA-registered U.S. lab, with full donor medical history review.</div>
                </li>
                <li>
                  <div className="ask-q">Who administers my treatment?</div>
                  <div className="ask-a"><b>Our answer:</b> Licensed medical professionals under physician oversight at our NYC clinic.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ───────── PRODUCT DETAILS + COMPARE ───────── */}
        <section className="sec">
          <div className="sec-inner">
            <h2 className="sec-h2 center">Clinic-grade quality. Fair price.</h2>
            <p className="sec-intro center">
              Here&apos;s exactly what&apos;s included in your $3,999 treatment.
            </p>

            <div className="product-grid">
              <div className="p-card">
                <h3>Umbilical cord MSCs</h3>
                <p>From donated cord tissue, one of the youngest sources available. <strong>No painful extraction from your own body.</strong></p>
              </div>
              <div className="p-card">
                <h3>Third-party lab verified</h3>
                <p>Cell count is independently tested before it reaches you. <strong>You don&apos;t have to take our word for it.</strong></p>
              </div>
              <div className="p-card">
                <h3>Direct from an FDA-registered lab</h3>
                <p><strong>No brokers or middlemen</strong> adding markup. That&apos;s how you pay $3,999 instead of $8,000 to $15,000.</p>
              </div>
              <div className="p-card">
                <h3>Cold-chain protected</h3>
                <p>Cryopreserved, shipped temperature-monitored, and checked on arrival to protect <strong>cell viability</strong> for your treatment.</p>
              </div>
              <div className="p-card">
                <h3>Screened donors</h3>
                <p>Full donor medical history review, in line with FDA guidelines for human cell and tissue products <strong>(HCT/Ps)</strong>.</p>
              </div>
              <div className="p-card">
                <h3>IV or targeted injection</h3>
                <p>Your care team helps you choose <strong>a whole-body IV infusion or a targeted injection</strong> based on your goals.</p>
              </div>
            </div>

            <div className="compare-block">
              <div className="compare-header">
                <div className="c-head them">Typical clinics</div>
                <div className="c-head us">Regen Health Physicians</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;$8,000 to $15,000</div>
                <div className="c-cell us">✓ &nbsp;$3,999 all-inclusive</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;&quot;Come in first&quot; to get a price</div>
                <div className="c-cell us">✓ &nbsp;Price listed right here</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;Sales-driven consultations</div>
                <div className="c-cell us">✓ &nbsp;Zero commission, zero pressure</div>
              </div>
              <div className="c-row">
                <div className="c-cell them">✗ &nbsp;Cell counts not disclosed</div>
                <div className="c-cell us">✓ &nbsp;Third-party verified, COA available</div>
              </div>
            </div>

            <div className="inline-cta">
              <a className="btn" href="#formSection">Check if I qualify for $3,999</a>
              <span className="btn-sub">Free. No obligation.</span>
            </div>
          </div>
        </section>

        {/* ───────── PHYSICIAN ───────── */}
        <section className="sec edu">
          <div className="sec-inner physician-inner">
            <div className="physician-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/team/physician-authority.jpeg" alt="Ajit Dhaliwal, MD, MBA, founder of Regen Health Physicians" />
            </div>
            <div className="physician-content">
              <h2 className="sec-h2">You&apos;re in a doctor&apos;s care, not a sales funnel</h2>
              <p>
                Regen Health Physicians was founded by <strong>Dr. Ajit Dhaliwal</strong> on
                one principle: medicine should be personal, precise, and accountable.
              </p>
              <p>
                Dr. Dhaliwal sets the clinical protocols and outcome standards that guide
                every patient&apos;s care, so you get a doctor-led process from your first
                call to your treatment day.
              </p>
              <div className="physician-credentials">
                <div className="physician-sig-name">Ajit Dhaliwal, MD, MBA</div>
                <div className="physician-sig-role">Founder, Regen Health Physicians</div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── HOW IT WORKS ───────── */}
        <section className="sec">
          <div className="sec-inner">
            <h2 className="sec-h2 center">Three simple steps</h2>
            <p className="sec-intro center">
              Filling out the form doesn&apos;t commit you to anything. It just starts the
              conversation.
            </p>
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <h3>Answer a few questions</h3>
                <p>Takes about a minute. Tell us what you&apos;re hoping to address so we can prepare for your call.</p>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <h3>Talk with our team</h3>
                <p>A patient coordinator walks you through the process, answers your questions, and reviews your candidacy with the medical team.</p>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <h3>Get treated in Manhattan</h3>
                <p>If you&apos;re a good fit, you&apos;ll schedule your treatment at our Madison Avenue clinic at the $3,999 price.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="sec faq">
          <div className="sec-inner">
            <h2 className="sec-h2 center">Questions people ask first</h2>
            <p className="sec-intro center">Anything else, your coordinator can answer when they reach out.</p>
            <div className="faq-list">
              <details>
                <summary>Is $3,999 really all-inclusive?</summary>
                <p>Yes. The price covers your stem cells and their administration at our New York clinic. No surprise fees added later.</p>
              </details>
              <details>
                <summary>How do I know if I&apos;m a candidate?</summary>
                <p>That&apos;s what the free conversation is for. After you fill out the form, our team reviews your health history and goals with the medical team to determine whether stem cell therapy is appropriate for you.</p>
              </details>
              <details>
                <summary>What&apos;s the difference between IV and injection?</summary>
                <p>An IV infusion delivers cells through your bloodstream for a whole-body approach. A targeted injection places cells in a specific area. Your care team will help you decide which fits your goals.</p>
              </details>
              <details>
                <summary>Why is your price so much lower?</summary>
                <p>We source directly from an FDA-registered lab with no brokers in between, and we don&apos;t pay sales commissions. Those savings go to you.</p>
              </details>
              <details>
                <summary>Is stem cell therapy FDA-approved?</summary>
                <p>No. Stem cell therapy is not FDA-approved to treat, cure, or prevent any disease. Our cells come from an FDA-registered lab and follow FDA guidelines for human cell and tissue products. We&apos;ll always be straight with you about what to expect.</p>
              </details>
              <details>
                <summary>Am I committing to anything by filling out the form?</summary>
                <p>No. The form just starts a conversation. You&apos;ll get your questions answered and decide from there.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="final-cta">
          <h2>Your $3,999 price is one short form away.</h2>
          <p>
            <s>$5,999</s> $3,999 all-inclusive at Regen Health Physicians in New York. Find
            out if you qualify. It&apos;s free and there&apos;s no obligation.
          </p>
          <a className="final-btn" href="#formSection">Check if I qualify</a>
        </section>

        <div className="disclaimer">
          <strong>Medical Disclaimer:</strong> Stem cell therapy is not FDA-approved to treat,
          cure, or prevent any disease or medical condition. Individual results vary and are
          not guaranteed. This page does not constitute medical advice. Consult with a licensed
          healthcare provider before beginning any treatment. Candidacy is determined by our
          medical team. Promotional pricing valid during offer period only.
        </div>

        {/* Sticky mobile CTA */}
        <div className={`sticky-cta${showSticky ? "" : " hidden"}`} aria-hidden={!showSticky}>
          <div className="sticky-price"><s>$5,999</s>$3,999</div>
          <a className="sticky-btn" href="#formSection" tabIndex={showSticky ? 0 : -1}>Check if I qualify</a>
        </div>
      </div>
    </>
  );
}
