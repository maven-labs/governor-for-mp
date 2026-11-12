"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  },
});

const PRIORITIES = [
  {
    number: "01",
    title: "Youth Employment & Skills",
    body: "Kumbungu has a young, energetic population with nowhere to go. Governor will establish vocational training centres and partner with private sector employers to create sustainable jobs — not handouts, but real pathways to economic independence.",
  },
  {
    number: "02",
    title: "Agriculture & Food Security",
    body: "Farming is the backbone of Kumbungu, yet our farmers lose too much to post-harvest waste and low prices. Governor will push for processing plants, storage facilities, and a 'Youth in Agriculture' programme that trains a new generation of farmers.",
  },
  {
    number: "03",
    title: "Education & Equal Opportunity",
    body: "Every child in Kumbungu deserves the same quality of education as any child in Accra. Governor will work to improve school infrastructure, teacher welfare, and digital access — because an educated Kumbungu is an unstoppable Kumbungu.",
  },
  {
    number: "04",
    title: "Healthcare Access",
    body: "No mother should travel hours to deliver a baby. No child should die of a preventable illness. Governor is committed to expanding healthcare infrastructure in Kumbungu so that quality care is never out of reach.",
  },
  {
    number: "05",
    title: "Women's Empowerment",
    body: "Women are the foundation of our communities. Governor will champion programmes that give women access to credit, vocational skills, and market opportunities — so that the women of Kumbungu can lead, not just survive.",
  },
  {
    number: "06",
    title: "Infrastructure & Clean Water",
    body: "Roads, water, and sanitation are not luxuries — they are rights. Governor will advocate at the national level for infrastructure investment in Kumbungu and ensure that every community has access to clean, reliable water.",
  },
];

export default function Priorities() {
  return (
    <section
      id="priorities"
      aria-labelledby="priorities-heading"
      className="w-full bg-sand"
    >
      <div className="py-16 lg:py-24">
        <div className="container">
          {/* Intro */}
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl mb-16"
          >
            <h2
              id="priorities-heading"
              className="font-heading font-black uppercase text-primary leading-none text-[clamp(2rem,4.5vw,3.5rem)]"
            >
              What I&rsquo;ll fight for
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/70">
              For too long, Kumbungu has been overlooked. Governor is running
              because he believes every constituent deserves a representative
              who shows up — not just at election time, but every single day.
            </p>
          </motion.div>

          {/* Priority grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRIORITIES.map((item, i) => (
              <motion.div
                key={item.number}
                variants={fadeUp(0.08 * i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="flex flex-col gap-4 border-t-2 border-accent pt-6"
              >
                <span className="font-heading font-black text-accent text-sm tracking-[0.18em] uppercase">
                  {item.number}
                </span>
                <h3 className="font-heading font-black uppercase text-primary text-xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-[0.95rem]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.blockquote
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-20 border-l-4 border-gold pl-6 max-w-2xl"
          >
            <p className="font-heading font-bold text-primary text-xl md:text-2xl leading-snug uppercase">
              &ldquo;I'm fighting for my people to have the equal opportunities
              promised to all Ghanaians.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-foreground/60 font-semibold uppercase tracking-widest">
              — Abdul Rauf &ldquo;Governor&rdquo; Sulemana
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
