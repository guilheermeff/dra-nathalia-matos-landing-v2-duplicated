import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    title: "Lifting sem Cirurgia",
    description: "Não invasivo, sem cortes ou agulhas, com resultados naturais.",
  },
  {
    title: "Tratamento de Rugas",
    description: "Suavização de linhas de expressão e rugas profundas",
  },
  {
    title: "Clareamento de Manchas",
    description: "Uniformização do tom da pele e tratamento de melasma",
  },
  {
    title: "Estímulo de Colágeno",
    description: "Firmeza e elasticidade para uma pele mais jovem",
  },
  {
    title: "Preenchimento Labial",
    description: "Realce natural dos lábios com técnicas avançadas",
  },
  {
    title: "Lipo de Papada",
    description: "Contorno facial definido sem cirurgia",
  },
  {
    title: "Tratamento Capilar",
    description: "Soluções eficazes para queda de cabelo e alopecia",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl section-title text-foreground mb-4 sm:mb-6">
              Nossos Tratamentos
            </h2>
            <p className="elegant-text text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
              Procedimentos personalizados para cada necessidade, sempre priorizando a segurança e os resultados
              naturais.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm h-full">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-playfair text-lg sm:text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="elegant-text text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
