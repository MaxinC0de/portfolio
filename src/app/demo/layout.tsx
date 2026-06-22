import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Lumière — Demo site vitrine",
  description: "Projet demo — site vitrine photographe, réalisé par Maxime Breton.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
