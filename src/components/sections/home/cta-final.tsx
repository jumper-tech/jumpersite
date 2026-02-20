"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/gradients/organic-03.png"
          alt=""
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-fluid-h2 font-bold text-white text-balance">
            Descubra quanto você está perdendo em conversões.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg text-gray-300">
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
