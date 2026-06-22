import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { pricingItems, stackItems } from "@/lib/portfolio-data";

export function StackPricingSection() {
  return (
    <SectionShell>
      <SectionHeader title="Stack" />
      <div className="flex flex-wrap gap-2">
        {stackItems.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="rounded-full border-border/80 bg-muted/40 px-3 py-1 font-normal"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <Separator className="my-12" />

      <SectionHeader
        title="Tarifs"
        description="Devis gratuit sous 24 h."
        className="mb-8"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {pricingItems.map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <CardTitle className="text-base">{item.label}</CardTitle>
              <CardDescription className="text-foreground font-medium">
                {item.value}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <ul className="mt-8 space-y-3 text-muted-foreground md:hidden">
        {pricingItems.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            {item.label} — {item.value}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
