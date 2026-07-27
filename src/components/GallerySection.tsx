import { useState } from 'react';
import { Maximize2, Info, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../types';
import { LightBoxModal } from './LightBoxModal';
import { ThreeDCard } from './ThreeDCard';

type FilterCategory = 'ALL' | 'THE SPACE' | 'THE DETAIL' | 'THE EXPERIENCE';

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs: FilterCategory[] = ['ALL', 'THE SPACE', 'THE DETAIL', 'THE EXPERIENCE'];

  const filteredItems = activeFilter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAFAFA] text-[#4A4A4A] relative overflow-hidden border-t border-[#F4C2C2]/20">
      
      {/* Background Ambient Radial Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(244,194,194,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(244,194,194,0.08)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#F4C2C2]/20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-4 h-4 text-[#F4C2C2]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#333333] font-bold">
                EDITORIAL ATMOSPHERE
              </span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#333333]">
              VISUAL GALLERY
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-all rounded-sm backdrop-blur-md ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#F4C2C2] via-[#F4C2C2] to-[#E8B4B8] text-[#FAFAFA] shadow-[0_4px_15px_rgba(244,194,194,0.3)]'
                    : 'bg-[#FFFFFF]/90 text-[#4A4A4A] hover:text-[#333333] hover:bg-[#1A1A22] border border-[#F4C2C2]/25'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Note for Owner */}
        <div className="mb-10 p-4 bg-[#FFFFFF] border-l-4 border-[#F4C2C2] rounded-r-sm flex items-center gap-3 text-xs text-[#4A4A4A] shadow-md border border-[#F4C2C2]/20 border-l-transparent">
          <Info className="w-4 h-4 text-[#F4C2C2] shrink-0" />
          <span>
            <strong className="text-[#333333]">Concept Gallery:</strong> High-resolution curated interior and aesthetic photography. The salon owner can easily replace these with actual photos of Aura Unisex Salon.
          </span>
        </div>

        {/* Vertical Stacking Gallery */}
        <div className="flex flex-col gap-12 sm:gap-16 relative pb-12">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                className="sticky w-full z-10"
                style={{ top: '15vh' }}
              >
                <ThreeDCard
                  depth={20}
                  className="w-full h-full"
                >
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="group relative overflow-hidden bg-[#FFFFFF] rounded-2xl border border-[#F4C2C2]/30 hover:border-[#F4C2C2] cursor-pointer transition-all duration-500 flex flex-col justify-end shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(244,194,194,0.15)] min-h-[400px] sm:min-h-[600px] w-full"
                  >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/95 via-[#FAFAFA]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-[#FAFAFA]/90 backdrop-blur-md px-3 py-1 rounded-sm border border-[#F4C2C2]/30 shadow-md">
                    <span className="text-[9px] tracking-[0.25em] text-[#F4C2C2] uppercase font-bold">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-4 right-4 z-10 p-2.5 rounded-sm bg-[#FAFAFA]/90 text-[#333333] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-[#F4C2C2]/30">
                    <Maximize2 className="w-4 h-4 text-[#F4C2C2]" />
                  </div>

                  {/* Bottom Overlay Label */}
                  <div className="relative p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#333333] group-hover:text-gold-gradient transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A4A4A]/85 mt-2 font-bold leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </ThreeDCard>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightBoxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
      />
    </section>
  );
}


