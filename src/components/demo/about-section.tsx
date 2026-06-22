import { SectionShell } from "@/components/shared/section-shell";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DemoAboutSection() {
  return (
    <SectionShell variant="muted">
      <Card className="mx-auto max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-2xl">À propos</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Photographe passionné depuis 8 ans. J&apos;accompagne particuliers et
            professionnels pour des images naturelles et intemporelles.
          </CardDescription>
        </CardHeader>
      </Card>
    </SectionShell>
  );
}
