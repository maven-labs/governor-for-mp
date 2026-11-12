"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

/*
 * ─────────────────────────────────────────────────────────
 *  SWAP THIS with your real candidate+supporter photo:
 *  Drop the image into /public/images/candidate-supporter.jpg
 * ─────────────────────────────────────────────────────────
 */
const SECTION_IMAGE = "/get-involved.avif";

/* ── Animation ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  },
});

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const EMPTY: FormState = { firstName: "", lastName: "", email: "", phone: "" };

export default function GetInvolved() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const labelStyle =
    "block font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white mb-1.5";
  const inputStyle =
    "w-full px-4 py-3 rounded-[3px] border border-[#d0cfc8] bg-[#F8F6F1] font-body text-primary placeholder:text-[#aaa] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-150";

  return (
    <section
      id="contact"
      aria-labelledby="signup-heading"
      className="w-full bg-chart-3"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-20 lg:py-24 bg-chart-3">
          <div className="w-full max-w-120">
            <motion.h2
              id="signup-heading"
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="font-heading font-black uppercase text-primary leading-[0.9]"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                letterSpacing: "-0.01em",
              }}
            >
              It&rsquo;s time <br />
              Kumbungu <span className="text-white">had a voice.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-5 font-body text-white leading-relaxed"
              style={{ fontSize: "clamp(0.88rem, 1.3vw, 1rem)" }}
            >
              Join the movement. Add your name and be part of the change
              Kumbungu has been waiting for.
            </motion.p>

            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {submitted ? (
                /* Success state */
                <div className="mt-10 py-10 text-center border-2 border-primary rounded-lg">
                  <p className="font-heading font-black text-primary text-2xl uppercase tracking-wide">
                    You&rsquo;re in!
                  </p>
                  <p className="mt-2 font-body text-sm text-white/80">
                    Welcome to the movement. We&rsquo;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-10 space-y-4"
                  aria-label="Campaign sign-up form"
                >
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className={labelStyle}>
                        First Name{" "}
                        <span aria-hidden="true" className="text-accent">
                          *
                        </span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter your firstname"
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelStyle}>
                        Last Name{" "}
                        <span aria-hidden="true" className="text-accent">
                          *
                        </span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter your lastname"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelStyle}>
                      Email Address{" "}
                      <span aria-hidden="true" className="text-accent">
                        *
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputStyle}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelStyle}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+233 XX XXX XXXX"
                      className={inputStyle}
                    />
                  </div>

                  {error && (
                    <p
                      className="text-accent text-sm font-semibold py-2"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}

                  <Button
                    variant="accent"
                    size="lg"
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2"
                  >
                    {loading ? "Submitting…" : "Join the Movement"}
                  </Button>

                  {/* Disclaimer */}
                  <p className="mt-4 font-body text-xs text-white leading-relaxed">
                    By submitting your phone number you consent to receive
                    periodic campaign updates and donation asks from Governor
                    for MP . Messages include updates, event invitations,
                    donation asks, and voting reminders. Message and data rates
                    may apply. See our{" "}
                    <Link
                      href="/terms"
                      className="underline underline-offset-2 text-bold hover:text-accent transition-colors duration-150"
                    >
                      Terms of Service &amp; Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative lg:block min-h-155 bg-primary"
        >
          <Image
            src={SECTION_IMAGE}
            alt="Abdul Rauf 'Governor' Sulemana with a supporter in Kumbungu"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />

          {/* <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,21,64,0.45) 0%, transparent 40%)",
            }}
          /> */}

          {/* <div className="absolute bottom-8 left-8 z-10">
            <span className="font-heading font-bold uppercase tracking-[0.14em] text-white/80 text-xs bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-[2px]">
              New Patriotic Party · Kumbungu
            </span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
