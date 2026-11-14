"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

/* ─── Achievements data ─────────────────────────────────────────────────── */
// images: array of { src, alt } — add real paths when photos are ready.
// The placeholder overlay disappears automatically once a real image loads.
const ACHIEVEMENTS = [
  {
    id: "youth-employment",
    number: "01",
    category: "Youth Empowerment",
    title: "Youth Empowerment & Employment",
    body: "Governor has facilitated job placements for numerous young people across various communities — within and beyond the Kumbungu constituency — opening doors and creating pathways where few existed.",
    images: [
      {
        src: "/images/nurses-supported.avif",
        alt: "Donation to health facility by Governor",
      },
      {
        src: "/images/nurses-supported-1.avif",
        alt: "Donation to health facility by Governor",
      },
      {
        src: "/images/money-donation.avif",
        alt: "Youth employment facilitated by Governor",
      },
      {
        src: "/images/donation.avif",
        alt: "Market woman supported by Governor",
      },
      {
        src: "/images/cash-donation-1.avif",
        alt: "Market woman supported by Governor",
      },
    ],
  },
  {
    id: "logistical-support",
    number: "02",
    category: "Party Support",
    title: "Logistical Support for the NPP",
    body: "In 2024, Governor donated over 3,000 party T-shirts, 500 veils for women, customised party wristbands, and other essential campaign materials — amplifying the NPP's visibility and footprint across Kumbungu.",
    images: [
      {
        src: "/images/t-shirts.avif",
        alt: "Campaign T-shirt donation",
      },
      {
        src: "/images/party-items.avif",
        alt: "Women's veils and wristbands donation",
      },
    ],
  },
  {
    id: "media-outreach",
    number: "03",
    category: "Media & Communications",
    title: "Media Outreach",
    body: 'During the 2024 campaign, Governor sponsored the popular radio programme "BAWUMIA SAHA" on Majority Radio in Tamale — projecting the vision and achievements of the party\'s presidential candidate to a wide Northern Region audience.',
    images: [
      {
        src: "/images/bawumia-saha-poster.avif",
        alt: "Radio programme flyer",
      },
      {
        src: "/images/about.jpg",
        alt: "BAWUMIA SAHA radio broadcast",
      },
    ],
  },
  {
    id: "mion-support",
    number: "04",
    category: "Inter-Constituency",
    title: "Inter-Constituency Support — Mion",
    body: "Beyond Kumbungu, Governor partnered with the Mion NPP Constituency Youth Organizer, providing cash donations and sports equipment to help the NPP retain the seat — proving his commitment to the party transcends constituency lines.",
    images: [
      {
        src: "/images/mion-outreach.avif",
        alt: "Mion constituency outreach",
      },
      {
        src: "/images/mion-support.avif",
        alt: "Donations to Mion constituency",
      },
      {
        src: "/images/mion-youth-agenda-tour.avif",
        alt: "Governor speaking at the Youth agenda movement tour in Mion",
      },
      // {
      //   src: "/images/tinywow_1b74d73c-879e-4f22-8464-36a66669c9e0_92543548.avif",
      //   alt: "Sports equipment for Mion NPP youth",
      // },
    ],
  },
  {
    id: "community-development",
    number: "05",
    category: "Infrastructure",
    title: "Community Development — Walewale",
    body: "Prior to the 2024 election, Governor lobbied successfully for key infrastructure in the home constituency of the party's presidential candidate — securing a new 3-unit classroom block, the renovation of another 3-classroom block for the Fio community, and a mechanised borehole.",
    images: [
      {
        src: "/images/fio-old-primary.avif",
        alt: "New 3-unit classroom block in Walewale",
      },
      {
        src: "/images/fio-renovated-primary.avif",
        alt: "Fio community classroom renovation",
      },
      {
        src: "/images/fio-classroom-block-commissioning-event.avif",
        alt: "Renovated classroom block at Fio community",
      },
      {
        src: "/images/fio-first-ever-jhs-classroom-block.avif",
        alt: "First ever JHS classroom block at Fio community",
      },
      {
        src: "/images/fio-renovated-classroom-block.avif",
        alt: "Governor at the renovated classroom block at Fio community 1",
      },
      {
        src: "/images/fio-classroom-block.avif",
        alt: "Governor at the renovated classroom block at Fio community 2",
      },
      // {
      //   src: "/images/walewale-community-development.avif",
      //   alt: "Mechanised borehole in Walewale",
      // },
    ],
  },
  {
    id: "water-sanitation",
    number: "06",
    category: "Water & Sanitation",
    title: "Water & Sanitation — Chereponi",
    body: "Governor supported Hon. Razak in constructing a borehole for the Namujoka community in Chereponi, complementing the NPP government's drive to provide clean, reliable drinking water to underserved communities.",
    images: [
      {
        src: "/images/old-dam.avif",
        alt: "Borehole construction in Chereponi",
      },
      {
        src: "/images/old-dam-1.avif",
        alt: "Namujoka old dam",
      },
      {
        src: "/images/mechanised-borehole.avif",
        alt: "Namujoka community mechanised borehole",
      },
    ],
  },
  {
    id: "healthcare",
    number: "07",
    category: "Healthcare",
    title: "Maternity Ward Renovation",
    body: "The only maternity ward in the Gupanarigu Electoral Area had fallen into severe disrepair. Governor personally funded its renovation and donated medical equipment to the facility — restoring dignified healthcare for mothers and newborns.",
    images: [
      {
        src: "/images/gupanarigu-old-maternity-ward.avif",
        alt: "Old maternity ward exterior",
      },
      {
        src: "/images/gupanirigu-new-maternity-ward.avif",
        alt: "Renovated maternity ward exterior",
      },
      {
        src: "/images/gupanarigu-maternity-ward-donation.avif",
        alt: "Medical equipment donated to ward",
      },
    ],
  },
  {
    id: "party-cards",
    number: "08",
    category: "Party Organisation",
    title: "Party Card Distribution & Reorganisation",
    body: "For the first time in the Northern Region, Governor lobbied and brought national-level officials to issue NPP party cards directly to members in Kumbungu. He also made significant donations of assorted items towards the party's reorganisation effort.",
    images: [
      {
        src: "/images/party-items.avif",
        alt: "NPP party card distribution event",
      },
      // {
      //   src: "/images/tinywow_0dc1806c-2e4f-4de1-ac46-25bd8f94ed6b_92543519.avif",
      //   alt: "National officials at Kumbungu card issuance",
      // },
    ],
  },
  {
    id: "peace-unity",
    number: "09",
    category: "Advocacy",
    title: "Fostering Peace & Unity",
    body: "Governor has championed opportunities for fellow Northerners at the Ghana Ports and Harbours Authority, lobbying effectively for career advancement. He remains a consistent voice for the marginalised — a commitment that speaks louder than any campaign promise.",
    images: [
      {
        src: "/images/support.avif",
        alt: "Governor advocating for constituents",
      },
      // {
      //   src: "/images/tinywow_1ad303e4-6abb-4176-beb3-6c3777245c5c_92543532.avif",
      //   alt: "Community engagement for peace",
      // },
    ],
  },
  {
    id: "sports",
    number: "10",
    category: "Sports & Youth",
    title: "Peace & Development Cup",
    body: "In November 2025, Governor organised the maiden Peace and Development Cup — a constituency-wide soccer tournament bringing together zonal communities to promote unity, healthy competition, and meaningful engagement for the youth of Kumbungu.",
    images: [
      {
        src: "/images/peace-cup-launch.avif",
        alt: "Peace and Development Cup opening ceremony",
      },
      // {
      //   src: "/images/zamigu-youth.avif",
      //   alt: "Tournament match in progress",
      // },
      {
        src: "/images/peace-cup.avif",
        alt: "Award ceremony at the Peace Cup",
      },
    ],
  },
];

/* ─── Image carousel ─────────────────────────────────────────────────────── */
function ImageCarousel({
  images,
  number,
}: {
  images: { src: string; alt: string }[];
  number: string;
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current],
  );

  const prev = () => go((current - 1 + images.length) % images.length);
  const next = () => go((current + 1) % images.length);

  const variants = {
    enter: (d: number) => ({ x: d * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -40, opacity: 0 }),
  };

  return (
    <div className="relative w-full aspect-4/3 overflow-hidden select-none">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls — only shown if more than 1 image */}
      {images.length > 1 && (
        <>
          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-secondary transition-colors duration-150 backdrop-blur-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-secondary hover:text-primary transition-colors duration-150 backdrop-blur-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Photo ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-5 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-3 right-3 z-10 font-heading text-[0.6rem] font-bold tracking-[0.12em] text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Animation helpers ──────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  },
});

/* ─── Page content ──────────────────────────────────────────────────────── */
export default function ImpactContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="bg-sand py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="font-body text-primary/80 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              Long before the ballot, Governor was already doing the work.
              Across communities in Kumbungu and beyond, his contributions speak
              for themselves — in classrooms built, boreholes sunk, jobs
              created, and a party strengthened. Here are some of his records.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Achievement cards ── */}
      <section aria-label="Achievements" className="bg-sand pb-24">
        <div className="container space-y-0">
          {ACHIEVEMENTS.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={item.id}
                variants={fadeUp(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Text side */}
                <div
                  className={`order-2 flex flex-col justify-center py-12 lg:py-16 ${
                    isEven ? "lg:order-1 lg:pr-16" : "lg:order-2 lg:pl-16"
                  }`}
                >
                  <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent mb-2">
                    {item.category}
                  </span>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span
                      aria-hidden="true"
                      className="font-heading font-black text-primary/10 leading-none select-none shrink-0"
                      style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
                    >
                      {item.number}
                    </span>
                    <h2
                      className="font-heading font-black uppercase text-primary leading-[0.95]"
                      style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <p className="font-body text-primary/75 leading-relaxed text-base">
                    {item.body}
                  </p>
                </div>

                {/* Carousel side */}
                <div
                  className={`order-1 flex items-center justify-center py-6 lg:py-16 ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }`}
                >
                  <div className="w-full rounded-xl overflow-hidden">
                    <ImageCarousel images={item.images} number={item.number} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="font-heading font-black uppercase text-white leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Be part of the next chapter.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="font-body text-white/70 max-w-xl mx-auto mb-10 text-base"
          >
            Governor&rsquo;s record is built on action. Join the movement and
            help carry this work forward in Kumbungu.
          </motion.p>
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/get-involved"
              className={buttonVariants({ variant: "accent", size: "lg" })}
            >
              Get Involved
            </Link>
            <a
              href="https://paystack.com/pay/abdul-for-mp"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Donate
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
