import { Star, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ThreeDCard depth={18}>
          <div className="bg-[#121216] p-8 sm:p-12 rounded-sm border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-center">
            
            {/* Subtle Shield Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08080A] text-[#F5E6CA] border border-[#D4AF37]/30 mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F5E6CA] font-bold">
                VERIFIED PUBLIC FEEDBACK
              </span>
            </div>

            {/* Big Rating Number */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="font-serif-display text-6xl sm:text-7xl lg:text-8xl font-bold text-gold-gradient tracking-tight flex items-baseline justify-center gap-3">
                <span>{BUSINESS_INFO.rating}</span>
                <span className="text-3xl sm:text-4xl text-[#D4AF37] font-light">/ 5</span>
              </div>

              {/* Star Indicators */}
              <div className="flex items-center gap-2 my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-7 h-7 sm:w-8 sm:h-8 fill-[#D4AF37] text-[#D4AF37] drop-shadow-md"
                  />
                ))}
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#FFFFFF] font-bold">
                PUBLIC RATING
              </span>

              <p className="text-xs sm:text-sm text-[#E4E2DD] font-normal mt-1">
                Based on <strong className="font-semibold text-[#FFFFFF]">{BUSINESS_INFO.reviewCount} public reviews</strong> in Shirur, Maharashtra
              </p>
            </div>

            {/* Clean Call to Action */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <LuxuryButton
                href="#visit"
                variant="gold"
                size="md"
                icon={<MapPin className="w-4 h-4 text-[#08080A]" />}
                className="w-full sm:w-auto"
              >
                Visit A Square
              </LuxuryButton>

              <LuxuryButton
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={<ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />}
                className="w-full sm:w-auto"
              >
                View Google Listing
              </LuxuryButton>
            </div>

          </div>
        </ThreeDCard>
      </div>
    </section>
  );
}


