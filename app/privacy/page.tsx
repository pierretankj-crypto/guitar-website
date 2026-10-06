import type { Metadata } from "next";
import { privacyPolicy } from "@/lib/content";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: privacyPolicy.title, description: privacyPolicy.description, url: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage page={privacyPolicy} />;
}
