"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Zap } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    client: "E-commerce de moda",
    metric: "+47%",
    metricLabel: "conversões rastreadas",
    description:
      "após migração para sGTM",
    quote:
      '"Antes, a gente achava que tinha ROAS de 2.5x. Com o tracking da Jumper, descobrimos que era 4.1x — e aí conseguimos escalar com confiança."',
  },
  {
    icon: TrendingDown,
    client: "Rede de clínicas",
    metric: "-38%",
    metricLabel: "no CPL",
    description:
      "sem alterar criativos",
    quote:
      "Implementação de tracking server-side + atribuição de WhatsApp recuperou conversões que estavam invisíveis.",
  },
  {
    icon: Zap,
    client: "SaaS B2B",
    metric: "R$500k → R$1.2M/mês",
    metricLabel: "em receita",
    description: "em 6 meses",
    quote:
      "Integração CRM → Ads permitiu otimizar campanhas com dados de venda real, não só leads.",
  },
];

export function CasesSection() {
  return (
    <Section className="bg-background">
      <FadeIn>
        <SectionHeader
          label="05 — Resultados Reais"
          title={<>Cases que mostram o impacto de <span className="text-jumper-orange">dados limpos</span> na performance</>}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-3 mt-10">
        {cases.map((c) => (
          <StaggerItem key={c.client}>
            <Card className="h-full bg-card border border-border-subtle rounded-xl transition-all duration-300 hover:bg-[hsl(var(--card-hover))] hover:border-border-medium hover:-translate-y-0.5">
              <CardHeader className="p-6 pb-4">
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-text-muted mb-3.5">
                  {c.client}
                </div>
                <CardTitle className="text-jumper-orange text-[28px] font-semibold tracking-tight leading-none">
                  {c.metric}
                </CardTitle>
                <p className="text-[13px] text-text-secondary mt-3 leading-[1.6]">
                  {c.metricLabel} {c.description}
                </p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="border-l-2 border-jumper-orange pl-4 py-1 bg-[rgba(250,71,33,0.03)] rounded-r">
                  <p className="text-[13px] text-text-secondary italic leading-[1.7]">
                    {c.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
