import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";

export const metadata = {
  title: "How it works — StudyPlanner",
  description:
    "See how StudyPlanner guides students from blank canvas to a valid, coordinator-ready MSc plan in under fifteen minutes.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Problem />
      <HowItWorks />
      <Features />
    </>
  );
}
