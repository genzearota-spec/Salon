import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightBoxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export function LightBoxModal({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
}: LightBoxModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAFAFA]/95 backdrop-blur-lg animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#FFFFFF] border border-[#E2D4C3]/30 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FAFAFA]/80 text-[#F4EBE1] hover:text-[#E2D4C3] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous & Next Buttons */}
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={onSelectPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#FAFAFA]/80 text-[#F4EBE1] hover:text-[#E2D4C3] hover:bg-[#FAFAFA] border border-[#E2D4C3]/30 transition-all focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onSelectNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#FAFAFA]/80 text-[#F4EBE1] hover:text-[#E2D4C3] hover:bg-[#FAFAFA] border border-[#E2D4C3]/30 transition-all focus:outline-none md:right-72"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Frame */}
        <div className="relative flex-1 bg-[#FAFAFA] flex items-center justify-center min-h-[350px] md:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Image Info Side Panel */}
        <div className="w-full md:w-80 bg-[#18181A] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#E2D4C3]/20 text-[#F4EBE1]">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-[#FAFAFA] border border-[#E2D4C3]/40 rounded-sm">
              <span className="text-[10px] tracking-[0.25em] text-[#E2D4C3] uppercase font-bold">
                {item.category}
              </span>
            </div>

            <h3 className="font-serif-display text-2xl text-[#F4EBE1] font-bold">
              {item.title}
            </h3>

            <p className="text-xs text-[#A79C8D] leading-relaxed font-bold">
              {item.caption}
            </p>
          </div>

          <div className="pt-6 border-t border-[#F4EBE1]/10 space-y-3">
            <div className="flex items-center gap-1.5 text-[11px] text-[#A79C8D]">
              <MapPin className="w-3.5 h-3.5 text-[#E2D4C3]" />
              <span>Aura Unisex Salon • Pashan, Pune</span>
            </div>

            <p className="text-[10px] text-[#A79C8D]/60 italic">
              Atmosphere preview concept. Images replaceable with actual salon photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

