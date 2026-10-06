import { cn } from "@/lib/utils";

/** Guitar-pick shape used in the logo and favicon. */
export function PickIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path
        fill="currentColor"
        d="M12 22.5c-1.3 0-2.5-1-3.7-2.6C6.2 17 3.5 12.6 3.5 8.7 3.5 4.4 7.3 1.5 12 1.5s8.5 2.9 8.5 7.2c0 3.9-2.7 8.3-4.8 11.2-1.2 1.6-2.4 2.6-3.7 2.6Z"
      />
      <path
        fill="#fff"
        d="M13.2 5.5 8.6 12.1h3l-1 5.4 4.7-6.8h-3.1l1-5.2Z"
      />
    </svg>
  );
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <PickIcon className="size-7 text-brand-500" />
      <span
        className={cn(
          "font-display text-2xl font-extrabold tracking-tight",
          inverted ? "text-white" : "text-ink",
        )}
      >
        Os<span className={inverted ? "text-brand-400" : "text-brand-600"}>Rocks</span>
      </span>
    </span>
  );
}
