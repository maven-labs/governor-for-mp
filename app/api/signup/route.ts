import { NextRequest, NextResponse } from "next/server";

/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  Mailchimp signup endpoint
 *
 *  Set these in your .env.local (never commit them):
 *
 *    MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us21
 *    MAILCHIMP_SERVER_PREFIX=us21          ← the part after the dash in your key
 *    MAILCHIMP_LIST_ID=abc123def4          ← Audience → Settings → Audience name & defaults
 *
 *  How to get them:
 *   1. mailchimp.com → Account → Extras → API Keys → Create key
 *   2. Server prefix is the last segment of your API key (e.g. "us21")
 *   3. Audience → Settings → Audience name and defaults → Audience ID
 * ─────────────────────────────────────────────────────────────────────────────
 */

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX!;
const LIST_ID = process.env.MAILCHIMP_LIST_ID!;

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const body = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName ?? "",
        LNAME: lastName ?? "",
        PHONE: phone ?? "",
      },
      tags: ["website-signup"],
    };

    const mcRes = await fetch(
      `https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await mcRes.json();

    // Mailchimp returns 400 with title "Member Exists" when already subscribed
    if (mcRes.status === 400 && data.title === "Member Exists") {
      // Treat as success — they're already on the list
      return NextResponse.json({ ok: true });
    }

    if (!mcRes.ok) {
      console.error("Mailchimp error:", data);
      return NextResponse.json(
        { error: data.detail ?? "Could not subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Signup route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
