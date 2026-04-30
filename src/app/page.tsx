import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { WhatAlvaDoes } from "@/components/WhatAlvaDoes";
import { WhyAlva } from "@/components/WhyAlva";
import { HowItWorks } from "@/components/HowItWorks";
import { KeyFeatures } from "@/components/KeyFeatures";
import { PortalAppSync } from "@/components/PortalAppSync";
import { WhoItsFor } from "@/components/WhoItsFor";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhyAlva />
        <WhatAlvaDoes />
        <HowItWorks />
        <KeyFeatures />
        <PortalAppSync />
        <WhoItsFor />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
