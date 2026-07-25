import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function FinalCTA() {
  return (
    <section id="book-cta" className="py-28 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ThreeDCard depth={20}>
          <div className="bg-[#121216] p-10 sm:p-16 rounded-sm border border-[#D4AF37]/30 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            
            {/* Top Subtle Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08080A] border border-[#D4AF37]/30 mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#F5E6CA] font-bold">
                ELEVATED UNISEX SALON & SPA
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FFFFFF] leading-tight">
              READY FOR YOUR <span className="italic text-gold-gradient font-light">NEXT LOOK?</span>
            </h2>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-[#E4E2DD] max-w-2xl mx-auto font-normal leading-relaxed">
              Connect with Aura Unisex Salon to enquire about available services, custom styling packages, and immediate appointments.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <LuxuryButton
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
                icon={<MessageCircle className="w-4 h-4 text-[#08080A]" />}
                className="w-full sm:w-auto"
              >
                BOOK ON WHATSAPP
              </LuxuryButton>

              <LuxuryButton
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                variant="outline"
                size="lg"
                icon={<Phone className="w-4 h-4 text-[#D4AF37]" />}
                className="w-full sm:w-auto"
              >
                CALL THE SALON
              </LuxuryButton>
            </div>

            {/* Small Operating Note */}
            <p className="mt-10 text-xs text-[#D4AF37] tracking-wider uppercase font-semibold pt-6 border-t border-[#D4AF37]/20">
              Pashan, Pune, Maharashtra • Open Every Day 8:00 AM – 10:30 PM
            </p>

          </div>
        </ThreeDCard>
      </div>
    </section>
  );
}


