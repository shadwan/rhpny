
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Regen Health Physicians × The Stem Cell Club",
  description:
    "Thanks for reaching out. Our team will contact you shortly with pricing, availability, and next steps.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .ty-page *, .ty-page *::before, .ty-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ty-page {
          --black: #0e0e0e; --dark: #2a2a2a; --mid: #666666; --light: #999999;
          --border: #e8e8e8; --bg: #ffffff; --off-white: #F6F2F0; --coral: #FF5252;
          font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--black);
          min-height: 100vh; display: flex; flex-direction: column; -webkit-font-smoothing: antialiased;
        }

        .ty-page .partner-bar { border-bottom: 1px solid var(--border); padding: 14px 40px; display: flex; align-items: center; justify-content: space-between; }
        .ty-page .partner-names { display: flex; align-items: center; gap: 10px; font-size: 0.78em; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--dark); }
        .ty-page .partner-x { color: var(--border); font-size: 1.1em; font-weight: 300; }
        .ty-page .partner-badge { font-size: 0.72em; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--light); }
        @media (max-width: 600px) { .ty-page .partner-bar { padding: 12px 20px; } .ty-page .partner-badge { display: none; } .ty-page .partner-names { font-size: 0.7em; letter-spacing: 1px; } }

        .ty-main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 80px 40px; background: var(--off-white); }
        @media (max-width: 500px) { .ty-main { padding: 56px 24px; } }

        .ty-card {
          max-width: 600px; width: 100%; text-align: center;
          background: var(--bg); border: 1px solid var(--border); border-radius: 20px;
          padding: 72px 56px; animation: tyUp 0.7s ease both;
        }
        @media (max-width: 500px) { .ty-card { padding: 52px 28px; } }
        @keyframes tyUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }

        .ty-check {
          width: 72px; height: 72px; margin: 0 auto 32px; border-radius: 50%;
          background: var(--coral); display: flex; align-items: center; justify-content: center;
          animation: tyPop 0.5s ease 0.25s both;
        }
        @keyframes tyPop { 0% { transform: scale(0); } 70% { transform: scale(1.12); } 100% { transform: scale(1); } }
        .ty-check svg { width: 34px; height: 34px; stroke: #fff; stroke-width: 3; fill: none; }

        .ty-kicker { font-size: 0.7em; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--coral); margin-bottom: 16px; }
        .ty-card h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.2em, 4.5vw, 3.4em); font-weight: 900; letter-spacing: -0.03em; line-height: 1.05; color: var(--black); margin-bottom: 20px; }
        .ty-card h1 em { font-style: italic; color: var(--coral); }
        .ty-card > p { font-size: 1.05em; color: var(--mid); line-height: 1.75; max-width: 440px; margin: 0 auto 36px; }

        .ty-steps { text-align: left; border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 36px; }
        .ty-step { display: flex; align-items: flex-start; gap: 16px; padding: 20px 24px; border-bottom: 1px solid var(--border); }
        .ty-step:last-child { border-bottom: none; }
        .ty-step-num { flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; background: var(--off-white); color: var(--coral); font-size: 0.82em; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .ty-step-text { font-size: 0.92em; color: var(--dark); line-height: 1.6; }
        .ty-step-text strong { font-weight: 600; color: var(--black); }

        .ty-contact { font-size: 0.9em; color: var(--mid); line-height: 1.7; }
        .ty-contact a { color: var(--coral); text-decoration: none; font-weight: 600; }
        .ty-contact a:hover { text-decoration: underline; }

        .ty-back { display: inline-flex; align-items: center; gap: 8px; margin-top: 32px; font-size: 0.9em; font-weight: 600; color: var(--dark); text-decoration: none; }
        .ty-back:hover { color: var(--coral); }

        .ty-disclaimer { padding: 28px 40px; text-align: center; font-size: 0.68em; color: #b8b8b8; line-height: 1.7; max-width: 760px; margin: 0 auto; }
      `}</style>

      <div className="ty-page">
        <header className="partner-bar">
          <div className="partner-names">
            <span>The Stem Cell Club</span>
            <span className="partner-x">×</span>
            <span>Regen Health Physicians</span>
          </div>
          <div className="partner-badge">New York · Regenerative Clinic</div>
        </header>

        <main className="ty-main">
          <div className="ty-card">
            <div className="ty-check">
              <svg viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="ty-kicker">Request Received</div>
            <h1>
              Thank You — <em>We&apos;ve Got It.</em>
            </h1>
            <p>
              Your request is in, and our team at Regen Health Physicians will be in
              touch shortly with everything you need to know.
            </p>

            <div className="ty-steps">
              <div className="ty-step">
                <span className="ty-step-num">1</span>
                <span className="ty-step-text">
                  <strong>We&apos;ll reach out within a few hours</strong> by your
                  preferred contact method with pricing and availability.
                </span>
              </div>
              <div className="ty-step">
                <span className="ty-step-num">2</span>
                <span className="ty-step-text">
                  <strong>A quick conversation</strong> to answer your questions and
                  see if treatment is the right fit for you.
                </span>
              </div>
              <div className="ty-step">
                <span className="ty-step-num">3</span>
                <span className="ty-step-text">
                  <strong>Schedule your visit</strong> at our New York clinic when
                  you&apos;re ready — no pressure, no commitment.
                </span>
              </div>
            </div>

            <p className="ty-contact">
              Have a question right now? Email us at{" "}
              <a href="mailto:info@rhpny.com">info@rhpny.com</a>
              {/* TODO: replace with the clinic's real intake email / phone */}
            </p>

            <a className="ty-back" href="/landing">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to the offer
            </a>
          </div>
        </main>

        <div className="ty-disclaimer">
          <strong>Medical Disclaimer:</strong> Stem cell therapy is not FDA-approved
          to treat, cure, or prevent any disease or medical condition. Individual
          results vary and are not guaranteed. This page does not constitute medical
          advice. Consult with a licensed healthcare provider before beginning any
          treatment.
        </div>
      </div>
    </>
  );
}
