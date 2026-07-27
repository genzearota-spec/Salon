import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../types';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
      
      {/* Label Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 glass-panel-dark text-[#F4EBE1] text-[11px] font-bold tracking-wider px-4 py-2 rounded-sm border border-[#E2D4C3]/50 shadow-2xl whitespace-nowrap">
        <span className="text-[#E2D4C3] uppercase">WhatsApp Booking</span> • Instant Reply
      </div>

      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-15 h-15 bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-[#333333] rounded-full shadow-[0_10px_35px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_45px_rgba(226,212,195,0.6)] transition-all duration-300 hover:scale-110 focus:outline-none border-2 border-[#E2D4C3]"
        title="Chat on WhatsApp"
        aria-label="Book appointment on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        
        {/* Pulsing 3D Metallic Ring Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2D4C3] opacity-80" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-[#F4EBE1] to-[#E2D4C3] border border-white shadow-md" />
        </span>
      </a>
    </div>
  );
}


