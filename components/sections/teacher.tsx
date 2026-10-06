import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { images, teacherSection } from "@/lib/content";
import { Eyebrow } from "@/components/ui";

export function Teacher() {
  return (
    <section id="teacher" aria-labelledby="teacher-heading" className="overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-2 -rotate-1 rounded-[2.25rem] bg-ink sm:-inset-4 sm:-rotate-2 sm:rounded-[2.5rem]" />
          <Image
            src={images.teacher.src}
            width={images.teacher.width}
            height={images.teacher.height}
            alt={images.teacher.alt}
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 448px, calc(100vw - 2.5rem)"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
        </div>

        <div>
          <Eyebrow>{teacherSection.eyebrow}</Eyebrow>
          <h2
            id="teacher-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            {teacherSection.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {teacherSection.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-bold">{teacherSection.stylesTitle}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {teacherSection.styles.map((style) => (
              <li
                key={style}
                className="rounded-full border-2 border-ink/10 bg-white px-4 py-1.5 font-semibold"
              >
                {style}
              </li>
            ))}
          </ul>

          <p className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-brand-100 px-4 py-3 font-bold text-brand-800">
            <GraduationCap aria-hidden="true" className="size-6 shrink-0" />
            {teacherSection.levels}
          </p>
        </div>
      </div>
    </section>
  );
}
