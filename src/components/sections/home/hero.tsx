"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Editorial gradients */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 30%, rgba(250,71,33,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 70%, rgba(129,67,167,0.08) 0%, transparent 60%),
              #000000
            `
          }}
        />
        <Image
          src="/assets/gradients/organic-01.png"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-[60px] py-20">
        <div className="max-w-[900px]">
          <FadeIn delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-jumper-orange" />
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-jumper-orange">
                Arquitetura de Performance Digital
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-white leading-[1.15] tracking-[-0.03em]">
              Seus anúncios estão rodando.{" "}
              <span className="text-text-muted font-light">
                Suas conversões estão sumindo.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-5 text-[17px] text-text-secondary max-w-[600px] leading-[1.8]">
              Gestão de tráfego pago com tracking server-side, CRM integrado e atendimento via WhatsApp. 
              Recupere até 40% das conversões perdidas.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="critical" size="xl" asChild>
                <Link href="/diagnostico">Agendar Diagnóstico Gratuito</Link>
              </Button>
              <Button variant="ghost" size="xl" asChild>
                <a href="#como-funciona" className="text-white border-white/20 hover:bg-white/10">
                  Ver como funciona <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.65}>
            <p className="mt-10 font-mono text-[11px] text-text-muted tracking-[0.05em]">
              Fevereiro 2026 · R$ 30M+ investidos em campanhas digitais
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
