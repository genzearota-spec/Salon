import { Phone, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export function Footer() {
  const footerNav = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <footer className="bg-[#0C0C0E] text-[#E4E2DD] pt-16 pb-12 border-t border-[#E2D4C3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2D4C3]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block group">
              <span className="font-serif-display text-2xl tracking-[0.25em] text-[#FFFFFF] font-bold transition-colors block">
                {BUSINESS_INFO.wordmarkName}
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#C4B098] uppercase block mt-1 font-semibold">
                {BUSINESS_INFO.wordmarkTagline}
              </span>
            </a>

            <p className="text-xs text-[#E4E2DD]/80 font-normal max-w-sm leading-relaxed">
              An elevated unisex salon experience in Pashan, Pune. Tailored care, personal style, and quiet luxury.
            </p>

            <div className="text-xs text-[#C4B098] flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C4B098]" />
              <span>{BUSINESS_INFO.cityRegion}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FFFFFF]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs text-[#E4E2DD]/80 hover:text-[#FFFFFF] transition-colors uppercase tracking-[0.15em] font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#FFFFFF]">
              Contact & Hours
            </h4>

            <div className="space-y-2 text-xs text-[#E4E2DD]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C4B098]" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#FFFFFF] transition-colors font-semibold">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C4B098] mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C4B098] gap-4">
          <p>© 2026 Aura Unisex Salon. All rights reserved.</p>
          <p className="text-[#C4B098]/80 italic text-[10px]">
            Official Web Experience for Business
          </p>
        </div>

      </div>
    </footer>
  );
}

