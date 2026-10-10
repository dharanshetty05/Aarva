import AboutAarva from "@/components/About";
import OurApproach from "@/components/Approach";
import FinalCTA from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";
import AreasWeServe from "@/components/ServiceAreas";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <SelectedWork />
        <WhatWeDo />
        <OurApproach />
        <AboutAarva />
        <AreasWeServe />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
