import Link from "next/link";
import { Mail } from "lucide-react";
import { business, contact, footer, nav } from "@/lib/content";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/brand-icons";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui";
import { isPlaceholder, whatsappUrl } from "@/lib/utils";

const safeHref = (url: string) => (isPlaceholder(url) ? "#" : url);

export function SiteFooter() {
  const socials = [
    { label: "Instagram", href: safeHref(contact.instagram), Icon: InstagramIcon },
    { label: "TikTok", href: safeHref(contact.tiktok), Icon: TikTokIcon },
  ];

  return (
    <footer className="bg-ink pb-28 pt-16 text-white md:pb-12">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="OsRocks home" className="inline-block rounded-lg">
              <Logo inverted />
            </Link>
            <p className="mt-4 max-w-xs text-lg font-semibold">{business.tagline}</p>
            <p className="mt-2 max-w-xs text-white/75">{footer.blurb}</p>
            <ButtonLink
              href={whatsappUrl()}
              target="_blank"
              rel="noopener"
              variant="whatsapp"
              className="mt-6"
            >
              <WhatsAppIcon className="size-5" />
              {footer.whatsappCta}
              <span className="sr-only"> (opens WhatsApp)</span>
            </ButtonLink>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-white/70">Explore</h2>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/90 hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#book" className="text-white/90 hover:text-white hover:underline">
                  Book a Song Assessment
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-white/70">Get in touch</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                >
                  <Mail aria-hidden="true" className="size-5" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white hover:underline"
                >
                  <WhatsAppIcon className="size-5" />
                  {contact.whatsapp}
                  <span className="sr-only"> on WhatsApp</span>
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  >
                    <Icon className="size-5" />
                    <span className="sr-only">{business.name} on {label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
