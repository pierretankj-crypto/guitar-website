import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-base font-bold transition-colors duration-150";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white shadow-sm shadow-brand-600/25 hover:bg-brand-800",
  secondary: "border-2 border-ink/15 bg-white text-ink hover:border-ink/40",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(buttonBase, buttonVariants[variant], className);
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return <a className={buttonClasses(variant, className)} {...props} />;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.14em] text-brand-700",
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "cream" | "white";
  align?: "left" | "center";
  children: ReactNode;
  className?: string;
};

/** Standard page section with an accessible heading. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "cream",
  align = "left",
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 sm:py-28", tone === "white" ? "bg-white" : "bg-cream", className)}
    >
      <div className="container-page">
        <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
