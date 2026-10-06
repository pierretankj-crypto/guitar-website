import { Plus } from "lucide-react";
import { faqSection } from "@/lib/content";
import { Section } from "@/components/ui";

export function Faq() {
  return (
    <Section id="faq" eyebrow={faqSection.eyebrow} title={faqSection.title} tone="white" align="center">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqSection.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-line bg-cream open:bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left text-lg font-bold">
              {item.question}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 transition-transform duration-200 group-open:rotate-45 group-open:bg-brand-100">
                <Plus aria-hidden="true" className="size-5" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="px-6 pb-6 text-lg leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
