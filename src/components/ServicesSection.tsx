import { useState } from 'react';
import { MessageCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import { SERVICE_CATEGORIES, ServiceCategory, createWhatsAppUrl } from '../types';
import { ServiceInquiryModal } from './ServiceInquiryModal';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  return (
    <section id="services" className="py-24 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D4AF37]/20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#F5E6CA] font-semibold">
                CURATED EXPERIENCES
              </span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF]">
              SERVICES & CARE
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#F5E6CA] font-normal leading-relaxed">
              Elevated grooming and rejuvenation categories for women and men. Designed for individual care and refined personal style.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-[#E4E2DD] bg-[#121216]/90 px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/25 backdrop-blur-md shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Service menu coming soon — ask us about available services</span>
            </div>
          </div>
        </div>

        {/* 4 Category Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const whatsAppUrl = createWhatsAppUrl(cat.whatsAppMessage);

            return (
              <ThreeDCard key={cat.id} depth={15} className="h-full">
                <div className="group relative bg-[#121216] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
                  {/* Visual Image Header */}
                  <div className="relative h-60 overflow-hidden bg-[#08080A]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/30 to-transparent" />
                    
                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 bg-[#08080A]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-[#D4AF37]/30 shadow-md">
                      <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
                        {cat.id}
                      </span>
                    </div>

                    {/* Quick Expand Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className="absolute top-4 right-4 p-2 rounded-sm bg-[#08080A]/90 hover:bg-[#D4AF37] text-[#F5E6CA] hover:text-[#08080A] transition-all duration-300 shadow-md border border-[#D4AF37]/30"
                      title="View treatment details"
                      aria-label={`View details for ${cat.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="font-serif-display text-2xl font-semibold tracking-wide text-[#FFFFFF] group-hover:text-gold-gradient transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#D4AF37] italic font-normal mt-1">
                        {cat.tagline}
                      </p>
                      <p className="text-xs text-[#E4E2DD]/85 mt-3 font-normal leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 pt-3 border-t border-[#D4AF37]/20">
                      <LuxuryButton
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="gold"
                        size="sm"
                        icon={<MessageCircle className="w-3.5 h-3.5 text-[#08080A]" />}
                        className="w-full"
                      >
                        Enquire on WhatsApp
                      </LuxuryButton>

                      <LuxuryButton
                        onClick={() => setSelectedCategory(cat)}
                        variant="subtle"
                        size="sm"
                        icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />}
                        className="w-full py-1"
                      >
                        Explore Category
                      </LuxuryButton>
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Custom Service Inquiry Note */}
        <div className="mt-16 bg-[#121216] border border-[#D4AF37]/30 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-display text-xl sm:text-2xl text-[#FFFFFF] font-normal">
              Looking for a custom style or special treatment?
            </h4>
            <p className="text-xs text-[#E4E2DD]/80">
              Our team is happy to assist with tailored hair, skin, spa, and bridal packages upon inquiry.
            </p>
          </div>

          <LuxuryButton
            href={createWhatsAppUrl("Hello A Square Unisex Salon & Spa, I would like to inquire about custom service packages.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
            icon={<MessageCircle className="w-4 h-4 text-[#08080A]" />}
            className="shrink-0"
          >
            Custom WhatsApp Enquiry
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


