import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service & Privacy Policy",
  description:
    "Terms of Service, Privacy Policy, and SMS messaging terms for the Governor Sulemana for MP campaign.",
};

export default function TermsPage() {
  return (
    <main className="w-full bg-sand">
      <div className="container max-w-3xl py-16 lg:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-widest mb-12 hover:opacity-70 transition-opacity"
        >
          ← Back to Home
        </Link>

        <h1 className="font-heading font-black uppercase text-primary leading-none text-[clamp(2rem,4.5vw,3.2rem)] mb-4">
          Terms of Service &amp; Privacy Policy
        </h1>
        <p className="text-sm text-foreground/50 mb-12">
          Last updated: November 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-12 text-foreground">

          {/* ── PRIVACY POLICY ── */}
          <section aria-labelledby="privacy-heading">
            <h2
              id="privacy-heading"
              className="font-heading font-black uppercase text-primary text-2xl mb-4 border-b-2 border-accent pb-2"
            >
              Privacy Policy
            </h2>

            <h3 className="font-heading font-bold text-primary text-lg mt-6 mb-2">
              Information We Collect
            </h3>
            <p className="leading-relaxed text-foreground/80">
              When you sign up to support the Governor Sulemana for MP campaign,
              we collect your first name, last name, email address, and phone
              number (optional). We use this information solely to keep you
              informed about the campaign — including updates, event invitations,
              volunteer opportunities, and donation asks.
            </p>

            <h3 className="font-heading font-bold text-primary text-lg mt-6 mb-2">
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>To send campaign updates, news, and event invitations by email or SMS.</li>
              <li>To ask for your support through donations or volunteering.</li>
              <li>To send voting reminders and election day information.</li>
              <li>To improve our outreach and understand our supporters.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-foreground/80">
              We will never sell, rent, or share your personal information with
              third parties for their own marketing purposes.
            </p>

            <h3 className="font-heading font-bold text-primary text-lg mt-6 mb-2">
              Data Security
            </h3>
            <p className="leading-relaxed text-foreground/80">
              Your information is stored securely with our email marketing
              provider (Mailchimp). We take reasonable steps to protect your
              data against unauthorised access, disclosure, or loss.
            </p>

            <h3 className="font-heading font-bold text-primary text-lg mt-6 mb-2">
              Your Rights
            </h3>
            <p className="leading-relaxed text-foreground/80">
              You may unsubscribe from our email list at any time by clicking the
              unsubscribe link in any email we send. To request deletion of your
              data, contact us at the address below.
            </p>
          </section>

          {/* ── SMS TERMS ── */}
          <section aria-labelledby="sms-heading">
            <h2
              id="sms-heading"
              className="font-heading font-black uppercase text-primary text-2xl mb-4 border-b-2 border-accent pb-2"
            >
              SMS Messaging Terms
            </h2>

            <p className="leading-relaxed text-foreground/80">
              By providing your phone number and submitting the sign-up form on
              this website, you consent to receive recurring automated text
              messages from the Governor Sulemana for MP Campaign. These messages
              may include campaign updates, event invitations, donation asks, and
              voting reminders.
            </p>

            <ul className="mt-4 list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>Message frequency: up to 2 messages per day.</li>
              <li>Message and data rates may apply.</li>
              <li>
                Text <strong>STOP</strong> at any time to stop receiving messages.
              </li>
              <li>
                Text <strong>HELP</strong> for more information or assistance.
              </li>
            </ul>

            <p className="mt-4 leading-relaxed text-foreground/80">
              Consent to receive SMS messages is not a condition of any purchase
              or support. You may opt out at any time without consequence.
            </p>
          </section>

          {/* ── GENERAL TERMS ── */}
          <section aria-labelledby="terms-heading">
            <h2
              id="terms-heading"
              className="font-heading font-black uppercase text-primary text-2xl mb-4 border-b-2 border-accent pb-2"
            >
              General Terms of Use
            </h2>

            <p className="leading-relaxed text-foreground/80">
              This website is operated by the Abdul Rauf &ldquo;Governor&rdquo;
              Sulemana Campaign for Kumbungu MP. By using this site, you agree
              that:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>
                All content on this site is provided for informational and
                campaign purposes only.
              </li>
              <li>
                Donations made through this site are made voluntarily and are not
                tax-deductible.
              </li>
              <li>
                We do not accept contributions from corporations, foreign
                nationals, or any person or entity prohibited by Ghanaian
                electoral law.
              </li>
              <li>
                By donating, you confirm that the funds are from your own
                personal resources.
              </li>
            </ul>
          </section>

          {/* ── CONTACT ── */}
          <section aria-labelledby="contact-heading">
            <h2
              id="contact-heading"
              className="font-heading font-black uppercase text-primary text-2xl mb-4 border-b-2 border-accent pb-2"
            >
              Contact
            </h2>
            <p className="leading-relaxed text-foreground/80">
              For questions about this policy or to request data deletion, please
              contact the campaign:
            </p>
            <address className="mt-4 not-italic text-foreground/80 leading-relaxed">
              <strong className="text-primary">
                Abdul Rauf &ldquo;Governor&rdquo; Sulemana Campaign
              </strong>
              <br />
              P.O. Box 126, Zaamigu Area
              <br />
              Northern Region, Ghana
            </address>
          </section>

        </div>
      </div>
    </main>
  );
}
