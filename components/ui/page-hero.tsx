"use client";

import { motion } from "framer-motion";

export default function PageHero({ title }: { title: string }) {
  return (
    <section className="flex min-h-[28vh] items-center overflow-hidden bg-chart-3 py-24">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-start text-5xl font-black font-heading leading-[0.9] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-7xl uppercase"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
