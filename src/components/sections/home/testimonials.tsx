"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A Jumper mudou a forma como a gente olha pra dados. Antes era chute, agora é engenharia.",
    author: "Diretor de Marketing",
    company: "E-commerce Premium",
  },
  {
    quote:
      "Pela primeira vez, consigo provar pro board o ROI exato de cada canal.",
    author: "Head de Growth",
    company: "SaaS B2B",
  },
  {
    quote:
      "O tracking server-side deveria ser obrigatório. Não sei como operava sem antes.",
    author: "CEO",
    company: "Rede de Clínicas",
  },
];

export function TestimonialsSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader 
          label="04 — Depoimentos"
          title={<>O que dizem <span className="text-jumper-orange">nossos clientes</span></>}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-3 mt-10">
        {testimonials.map((t) => (
          <StaggerItem key={t.quote}>
            <div className="relative rounded-xl border border-border-subtle bg-card p-6 h-full transition-all duration-300 hover:bg-[hsl(var(--card-hover))] hover:border-border-medium hover:-translate-y-0.5">
              <Quote className="h-8 w-8 text-jumper-orange/20 mb-4" />
              <blockquote className="text-foreground leading-[1.8] mb-6 italic text-[14px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border-subtle pt-4">
                <p className="text-[13px] font-medium text-foreground">
                  {t.author}
                </p>
                <p className="text-[12px] text-text-muted font-mono tracking-[0.03em] mt-1">{t.company}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
