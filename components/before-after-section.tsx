"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const beforeAfterCases = [
  {
    id: 1,
    treatment: "Rejuvenescimento do terço inferior do rosto",
    description: "Rejuvenescimento facial com bioestimuladores",
    beforeImage: "/rejuvenescimento-do-rosto-antes.webp",
    afterImage: "/rejuvenescimento-do-rosto-depois.webp",
  },
  {
    id: 2,
    treatment: "Reestruturação do bigode chinês",
    description: "Redução natural do bigode chinês",
    beforeImage: "/reestruturacao-do-bigode-chines-antes.webp",
    afterImage: "/reestruturacao-do-bigode-chines-depois.webp",
  },
  {
    id: 3,
    treatment: "Clareamento de melasma",
    description: "Tratamento especializado que eliminou manchas escuras, revelando uma pele uniforme e radiante.",
    beforeImage: "/clareamento-de-melasma-antes.webp",
    afterImage: "/clareamento-de-melasma-depois.webp",
  },
  {
    id: 4,
    treatment: "Embelezamento labial",
    description: "Realce sutil dos lábios com resultado harmonioso, mantendo a naturalidade e expressividade.",
    beforeImage: "/embelezamento-labial-antes.webp",
    afterImage: "/embelezamento-labial-depois.webp",
  },
]

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beforeAfterCases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterCases.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentCase = beforeAfterCases[currentIndex]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl section-title text-foreground mb-6">Resultados Reais</h2>
            <p className="elegant-text text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja as transformações alcançadas com nossos tratamentos personalizados e técnicas avançadas.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-0">
                  {/* Before Image */}
                  <div className="relative group">
                    <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                      <img
                        src={currentCase.beforeImage || "/placeholder.svg"}
                        alt={`Antes - ${currentCase.treatment}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                        <span className="bg-white/90 text-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                          Antes
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative group">
                    <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                      <img
                        src={currentCase.afterImage || "/placeholder.svg"}
                        alt={`Depois - ${currentCase.treatment}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
                        <span className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                          Depois
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Info */}
                <div className="p-4 sm:p-8 text-center">
                  <h3 className="font-playfair text-lg sm:text-base font-medium text-foreground mb-2">
                    {currentCase.treatment}
                  </h3>
                  <p className="elegant-text text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    {currentCase.description}
                  </p>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-0">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevCase}
                      className="rounded-full bg-transparent w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>

                    <div className="flex gap-1 sm:gap-2">
                      {beforeAfterCases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextCase}
                      className="rounded-full bg-transparent w-8 h-8 sm:w-10 sm:h-10"
                    >
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleAutoPlay}
                    className="rounded-full bg-transparent w-8 h-8 sm:w-10 sm:h-10 mt-2 sm:mt-0"
                    title={isAutoPlaying ? "Pausar reprodução automática" : "Iniciar reprodução automática"}
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                *Resultados podem variar de acordo com cada paciente. Consulte sempre um profissional qualificado.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
