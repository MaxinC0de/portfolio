import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { processSteps } from "@/lib/portfolio-data";

export function ProcessSection() {
  return (
    <SectionShell id="process" variant="muted">
      <SectionHeader
        title="Process"
        description="Pas de maquette Figma — une preview concrète, plus efficace."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Card key={step.title} className="border-border/80 bg-card/80">
            <CardHeader>
              <div className="mb-2 flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </div>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
