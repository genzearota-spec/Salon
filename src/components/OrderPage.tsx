import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function OrderPage() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get('product') || 'Bespoke Salon Service';
  const price = searchParams.get('price') || 'TBD';

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Salon's WhatsApp number (example, replace with actual business number)
    const phone = "917620522481"; 
    
    const message = `Hello Aura Unisex Salon,\n\nI would like to complete my order.\n\n*Order Details:*\nProduct/Service: ${product}\nPrice: ${price}\n\n*My Details:*\nName: ${customerName}\nPhone: ${customerPhone}\nNotes: ${notes || 'None'}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBFB] flex items-center justify-center p-6 font-sans text-[#4A4A4A]">
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E8B4B8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#E8B4B8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-10 pb-8 border-b border-[#E8B4B8]/30">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-[#1A1A1A]">
              Complete Your Order
            </h1>
            <div className="bg-white/50 inline-block px-6 py-4 rounded-2xl border border-white/60 shadow-sm">
              <p className="text-[#4A4A4A] uppercase tracking-widest text-[10px] font-bold mb-1">
                Order Summary
              </p>
              <h2 className="font-serif text-2xl text-[#B8860B] mb-2">{product}</h2>
              <p className="font-bold text-xl text-[#1A1A1A]">{price}</p>
            </div>
          </div>

          <form onSubmit={handleCompleteOrder} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="customerName" className="block text-xs uppercase tracking-widest font-bold text-[#4A4A4A]">
                Full Name
              </label>
              <input
                id="customerName"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                className="w-full bg-white/40 border border-[#E8B4B8]/40 rounded-xl py-3 px-4 text-[#1A1A1A] placeholder:text-[#4A4A4A]/40 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] transition-all outline-none font-bold shadow-sm"
                placeholder="Jane Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="customerPhone" className="block text-xs uppercase tracking-widest font-bold text-[#4A4A4A]">
                Phone Number
              </label>
              <input
                id="customerPhone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
                className="w-full bg-white/40 border border-[#E8B4B8]/40 rounded-xl py-3 px-4 text-[#1A1A1A] placeholder:text-[#4A4A4A]/40 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] transition-all outline-none font-bold shadow-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="block text-xs uppercase tracking-widest font-bold text-[#4A4A4A]">
                Additional Notes <span className="text-[#4A4A4A]/40 lowercase tracking-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white/40 border border-[#E8B4B8]/40 rounded-xl py-3 px-4 text-[#1A1A1A] placeholder:text-[#4A4A4A]/40 focus:ring-1 focus:ring-[#B8860B] focus:border-[#B8860B] transition-all outline-none font-bold shadow-sm resize-none"
                placeholder="Any special requests or preferences..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 mt-4 rounded-xl font-bold tracking-wide text-white bg-gradient-to-r from-[#F4C2C2] to-[#E8B4B8] hover:shadow-xl hover:shadow-[#E8B4B8]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group border border-[#E8B4B8]/50"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              <span>Complete Order</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform ml-1" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-[#4A4A4A]/50 uppercase tracking-widest flex items-center justify-center gap-1.5">
              Secure Booking Process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
