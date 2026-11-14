import { NextRequest, NextResponse } from "next/server";

const PLAN_CODES: Record<number, string | undefined> = {
  10: process.env.PAYSTACK_PLAN_CODE_10,
  20: process.env.PAYSTACK_PLAN_CODE_20,
  50: process.env.PAYSTACK_PLAN_CODE_50,
  100: process.env.PAYSTACK_PLAN_CODE_100,
  200: process.env.PAYSTACK_PLAN_CODE_200,
};

export async function POST(req: NextRequest) {
  try {
    const { email, amount } = await req.json();

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    // Validate amount
    const amountNum = Number(amount);
    const planCode = PLAN_CODES[amountNum];
    if (!planCode) {
      return NextResponse.json({ error: "Invalid donation amount selected." }, { status: 400 });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is not set");
      return NextResponse.json({ error: "Payment service is not configured." }, { status: 500 });
    }

    // Initialize transaction with plan — Paystack auto-creates the subscription
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amountNum * 100, // pesewas
        plan: planCode,
        callback_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://raufgovernor.com"}/donate/thank-you`,
        metadata: {
          campaign: "governor-sulemana-kumbungu-mp",
          donation_type: "monthly",
        },
      }),
    });

    const data = await response.json();

    if (!data.status) {
      console.error("Paystack error:", data.message);
      return NextResponse.json({ error: data.message ?? "Payment initialization failed." }, { status: 502 });
    }

    // Return the Paystack authorization URL for the client to redirect to
    return NextResponse.json({ authorization_url: data.data.authorization_url });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
