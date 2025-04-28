import { cn } from "@/lib/utils";


interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
        className
      )}
      {...props}
    />
  );
}
