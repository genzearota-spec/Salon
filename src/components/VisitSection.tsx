import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function VisitSection() {
  return (
    <section id="visit" className="py-24 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#F5E6CA] font-semibold">
              LOCATION & HOURS
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF]">
            VISIT A SQUARE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Address & Details 3D Card */}
          <div className="lg:col-span-6">
            <ThreeDCard depth={15} className="h-full">
              <div className="bg-[#121216] p-8 sm:p-10 rounded-sm border border-[#D4AF37]/30 flex flex-col justify-between space-y-8 h-full shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                
                {/* Wordmark & Address Block */}
                <div className="space-y-6">
                  <div>
                    <span className="font-serif-display text-3xl font-bold tracking-[0.15em] text-gold-gradient block">
                      A SQUARE
                    </span>
                    <span className="text-xs tracking-[0.25em] text-[#F5E6CA] uppercase block mt-1 font-semibold">
                      UNISEX SALON & SPA
                    </span>
                  </div>

                  <div className="space-y-5 pt-4 border-t border-[#D4AF37]/20">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#08080A] rounded-sm border border-[#D4AF37]/30 shrink-0 mt-0.5 shadow-sm">
                        <MapPin className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-1">
                          Salon Address
                        </h3>
                        <p className="text-sm text-[#E4E2DD] font-normal leading-relaxed">
                          Sanjeevan Hospital Road<br />
                          Gujarmala, Shirur<br />
                          Maharashtra 412210, India
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#08080A] rounded-sm border border-[#D4AF37]/30 shrink-0 mt-0.5 shadow-sm">
                        <Clock className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-1">
                          Opening Hours
                        </h3>
                        <p className="text-sm text-[#E4E2DD] font-normal leading-relaxed">
                          Every day<br />
                          <strong className="font-bold text-[#FFFFFF]">8:00 AM – 10:30 PM</strong>
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#08080A] rounded-sm border border-[#D4AF37]/30 shrink-0 mt-0.5 shadow-sm">
                        <Phone className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-1">
                          Direct Contact
                        </h3>
                        <p className="text-sm text-[#E4E2DD] font-normal">
                          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#F5E6CA] transition-colors font-semibold">
                            {BUSINESS_INFO.phoneDisplay}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-6 border-t border-[#D4AF37]/20 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <LuxuryButton
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    variant="gold"
                    size="sm"
                    icon={<Phone className="w-3.5 h-3.5 text-[#08080A]" />}
                  >
                    Call Now
                  </LuxuryButton>

                  <LuxuryButton
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    icon={<MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  >
                    WhatsApp
                  </LuxuryButton>

                  <LuxuryButton
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="gold"
                    size="sm"
                    icon={<Navigation className="w-3.5 h-3.5 text-[#08080A]" />}
                  >
                    Directions
                  </LuxuryButton>
                </div>

              </div>
            </ThreeDCard>
          </div>

          {/* Right Column: Visual Map Frame */}
          <div className="lg:col-span-6">
            <ThreeDCard depth={15} className="h-full">
              <div className="bg-[#121216] rounded-sm border border-[#D4AF37]/30 overflow-hidden relative flex flex-col justify-between min-h-[400px] h-full shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                {/* Map Placeholder Graphic / Embed */}
                <div className="relative h-full w-full bg-[#08080A] flex flex-col items-center justify-center p-8 text-center group">
                  <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                  
                  <div className="relative z-10 space-y-5 max-w-md">
                    <div className="w-20 h-20 rounded-full bg-[#121216] text-[#E4E2DD] flex items-center justify-center mx-auto shadow-xl animate-bounce border border-[#D4AF37]/40">
                      <MapPin className="w-10 h-10 text-[#D4AF37]" />
                    </div>

                    <h3 className="font-serif-display text-3xl sm:text-4xl font-semibold text-gold-gradient">
                      A SQUARE SALON & SPA
                    </h3>

                    <p className="text-xs sm:text-sm text-[#E4E2DD]/85 font-normal leading-relaxed">
                      Located conveniently on Sanjeevan Hospital Road, Gujarmala in Shirur.
                    </p>

                    <div className="pt-3">
                      <LuxuryButton
                        href={BUSINESS_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="gold"
                        size="md"
                        icon={<Navigation className="w-4 h-4 text-[#08080A]" />}
                      >
                        Open in Google Maps
                      </LuxuryButton>
                    </div>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          </div>

        </div>

      </div>
    </section>
  );
}


