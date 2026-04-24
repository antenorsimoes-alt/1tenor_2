import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ImageShowcase } from "@/components/image-showcase"
import { InsightsSection } from "@/components/insights-section"
import { TechnologySpotlight } from "@/components/technology-spotlight"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImageShowcase />
        <InsightsSection />
        <TechnologySpotlight />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
