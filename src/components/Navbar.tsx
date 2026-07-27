import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
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
          ? 'bg-[#FAFAFA]/95 backdrop-blur-2xl border-b border-[#F4C2C2]/20 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-[#FAFAFA]/95 via-[#FAFAFA]/60 to-transparent py-5'
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
              {BUSINESS_INFO.wordmarkName}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#F4C2C2] uppercase font-bold mt-1">
              {BUSINESS_INFO.wordmarkTagline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#4A4A4A]/90 hover:text-[#333333] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F4C2C2] hover:after:w-full after:transition-all after:duration-300 font-bold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/fluid.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-[#F4C2C2] uppercase bg-[#FFFFFF] border border-[#F4C2C2]/40 rounded-full hover:bg-[#F4C2C2]/20 transition-all flex items-center gap-1.5 shadow-sm"
              title="Open 3D Fluid WebGL Experience"
            >
              <Sparkles className="w-3 h-3 text-[#F4C2C2] animate-pulse" />
              <span>3D Fluid View</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs tracking-wider text-[#4A4A4A] hover:text-[#333333] flex items-center gap-1.5 transition-colors font-bold"
              title="Call salon directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4C2C2]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <LuxuryButton
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="sm"
              icon={<MessageCircle className="w-3.5 h-3.5 text-[#FAFAFA]" />}
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
              <MessageCircle className="w-4 h-4 text-[#FAFAFA]" />
            </LuxuryButton>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#333333] hover:text-[#333333] focus:outline-none"
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
          className="md:hidden bg-[#FAFAFA]/98 backdrop-blur-2xl border-b border-[#F4C2C2]/25 px-6 py-8 transition-all duration-300 shadow-2xl"
        >
          <div className="flex flex-col space-y-6 text-center">
            <div className="pb-4 border-b border-[#F4C2C2]/20">
              <span className="font-serif-display text-2xl tracking-[0.2em] text-gold-gradient font-bold block">
                {BUSINESS_INFO.wordmarkName}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#F4C2C2] uppercase block mt-1 font-bold">
                {BUSINESS_INFO.wordmarkTagline} • PASHAN, PUNE
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.25em] uppercase text-[#4A4A4A] hover:text-[#333333] transition-colors py-1 font-bold"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#F4C2C2]/20 flex flex-col space-y-3">
              <LuxuryButton
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="md"
                onClick={() => setMobileMenuOpen(false)}
                icon={<MessageCircle className="w-4 h-4 text-[#FAFAFA]" />}
              >
                Book via WhatsApp
              </LuxuryButton>

              <LuxuryButton
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                variant="outline"
                size="md"
                icon={<Phone className="w-4 h-4 text-[#F4C2C2]" />}
              >
                Call Salon Directly
              </LuxuryButton>
            </div>

            <p className="text-[10px] text-[#F4C2C2] tracking-wider pt-2">
              Every day: 8:00 AM – 10:30 PM
            </p>
          </div>
        </div>
      )}
    </header>
  );
}


