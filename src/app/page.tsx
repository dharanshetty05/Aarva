import AboutAarva from "@/components/About";
import OurApproach from "@/components/Approach";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import AreasWeServe from "@/components/ServiceAreas";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SelectedWork />
        <WhatWeDo />
        <OurApproach />
        <AboutAarva />
        <AreasWeServe />
        <FinalCTA />
      </main>
    </>
  );
}
