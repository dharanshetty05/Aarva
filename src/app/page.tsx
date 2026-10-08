import OurApproach from "@/components/Approach";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SelectedWork />
        <WhatWeDo />
        <OurApproach />
      </main>
    </>
  );
}
