import { EyeOff, ListX, Sparkles, Shuffle } from "lucide-react";
import { problem } from "@/lib/content";
import { Section } from "@/components/ui";

const icons = [ListX, EyeOff, Shuffle];

export function Problem() {
  return (
    <Section id="why" eyebrow={problem.eyebrow} title={problem.title} intro={problem.intro} tone="white">
      <ul className="grid gap-5 md:grid-cols-3">
        {problem.points.map((point, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={point.title} className="rounded-3xl border border-line bg-cream p-7">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-ink shadow-sm">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{point.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{point.text}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex flex-col gap-5 rounded-3xl bg-ink p-7 text-white sm:flex-row sm:items-center sm:p-10">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-ink">
          <Sparkles aria-hidden="true" className="size-7" />
        </span>
        <div>
          <h3 className="text-2xl font-extrabold">{problem.solution.title}</h3>
          <p className="mt-2 max-w-3xl text-lg leading-relaxed text-white/85">{problem.solution.text}</p>
        </div>
      </div>
    </Section>
  );
}
