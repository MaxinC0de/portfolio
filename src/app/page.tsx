import { SiteHeader } from "@/components/site-header";
import { ContactSection } from "@/components/portfolio/contact-section";
import { DemoProjectSection } from "@/components/portfolio/demo-project-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { StackPricingSection } from "@/components/portfolio/stack-pricing-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <DemoProjectSection />
        <ProcessSection />
        <StackPricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
