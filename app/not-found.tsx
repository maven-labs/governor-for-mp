import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-primary flex items-center justify-center px-5">
      <div className="max-w-xl w-full text-center py-24">

        <p className="font-heading font-black uppercase text-accent text-sm tracking-[0.25em] mb-4">
          404
        </p>

        <h1
          className="font-heading font-black uppercase text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
        >
          Page not
          <br />
          <span className="text-white/60">found.</span>
        </h1>

        <p className="mt-6 text-white/60 leading-relaxed text-lg max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[3px] bg-accent text-white font-heading font-bold uppercase tracking-[0.08em] text-sm transition-opacity hover:opacity-80"
          >
            Back to Home
          </Link>
          <Link
            href="/#donate"
            className="inline-flex items-center justify-center px-8 py-4 rounded-[3px] border-2 border-white/30 text-white font-heading font-bold uppercase tracking-[0.08em] text-sm transition-all hover:border-white hover:bg-white/5"
          >
            Donate
          </Link>
        </div>

      </div>
    </main>
  );
}
