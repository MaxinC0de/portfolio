"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

type ContactFormProps = {
  subject?: string;
};

export function ContactForm({ subject = "Nouveau message portfolio" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!siteConfig.formSpreeId) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formSpreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value={subject} />

      <div className="space-y-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" required placeholder="Votre nom" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="vous@exemple.fr"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet en quelques lignes..."
        />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-emerald-600">Message envoyé. Je vous réponds sous 24 h.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Erreur d&apos;envoi. Écrivez-moi à {siteConfig.email}.
        </p>
      )}
      {!siteConfig.formSpreeId && status === "idle" && (
        <p className="text-sm text-muted-foreground">
          Configurez NEXT_PUBLIC_FORMSPREE_ID pour activer le formulaire. En attendant, le bouton
          ouvre votre client mail.
        </p>
      )}
    </form>
  );
}
