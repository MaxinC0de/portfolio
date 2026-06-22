import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { demoServices } from "@/lib/demo-data";

export function DemoServicesSection() {
  return (
    <SectionShell id="services" variant="muted">
      <SectionHeader title="Services" />
      <div className="grid gap-6 md:grid-cols-3">
        {demoServices.map((service) => (
          <Card key={service.title} className="bg-card/90 transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
