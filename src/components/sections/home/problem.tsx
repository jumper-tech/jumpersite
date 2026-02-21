"use client";

import { FadeIn } from "@/components/ui/motion";
import { Section } from "@/components/sections/section-wrapper";

export function ProblemSection() {
  return (
    <Section className="bg-background">
      <div className="max-w-4xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-jumper-orange" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted">
              03 — O Problema
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-fluid-h2 font-semibold text-foreground text-balance tracking-tight">
            Você está perdendo até{" "}
            <span className="text-jumper-orange">40% das suas conversões.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 space-y-5 text-[15px] text-text-secondary leading-[1.85] max-w-[720px]">
            <p>
              Pixels client-side não funcionam mais como antes. iOS 17, ad
              blockers e o fim dos cookies de terceiros estão corroendo seus
              dados. Você acha que tem ROAS de 3x — mas o número real pode ser
              1.8x. Cada campanha otimizada com dados sujos é dinheiro jogado
              fora.
            </p>
            <div className="border-l-2 border-jumper-orange pl-7 py-6 my-8 bg-[rgba(250,71,33,0.03)] rounded-r-lg">
              <p className="text-foreground font-medium text-[15px] italic leading-[1.8]">
                A Jumper existe pra resolver isso. Tracking server-side, CRM integrado, 
                dados limpos. Não mais conversões fantasmas.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
