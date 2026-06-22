import Link from "next/link";

import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { FadeIn, FadeInBlur } from "@/components/shared/motion";
import { buttonVariants } from "@/components/ui/button";
import { pagePaddingX } from "@/lib/layout";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className={cn("mx-auto max-w-5xl py-20 md:py-28", pagePaddingX)}>
      <FadeIn delay={0.1}>
        <AvailabilityBadge>{siteConfig.availability}</AvailabilityBadge>
      </FadeIn>

      <FadeInBlur delay={0.25}>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Sites vitrines & landing pages pour indépendants et TPE
        </h1>
      </FadeInBlur>

      <FadeIn delay={0.55}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Sites modernes, rapides et mobiles — livrés en ~7 jours, sans le budget
          d&apos;une agence.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Next.js · Livraison ~7 j · À partir de {siteConfig.pricing.landing} €
        </p>
      </FadeIn>

      <FadeIn delay={0.75}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#contact" className={buttonVariants({ size: "lg" })}>
            Demander un devis
          </Link>
          <Link
            href="/demo"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Voir une demo
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
