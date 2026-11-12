"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icons from "./ui/icons";
import { buttonVariants } from "./ui/button";

const WHY_IMAGE = "/about-governor.avif";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  },
});

export default function WhyImRunning() {
  return (
    <section
      id="why-running"
      aria-labelledby="why-running-heading"
      className="w-full bg-sand overflow-hidden"
    >
      <div className="py-10 lg:py-16 xl:py-24">
        <div className="container grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-8">
          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex items-center justify-center flex-1"
          >
            <div className="relative w-full h-86 md:h-172.5 rounded-[8px] overflow-hidden">
              <Image
                src={WHY_IMAGE}
                alt="Abdul Rauf 'Governor' Sulemana at Majority Radio, Tamale."
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </motion.div>
          <div className="flex items-center sm:px-14 lg:px-16 flex-1">
            <div className="w-full flex flex-col gap-6">
              {/* <motion.p
                variants={fadeUp(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                Why I'm Running
              </motion.p> */}

              <motion.h2
                id="why-running-heading"
                variants={fadeUp(0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="font-heading font-black uppercase text-foreground text-[40px] md:text-6xl leading-[0.98] tracking-[-0.01em]"
              >
                <span className="text-gold">Kumbungu</span>, it's time for us to
                turn a <span className="text-gold">new page.</span>
              </motion.h2>

              <motion.div
                variants={fadeUp(0.26)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-5 text-[15px] md:text-base text-foreground leading-[1.6]"
              >
                <p>
                  For too long, Kumbungu has elected MPs who have defended
                  politics as usual and protected the status quo, while
                  constituents pay the price. We&rsquo;ve had MPs who&rsquo;ve
                  pushed the dreams of many further and further out of reach.
                </p>
                <p>
                  I&rsquo;m running for Member of Parliament for Kumbungu
                  because I believe Kumbungu deserves a MP who will be an
                  independent voice for all constituents — not a rubber stamp or
                  party line vote for the status quo.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp(0.38)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-4"
              >
                <Link
                  href="/why"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Why I'm Running
                  <Icons.longArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
