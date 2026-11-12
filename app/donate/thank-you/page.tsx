import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for supporting Abdul Rauf \"Governor\" Sulemana's campaign for Kumbungu MP.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen w-full bg-secondary flex items-center justify-center px-5">
      <div className="max-w-xl w-full text-center py-24">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 text-white"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="font-heading font-black uppercase text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
        >
          Thank you for
          <br />
          <span className="text-white/70">your support.</span>
        </h1>

        {/* Body */}
        <p className="mt-6 text-white/70 leading-relaxed text-lg max-w-md mx-auto">
          Your contribution to the Governor Sulemana for Kumbungu MP campaign
          means everything. Together, we are building a better Kumbungu —
          one that works for every family, every farmer, and every young person.
        </p>

        {/* Divider */}
        <div className="mt-10 mb-10 border-t border-white/20" />

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[3px] bg-white text-secondary font-heading font-bold uppercase tracking-[0.08em] text-sm transition-opacity hover:opacity-80"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[3px] border-2 border-white/40 text-white font-heading font-bold uppercase tracking-[0.08em] text-sm transition-all hover:border-white hover:bg-white/10"
          >
            Get Involved
          </Link>
        </div>

        {/* Fine print */}
        <p className="mt-10 text-white/40 text-xs leading-relaxed">
          A receipt has been sent to your email by Paystack.
          <br />
          Contributions are not tax-deductible.
        </p>

      </div>
    </main>
  );
}
