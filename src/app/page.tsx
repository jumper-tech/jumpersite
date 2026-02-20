import { HeroSection } from "@/components/sections/home/hero";
import { ProblemSection } from "@/components/sections/home/problem";
import { PillarsSection } from "@/components/sections/home/pillars";
import { NumbersSection } from "@/components/sections/home/numbers";
import { CasesSection } from "@/components/sections/home/mini-cases";
import { ProcessSection } from "@/components/sections/home/process";
import { TestimonialsSection } from "@/components/sections/home/testimonials";
import { CTASection } from "@/components/sections/home/cta-final";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <NumbersSection />
      <CasesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
