"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icons from "./ui/icons";
import { buttonVariants } from "./ui/button";

const ABOUT_IMAGE = "/about.JPG";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  },
});

export default function AboutGovernor() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-sand overflow-hidden"
    >
      <div className="py-10 lg:py-16 xl:py-24">
        <div className="container grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-8">
          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="xl:col-start-2 w-full flex items-center justify-center flex-1"
          >
            <div className="relative w-full h-86 md:h-172.5 rounded-[8px] overflow-hidden">
              <Image
                src={ABOUT_IMAGE}
                alt="Abdul Rauf 'Governor' Sulemana at Majority Radio, Tamale."
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </motion.div>
          <div className="xl:col-start-1 xl:row-start-1 flex items-center sm:px-14 lg:px-16 flex-1">
            <div className="w-full flex flex-col gap-6">
              {/* <motion.p
                variants={fadeUp(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-accent"
              >
                About Governor
              </motion.p> */}

              <motion.h2
                id="about-heading"
                variants={fadeUp(0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="font-heading font-black uppercase text-foreground text-[40px] md:text-6xl leading-[0.98] tracking-[-0.01em]"
              >
                Born of this <span className="text-gold">land.</span>
                <br />
                Built for this <span className="text-gold">moment.</span>
              </motion.h2>

              <motion.div
                variants={fadeUp(0.26)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-5 text-[15px] md:text-base text-foreground leading-[1.6]"
              >
                <p>
                  Abdul Rauf &ldquo;Governor&rdquo; Sulemana is a son of
                  Kumbungu — raised in its communities, shaped by its
                  challenges, and driven by its potential. He has seen firsthand
                  what it means for a constituency to be overlooked: young
                  people without work, farmers without support, and families
                  without the services they deserve.
                </p>
                <p>
                  Running under the New Patriotic Party, Governor is not just
                  seeking a seat — he is building a movement. A movement rooted
                  in the belief that Kumbungu&rsquo;s youth are its greatest
                  asset, its farmers are its backbone, and its future is worth
                  fighting for. It is time Kumbungu had a voice. That voice is
                  Governor.
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
                  href="/about-governor"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  About Governor
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
