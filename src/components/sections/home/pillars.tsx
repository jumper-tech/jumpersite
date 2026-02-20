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
  },
  {
    icon: Server,
    title: "Tracking Avançado",
    description:
      "Server-Side GTM, Meta CAPI, Google Enhanced Conversions. Seus dados ficam limpos, o algoritmo recebe sinal de qualidade, e suas campanhas otimizam de verdade.",
    href: "/servicos/tracking-avancado",
  },
  {
    icon: MessageSquare,
    title: "JumperChat",
    description:
      "Atendimento via WhatsApp com CRM integrado. Cada lead que chega sabe de qual anúncio veio. Histórico completo, múltiplos atendentes, automações.",
    href: "/servicos/jumperchat",
  },
];

export function PillarsSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader title="Os 3 Pilares" />
      </FadeIn>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <Link href={pillar.href} className="group block h-full">
              <Card className="h-full bg-[#111] border-[#222] hover:border-jumper-orange/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(250,71,33,0.1)]">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-jumper-orange/10 text-jumper-orange group-hover:bg-jumper-orange group-hover:text-white transition-all duration-300">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-white">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
                <CardFooter>
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
