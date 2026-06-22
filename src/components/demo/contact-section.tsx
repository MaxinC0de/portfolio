import { SectionShell } from "@/components/shared/section-shell";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DemoContactSection() {
  return (
    <SectionShell id="contact">
      <Card className="mx-auto max-w-xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Contact</CardTitle>
          <CardDescription>
            Projet demo — le formulaire est désactivé.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <a
            href="mailto:contact@studiolumiere.demo?subject=Demande%20de%20devis"
            className={buttonVariants({ size: "lg" })}
          >
            Écrire par email
          </a>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
