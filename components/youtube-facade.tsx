"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Shows a thumbnail first and only loads the YouTube player when clicked,
 * so testimonial videos don't slow the page down.
 */
export function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 size-full"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 360px, 100vw"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/30">
        <span className="flex size-16 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg">
          <Play aria-hidden="true" className="ml-1 size-7 fill-current" />
        </span>
      </span>
      <span className="sr-only">Play video: {title}</span>
    </button>
  );
}
