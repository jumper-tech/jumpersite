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
    <Section>
      <FadeIn>
        <SectionHeader title="O que dizem nossos clientes" />
      </FadeIn>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.quote}>
            <div className="relative rounded-lg border border-border bg-card p-6 h-full">
              <Quote className="h-8 w-8 text-jumper-orange/20 mb-4" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  {t.author}
                </p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
