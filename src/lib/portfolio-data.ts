import { siteConfig } from "@/lib/site-config";

export const services = [
  {
    title: "Landing page",
    description: "1 page, formulaire contact, SEO de base, mise en ligne.",
    price: `À partir de ${siteConfig.pricing.landing} €`,
  },
  {
    title: "Site vitrine",
    description: "3 à 5 pages, responsive, SEO de base, mise en ligne.",
    price: `À partir de ${siteConfig.pricing.vitrine} €`,
  },
  {
    title: "Refonte légère",
    description: "Modernisation d'un site existant, contenus fournis.",
    price: "Sur devis",
  },
] as const;

export const processSteps = [
  {
    title: "Brief",
    description: "Questionnaire + 2 sites de référence.",
  },
  {
    title: "Acompte 40 %",
    description: "Lancement du projet.",
  },
  {
    title: "Preview",
    description: "Lien en ligne sous ~5 jours.",
  },
  {
    title: "Livraison",
    description: "Solde + mise en ligne finale.",
  },
] as const;

export const stackItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
] as const;

export const pricingItems = [
  {
    label: "Landing page",
    value: `à partir de ${siteConfig.pricing.landing} €`,
  },
  {
    label: "Site vitrine",
    value: `à partir de ${siteConfig.pricing.vitrine} €`,
  },
  {
    label: "Options auth, API, emailing",
    value: "sur devis",
  },
] as const;
