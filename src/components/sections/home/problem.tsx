"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";
import { AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <Section className="bg-background">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-jumper-orange/10">
              <AlertTriangle className="h-5 w-5 text-jumper-orange" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider text-jumper-orange">
              O Problema
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-fluid-h2 font-bold text-foreground text-balance">
            Você está perdendo até{" "}
            <span className="text-jumper-orange">40% das suas conversões.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Pixels client-side não funcionam mais como antes. iOS 17, ad
              blockers e o fim dos cookies de terceiros estão corroendo seus
              dados. Você acha que tem ROAS de 3x — mas o número real pode ser
              1.8x. Cada campanha otimizada com dados sujos é dinheiro jogado
              fora.
            </p>
            <p className="text-foreground font-semibold text-xl">
              A Jumper existe pra resolver isso.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
