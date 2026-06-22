import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  variant?: "default" | "muted";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  variant = "default",
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-24",
        variant === "muted" && "border-t border-border/60 bg-muted/40",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-5xl px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
