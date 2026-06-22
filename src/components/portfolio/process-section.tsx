import { ScrollFadeIn } from "@/components/shared/motion";
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <ScrollFadeIn key={step.title} staggerIndex={index}>
            <Card className="h-full border-border/80 bg-card/80">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1.5 text-left">
                  <CardTitle className="leading-snug">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </ScrollFadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
