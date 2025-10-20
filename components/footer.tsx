import Link from "next/link"
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">NM</span>
              </div>
              <span className="font-playfair text-2xl font-medium">Dra. Nathália Matos</span>
            </div>
            <p className="elegant-text text-primary-foreground/80 max-w-md leading-relaxed">
              Especialista em dermatologia e procedimentos estéticos, oferecendo tratamentos personalizados com
              excelência e segurança.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/dra.nathaliamatos"
                target="_blank"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B5592984497829&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta+com+a+Dra.+Nath%C3%A1lia+Matos.&type=phone_number&app_absent=0"
                target="_blank"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-medium">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div className="elegant-text text-primary-foreground/80 text-sm">
                  <p>Edificio Skye Platinum Office - Av. Dr. Theomario Pinto da Costa, 811 - sl 606</p>
                  <p>Chapada, Manaus - AM</p>
                  <p>CEP: 69050-055</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <span className="elegant-text text-primary-foreground/80 text-sm">(92) 98449-7829</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-lg font-medium">Links Rápidos</h3>
            <div className="space-y-3">
              <a
                href="#sobre"
                className="block elegant-text text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Sobre a Clínica
              </a>
              <a
                href="#servicos"
                className="block elegant-text text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Nossos Serviços
              </a>
              <a
                href="#medica"
                className="block elegant-text text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                A Médica
              </a>
              <a
                href="#contato"
                className="block elegant-text text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="elegant-text text-primary-foreground/60 text-sm">
              © 2025 Dra. Nathalia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="elegant-text text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="elegant-text text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
