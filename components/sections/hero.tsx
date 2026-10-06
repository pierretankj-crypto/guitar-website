import Image from "next/image";
import { CircleCheck, Music2 } from "lucide-react";
import { hero, images } from "@/lib/content";
import { ButtonLink, Eyebrow } from "@/components/ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-brand-100/70 blur-3xl"
      />
      <div className="container-page relative grid items-center gap-12 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-heading"
            className="mt-4 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            <HeroTitle />
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{hero.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#book" className="text-lg">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" className="text-lg">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm text-muted">{hero.ctaNote}</p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 font-semibold text-ink-soft">
                <CircleCheck aria-hidden="true" className="size-5 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-2 rotate-2 rounded-[2.25rem] bg-brand-500/90 sm:-inset-4 sm:rotate-3 sm:rounded-[2.5rem]"
          />
          <Image
            src={images.hero.src}
            width={images.hero.width}
            height={images.hero.height}
            alt={images.hero.alt}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, calc(100vw - 2.5rem)"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Music2 aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block font-display font-bold leading-tight">{hero.badge.title}</span>
              <span className="block text-sm text-muted">{hero.badge.text}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTitle() {
  const index = hero.titleHighlight ? hero.title.indexOf(hero.titleHighlight) : -1;
  if (index === -1) return hero.title;
  const end = index + hero.titleHighlight.length;
  return (
    <>
      {hero.title.slice(0, index)}
      <span className="relative inline-block text-brand-600">
        {hero.titleHighlight}
        <svg
          aria-hidden="true"
          viewBox="0 0 300 12"
          preserveAspectRatio="none"
          className="absolute -bottom-2 left-0 h-3 w-full text-brand-400/70"
        >
          <path d="M2 9c60-6 140-8 296-4" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </span>
      {hero.title.slice(end)}
    </>
  );
}
