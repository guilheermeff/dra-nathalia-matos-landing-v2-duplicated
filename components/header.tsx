"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
    </svg>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          isScrolled ? "py-3" : "py-4"
        } flex items-center justify-between`}
      >
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Image
            src="/logo-dra-nathalia-matos.webp"
            alt="Logo do consultório"
            width={200}
            height={60}
            className="w-auto h-12 sm:h-14 md:h-16"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors elegant-text">
            Sobre
          </a>
          <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors elegant-text">
            Serviços
          </a>
          <a href="#medica" className="text-muted-foreground hover:text-foreground transition-colors elegant-text">
            A Médica
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors elegant-text">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link 
            href="https://wa.me/5592984497829?text=Oi%2C%20Quero%20marcar%20uma%20Consulta%20de%20Dermatologia%20com%20a%20Dra.%20Nath%C3%A1lia%20Matos"
            target="_blank"
            className="whatsapp-botao relative bg-green-600 hover:bg-green-800 text-white rounded-full text-bold px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group flex items-center gap-2 font-bold"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Falar com a doutora
          </Link>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-border/50 shadow-lg w-full">
          <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            <a
              href="#sobre"
              className="text-muted-foreground hover:text-foreground transition-colors elegant-text py-2 block"
              onClick={closeMobileMenu}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-foreground transition-colors elegant-text py-2 block"
              onClick={closeMobileMenu}
            >
              Serviços
            </a>
            <a
              href="#medica"
              className="text-muted-foreground hover:text-foreground transition-colors elegant-text py-2 block"
              onClick={closeMobileMenu}
            >
              A Médica
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-foreground transition-colors elegant-text py-2 block"
              onClick={closeMobileMenu}
            >
              Contato
            </a>
            <div className="pt-2 px-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://wa.me/5592984497829?text=Quero%20marcar%20uma%20consulta%20de%20Est%C3%A9tica%20com%20a%20Dra.%20Nath%C3%A1lia%20Matos",
                    "_blank",
                  )
                  closeMobileMenu()
                }}
                className="whatsapp-botao flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 w-full max-w-none"
              >
                <Phone className="w-4 h-4" />
                <span>Agendar Consulta Agora</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
