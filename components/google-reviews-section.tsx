"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ExternalLink, Pause, Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface GoogleReview {
  id?: string
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

// Mock data - will be replaced by actual API data when available
const mockReviews: GoogleReview[] = [
  {
    id: "5",
    author_name: "Jane Soares",
    rating: 5,
    relative_time_description: "há 3 anos",
    text: "Gostei do profissionalistmo! Dicas maravilhosas! Indicação de bons produtos e pra quem esta a procura de procedimentos (harmonização fácil) a Dra. Nathália Matos deixa vc natural nada impactante e melhoras e mudanças graduais. Super recomendo!!!!!!",
    time: Date.now() - 604800000,
  },
  {
    id: "1",
    author_name: "Ramon Gouveia",
    rating: 5,
    relative_time_description: "há 3 anos",
    text: "Tratamento efetivo com resultado maravilhoso. Tive alopecia areata e procurei a Dra. Nathalia após 3 meses tratando sem sucesso. Mesmo com o prazo dado de 6 meses meu cabelo voltou ao normal em 4 meses recuperando a confiança e autoestima. Muito obrigado!!!",
    time: Date.now() - 1209600000,
  },
  {
    id: "2",
    author_name: "Ana Maria Feitosa",
    rating: 5,
    relative_time_description: "há 7 meses",
    text: "O atendimento da Dra Natalia é excelente, deu tudo certo no procedimento realizado, muito atenciosa e competente.",
    time: Date.now() - 2592000000,
  },
  {
    id: "3",
    author_name: "Lilian Betti",
    rating: 5,
    relative_time_description: "há 1 ano",
    text: "Fiz preenchimento labial e toxina but. Adorei!! Super recomendo os procedimentos e principalmente a doutora, que foi super atenciosa, explicou tudo sobre os procedimentos e os produtos. Nota 1000. O preenchimento ficou super natural, amei!!",
    time: Date.now() - 1814400000,
  },
  {
    id: "4",
    author_name: "Maria Rosângela",
    rating: 5,
    relative_time_description: "há 2 anos",
    text: "Fui muito bem recebida, me deixou muito bem a vontade, com suas orientações esclarecedoras e soluções bem direcionada para resolver as minhas queixas. Estou muito satisfeita com os procedimentos que já fiz com a doutora Natalia porque tenho bons resultados. Amei! Vou voltar mais vezes. Obrigado doutora por sua atenção!",
    time: Date.now() - 604800000,
  },
]

export function GoogleReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>(mockReviews)
  const [loading, setLoading] = useState(false)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [averageRating, setAverageRating] = useState(5)
  const [totalReviews, setTotalReviews] = useState(mockReviews.length)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let isMounted = true

    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/google-reviews")

        if (!isMounted) return

        if (response.ok) {
          const data = await response.json()
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews)
            setAverageRating(data.averageRating || 5)
            setTotalReviews(data.totalReviews || data.reviews.length)
          }
        }
      } catch (error) {
        if (isMounted) {
          console.log("[v0] Using mock reviews data")
        }
      }
    }

    const timeoutId = setTimeout(fetchReviews, 100)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!isPlaying) return

    const intervalId = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [isPlaying, reviews.length])

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl section-title text-foreground mb-6">
              O que Dizem Nossos Pacientes
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium text-foreground">{averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({totalReviews + 84} avaliações)</span>
            </div>
            <p className="elegant-text text-muted-foreground text-lg max-w-2xl mx-auto">
              Depoimentos reais de pacientes que confiaram em nosso trabalho.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={200}>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                {reviews.length > 0 && (
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6" />

                    <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                      "{reviews[currentReviewIndex].text}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < reviews[currentReviewIndex].rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="text-center mb-8">
                      <p className="font-medium text-foreground">{reviews[currentReviewIndex].author_name}</p>
                      <p className="text-sm text-muted-foreground">
                        {reviews[currentReviewIndex].relative_time_description}
                      </p>
                    </div>

                    <div className="flex justify-center items-center gap-4 mb-8">
                      <button
                        onClick={togglePlayPause}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-foreground" />
                        ) : (
                          <Play className="w-5 h-5 text-foreground" />
                        )}
                      </button>
                      <div className="flex gap-2">
                        {reviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentReviewIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentReviewIndex ? "bg-primary" : "bg-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="gap-2 bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://www.google.com/search?sca_esv=8b6aaa0e07ec78a3&hl=pt-BR&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4UUuEQQoJC58MN7aBkFLhL3xMbQtEbY7DDMJnoCRHKOR86FkG8TsK3WU1WPsrORQZy6LYiK8WRq82aIVWgJW01U9zTz7mioMxYYTUKu7znr7FM529d5md1w9_CTm5CdSuOQX9AKHyBoBZd9Qw6peUIXuPjA&q=Dra.+Nath%C3%A1lia+Matos+-+Dermatologista+l+Manaus/AM+Coment%C3%A1rios&sa=X&ved=2ahUKEwjc7vz0gvKPAxWAqZUCHe4WDcsQ0bkNegQIJBAE&biw=1631&bih=944&dpr=1",
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver todas as avaliações no Google
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
