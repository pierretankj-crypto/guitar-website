import type { Metadata } from "next";
import { termsOfService } from "@/lib/content";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
  alternates: { canonical: "/terms" },
  openGraph: { title: termsOfService.title, description: termsOfService.description, url: "/terms" },
};

export default function TermsPage() {
  return <LegalPage page={termsOfService} />;
}
