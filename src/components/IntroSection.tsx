import { MapPin } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

export function IntroSection() {
  return (
    <section id="intro" className="py-24 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Subtle Background Radial Aura */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle decorative top tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#F5E6CA] font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            SHIRUR, MAHARASHTRA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF] leading-[1.1]">
              MORE THAN A SALON.<br />
              <span className="text-gold-gradient font-light italic">AN ELEVATED SANCTUARY.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#D4AF37]" />

            <p className="text-lg sm:text-xl font-light text-[#E4E2DD] leading-relaxed max-w-2xl">
              A space created for personal style, self-care, and a refined beauty experience.
            </p>

            <p className="text-sm sm:text-base text-[#F5E6CA] leading-relaxed max-w-xl font-normal pt-2">
              At <strong className="text-[#FFFFFF] font-semibold">A Square Unisex Salon & Spa</strong>, every visit is thoughtfully designed around quiet comfort, meticulous attention, and tailored unisex care in the heart of Shirur.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
              <span className="text-[#FFFFFF]">UNISEX CARE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[#FFFFFF]">TAILORED STYLING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="text-[#FFFFFF]">SPA REJUVENATION</span>
            </div>
          </div>

          {/* Right Column: 3D Visual Composition Card */}
          <div className="lg:col-span-5 relative">
            <ThreeDCard depth={25}>
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm bg-[#121216] shadow-[0_20px_50px_rgba(0,0,0,0.9)] group border border-[#D4AF37]/30">
                <img
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=85&w=1000"
                  alt="A Square Salon Atmosphere Concept"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/90 via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6 text-[#E4E2DD] p-5 bg-[#121216]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-sm shadow-xl">
                  <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-1">
                    A SQUARE SANCTUARY
                  </span>
                  <p className="text-xs text-[#E4E2DD] font-light italic leading-relaxed">
                    "Designed for individual expression, relaxation, and contemporary grooming."
                  </p>
                </div>
              </div>
            </ThreeDCard>

            {/* Decorative Box Frame Offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/25 rounded-sm -z-0 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}


