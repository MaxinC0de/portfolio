import Link from "next/link";

import { pagePaddingX } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function DemoFooter() {
  return (
    <footer className="border-t py-8">
      <div
        className={cn(
          "mx-auto flex max-w-5xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
          pagePaddingX,
        )}
      >
        <p>© Studio Lumière — Projet demo</p>
        <Link href="/" className="underline hover:text-foreground">
          Site réalisé par Maxime Breton
        </Link>
      </div>
    </footer>
  );
}
