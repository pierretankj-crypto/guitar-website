import { Check, Info } from "lucide-react";
import { packages, packagesSection } from "@/lib/content";
import { ButtonLink, Section } from "@/components/ui";
import { formatPrice } from "@/lib/utils";

export function Packages() {
  return (
    <Section
      id="packages"
      eyebrow={packagesSection.eyebrow}
      title={packagesSection.title}
      intro={packagesSection.intro}
      tone="white"
    >
      <ul className="grid gap-5 lg:grid-cols-3">
        {packages.map((pkg) => (
          <li
            key={pkg.id}
            className="flex flex-col rounded-3xl border-2 border-line bg-cream p-7 transition-colors hover:border-brand-200 sm:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{pkg.tier}</p>
            <h3 className="mt-2 text-2xl font-extrabold">{pkg.name}</h3>
            <p className="mt-1 font-semibold text-ink-soft">About {pkg.lessons} lessons</p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-base font-semibold text-muted">from</span>
              <span className="font-display text-5xl font-extrabold tracking-tight">
                {formatPrice(pkg.priceFrom)}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted">
              About {formatPrice(Math.round(pkg.priceFrom / pkg.lessons))} per lesson
            </p>

            <p className="mt-6 leading-relaxed text-ink-soft">{pkg.description}</p>
            <p className="mt-auto pt-6 text-sm text-muted">
              <span className="font-semibold text-ink-soft">Songs like: </span>
              {pkg.examples.join(", ")}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl bg-brand-50 p-7 sm:p-8">
          <h3 className="text-xl font-bold">{packagesSection.includesTitle}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {packagesSection.includes.map((item) => (
              <li key={item} className="flex gap-3 font-semibold text-ink-soft">
                <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-700" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-5 rounded-3xl border border-line p-7 sm:p-8">
          <p className="flex gap-3 leading-relaxed text-ink-soft">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-700" />
            {packagesSection.note}
          </p>
          <ButtonLink href="#book">{packagesSection.cta}</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
