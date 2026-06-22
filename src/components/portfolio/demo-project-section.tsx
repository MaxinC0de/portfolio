import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { demoPreviewImage } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

export function DemoProjectSection() {
  return (
    <SectionShell>
      <SectionHeader
        title="Exemple de réalisation"
        description="Projet demo — site vitrine pour un photographe professionnel."
      />
      <Card className="gap-0 overflow-hidden p-0 transition-shadow hover:shadow-lg">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={demoPreviewImage}
            alt="Aperçu du site demo Studio Lumière"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        <CardHeader>
          <CardTitle>Studio Lumière — Site vitrine</CardTitle>
          <CardDescription>
            Site responsive, Next.js, formulaire contact. Projet demo — visuels placeholder.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href="/demo"
            className={cn(buttonVariants({ variant: "outline" }), "inline-flex gap-2")}
          >
            Voir le site demo
            <ArrowRight className="size-4" />
          </Link>
        </CardFooter>
      </Card>
    </SectionShell>
  );
}
