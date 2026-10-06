import { business, contact, images, packages, pricing, seo, teacher } from "@/lib/content";
import { isPlaceholder } from "@/lib/utils";

const real = (value: string) => (isPlaceholder(value) ? undefined : value);

/**
 * LocalBusiness schema for search engines. Deliberately has no street address
 * or postal code: only the area (Hougang) is published.
 */
export function localBusinessJsonLd() {
  const sameAs = [real(contact.instagram), real(contact.tiktok)].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.url}/#business`,
    name: business.name,
    slogan: business.tagline,
    description: seo.description,
    url: business.url,
    image: new URL(images.hero.src, business.url).toString(),
    logo: new URL("/apple-icon.png", business.url).toString(),
    telephone: real(contact.whatsapp),
    email: real(contact.email),
    priceRange: `S$${pricing.assessmentFee}–S$${Math.max(...packages.map((p) => p.priceFrom))}`,
    currenciesAccepted: "SGD",
    paymentAccepted: "PayNow",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.area,
      addressCountry: "SG",
    },
    areaServed: [
      { "@type": "Place", name: `${business.area}, ${business.country}` },
      { "@type": "Country", name: business.country },
    ],
    ...(sameAs.length > 0 && { sameAs }),
    ...(real(teacher.name) && {
      employee: { "@type": "Person", name: teacher.name, jobTitle: "Guitar teacher" },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electric guitar lessons",
      itemListElement: [
        {
          "@type": "Offer",
          name: `Song Assessment (${pricing.lessonMinutes}-min 1-to-1 lesson)`,
          price: pricing.assessmentFee,
          priceCurrency: "SGD",
        },
        ...packages.map((pkg) => ({
          "@type": "Offer",
          name: `${pkg.name} package (about ${pkg.lessons} lessons)`,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: pkg.priceFrom,
            priceCurrency: "SGD",
          },
        })),
      ],
    },
  };
}

/** Serialises JSON-LD safely for a <script> tag. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
