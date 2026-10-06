import { howItWorks, hero } from "@/lib/content";
import { ButtonLink, Section } from "@/components/ui";

export function HowItWorks() {
  return (
    <Section id="how-it-works" eyebrow={howItWorks.eyebrow} title={howItWorks.title} intro={howItWorks.intro}>
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.steps.map((step, i) => (
          <li key={step.title} className="relative rounded-3xl border border-line bg-white p-7 shadow-sm">
            <span
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-full bg-brand-600 font-display text-xl font-extrabold text-white"
            >
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl font-bold">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="#book" className="text-lg">
          {hero.primaryCta}
        </ButtonLink>
      </div>
    </Section>
  );
}
