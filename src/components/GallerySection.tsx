import React, { useRef, useEffect } from 'react';

import salon1 from '../assets/images/salon_interior_styling_1785401599830.jpg';
import salon2 from '../assets/images/salon_spa_area_1785401622046.jpg';
import salon3 from '../assets/images/salon_makeup_station_1785401638368.jpg';
import salon4 from '../assets/images/salon_exterior_apple_1785585069471.jpg';

export function GallerySection() {
  const items = [
    {
      type: 'image',
      url: salon1,
      alt: 'Premium Salon Interior',
      span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      type: 'image',
      url: salon2,
      alt: 'Luxury Hair & Spa Area',
      span: 'col-span-1 row-span-1'
    },
    {
      type: 'image',
      url: salon3,
      alt: 'Bridal Makeup Station',
      span: 'col-span-1 row-span-1'
    },
    {
      type: 'image',
      url: salon4,
      alt: 'THE APPLE Exterior',
      span: 'col-span-1 md:col-span-2 row-span-1'
    }
  ];

  return (
    <section id="gallery" className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#d4af37]/15">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Our Gallery</h2>
          <p className="font-sans text-muted max-w-2xl mx-auto">Explore our portfolio of stunning transformations, bridal styling, and our premium salon environment.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {items.map((item, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-2xl ${item.span}`}>
              {item.type === 'video' ? (
                <video 
                  src={item.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                <span className="text-white font-display font-medium p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
