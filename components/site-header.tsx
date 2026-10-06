"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, pricing } from "@/lib/content";
import { Logo } from "@/components/logo";
import { buttonClasses } from "@/components/ui";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="OsRocks home" className="rounded-lg" onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:bg-brand-50 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#book"
            onClick={close}
            className={buttonClasses("primary", "min-h-11 px-4 py-2 text-sm sm:px-5 sm:text-[0.95rem]")}
          >
            <span className="sm:hidden">Book now</span>
            <span className="hidden sm:inline">Book assessment (${pricing.assessmentFee})</span>
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink/10 bg-white text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn("border-t border-line bg-cream md:hidden", open ? "block" : "hidden")}
      >
        <ul className="container-page flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="block rounded-xl px-3 py-3 text-lg font-semibold text-ink hover:bg-brand-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
