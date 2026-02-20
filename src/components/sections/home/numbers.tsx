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
    <Section className="border-y border-border">
      <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-jumper-orange">
              {stat.value}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
