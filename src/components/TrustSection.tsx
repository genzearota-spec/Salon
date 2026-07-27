import { Star, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { LuxuryButton } from './LuxuryButton';

export function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-[#FAFAFA] text-[#4A4A4A] relative overflow-hidden border-t border-[#F4C2C2]/20">
      
      {/* Background Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,194,194,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ThreeDCard depth={18}>
          <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-sm border border-[#F4C2C2]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-center">
            
            {/* Subtle Shield Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFA] text-[#333333] border border-[#F4C2C2]/30 mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#F4C2C2]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#333333] font-bold">
                VERIFIED PUBLIC FEEDBACK
              </span>
            </div>

            {/* Big Rating Number */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="font-serif-display text-6xl sm:text-7xl lg:text-8xl font-bold text-gold-gradient tracking-tight flex items-baseline justify-center gap-3">
                <span>{BUSINESS_INFO.rating}</span>
                <span className="text-3xl sm:text-4xl text-[#F4C2C2] font-bold">/ 5</span>
              </div>

              {/* Star Indicators */}
              <div className="flex items-center gap-2 my-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-7 h-7 sm:w-8 sm:h-8 fill-[#F4C2C2] text-[#F4C2C2] drop-shadow-md"
                  />
                ))}
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#333333] font-bold">
                PUBLIC RATING
              </span>

              <p className="text-xs sm:text-sm text-[#4A4A4A] font-bold mt-1">
                Based on <strong className="font-bold text-[#333333]">{BUSINESS_INFO.reviewCount} public reviews</strong> in Pashan, Pune, MH
              </p>
            </div>

            {/* Clean Call to Action */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <LuxuryButton
                href="#visit"
                variant="gold"
                size="md"
                icon={<MapPin className="w-4 h-4 text-[#FAFAFA]" />}
                className="w-full sm:w-auto"
              >
                Visit Aura
              </LuxuryButton>

              <LuxuryButton
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={<ExternalLink className="w-3.5 h-3.5 text-[#F4C2C2]" />}
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


