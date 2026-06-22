import { SiteHeader } from "@/components/site-header";
import { DemoAboutSection } from "@/components/demo/about-section";
import { DemoContactSection } from "@/components/demo/contact-section";
import { DemoFooter } from "@/components/demo/site-footer";
import { DemoGallerySection } from "@/components/demo/gallery-section";
import { DemoHeroSection } from "@/components/demo/hero-section";
import { DemoServicesSection } from "@/components/demo/services-section";

export default function DemoPage() {
  return (
    <div className="theme-demo min-h-full">
      <SiteHeader variant="demo" />
      <main>
        <DemoHeroSection />
        <DemoServicesSection />
        <DemoGallerySection />
        <DemoAboutSection />
        <DemoContactSection />
      </main>
      <DemoFooter />
    </div>
  );
}
