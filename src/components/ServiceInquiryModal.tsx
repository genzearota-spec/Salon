import { X, MessageCircle, Phone, Info, CheckCircle2 } from 'lucide-react';
import { ServiceCategory, BUSINESS_INFO, createWhatsAppUrl } from '../types';
import { LuxuryButton } from './LuxuryButton';

interface ServiceInquiryModalProps {
  category: ServiceCategory | null;
  onClose: () => void;
}

export function ServiceInquiryModal({ category, onClose }: ServiceInquiryModalProps) {
  if (!category) return null;

  const whatsAppUrl = createWhatsAppUrl(category.whatsAppMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAFAFA]/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] text-[#4A4A4A] rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-[#F4C2C2]/30 overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image banner */}
        <div className="relative h-48 overflow-hidden bg-[#FAFAFA]">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover opacity-80 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-[#FAFAFA]/60 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#FAFAFA]/80 text-[#4A4A4A] hover:text-[#F4C2C2] transition-colors focus:outline-none border border-[#F4C2C2]/30"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#F4C2C2] font-bold block">
              SERVICE CATEGORY
            </span>
            <h3 className="font-serif-display text-3xl font-bold text-gold-gradient tracking-tight">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-[#333333] italic">
            "{category.tagline}"
          </p>

          {/* Tasteful Disclaimer Note */}
          <div className="p-3.5 bg-[#FAFAFA] border-l-2 border-[#F4C2C2] text-xs text-[#4A4A4A] flex items-start gap-2.5 rounded-r-sm border-t border-b border-r border-[#F4C2C2]/20">
            <Info className="w-4 h-4 text-[#F4C2C2] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#F4C2C2] block">Official Service Menu Coming Soon</span>
              <span>Our detailed price & service menu is currently being finalized. Ask us on WhatsApp for exact treatment options and availability.</span>
            </div>
          </div>

          {/* Suggested Service Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#F4C2C2] mb-3">
              Popular Treatments in {category.title}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.suggestedItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-[#4A4A4A]/90 py-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C2C2]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#F4C2C2]/20 flex flex-col sm:flex-row gap-3">
            <LuxuryButton
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="md"
              icon={<MessageCircle className="w-4 h-4 text-[#FAFAFA]" />}
              className="flex-1"
            >
              Enquire on WhatsApp
            </LuxuryButton>

            <LuxuryButton
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              variant="outline"
              size="md"
              icon={<Phone className="w-4 h-4 text-[#F4C2C2]" />}
            >
              Call Salon
            </LuxuryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

