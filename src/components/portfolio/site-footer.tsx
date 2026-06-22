import { siteConfig } from "@/lib/site-config";
import { pagePaddingX } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <div
        className={cn(
          "mx-auto flex max-w-5xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
          pagePaddingX,
        )}
      >
        <p>
          © {new Date().getFullYear()} {siteConfig.name} — Développeur web freelance
        </p>
        <p>Paris · Remote</p>
      </div>
    </footer>
  );
}
