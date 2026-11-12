"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const DONATE_URL = "https://paystack.com/pay/abdul-for-mp";
const PRESETS = [10, 20, 50, 100, 200];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  },
});

type DonationType = "one-time" | "monthly";

export default function Donate() {
  const [type, setType] = useState<DonationType>("one-time");
  const [selected, setSelected] = useState<number | null>(null);

  // Monthly-specific state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* Reset selection when switching type */
  function handleTypeChange(next: DonationType) {
    setType(next);
    setSelected(null);
    setError(null);
  }

  /* One-time: navigate directly on chip/Other click — no button needed */
  function handleOneTimeSelect(amount: number | null) {
    setSelected(amount);
    if (type === "one-time") {
      const href = amount ? `${DONATE_URL}?amount=${amount}` : DONATE_URL;
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }

  /* Monthly: call /api/subscribe → redirect to Paystack */
  async function handleMonthlySubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!selected) {
      setError("Please select a monthly amount.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, amount: selected }),
      });
      const data = await res.json();

      if (!res.ok || !data.authorization_url) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      window.location.href = data.authorization_url;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="donate"
      aria-labelledby="donate-heading"
      className="w-full bg-secondary overflow-hidden"
    >
      <div className="py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left — copy */}
            <motion.div
              variants={fadeUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                id="donate-heading"
                className="font-heading font-black uppercase text-white leading-[0.88]"
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Join the fight with Governor
                <br />
                <span className="text-white/80">Give Today.</span>
              </h2>
              <p
                className="mt-6 text-white/75 leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                Governor is running to make history — he is running to make a
                difference. Donate now to send Governor to parliament!
              </p>
            </motion.div>

            {/* Right — donate widget */}
            <motion.div
              variants={fadeUp(0.18)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              {/* One-time / Monthly toggle */}
              <div
                role="tablist"
                aria-label="Donation frequency"
                className="grid grid-cols-2 gap-1 p-1 bg-white/10 rounded-[4px] mb-6"
              >
                {(["one-time", "monthly"] as DonationType[]).map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={type === t}
                    type="button"
                    onClick={() => handleTypeChange(t)}
                    className={[
                      "py-3 rounded-[3px] font-heading font-bold uppercase tracking-[0.08em] text-sm",
                      "transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                      type === t
                        ? "bg-white text-secondary"
                        : "text-white/60 hover:text-white",
                    ].join(" ")}
                  >
                    {t === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Amount chips */}
              <fieldset>
                <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                  {type === "one-time"
                    ? "Quick select (optional)"
                    : "Select a monthly amount"}
                </legend>
                <div className="grid grid-cols-3 gap-3">
                  {PRESETS.map((amount) => {
                    const isActive = selected === amount;
                    return (
                      <button
                        key={amount}
                        type="button"
                        onClick={() =>
                          handleOneTimeSelect(
                            isActive && type === "one-time" ? null : amount,
                          )
                        }
                        aria-pressed={isActive}
                        className={[
                          "py-2 rounded-[3px] font-heading font-bold uppercase tracking-[0.06em]",
                          "transition-all duration-150 active:scale-[0.96] border-2",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                          "focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
                          isActive
                            ? "bg-white text-accent border-white"
                            : "bg-transparent text-white border-white/50 hover:border-white hover:bg-white/10",
                        ].join(" ")}
                      >
                        GH₵{amount}
                      </button>
                    );
                  })}

                  {/* Other — clears preset, Paystack handles custom amount */}
                  <button
                    type="button"
                    onClick={() => handleOneTimeSelect(null)}
                    aria-pressed={selected === null}
                    className={[
                      "py-2 rounded-[3px] font-heading font-bold uppercase tracking-[0.06em]",
                      "transition-all duration-150 active:scale-[0.96] border-2",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                      "focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
                      selected === null
                        ? "bg-white text-accent border-white"
                        : "bg-transparent text-white border-white/50 hover:border-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    Other
                  </button>
                </div>
              </fieldset>

              {/* ── ONE-TIME flow — no button, chips navigate directly ── */}
              {type === "one-time" && (
                <p className="mt-4 text-center text-white/50 text-xs">
                  Select an amount above — you&apos;ll go straight to Paystack.
                </p>
              )}

              {/* ── MONTHLY flow ── */}
              {type === "monthly" && (
                <form
                  onSubmit={handleMonthlySubmit}
                  noValidate
                  className="mt-6 space-y-3"
                >
                  <div>
                    <label
                      htmlFor="donor-email"
                      className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-2"
                    >
                      Your email address
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-4 rounded-[3px] bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-white focus:bg-white/15 transition-all"
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-red-400 text-sm font-medium"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center w-full py-4 rounded-[3px] font-heading font-bold uppercase tracking-[0.08em] text-base bg-accent text-white hover:bg-accent/90 transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Setting up…"
                      : selected
                        ? `Give GH₵${selected}/month`
                        : "Give Monthly"}
                  </button>

                  <p className="text-center text-white/50 text-xs">
                    {selected
                      ? `You'll be charged GH₵${selected} today, then monthly. Cancel anytime.`
                      : "Select an amount above to continue."}
                  </p>
                </form>
              )}

              {/* Disclaimer */}
              <p className="mt-5 text-white/55 text-xs leading-relaxed">
                Contributions to the Governor Sulemana Campaign are not
                deductible for tax purposes. By donating, you confirm that this
                contribution is made from your own funds and not those of
                another. We do not accept donations from corporations or foreign
                nationals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
