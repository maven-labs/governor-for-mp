"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const DONATE_URL = "https://paystack.com/pay/abdul-for-mp";
const WHATSAPP_URL = "https://chat.whatsapp.com/GY8imo1sfRQBEDGQDMo0cM";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  },
});

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const EMPTY: FormState = { firstName: "", lastName: "", email: "", phone: "" };

const labelStyle =
  "block font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary/70 mb-1.5";
const inputStyle =
  "w-full px-4 py-3 rounded-[3px] border border-[#d0cfc8] bg-[#F8F6F1] font-body text-primary placeholder:text-[#aaa] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-150";

/* ── Other ways to get involved ── */
const OTHER_WAYS = [
  {
    icon: (
      /* WhatsApp */
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp Group",
    description:
      "Join our supporters group for live updates, events, and direct communication with the campaign.",
    cta: "Join the Group",
    href: WHATSAPP_URL,
    external: true,
    accent: true,
  },
  {
    icon: (
      /* Donate / hand-heart */
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
        />
      </svg>
    ),
    label: "Make a Donation",
    description:
      "Every cedi counts. Help fund the campaign that will fight for Kumbungu's youth, farmers, and families.",
    cta: "Donate Now",
    href: DONATE_URL,
    external: true,
    accent: false,
  },
  {
    icon: (
      /* Share / megaphone */
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    label: "Spread the Word",
    description:
      "Share the campaign with friends, family, and neighbours in Kumbungu. Word of mouth is our strongest tool.",
    cta: "Share on WhatsApp",
    href: `https://wa.me/?text=${encodeURIComponent("Join the movement! Abdul Rauf 'Governor' Sulemana is running for MP of Kumbungu. Learn more at https://raufgovernor.com")}`,
    external: true,
    accent: false,
  },
];

export default function GetInvolvedContent() {
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

  return (
    <div className="bg-sand">
      {/* ── Sign-up form section ── */}
      <section id="signup" aria-labelledby="signup-heading" className="w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — copy */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="font-heading font-black uppercase text-accent text-sm tracking-[0.25em] mb-4">
                Join the Movement
              </p>
              <h2
                id="signup-heading"
                className="font-heading font-black uppercase text-primary leading-[0.9]"
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                It&rsquo;s time <br />
                Kumbungu <span className="text-secondary">had a voice.</span>
              </h2>

              <p className="mt-6 text-primary/70 leading-relaxed text-lg max-w-md">
                Add your name and be part of the change Kumbungu has been
                waiting for. Whether you live in the constituency or in the
                diaspora — your support matters.
              </p>

              {/* Quick WhatsApp nudge */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-[3px] bg-[#25D366] text-white font-heading font-bold uppercase tracking-[0.08em] text-sm hover:opacity-90 transition-opacity"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join our WhatsApp Group
              </a>
            </motion.div>

            {/* Right — form */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-[4px] shadow-sm border border-black/6 p-8 sm:p-10"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-7 h-7 text-accent"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-heading font-black text-primary text-2xl uppercase tracking-wide">
                    You&rsquo;re in!
                  </p>
                  <p className="mt-3 text-primary/60 leading-relaxed">
                    Welcome to the movement. We&rsquo;ll be in touch soon.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-[3px] bg-[#25D366] text-white font-heading font-bold uppercase tracking-[0.08em] text-sm hover:opacity-90 transition-opacity"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 shrink-0"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Now join our WhatsApp Group
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-black uppercase text-primary text-lg tracking-[0.05em] mb-6">
                    Sign up as a supporter
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                    aria-label="Campaign sign-up form"
                  >
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
                          placeholder="First name"
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
                          placeholder="Last name"
                          className={inputStyle}
                        />
                      </div>
                    </div>

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
                        className="text-accent text-sm font-semibold py-1"
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

                    <p className="mt-3 text-xs text-primary/50 leading-relaxed">
                      By submitting you consent to receive campaign updates. See
                      our{" "}
                      <Link
                        href="/terms"
                        className="underline underline-offset-2 hover:text-accent transition-colors"
                      >
                        Terms &amp; Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Other ways to get involved ── */}
      <section
        aria-labelledby="other-ways-heading"
        className="w-full bg-primary"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <p className="font-heading font-black uppercase text-accent text-sm tracking-[0.25em] mb-3">
              More Ways to Help
            </p>
            <h2
              id="other-ways-heading"
              className="font-heading font-black uppercase text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Every action moves <br className="hidden sm:block" />
              <span className="text-white/50">Kumbungu forward.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OTHER_WAYS.map((way, i) => (
              <motion.div
                key={way.label}
                variants={fadeUp(0.15 + i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col bg-white/5 border border-white/10 rounded-[4px] p-8 hover:bg-white/8 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-[3px] bg-accent/15 text-accent flex items-center justify-center mb-5">
                  {way.icon}
                </div>
                <h3 className="font-heading font-bold uppercase text-white tracking-[0.06em] text-base mb-3">
                  {way.label}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm flex-1 mb-6">
                  {way.description}
                </p>
                <a
                  href={way.href}
                  target={way.external ? "_blank" : undefined}
                  rel={way.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center px-5 py-3 rounded-[3px] font-heading font-bold uppercase tracking-[0.08em] text-sm transition-opacity hover:opacity-80 ${
                    way.accent
                      ? "bg-[#25D366] text-white"
                      : "bg-accent text-white"
                  }`}
                >
                  {way.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
