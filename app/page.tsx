import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { DoctorSection } from "@/components/doctor-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="sobre">
        <AboutSection />
      </section>
      <section id="servicos">
        <ServicesSection />
      </section>
      <BeforeAfterSection />
      <GoogleReviewsSection />
      <section id="medica">
        <DoctorSection />
      </section>
      <section id="contato">
        <Footer />
      </section>

      <WhatsAppButton />
    </main>
  )
}
