import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Packages } from "@/components/sections/packages";
import { Teacher } from "@/components/sections/teacher";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { Faq } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { jsonLdScript, localBusinessJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd())} />
      <Hero />
      <Problem />
      <HowItWorks />
      <Packages />
      <Teacher />
      <Testimonials />
      <Location />
      <Faq />
      <Booking />
    </>
  );
}
