import AboutGovernor from "@/components/about-governor";
import Donate from "@/components/donate";
import GetInvolved from "@/components/get-involved";
import Quote from "@/components/quote";
import Hero from "@/components/hero";
import WhyImRunning from "@/components/why-im-running";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutGovernor />
      <WhyImRunning />
      <GetInvolved />
      <Donate />
      <Quote />
    </main>
  );
}
