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
    <Section>
      <FadeIn>
        <SectionHeader
          title="Resultados reais"
          subtitle="Cases que mostram o impacto de dados limpos na performance."
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <StaggerItem key={c.client}>
            <Card className="h-full bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-jumper-orange/10">
                    <c.icon className="h-5 w-5 text-jumper-orange" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {c.client}
                  </span>
                </div>
                <CardTitle className="text-jumper-orange text-2xl">
                  {c.metric}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {c.metricLabel} {c.description}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic border-l-2 border-jumper-orange/30 pl-3">
                  {c.quote}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
