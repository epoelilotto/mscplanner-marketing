import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ForUniversities } from "@/components/ForUniversities";
import { CTAFooter } from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <ForUniversities />
      <CTAFooter />
    </main>
  );
}
