import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { pagePaddingX } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function DemoHeroSection() {
  return (
    <section className={cn("mx-auto max-w-5xl py-20 md:py-28", pagePaddingX)}>
      <Badge className="mb-6">Projet demo</Badge>
      <h1 className="max-w-3xl font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
        Capturer l&apos;instant, sublimer l&apos;émotion
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Photographe portrait & événementiel — Paris & Île-de-France
      </p>
      <Link href="#contact" className={buttonVariants({ size: "lg", className: "mt-8" })}>
        Demander un devis
      </Link>
    </section>
  );
}
