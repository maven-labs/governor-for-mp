import Autobiography from "@/components/autobiography";
import PageHero from "@/components/ui/page-hero";
import ReadingProgress from "@/components/reading-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Governor",
  description:
    "Learn more about Abdul Rauf 'Governor' Sulemana and his journey to becoming the MP for Kumbungu Constituency.",
};

function AboutGovernor() {
  return (
    <div>
      <ReadingProgress />
      <PageHero title="About Governor" />
      <Autobiography />
    </div>
  );
}

export default AboutGovernor;
