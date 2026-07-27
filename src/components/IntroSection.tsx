import { MapPin } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

export function IntroSection() {
  return (
    <section id="intro" className="py-24 bg-[#FAFAFA] text-[#4A4A4A] relative overflow-hidden border-t border-[#F4C2C2]/20">
      
      {/* Subtle Background Radial Aura */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(244,194,194,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle decorative top tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-[#F4C2C2]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#333333] font-bold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F4C2C2]" />
            PASHAN, PUNE, MAHARASHTRA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#333333] leading-[1.1]">
              MORE THAN A SALON.<br />
              <span className="text-gold-gradient font-bold italic">AN ELEVATED SANCTUARY.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#F4C2C2]" />

            <p className="text-lg sm:text-xl font-bold text-[#4A4A4A] leading-relaxed max-w-2xl">
              A space created for personal style, self-care, and a refined beauty experience.
            </p>

            <p className="text-sm sm:text-base text-[#333333] leading-relaxed max-w-xl font-bold pt-2">
              At <strong className="text-[#333333] font-bold">Aura Unisex Salon</strong>, every visit is thoughtfully designed around quiet comfort, meticulous attention, and tailored unisex care on Baner - Pashan Link Road, Pashan.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs tracking-[0.2em] uppercase font-bold text-[#F4C2C2]">
              <span className="text-[#333333]">UNISEX CARE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C2C2]" />
              <span className="text-[#333333]">TAILORED STYLING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C2C2]" />
              <span className="text-[#333333]">SPA REJUVENATION</span>
            </div>
          </div>

          {/* Right Column: 3D Visual Composition Card */}
          <div className="lg:col-span-5 relative">
            <ThreeDCard depth={25}>
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm bg-[#FFFFFF] shadow-[0_20px_50px_rgba(0,0,0,0.9)] group border border-[#F4C2C2]/30">
                <img
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=85&w=1000"
                  alt="Aura Unisex Salon Atmosphere Concept"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/90 via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6 text-[#4A4A4A] p-5 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#F4C2C2]/30 rounded-sm shadow-xl">
                  <span className="text-[10px] tracking-[0.25em] text-[#F4C2C2] uppercase font-bold block mb-1">
                    AURA SANCTUARY
                  </span>
                  <p className="text-xs text-[#4A4A4A] font-bold italic leading-relaxed">
                    "Designed for individual expression, relaxation, and contemporary grooming."
                  </p>
                </div>
              </div>
            </ThreeDCard>

            {/* Decorative Box Frame Offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#F4C2C2]/25 rounded-sm -z-0 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}


