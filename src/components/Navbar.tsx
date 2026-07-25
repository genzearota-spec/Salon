import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../types';
import { LuxuryButton } from './LuxuryButton';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#08080A]/95 backdrop-blur-2xl border-b border-[#D4AF37]/20 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-[#08080A]/95 via-[#08080A]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif-display text-2xl sm:text-3xl tracking-[0.28em] text-gold-gradient font-bold drop-shadow-md leading-none">
              A SQUARE
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-semibold mt-1">
              {BUSINESS_INFO.wordmarkTagline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#E4E2DD]/90 hover:text-[#F5E6CA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs tracking-wider text-[#E4E2DD] hover:text-[#F5E6CA] flex items-center gap-1.5 transition-colors font-medium"
              title="Call salon directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <LuxuryButton
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="sm"
              icon={<MessageCircle className="w-3.5 h-3.5 text-[#08080A]" />}
            >
              Book Appointment
            </LuxuryButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <LuxuryButton
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="sm"
              className="!px-3 !py-2"
            >
              <MessageCircle className="w-4 h-4 text-[#08080A]" />
            </LuxuryButton>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5E6CA] hover:text-[#FFFFFF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-[#08080A]/98 backdrop-blur-2xl border-b border-[#D4AF37]/25 px-6 py-8 transition-all duration-300 shadow-2xl"
        >
          <div className="flex flex-col space-y-6 text-center">
            <div className="pb-4 border-b border-[#D4AF37]/20">
              <span className="font-serif-display text-2xl tracking-[0.2em] text-gold-gradient font-bold block">
                A SQUARE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase block mt-1 font-semibold">
                UNISEX SALON & SPA • SHIRUR
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.25em] uppercase text-[#E4E2DD] hover:text-[#F5E6CA] transition-colors py-1 font-semibold"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col space-y-3">
              <LuxuryButton
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                icon={<MessageCircle className="w-4 h-4 text-[#08080A]" />}
              >
                Book via WhatsApp
              </LuxuryButton>

              <LuxuryButton
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                variant="outline"
                size="md"
                icon={<Phone className="w-4 h-4 text-[#D4AF37]" />}
              >
                Call Salon Directly
              </LuxuryButton>
            </div>

            <p className="text-[10px] text-[#D4AF37] tracking-wider pt-2">
              Every day: 8:00 AM – 10:30 PM
            </p>
          </div>
        </div>
      )}
    </header>
  );
}


