"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  },
});

export default function Quote() {
  return (
    <section
      aria-label="Candidate quote"
      className="w-full bg-sand overflow-hidden relative"
    >
      {/* ── Decorative large quotation mark — background watermark ── */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -top-6 left-8 sm:left-16 lg:left-24
          font-heading font-black text-primary/4
          leading-none
        "
        style={{ fontSize: "clamp(14rem, 28vw, 26rem)", lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-24 lg:py-32 flex flex-col items-center text-center">
        {/* Quote */}
        <motion.blockquote
          variants={fadeUp(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="font-heading font-black uppercase text-primary leading-[0.95]"
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;One bold <span className="text-gold">decision </span> changes a
          lot of <span className="text-gold">lives.</span>&rdquo;
          {/* &ldquo;You must be the <span className="text-gold">change </span> you
          wish to see in the <span className="text-gold">world.</span>&rdquo; */}
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <span
            className="block w-10 h-0.5 bg-accent rounded-full"
            aria-hidden="true"
          />
          <p className="font-body font-semibold text-secondary uppercase tracking-[0.16em] text-xs">
            Abdul Rauf Governor
          </p>
          <span
            className="block w-10 h-0.5 bg-accent rounded-full"
            aria-hidden="true"
          />
        </motion.div>

        {/* Vote footer */}
        {/* <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <p
            className="font-heading font-black uppercase text-white/90 tracking-[0.04em] leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
          >
            Vote <span className="text-accent">Governor</span> for Kumbungu MP —
            2028
          </p>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-3
              font-heading font-bold uppercase tracking-[0.1em]
              border-2 border-white/40 text-white
              px-8 py-3.5 rounded-[3px]
              hover:border-white hover:bg-white/8
              active:scale-[0.97]
              transition-all duration-200
            "
            style={{ fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)" }}
          >
            Join the Movement
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
