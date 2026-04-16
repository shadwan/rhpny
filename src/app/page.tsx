import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { WhyWeExist } from "@/components/why-we-exist";
import { Services } from "@/components/services";
import { Longevity } from "@/components/longevity";
import { Physician } from "@/components/physician";
import { CtaSection } from "@/components/cta-section";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/team";
import { Programs } from "@/components/programs";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <WhyWeExist />
        <Services />
        <Longevity />
        <Physician />
        <CtaSection />
        <Testimonials />
        <Team />
        <Programs />
      </main>
      <Footer />
    </>
  );
}
