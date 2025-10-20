"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl section-title text-foreground">
                  Excelência em dermatologia e estética
                </h2>
                <p className="elegant-text text-muted-foreground text-base sm:text-lg leading-relaxed">
                  A clínica ofere tratamentos dermatológicos estéticos priorizando a saúde e um atendimento
                  personalizado. Cada procedimento é cuidadosamente planejado para atender as necessidades específicas
                  de cada paciente, com foco prioritário em rejuvenescimento da pele madura. Acreditamos que o cuidado
                  com a pele vai além da estética - é sobre saúde, autoestima e reencontro consigo mesma.
                </p>
              </div>
              <Link
                href="https://wa.me/5592984497829?text=Quero%20marcar%20uma%20consulta%20de%20Est%C3%A9tica%20com%20a%20Dra.%20Nath%C3%A1lia%20Matos"
                target="_blank"
                className="whatsapp-botao rounded-full px-4 sm:px-6 py-2 sm:py-2 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base flex items-center w-fit"
              >              
                Agende seu Atendimento
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="relative">
              <img
                src="/foto-da-clinica.webp"
                alt="Dra. Nathalia em sua clínica moderna com equipamentos dermatológicos avançados"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
