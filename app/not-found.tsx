import Link from "next/link";
import { buttonClasses } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-24 text-center sm:py-32">
      <p className="font-display text-7xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Wrong note!</h1>
      <p className="mt-3 max-w-md text-lg text-muted">We couldn&apos;t find that page.</p>
      <Link href="/" className={buttonClasses("primary", "mt-8")}>
        Back to the home page
      </Link>
    </div>
  );
}
