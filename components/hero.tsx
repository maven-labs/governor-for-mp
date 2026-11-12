"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

/*
 * ─────────────────────────────────────────────────────────
 *  SWAP THESE TWO CONSTANTS with your real assets:
 *
 *  VIDEO  → put your .mp4 in /public/videos/hero.mp4
 *  POSTER → put a high-res still in /public/images/hero-poster.jpg
 *           (used while video loads + on devices that block autoplay)
 * ─────────────────────────────────────────────────────────
 */
const VIDEO_SRC =
  "https://charlesbooker.org/wp-content/uploads/2026/05/CHARLES-BOOKER-HERO-VIDEO-0519-720.mp4";
const POSTER_SRC = "../public/ef8b4004-f1f9-4da3-9b21-5c597d17aacb.JPG";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Campaign hero"
      className={[
        "relative w-full overflow-hidden bg-primary -mt-16",
        "aspect-3/5 sm:aspect-16/8",
        "min-h-120",
        "max-h-[calc(100svh-68px)]", // never taller than viewport minus navbar
      ].join(" ")}
    >
      {/* ─────────────────────────────────────────────────────
          BACKGROUND MEDIA
          <video> with poster covers all cases:
            • Video loads normally      → silent looping video plays
            • Autoplay blocked (mobile) → poster image stays visible
            • No JS / error            → poster image stays visible
          object-[center_20%] keeps the upper body of a portrait in frame.
      ───────────────────────────────────────────────────── */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      /> */}
      <Image
        src="/hero-banner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0"
        fill
      />

      {/* ─────────────────────────────────────────────────────
          OVERLAY
          Two-layer approach:
          1. Uniform base tint  – knocks down overall brightness
          2. Left-to-right gradient – darkens left (text) side more,
             fades out on the right so the video still breathes through.
          Tweak the opacity stops below if your video is very dark/bright.
      ───────────────────────────────────────────────────── */}

      {/* Layer 1 — uniform base tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none bg-primary/20"
      />

      {/* Layer 2 — left-to-right directional gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,21,64,0.82) 0%, rgba(0,21,64,0.6) 30%, rgba(0,21,64,0.2) 55%, transparent 75%)",
        }}
      />

      {/* ─────────────────────────────────────────────────────
          TEXT CONTENT
          Constrained to the left half on large screens.
          Stacks to full-width centred on mobile.
      ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[46%]">
            {/* Eyebrow — slogan */}
            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="show"
              className="
                font-heading font-semibold uppercase tracking-[0.22em]
                text-gold
                mb-4
              "
              style={{ fontSize: "clamp(0.85rem, 1.3vw, 1rem)" }}
            >
              Time for Change
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={fadeUp(0.24)}
              initial="hidden"
              animate="show"
              className="font-heading font-black uppercase text-white leading-[0.88]"
              style={{
                fontSize: "clamp(1.73rem, 4.3vw, 3.86rem)",
                letterSpacing: "-0.01em",
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
              }}
            >
              Kumbungu <span className="text-gold">First.</span>
              <br />
              Kumbungu <span className="text-gold">Always.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp(0.38)}
              initial="hidden"
              animate="show"
              className="
                mt-5 font-body font-medium text-white leading-relaxed
              "
              style={{ fontSize: "clamp(0.82rem, 1.3vw, 1.25rem)" }}
            >
              Abdul Rauf &ldquo;Governor&rdquo; Sulemana is running for Member
              of Parliament in Kumbungu Constituency under the New Patriotic
              Party — fighting for youth, farmers, and every family in Kumbungu.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp(0.52)}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                className={buttonVariants({ variant: "accent", size: "lg" })}
                href="https://paystack.com/pay/abdul-for-mp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </Link>
              <Link
                href="/get-involved"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Join the Movement
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────
          BOTTOM ACCENT STRIP
      ───────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[5px] z-20"
        style={{
          background:
            "linear-gradient(to right, var(--red) 0%, var(--navy) 50%, var(--red) 100%)",
        }}
      />
    </section>
  );
}
