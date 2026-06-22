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
        <Link
          href="/demo"
          className="relative block aspect-[16/9] w-full overflow-hidden transition-opacity hover:opacity-95"
          aria-label="Voir le site demo Studio Lumière"
        >
          <Image
            src={demoPreviewImage}
            alt="Aperçu du site demo Studio Lumière"
            fill
            className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </Link>
        <CardHeader className="gap-2 pt-6 pb-4">
          <CardTitle>Studio Lumière — Site vitrine</CardTitle>
          <CardDescription>
            Site responsive, Next.js, formulaire contact. Projet demo — visuels placeholder.
          </CardDescription>
        </CardHeader>
        <CardFooter className="border-t-0 bg-transparent px-6 pt-2 pb-8">
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
