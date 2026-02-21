"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function CTASection() {
  return (
    <section className="relative py-20 border-t border-border-subtle overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(250,71,33,0.08) 0%, transparent 70%),
              #000000
            `
          }}
        />
        <Image
          src="/assets/gradients/organic-03.png"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] px-4 sm:px-6 lg:px-[60px]">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-jumper-orange" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted">
              06 — Próximo Passo
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-fluid-h2 font-semibold text-white text-balance tracking-tight">
            Descubra quanto você está <span className="text-jumper-orange">perdendo em conversões</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-[17px] text-text-secondary leading-[1.8] max-w-[600px]">
            Em 30 minutos, analisamos seu setup e mostramos onde estão os
            vazamentos. Sem compromisso.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Button variant="critical" size="xl" asChild>
              <Link href="/diagnostico">Agendar Diagnóstico Gratuito</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
