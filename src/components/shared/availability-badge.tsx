import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type AvailabilityBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function AvailabilityBadge({ children, className }: AvailabilityBadgeProps) {
  return (
    <Badge variant="secondary" className={cn("mb-6 h-auto min-h-6 gap-2 py-1 pr-3 pl-2.5", className)}>
      <span className="relative flex size-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      <span>{children}</span>
    </Badge>
  );
}
