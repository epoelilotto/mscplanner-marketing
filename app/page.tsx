import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ForUniversities } from "@/components/ForUniversities";
import { CaseStudy } from "@/components/CaseStudy";
import { Screenshots } from "@/components/Screenshots";
import { FAQ } from "@/components/FAQ";
import { CTAFooter } from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Stats />
      <HowItWorks />
      <Features />
      <ForUniversities />
      <CaseStudy />
      <Screenshots />
      <FAQ />
      <CTAFooter />
    </>
  );
}
