import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function VisitSection() {
  return (
    <section id="visit" className="py-24 bg-[#FAFAFA] text-[#4A4A4A] relative overflow-hidden border-t border-[#F4C2C2]/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,194,194,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-[#F4C2C2]/20">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#F4C2C2]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#333333] font-bold">
              LOCATION & HOURS
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#333333]">
            VISIT AURA
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Address & Details 3D Card */}
          <div className="lg:col-span-6">
            <ThreeDCard depth={15} className="h-full">
              <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-sm border border-[#F4C2C2]/30 flex flex-col justify-between space-y-8 h-full shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                
                {/* Wordmark & Address Block */}
                <div className="space-y-6">
                  <div>
                    <span className="font-serif-display text-3xl font-bold tracking-[0.15em] text-gold-gradient block">
                      {BUSINESS_INFO.wordmarkName}
                    </span>
                    <span className="text-xs tracking-[0.25em] text-[#333333] uppercase block mt-1 font-bold">
                      {BUSINESS_INFO.wordmarkTagline}
                    </span>
                  </div>

                  <div className="space-y-5 pt-4 border-t border-[#F4C2C2]/20">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#FAFAFA] rounded-sm border border-[#F4C2C2]/30 shrink-0 mt-0.5 shadow-sm">
                        <MapPin className="w-5 h-5 text-[#F4C2C2]" />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4C2C2] mb-1">
                          Salon Address
                        </h3>
                        <p className="text-sm text-[#4A4A4A] font-bold leading-relaxed">
                          Mont Vert Finesse Housing Society<br />
                          Baner - Pashan Link Rd, near Nano Space IT Park<br />
                          Pashan, Pune, Maharashtra 411021, India
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#FAFAFA] rounded-sm border border-[#F4C2C2]/30 shrink-0 mt-0.5 shadow-sm">
                        <Clock className="w-5 h-5 text-[#F4C2C2]" />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4C2C2] mb-1">
                          Opening Hours
                        </h3>
                        <p className="text-sm text-[#4A4A4A] font-bold leading-relaxed">
                          Every day<br />
                          <strong className="font-bold text-[#333333]">8:00 AM – 10:30 PM</strong>
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#FAFAFA] rounded-sm border border-[#F4C2C2]/30 shrink-0 mt-0.5 shadow-sm">
                        <Phone className="w-5 h-5 text-[#F4C2C2]" />
                      </div>
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4C2C2] mb-1">
                          Direct Contact
                        </h3>
                        <p className="text-sm text-[#4A4A4A] font-bold">
                          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#333333] transition-colors font-bold">
                            {BUSINESS_INFO.phoneDisplay}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-6 border-t border-[#F4C2C2]/20 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <LuxuryButton
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    variant="gold"
                    size="sm"
                    icon={<Phone className="w-3.5 h-3.5 text-[#FAFAFA]" />}
                  >
                    Call Now
                  </LuxuryButton>

                  <LuxuryButton
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    icon={<MessageCircle className="w-3.5 h-3.5 text-[#F4C2C2]" />}
                  >
                    WhatsApp
                  </LuxuryButton>

                  <LuxuryButton
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="gold"
                    size="sm"
                    icon={<Navigation className="w-3.5 h-3.5 text-[#FAFAFA]" />}
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
              <div className="bg-[#FFFFFF] rounded-sm border border-[#F4C2C2]/30 overflow-hidden relative flex flex-col justify-between min-h-[420px] h-full shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                {/* Embedded Interactive Google Map */}
                <div className="relative w-full h-full min-h-[320px] bg-[#FAFAFA]">
                  <iframe
                    title="Aura Unisex Salon Google Maps Location"
                    src="https://maps.google.com/maps?q=Aura%20Unisex%20Salon%20Mont%20Vert%20Finesse%20Baner%20Pashan%20Link%20Rd%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[320px] border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Location Overlay Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#F4C2C2] uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 text-[#F4C2C2]" />
                        <span>Pashan, Pune, MH</span>
                      </div>
                      <p className="text-[11px] text-[#4A4A4A]/80">
                        Baner - Pashan Link Rd, near Nano Space IT Park
                      </p>
                    </div>

                    <LuxuryButton
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="gold"
                      size="sm"
                      icon={<Navigation className="w-3.5 h-3.5 text-[#FAFAFA]" />}
                      className="shrink-0"
                    >
                      Open Maps
                    </LuxuryButton>
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


