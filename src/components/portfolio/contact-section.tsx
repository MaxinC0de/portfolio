import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <SectionShell id="contact" variant="muted">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeader
            title="Parlons de votre projet"
            description="Réponse sous 24 h. Disponible en remote."
            className="mb-6"
          />
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Email :{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-foreground underline">
                {siteConfig.email}
              </a>
            </p>
            <p>
              Malt :{" "}
              <a
                href={siteConfig.maltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline"
              >
                Voir mon profil
              </a>
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Demande de devis</CardTitle>
            <CardDescription>Décrivez votre projet en quelques lignes.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
