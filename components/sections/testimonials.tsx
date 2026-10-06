import { Quote } from "lucide-react";
import { testimonialsSection, type Testimonial } from "@/lib/content";
import { Section } from "@/components/ui";
import { YouTubeFacade } from "@/components/youtube-facade";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow={testimonialsSection.eyebrow}
      title={testimonialsSection.title}
      tone="white"
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsSection.items.map((item, i) => (
          <li key={i} className="flex">
            <figure className="flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-cream">
              {item.video && <TestimonialVideo video={item.video} name={item.name} />}
              <div className="flex flex-1 flex-col p-7">
                <Quote aria-hidden="true" className="size-8 fill-brand-200 text-brand-200" />
                <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-ink-soft">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <span className="block font-bold">{item.name}</span>
                  <span className="block text-sm text-muted">{item.detail}</span>
                </figcaption>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function TestimonialVideo({ video, name }: { video: NonNullable<Testimonial["video"]>; name: string }) {
  const title = `Video from ${name}`;
  return (
    <div className="relative aspect-[3/4] w-full bg-ink">
      {video.kind === "youtube" ? (
        <YouTubeFacade id={video.id} title={title} />
      ) : (
        <video
          controls
          playsInline
          preload="none"
          poster={video.poster}
          aria-label={title}
          className="absolute inset-0 size-full object-cover"
        >
          <source src={video.src} type="video/mp4" />
          {video.captions && <track kind="captions" src={video.captions} srcLang="en" label="English" default />}
        </video>
      )}
    </div>
  );
}
