import { CalendarDays, Smartphone, Wallet, MapPinned } from "lucide-react";
import { booking, bookingSection } from "@/lib/content";
import { CalEmbed } from "@/components/cal-embed";
import { WhatsAppIcon } from "@/components/brand-icons";
import { Eyebrow } from "@/components/ui";
import { calBookingUrl, isPlaceholder, normalizeCalLink, whatsappUrl } from "@/lib/utils";

const stepIcons = [CalendarDays, Wallet, MapPinned];

export function Booking() {
  const calReady = !isPlaceholder(booking.calLink);

  return (
    <section id="book" aria-labelledby="book-heading" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{bookingSection.eyebrow}</Eyebrow>
          <h2
            id="book-heading"
            className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            {bookingSection.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{bookingSection.intro}</p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {bookingSection.steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 font-semibold shadow-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="sr-only">Step {i + 1}: </span>
                  {step}
                </span>
              </li>
            );
          })}
        </ol>

        <p className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-2xl border-2 border-brand-200 bg-brand-50 px-5 py-4 text-lg font-semibold text-ink">
          <Smartphone aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-700" />
          {bookingSection.paymentNote}
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
          {calReady ? (
            <CalEmbed calLink={normalizeCalLink(booking.calLink)} bookingUrl={calBookingUrl(booking.calLink)} />
          ) : (
            <div className="flex min-h-[24rem] flex-col items-center justify-center gap-3 p-8 text-center">
              <CalendarDays aria-hidden="true" className="size-10 text-brand-600" />
              <p className="text-lg font-bold">The booking calendar will appear here.</p>
              <p className="max-w-md text-muted">
                Add your Cal.com link to <code className="rounded bg-sand px-1.5 py-0.5">booking.calLink</code> in{" "}
                <code className="rounded bg-sand px-1.5 py-0.5">lib/content.ts</code>.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-x-6 gap-y-3 text-center sm:flex-row">
          {calReady && (
            <p className="text-muted">
              {bookingSection.fallbackText}{" "}
              <a
                href={calBookingUrl(booking.calLink)}
                target="_blank"
                rel="noopener"
                className="font-bold text-brand-700 underline underline-offset-2"
              >
                {bookingSection.fallbackLink}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          )}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="font-bold text-whatsapp underline underline-offset-2"
          >
            <WhatsAppIcon className="mr-1.5 inline size-5 align-[-0.3em]" />
            {bookingSection.questionsText}
            <span className="sr-only"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
