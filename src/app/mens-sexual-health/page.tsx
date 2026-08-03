import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePage, type ServiceData } from "@/components/service-page";

const siteUrl = "https://www.rhpny.com";
const path = "/mens-sexual-health";

export const metadata: Metadata = {
  title: "Men's Sexual Health | Regenerative ED, Testosterone & Performance Care",
  description:
    "Physician-led regenerative treatment for erectile dysfunction, low testosterone, Peyronie's disease, and performance decline. Concierge men's health care in New York City and Salt Lake City.",
  keywords: [
    "erectile dysfunction treatment",
    "low testosterone therapy",
    "Peyronie's disease",
    "men's sexual health",
    "regenerative ED treatment",
    "PRP penile injection",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${path}`,
    siteName: "Regen Health Physicians",
    title: "Men's Sexual Health | Regen Health Physicians",
    description:
      "Regenerative treatment for ED, low testosterone, and performance decline — physician-designed, in NYC and Salt Lake City.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Sexual Health | Regen Health Physicians",
    description:
      "Regenerative treatment for ED, low testosterone, and performance decline.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: `${siteUrl}${path}` },
};

const data: ServiceData = {
  eyebrow: "Men's Sexual Health",
  title: "Restore Confidence, Performance & Vitality",
  subtitle:
    "Regenerative protocols for sexual dysfunction, hormonal decline, and performance loss — physician-designed and delivered when early intervention matters most.",
  heroImage: "/images/utah/mens-2.webp",
  heroAlt: "Confident man in natural light — men's regenerative health",
  ctaLabel: "Book a Men's Health Consultation",
  conditionsHeading: "Built for Real Men",
  conditionsIntro:
    "Regenerative protocols for the conditions that affect how you feel, function, and perform.",
  conditions: [
    { title: "Erectile Dysfunction", body: "ED from vascular, hormonal, or nerve-related causes, including changes following medication." },
    { title: "Low Testosterone", body: "Fatigue, low drive, mood changes, muscle loss, and poor recovery tied to declining hormones." },
    { title: "Peyronie's Disease", body: "Scar-tissue buildup, painful erections, curvature, and reduced function." },
    { title: "Premature Ejaculation", body: "Loss of control and confidence during intimacy, addressed at the physiological root." },
    { title: "Sexual Performance Decline", body: "Reduced stamina, loss of sensation, intimacy avoidance, and age-related decline." },
    { title: "Post-Surgical Recovery", body: "Accelerated healing support after prostate or urological procedures." },
  ],
  protocolsHeading: "Two Integrated Programs",
  protocols: [
    {
      tag: "Program 01",
      title: "Sexual Restoration Program",
      body: "For men with ED, low testosterone, and performance decline — staged biologic therapy with hormonal support.",
      bullets: [
        "Stem cells + PRP + exosomes (staged protocol)",
        "Ultrasound-guided penile injections",
        "Biologic-supported testosterone optimization",
        "Peptide support (PT-141, kisspeptin)*",
        "IV NAD+ or glutathione",
      ],
    },
    {
      tag: "Program 02",
      title: "Hormonal & Performance Recovery",
      body: "Designed for low testosterone, fatigue, and hormone-related dysfunction.",
      bullets: [
        "Testosterone and hormone panel evaluation",
        "Peptide therapy protocols*",
        "Libido and energy support biologics (where legally permissible)",
        "Nerve-support peptides",
        "Performance-restoration IVs",
      ],
    },
  ],
  protocolsFootnote:
    "*Peptide availability is subject to regulatory and licensing requirements and physician evaluation.",
  mechanism: {
    heading: "Restoration at the Cellular Level",
    intro:
      "Regenerative therapies don't replace what's lost — they support the body's own repair and renewal response.",
    points: [
      "Reduce vascular inflammation",
      "Improve cellular signaling",
      "Support tissue and nerve integrity",
      "Enhance blood flow to affected areas",
    ],
    note: "Most effective in early to moderate dysfunction. Advanced hormonal or structural conditions may still require additional medical intervention.",
  },
  processHeading: "From Evaluation to Recovery",
  process: [
    { step: "01", title: "Lab Work & Intake Review", body: "Hormone panels, bloodwork, and health history reviewed before your visit so clinical time stays focused." },
    { step: "02", title: "Physical Evaluation", body: "In-person or virtual assessment of symptoms, performance concerns, and underlying health factors." },
    { step: "03", title: "Protocol Design", body: "Staged regenerative therapy matched to your hormonal profile, lifestyle, and restoration goals." },
    { step: "04", title: "Precision Delivery", body: "Physician-administered treatment with monitored progress and scheduled follow-up." },
  ],
  candidatesHeading: "You May Be a Candidate If",
  candidates: [
    "You have early to moderate erectile dysfunction",
    "You're an active man wanting to preserve sexual performance",
    "Your low testosterone hasn't resolved with lifestyle changes",
    "You're seeking alternatives to medication or surgery",
    "You're a post-procedure patient wanting accelerated recovery",
    "You're experiencing age-related hormonal decline",
  ],
  sectionImage: "/images/utah/section-1.webp",
  sectionImageAlt: "Clinical consultation — regenerative men's health evaluation",
  disclaimer:
    "This information is educational and not medical advice. Regenerative and hormonal treatments are elective, individualized, and provided after physician evaluation. Individual results vary. Some therapies are offered only where legally permissible.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Men's Sexual Health",
  url: `${siteUrl}${path}`,
  description: metadata.description,
  about: {
    "@type": "MedicalCondition",
    name: "Erectile dysfunction, low testosterone, and male sexual performance decline",
  },
  provider: {
    "@type": "MedicalBusiness",
    name: "Regen Health Physicians",
    url: siteUrl,
  },
};

export default function MensSexualHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ServicePage data={data} />
      <Footer />
    </>
  );
}
