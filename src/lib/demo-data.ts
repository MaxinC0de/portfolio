/**
 * Images demo — placeholders dans /public/demo/
 * Remplace les fichiers .jpg sans toucher au code (mêmes noms).
 */
export const demoServices = [
  {
    title: "Portrait",
    description: "Séances studio ou extérieur, lumière naturelle.",
  },
  {
    title: "Mariage",
    description: "Reportage complet, du préparatif à la soirée.",
  },
  {
    title: "Événementiel",
    description: "Corporate, conférences, soirées privées.",
  },
] as const;

export const demoPreviewImage = "/demo/preview.jpg";

export const galleryImages = [
  { src: "/demo/01-portrait.jpg", alt: "Portrait femme" },
  { src: "/demo/02-portrait.jpg", alt: "Portrait homme" },
  { src: "/demo/03-wedding.jpg", alt: "Mariage" },
  { src: "/demo/04-wedding.jpg", alt: "Couple mariage" },
  { src: "/demo/05-event.jpg", alt: "Événement corporate" },
  { src: "/demo/06-group.jpg", alt: "Groupe amis" },
] as const;
