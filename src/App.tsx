import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { TrustSection } from './components/TrustSection';
import { VisitSection } from './components/VisitSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080A] text-[#E4E2DD] font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Brand Introduction */}
        <IntroSection />

        {/* Section 4: Services Preview */}
        <ServicesSection />

        {/* Section 5: Experience / Why A Square */}
        <ExperienceSection />

        {/* Section 6: Visual Photo Gallery */}
        <GallerySection />

        {/* Section 7: Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* Section 9: Customer Trust & Rating Overview */}
        <TrustSection />

        {/* Section 10: Visit Us & Map */}
        <VisitSection />

        {/* Section 11: Appointment CTA */}
        <FinalCTA />
      </main>

      {/* Section 12: Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick Button */}
      <FloatingWhatsApp />
    </div>
  );
}
