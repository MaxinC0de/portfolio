import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { pagePaddingX } from "@/lib/layout";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className={cn("mx-auto max-w-5xl py-20 md:py-28", pagePaddingX)}>
      <Badge variant="secondary" className="mb-6">
        {siteConfig.availability}
      </Badge>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
        Sites vitrines & landing pages pour indépendants et TPE
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Sites modernes, rapides et mobiles — livrés en ~7 jours, sans le budget
        d&apos;une agence.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        Next.js · Livraison ~7 j · À partir de {siteConfig.pricing.landing} €
      </p>
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
    </section>
  );
}
