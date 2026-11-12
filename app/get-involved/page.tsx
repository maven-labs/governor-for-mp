import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import GetInvolvedContent from "@/components/get-involved-page-content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the Governor for MP movement. Sign up to volunteer, join our WhatsApp group, and help bring real change to Kumbungu Constituency.",
};

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHero title="Get Involved" />
      <GetInvolvedContent />
    </div>
  );
}
