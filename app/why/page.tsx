import Priorities from "@/components/priorities";
import PageHero from "@/components/ui/page-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why I'm Running",
  description:
    "Abdul Rauf 'Governor' Sulemana is running for the Kumbungu Constituency seat in the 2028 general elections to bring about positive change, development, and progress to the community.",
};

function WhyImRunning() {
  return (
    <>
      <PageHero title="Why I'm Running" />
      <Priorities />
    </>
  );
}

export default WhyImRunning;
