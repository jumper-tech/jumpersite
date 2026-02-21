"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";

const stats = [
  { value: "R$30M+", label: "investidos em mídia paga" },
  { value: "50+", label: "clientes premium" },
  { value: "3", label: "países atendidos" },
  { value: "9+", label: "anos de experiência em performance digital" },
];

export function NumbersSection() {
  return (
    <Section className="bg-[#0a0a0a]">
      <StaggerContainer className="grid grid-cols-2 gap-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-left">
            <div className="font-mono text-[48px] font-bold leading-none text-border-medium mb-5">
              {stat.value}
            </div>
            <p className="text-[13px] text-text-secondary leading-[1.7]">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
