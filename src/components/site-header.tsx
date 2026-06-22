import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { pagePaddingX } from "@/lib/layout";

type SiteHeaderProps = {
  variant?: "portfolio" | "demo";
};

const portfolioLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const demoLinks = [
  { href: "#services", label: "Services" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
  { href: "/", label: "Portfolio" },
];

export function SiteHeader({ variant = "portfolio" }: SiteHeaderProps) {
  const isDemo = variant === "demo";
  const links = isDemo ? demoLinks : portfolioLinks;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className={cn("mx-auto flex h-16 max-w-5xl items-center justify-between", pagePaddingX)}>
        <Link
          href={isDemo ? "/demo" : "/"}
          className="text-sm font-semibold tracking-tight"
        >
          {isDemo ? "Studio Lumière" : siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </a>
            ),
          )}
        </nav>

        {isDemo ? (
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground md:hidden"
          >
            Portfolio
          </Link>
        ) : null}

        <Link href="#contact" className={cn(buttonVariants(), "text-xs sm:text-sm shrink-0")}>
          {isDemo ? "Demander un devis" : "Me contacter"}
        </Link>
      </div>
    </header>
  );
}
