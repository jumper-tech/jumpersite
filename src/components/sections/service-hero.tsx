"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref?: string;
  gradient?: string;
}

export function ServiceHero({
  headline,
  subheadline,
  ctaText,
  ctaHref = "/diagnostico",
  gradient = "/assets/gradients/organic-04.png",
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 30% 40%, rgba(250,71,33,0.10) 0%, transparent 60%),
              radial-gradient(ellipse 60% 70% at 70% 60%, rgba(129,67,167,0.06) 0%, transparent 60%),
              #000000
            `
          }}
        />
        <Image
          src={gradient}
          alt=""
          fill
          className="object-cover opacity-[0.05]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-[60px] py-20">
        <div className="max-w-[900px]">
          <FadeIn>
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-white leading-[1.15] tracking-[-0.03em]">
              {headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-[17px] text-text-secondary max-w-[600px] leading-[1.8]">
              {subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Button variant="critical" size="xl" asChild>
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
