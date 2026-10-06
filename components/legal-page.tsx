import type { LegalPage as LegalPageContent } from "@/lib/content";

export function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <article className="container-page max-w-3xl py-16 sm:py-24">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{page.title}</h1>
        <p className="mt-3 text-muted">Last updated: {page.lastUpdated}</p>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">{page.intro}</p>
      </header>

      {page.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-2xl font-bold">{section.heading}</h2>
          <div className="mt-3 space-y-4 text-lg leading-relaxed text-ink-soft">
            {section.body.map((block, i) =>
              Array.isArray(block) ? (
                <ul key={i} className="list-disc space-y-2 pl-6 marker:text-brand-600">
                  {block.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{block}</p>
              ),
            )}
          </div>
        </section>
      ))}
    </article>
  );
}
