import { WhatsAppIcon } from "@/components/brand-icons";
import { whatsappUrl } from "@/lib/utils";

/** Floating click-to-chat button, shown on mobile only. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-ink/25 transition-transform active:scale-95 md:hidden"
    >
      <WhatsAppIcon className="size-7" />
      <span className="sr-only">Chat with OsRocks on WhatsApp (opens WhatsApp)</span>
    </a>
  );
}
