import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { Generator } from './components/Generator';
import { OrderPage } from './components/OrderPage';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#4A4A4A] font-sans antialiased overflow-x-hidden font-bold">
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

        {/* Section 5: Experience / Why Aura */}
        <ExperienceSection />

        {/* Section 7: Visual Photo Gallery */}
        <GallerySection />

        {/* Section 8: Customer Reviews & Ratings */}
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
