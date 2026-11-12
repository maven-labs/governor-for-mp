import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import ImpactContent from "@/components/impact-page-content";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "A track record of real action — explore the contributions Abdul Rauf 'Governor' Sulemana has made for Kumbungu, the NPP, and communities across the Northern Region.",
};

export default function ImpactPage() {
  return (
    <div>
      <PageHero title="Impact" />
      <ImpactContent />
    </div>
  );
}
