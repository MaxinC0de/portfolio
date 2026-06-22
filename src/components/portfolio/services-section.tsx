import { ScrollFadeIn } from "@/components/shared/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/portfolio-data";

export function ServicesSection() {
  return (
    <SectionShell id="services" variant="muted">
      <SectionHeader
        title="Services"
        description="Des sites clairs, livrés vite, avec un interlocuteur unique."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ScrollFadeIn key={service.title} staggerIndex={index} className="h-full">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader className="flex-1">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm font-semibold text-primary">{service.price}</p>
              </CardFooter>
            </Card>
          </ScrollFadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
