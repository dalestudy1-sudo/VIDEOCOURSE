import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { MetricsAuthoritySection } from "@/components/landing/metrics-authority-section";
import { VideoSection } from "@/components/landing/video-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="tech-grid relative min-h-screen overflow-x-hidden">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <MetricsAuthoritySection />
        <VideoSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <CtaSection />
        <FooterSection />
      </div>
    </main>
  );
}
