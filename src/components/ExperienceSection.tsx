import { Sparkles, Heart, Shield, Compass } from 'lucide-react';
import { WHY_US_PILLARS } from '../types';
import { ThreeDCard } from './ThreeDCard';

export function ExperienceSection() {
  const icons = [
    <Sparkles key="1" className="w-6 h-6 text-[#D4AF37]" />,
    <Heart key="2" className="w-6 h-6 text-[#D4AF37]" />,
    <Compass key="3" className="w-6 h-6 text-[#D4AF37]" />,
    <Shield key="4" className="w-6 h-6 text-[#D4AF37]" />,
  ];

  return (
    <section id="experience" className="py-24 bg-[#08080A] text-[#E4E2DD] relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Ambient Radial Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121216]/90 text-[#F5E6CA] rounded-full shadow-sm border border-[#D4AF37]/30">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#F5E6CA] font-bold">
              THE A SQUARE ETHOS
            </span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF]">
            WHY A SQUARE
          </h2>

          <p className="text-sm sm:text-base text-[#F5E6CA] font-normal leading-relaxed">
            Four quiet pillars guiding our approach to personal care, atmosphere, and unisex styling in Shirur.
          </p>
        </div>

        {/* 4 Pillars Grid with 3D Card Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <ThreeDCard key={pillar.number} depth={18} className="h-full">
              <div className="bg-[#121216] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 p-8 rounded-sm h-full flex flex-col justify-between group shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
                <div>
                  {/* Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif-display text-4xl font-light text-gold-gradient">
                      {pillar.number}
                    </span>
                    <div className="p-3 bg-[#08080A] rounded-sm border border-[#D4AF37]/30 shadow-sm">
                      {icons[idx]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-2xl font-semibold tracking-wider text-[#FFFFFF] mb-3 group-hover:text-[#F5E6CA] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#E4E2DD]/85 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Fine Line Accent */}
                <div className="mt-8 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                  <span>SHIRUR</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>

        {/* Minimal Quote Line */}
        <div className="mt-20 text-center max-w-2xl mx-auto pt-8 border-t border-[#D4AF37]/20">
          <p className="font-serif-display italic text-xl sm:text-2xl text-gold-gradient">
            "Designed to feel comfortable, clean, and understated from the moment you step inside."
          </p>
        </div>

      </div>
    </section>
  );
}


