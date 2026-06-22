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
import { cn } from "@/lib/utils";

export function DemoProjectSection() {
  return (
    <SectionShell>
      <SectionHeader
        title="Exemple de réalisation"
        description="Projet demo — site vitrine pour un photographe professionnel."
      />
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-muted to-accent" />
        <CardHeader>
          <CardTitle>Studio Lumière — Site vitrine</CardTitle>
          <CardDescription>
            Site responsive, Next.js, formulaire contact. Projet demo.
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
