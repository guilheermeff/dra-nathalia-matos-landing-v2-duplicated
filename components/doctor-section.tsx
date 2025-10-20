import { Award, BookOpen, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function DoctorSection() {
  return (
    <section id="medica" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative flex justify-center items-start h-[500px] sm:h-[600px] md:h-[700px]">
              <img
                src="/profile.webp"
                alt="Dra. Nathalia - Dermatologista"
                className="object-cover rounded-lg shadow-lg h-full w-auto max-w-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl section-title text-foreground">
                  Dra. Nathália Matos
                </h2>
                <p className="elegant-text text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Sou Médica Dermatologista formada pela Fundação de Medicina Tropical Doutor Heitor Vieira Dourado, em
                  Manaus/AM, mãe de um menino lindo chamado Joaquim e esposa do Otávio. Minha rotina é fazer, através
                  dos meus atendimentos, transparecer saúde e beleza na pele! Cuido de cabelos, trato dermatites e
                  resolvo problemas nas unhas. Tudo com muito estudo, experiência e cuidado especializado, pensando no
                  melhor resultado que você precisa ter, que você merece.
                </p>
              </div>

              <ScrollReveal delay={400}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center space-y-2">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
                    <p className="font-medium text-foreground text-sm sm:text-base">Especialista</p>
                    <p className="text-xs sm:text-sm text-muted-foreground elegant-text">
                      Médica Dermatologia CRM-AM 6402 e RQE3097
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
                    <p className="font-medium text-foreground text-sm sm:text-base">Pesquisadora</p>
                    <p className="text-xs sm:text-sm text-muted-foreground elegant-text">Artigo/livro científicos</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
                    <p className="font-medium text-foreground text-sm sm:text-base">Membro</p>
                    <p className="text-xs sm:text-sm text-muted-foreground elegant-text">
                      Sociedade Brasileira de Dermatologia <br />
                      American Academy of Dermatology
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
