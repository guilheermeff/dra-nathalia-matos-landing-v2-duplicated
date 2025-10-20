"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const heroImages = [
  {
    src: "/hero-3.webp",
    alt: "Sala de tratamento profissional com iluminação suave",
  },
  {
    src: "/hero-1.webp",
    alt: "Dra. Nathalia em ambiente clínico elegante",
  },
  {
    src: "/hero-2.webp",
    alt: "Interior elegante da clínica dermatológica",
  },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-3 sm:px-4 max-w-4xl mx-auto w-full transition-all duration-1500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl hero-text mb-4 sm:mb-6 text-balance transition-all duration-2000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Descubra a leveza do autocuidado
        </h1>
        <p
          className={`text-base sm:text-lg md:text-xl elegant-text mb-6 sm:mb-8 max-w-2xl mx-auto text-white/90 text-pretty transition-all duration-1000 ease-out delay-500 px-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tratamentos dermatológicos e estéticos personalizados para realçar sua beleza natural com segurança e
          elegância.
        </p>
        <div
          className={`flex justify-center items-center transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="https://wa.me/5592984497829?text=Quero%20marcar%20uma%20consulta%20de%20Est%C3%A9tica%20com%20a%20Dra.%20Nath%C3%A1lia%20Matos"
            target="_blank"
            className="whatsapp-botao rounded-full px-4 sm:px-6 py-2 sm:py-2 bg-white text-black text-sm sm:text-base flex items-center w-fit"
          >              
            Agende uma consulta
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
