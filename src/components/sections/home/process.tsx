"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section, SectionHeader } from "@/components/sections/section-wrapper";
import { Search, Wrench, BarChart3, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    description:
      "Analisamos seu tracking atual, suas campanhas e seu funil. Identificamos onde estão os vazamentos de dados e as oportunidades.",
    color: "orange" as const,
  },
  {
    icon: Wrench,
    step: "02",
    title: "Setup Técnico",
    description:
      "Implementamos tracking server-side (sGTM), Meta CAPI, Enhanced Conversions e integramos seu CRM com as plataformas de ads.",
    color: "purple" as const,
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Gestão Ativa",
    description:
      "Estruturamos e gerenciamos suas campanhas com dados limpos. Criativos, audiências, budget — tudo otimizado com sinal de qualidade.",
    color: "orange" as const,
  },
  {
    icon: RefreshCcw,
    step: "04",
    title: "Otimização Contínua",
    description:
      "Relatórios com dados reais, reuniões regulares, ajustes constantes. O algoritmo aprende com dados melhores, e o resultado compõe mês a mês.",
    color: "gray" as const,
  },
];

export function ProcessSection() {
  const getTopBorder = (color: "orange" | "purple" | "gray") => {
    switch (color) {
      case "orange": return "border-t-jumper-orange";
      case "purple": return "border-t-purple";
      case "gray": return "border-t-text-muted";
    }
  };

  return (
    <Section id="como-funciona" className="bg-[#0a0a0a]">
      <FadeIn>
        <SectionHeader 
          label="01 — Como Funciona"
          title={<>Como funciona a <span className="text-jumper-orange">Arquitetura de Performance</span></>}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {steps.map((step) => (
          <StaggerItem key={step.title}>
            <div className={`relative bg-card border border-border-subtle rounded-xl p-7 transition-all duration-300 hover:bg-[hsl(var(--card-hover))] hover:border-border-medium hover:-translate-y-0.5 border-t-2 ${getTopBorder(step.color)}`}>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-text-muted mb-3.5">
                ETAPA {step.step}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-3 leading-[1.4]">
                {step.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-[1.7]">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
