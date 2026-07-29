import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePage, type ServiceData } from "@/components/service-page";

const siteUrl = "https://www.rhpny.com";
const path = "/womens-sexual-health";

export const metadata: Metadata = {
  title: "Women's Sexual Health | Hormone, Libido & Intimate Wellness Care",
  description:
    "Physician-led care for low libido, hormonal imbalance, vaginal dryness, fatigue, and mood changes. Regenerative women's sexual and hormonal health in New York City and Salt Lake City.",
  keywords: [
    "women's sexual health",
    "low libido treatment",
    "hormonal imbalance therapy",
    "vaginal rejuvenation",
    "O-Shot PRP",
    "hormone restoration for women",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}${path}`,
    siteName: "Regen Health Physicians",
    title: "Women's Sexual Health | Regen Health Physicians",
    description:
      "Restore libido, hormonal balance, and intimate wellness — physician-designed care in NYC and Salt Lake City.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Sexual Health | Regen Health Physicians",
    description:
      "Restore libido, hormonal balance, and intimate wellness — physician-designed care.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: `${siteUrl}${path}` },
};

const data: ServiceData = {
  eyebrow: "Women's Sexual Health",
  title: "Restore Confidence, Intimacy & Hormonal Balance",
  subtitle:
    "Physician-guided treatments that address low libido, hormonal imbalance, and intimate discomfort — so you can reclaim your vitality and wellbeing.",
  heroImage: "/images/utah/womens-1.webp",
  heroAlt: "Woman in warm natural light — women's regenerative health",
  ctaLabel: "Book a Women's Health Consultation",
  conditionsHeading: "Built for Women",
  conditionsIntro:
    "From hormonal shifts to intimate health concerns, we treat the conditions that affect how you feel, function, and live every day.",
  conditions: [
    { title: "Low Libido & Desire", body: "Loss of sexual desire is common and treatable. We identify the root hormonal cause and restore your drive naturally." },
    { title: "Hormonal Imbalance", body: "Fluctuating estrogen and progesterone affect mood, sleep, and energy. We rebalance hormones with precision therapies." },
    { title: "Vaginal Dryness & Discomfort", body: "Dryness and pain during intimacy aren't something you have to accept. Effective treatments restore comfort and confidence." },
    { title: "Low Energy & Fatigue", body: "Persistent tiredness is often hormonal. We uncover what's depleting your energy and build a plan to restore it." },
    { title: "Mood & Anxiety Changes", body: "Hormonal shifts directly impact emotional wellbeing. Our treatments help stabilize mood and reduce anxiety naturally." },
    { title: "Sexual Dysfunction", body: "Difficulty with arousal or orgasm has real physiological causes. We offer clinically guided solutions tailored to you." },
  ],
  protocolsHeading: "Women's Sexual Wellness Program",
  protocols: [
    {
      tag: "Program 01",
      title: "Hormonal Restoration Protocol",
      body: "Our foundational program targets the hormonal imbalances driving low libido, fatigue, and mood changes — restoring your baseline from the inside out.",
      bullets: [
        "Comprehensive hormone and metabolic evaluation",
        "Bioidentical hormone optimization where indicated",
        "Peptide therapy protocols*",
        "Energy and mood support biologics",
        "Ongoing lab tracking and titration",
      ],
    },
    {
      tag: "Program 02",
      title: "Intimate Wellness & Rejuvenation",
      body: "Targeted regenerative therapies to restore comfort, sensation, and confidence.",
      bullets: [
        "Vaginal rejuvenation therapy",
        "Lubrication and tissue-restoration treatment",
        "Arousal and sensation enhancement",
        "O-Shot / PRP-based options",
        "Adjunct peptide treatment*",
      ],
    },
  ],
  protocolsFootnote:
    "*Peptide availability is subject to regulatory and licensing requirements and physician evaluation.",
  mechanism: {
    heading: "Wellness Support at the Cellular Level",
    intro:
      "Our therapies work beneath the surface — targeting the biological signals that regulate hormones, energy, and intimate health.",
    points: [
      "Rebalance the hormonal signals behind desire and mood",
      "Restore tissue health and natural lubrication",
      "Support cellular energy and metabolic function",
      "Improve blood flow and sensation",
    ],
    note: "Every protocol is individualized to your labs and goals, and refined over time as your body responds.",
  },
  processHeading: "From Evaluation to Personalized Care",
  process: [
    { step: "01", title: "Initial Consultation", body: "Share your symptoms, health history, and goals with our physician. We listen before we recommend anything." },
    { step: "02", title: "Comprehensive Lab Testing", body: "A full hormonal and metabolic panel identifies exactly what's driving your symptoms — no guesswork." },
    { step: "03", title: "Your Custom Protocol", body: "Based on your results, we build a personalized plan targeting your specific imbalances and concerns." },
    { step: "04", title: "Ongoing Support & Adjustments", body: "We monitor your progress and refine your protocol so your results keep improving over time." },
  ],
  candidatesHeading: "You May Be a Candidate If",
  candidates: [
    "You've noticed a decline in libido or desire",
    "You're experiencing hormonal symptoms — mood, sleep, or energy changes",
    "You have vaginal dryness or discomfort during intimacy",
    "Persistent fatigue isn't resolving with lifestyle changes",
    "You want a root-cause, hormone-based approach",
    "You're navigating perimenopause or menopause",
  ],
  sectionImage: "/images/utah/section-2.webp",
  sectionImageAlt: "Clinical consultation — regenerative women's health evaluation",
  disclaimer:
    "This information is educational and not medical advice. Regenerative and hormonal treatments are elective, individualized, and provided after physician evaluation. Individual results vary. Some therapies are offered only where legally permissible.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Women's Sexual Health",
  url: `${siteUrl}${path}`,
  description: metadata.description,
  about: {
    "@type": "MedicalCondition",
    name: "Low libido, hormonal imbalance, and women's sexual and intimate health",
  },
  provider: {
    "@type": "MedicalBusiness",
    name: "Regen Health Physicians",
    url: siteUrl,
  },
};

export default function WomensSexualHealthPage() {
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
