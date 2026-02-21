"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Server, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";

const pillars = [
  {
    icon: BarChart3,
    title: "Arquitetura de Performance",
    description:
      "Gestão de tráfego pago com a máquina completa: Meta Ads, Google Ads, tracking server-side e CRM integrado. Não é rodar anúncio — é construir a infraestrutura de aquisição inteira.",
    href: "/servicos/arquitetura-de-performance",
    color: "orange" as const,
  },
  {
    icon: Server,
    title: "Tracking Avançado",
    description:
      "Server-Side GTM, Meta CAPI, Google Enhanced Conversions. Seus dados ficam limpos, o algoritmo recebe sinal de qualidade, e suas campanhas otimizam de verdade.",
    href: "/servicos/tracking-avancado",
    color: "purple" as const,
  },
  {
    icon: MessageSquare,
    title: "JumperChat",
    description:
      "Atendimento via WhatsApp com CRM integrado. Cada lead que chega sabe de qual anúncio veio. Histórico completo, múltiplos atendentes, automações.",
    href: "/servicos/jumperchat",
    color: "orange" as const,
  },
];

export function PillarsSection() {
  const getTopBorder = (color: "orange" | "purple") => {
    return color === "orange" ? "border-t-jumper-orange" : "border-t-purple";
  };

  return (
    <Section className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader 
          label="02 — Pilares"
          title={<>Os 3 pilares da <span className="text-jumper-orange">infraestrutura de aquisição</span></>}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-5 md:grid-cols-3 mt-10">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <Link href={pillar.href} className="group block h-full">
              <Card className={`h-full bg-card border border-border-subtle rounded-[14px] hover:bg-[hsl(var(--card-hover))] hover:border-border-medium transition-all duration-300 hover:-translate-y-0.5 border-t-2 ${getTopBorder(pillar.color)}`}>
                <CardHeader className="p-7 pb-0">
                  <CardTitle className="text-[20px] font-semibold text-white tracking-[-0.01em]">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-7 pt-3">
                  <p className="text-[14px] text-text-secondary leading-[1.75]">
                    {pillar.description}
                  </p>
                </CardContent>
                <CardFooter className="p-7 pt-0">
                  <span className="text-sm font-medium text-jumper-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
