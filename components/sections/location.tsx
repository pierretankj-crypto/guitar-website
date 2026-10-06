import Image from "next/image";
import { Cable, Guitar, MapPin, Speaker, TrainFront } from "lucide-react";
import { business, images, locationSection } from "@/lib/content";
import { Section } from "@/components/ui";

const gearIcons = [Guitar, Speaker, Cable];

export function Location() {
  return (
    <Section id="location" eyebrow={locationSection.eyebrow} title={locationSection.title} intro={locationSection.text}>
      <div className="grid gap-5 lg:grid-cols-2">
        <Image
          src={images.studio.src}
          width={images.studio.width}
          height={images.studio.height}
          alt={images.studio.alt}
          sizes="(min-width: 1152px) 552px, (min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
          className="aspect-[8/5] w-full rounded-3xl object-cover"
        />

        <div className="grid gap-5">
          <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-7 sm:flex-row sm:items-center">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <TrainFront aria-hidden="true" className="size-6" />
            </span>
            <div>
              <h3 className="text-xl font-bold">
                {business.nearestMrt}, {business.country}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-muted">
                <MapPin aria-hidden="true" className="size-4 shrink-0" />
                {locationSection.addressNote}
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-ink p-7 text-white">
            <h3 className="text-xl font-bold">{locationSection.gearTitle}</h3>
            <p className="mt-2 leading-relaxed text-white/85">{locationSection.gearText}</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {locationSection.gear.map((item, i) => {
                const Icon = gearIcons[i % gearIcons.length];
                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold"
                  >
                    <Icon aria-hidden="true" className="size-5 text-brand-400" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
