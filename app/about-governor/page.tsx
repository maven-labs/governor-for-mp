import Autobiography from "@/components/autobiography";
import PageHero from "@/components/ui/page-hero";
import ReadingProgress from "@/components/reading-progress";

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
