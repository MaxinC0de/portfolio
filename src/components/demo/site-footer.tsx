import Link from "next/link";

export function DemoFooter() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© Studio Lumière — Projet demo</p>
        <Link href="/" className="underline hover:text-foreground">
          Site réalisé par Maxime Breton
        </Link>
      </div>
    </footer>
  );
}
