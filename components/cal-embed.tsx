"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

const EMBED_SCRIPT = "https://app.cal.com/embed/embed.js";
const EMBED_ORIGIN = "https://app.cal.com";
const NAMESPACE = "song-assessment";
const BRAND_COLOR = "#c93f0a";

/* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
type CalFn = ((...args: any[]) => void) & {
  ns: Record<string, (...args: any[]) => void>;
  q?: any[];
  loaded?: boolean;
};

/**
 * Cal.com's official embed loader (https://cal.com/docs/embed), rewritten so
 * we can tell when the script fails to load. Calls are queued until
 * embed.js arrives and replaces window.Cal.
 */
function getCal(onScriptError: () => void): CalFn {
  const w = window as any;
  if (!w.Cal) {
    const push = (target: any, args: any) => target.q.push(args);
    w.Cal = function () {
      const cal = w.Cal;
      const args = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = document.createElement("script");
        script.src = EMBED_SCRIPT;
        script.async = true;
        script.onerror = onScriptError;
        document.head.appendChild(script);
        cal.loaded = true;
      }
      if (args[0] === "init") {
        const api: any = function () {
          push(api, arguments);
        };
        const namespace = args[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          push(cal.ns[namespace], args);
          push(cal, ["initNamespace", namespace]);
        } else {
          push(cal, args);
        }
        return;
      }
      push(cal, args);
    };
  }
  return w.Cal;
}
/* eslint-enable @typescript-eslint/no-explicit-any, prefer-rest-params */

let namespaceReady = false;

type Status = "idle" | "loading" | "ready" | "error";

/**
 * Inline Cal.com booking calendar. The (heavy) Cal.com script is only loaded
 * when the calendar is about to scroll into view, to keep the page fast.
 */
export function CalEmbed({ calLink, bookingUrl }: { calLink: string; bookingUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const container = containerRef.current;
    const target = embedRef.current;
    if (!container || !target) return;

    let started = false;
    let timeout: number | undefined;

    const start = () => {
      if (started) return;
      started = true;
      setStatus("loading");

      const Cal = getCal(() => setStatus("error"));
      if (!namespaceReady) {
        Cal("init", NAMESPACE, { origin: EMBED_ORIGIN });
        namespaceReady = true;
      }
      const api = Cal.ns[NAMESPACE];
      api("inline", {
        elementOrSelector: target,
        calLink,
        config: { layout: "month_view", theme: "light" },
      });
      api("ui", {
        theme: "light",
        layout: "month_view",
        hideEventTypeDetails: false,
        cssVarsPerTheme: { light: { "cal-brand": BRAND_COLOR }, dark: { "cal-brand": BRAND_COLOR } },
      });
      api("on", { action: "linkReady", callback: () => setStatus("ready") });
      api("on", { action: "linkFailed", callback: () => setStatus("error") });

      // If nothing has happened after 20s, show the fallback link.
      timeout = window.setTimeout(() => {
        setStatus((s) => (s === "loading" ? "error" : s));
      }, 20000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          start();
        }
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [calLink]);

  return (
    <div ref={containerRef} className={status === "error" ? "relative min-h-64" : "relative min-h-[40rem]"}>
      {status !== "ready" && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
          role="status"
        >
          <CalendarDays aria-hidden="true" className="size-10 text-brand-600" />
          {status === "error" ? (
            <p className="max-w-sm text-lg text-ink-soft">
              The calendar couldn&apos;t load here.{" "}
              <a href={bookingUrl} target="_blank" rel="noopener" className="font-bold text-brand-700 underline">
                Open the booking page
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              instead.
            </p>
          ) : (
            <p className="text-lg font-semibold text-muted">Loading available times…</p>
          )}
        </div>
      )}
      {/* Cal.com renders its iframe in here. React never touches its children. */}
      <div ref={embedRef} className="relative w-full" />
    </div>
  );
}
