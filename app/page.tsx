import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { WhyVASection } from "@/components/why-va-section"
import { DifferentSection } from "@/components/different-section"
import { TransformSection } from "@/components/transform-section"
import { OffersSection } from "@/components/offers-section"
import { TrainerSection } from "@/components/trainer-section"
import { CertificationSection } from "@/components/certification-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyVASection />
      <DifferentSection />
      <TransformSection />
      <OffersSection />
      <TrainerSection />
      <CertificationSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
