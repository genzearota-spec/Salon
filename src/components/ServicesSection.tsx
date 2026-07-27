import { useState } from 'react';
import { MessageCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import { SERVICE_CATEGORIES, ServiceCategory, createWhatsAppUrl } from '../types';
import { ServiceInquiryModal } from './ServiceInquiryModal';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] text-[#4A4A4A] relative border-t border-[#F4C2C2]/20">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(244,194,194,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(244,194,194,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#F4C2C2]/20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F4C2C2]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#333333] font-bold">
                CURATED EXPERIENCES
              </span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#333333]">
              SERVICES & CARE
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#333333] font-bold leading-relaxed">
              Elevated grooming and rejuvenation categories for women and men. Designed for individual care and refined personal style.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-[#4A4A4A] bg-[#FFFFFF]/90 px-3.5 py-1.5 rounded-sm border border-[#F4C2C2]/25 backdrop-blur-md shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-[#F4C2C2]" />
              <span>Service menu coming soon — ask us about available services</span>
            </div>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-12 sm:gap-16 relative pb-12">
          {SERVICE_CATEGORIES.map((cat, index) => {
            const whatsAppUrl = createWhatsAppUrl(cat.whatsAppMessage);

            return (
              <div 
                key={cat.id} 
                className="sticky w-full z-10"
                style={{ top: '15vh' }}
              >
                <ThreeDCard depth={10} className="w-full">
                  <div className="group relative bg-[#FFFFFF] border border-[#F4C2C2]/30 hover:border-[#F4C2C2] transition-all duration-500 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(244,194,194,0.15)] md:min-h-[420px]">
                    {/* Visual Image Header (Left on Desktop, Top on Mobile) */}
                    <div className="relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden bg-[#FAFAFA] shrink-0">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#FFFFFF]/50" />
                      
                      {/* Category Pill Tag */}
                      <div className="absolute top-6 left-6 bg-[#FAFAFA]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F4C2C2]/40 shadow-sm">
                        <span className="text-[11px] tracking-[0.25em] text-[#F4C2C2] uppercase font-bold">
                          {cat.id}
                        </span>
                      </div>

                      {/* Quick Expand Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className="absolute top-6 right-6 p-2.5 rounded-full bg-[#FAFAFA]/90 hover:bg-[#F4C2C2] text-[#333333] hover:text-[#FAFAFA] transition-all duration-300 shadow-md border border-[#F4C2C2]/40"
                        title="View treatment details"
                        aria-label={`View details for ${cat.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Card Content (Right on Desktop) */}
                    <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center space-y-6 md:space-y-8 bg-[#FFFFFF]">
                      <div>
                        <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#333333] group-hover:text-gold-gradient transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#F4C2C2] font-bold mt-2">
                          {cat.tagline}
                        </p>
                        <p className="text-sm sm:text-base text-[#4A4A4A] mt-6 font-bold leading-relaxed max-w-2xl">
                          {cat.description}
                        </p>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-auto border-t border-[#F4C2C2]/20">
                        <LuxuryButton
                          href={whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="gold"
                          size="md"
                          icon={<MessageCircle className="w-4 h-4 text-[#FAFAFA]" />}
                          className="w-full sm:w-auto"
                        >
                          Enquire on WhatsApp
                        </LuxuryButton>

                        <LuxuryButton
                          onClick={() => setSelectedCategory(cat)}
                          variant="subtle"
                          size="md"
                          icon={<ArrowUpRight className="w-4 h-4 text-[#F4C2C2]" />}
                          className="w-full sm:w-auto"
                        >
                          Explore Category
                        </LuxuryButton>
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </div>
            );
          })}
        </div>

        {/* Custom Service Inquiry Note */}
        <div className="mt-12 bg-[#FFFFFF] border border-[#F4C2C2]/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h4 className="font-serif-display text-2xl sm:text-3xl text-[#333333] font-bold">
              Looking for a custom style or special treatment?
            </h4>
            <p className="text-sm text-[#4A4A4A]/80 font-bold leading-relaxed">
              Our team is happy to assist with tailored hair, skin, spa, and bridal packages upon inquiry. Reach out to discuss your bespoke needs.
            </p>
          </div>

          <LuxuryButton
            href={createWhatsAppUrl("Hello Aura Unisex Salon, I would like to inquire about custom service packages.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="lg"
            icon={<MessageCircle className="w-5 h-5 text-[#FAFAFA]" />}
            className="shrink-0"
          >
            Custom Enquiry
          </LuxuryButton>
        </div>

      </div>

      {/* Modal Dialog for Category Details */}
      <ServiceInquiryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}


