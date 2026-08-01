import React from 'react';
import { FluxHero } from './components/FluxHero';
import { GallerySection } from './components/GallerySection';
import { EntranceAnimation } from './components/EntranceAnimation';
import { LuxuryBackground } from './components/LuxuryBackground';
import { MapPin, Clock, Phone, Sparkles, CheckCircle2, Star, StarHalf } from 'lucide-react';

function App() {
  const handleWhatsAppBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const serviceNode = form.elements.namedItem('service') as HTMLSelectElement;
    const service = serviceNode.options[serviceNode.selectedIndex]?.text || '';
    const date = (form.elements.namedItem('date') as HTMLInputElement).value || 'Not specified';
    const time = (form.elements.namedItem('time') as HTMLSelectElement)?.value || 'Not specified';
    const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement).value || 'None';

    const message = `Hello! I would like to book an appointment.

👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
⏰ Time: ${time}
💇 Service: ${service}
📝 Notes: ${notes}

Please confirm my appointment. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918234090909";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <EntranceAnimation>
      <div className="relative min-h-screen bg-transparent z-0 overflow-x-hidden">
        <LuxuryBackground />
        <FluxHero />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Services Section Placeholder */}
      <section id="services" className="relative py-24 px-6 sm:px-12 lg:px-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.04)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Our Services</h2>
            <p className="font-sans text-muted max-w-2xl mx-auto">Experience our premium salon and spa services designed to rejuvenate and elevate your personal style.</p>
          </div>
          
          <div className="flex flex-col gap-6 relative">
            {[
              {
                title: 'Hair Care & Styling',
                desc: 'Expert haircuts, styling, coloring, smoothening, and keratin treatments to transform your look.',
                features: ['Haircut & Styling', 'Hair Spa & Coloring', 'Keratin & Smoothening'],
                color: 'bg-white/40 backdrop-blur-md border-[#d4af37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.03)]'
              },
              {
                title: 'Skin & Beauty',
                desc: 'Rejuvenating facials, cleanups, detan, waxing, and threading for flawless skin.',
                features: ['Facial & Cleanup', 'Detan & Bleach', 'Waxing & Threading'],
                color: 'bg-white/50 backdrop-blur-md border-[#d4af37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.03)]'
              },
              {
                title: 'Grooming & Spa',
                desc: 'Relaxing body spa, head massage, manicures, pedicures, and professional men\'s grooming.',
                features: ['Beard Styling & Shaving', 'Manicure & Pedicure', 'Body Spa & Head Massage'],
                color: 'bg-white/40 backdrop-blur-md border-[#d4af37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.03)]'
              },
              {
                title: 'Bridal & Party Makeup',
                desc: 'Flawless makeup services for your special day, including bridal and party makeup packages.',
                features: ['Bridal Makeup', 'Party Makeup', 'Pre-Bridal Packages'],
                color: 'bg-white/50 backdrop-blur-md border-[#d4af37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.03)]'
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className={`${service.color} p-8 md:p-12 rounded-3xl border transition-all duration-300 sticky`}
                style={{
                  top: `calc(100px + ${idx * 30}px)`,
                  zIndex: idx + 1
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-1">
                    <Sparkles className="w-10 h-10 text-accent mb-6" />
                    <h3 className="font-display font-bold text-3xl mb-4 text-ink">{service.title}</h3>
                    <p className="text-muted text-lg mb-8 max-w-lg">{service.desc}</p>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-base text-ink font-medium">
                          <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:flex flex-1 justify-end opacity-20">
                     <div className="text-[120px] font-display font-bold text-accent leading-none">
                       0{idx + 1}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        <div className="max-w-4xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#d4af37]/20 h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=THE+APPLE+Unisex+Fatimanagar,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </section>

      
      
      {/* Why Choose Us */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Why Choose Us</h2>
            <p className="font-sans text-muted max-w-2xl mx-auto">Discover what makes Apple Salon Fatimanagar the preferred choice for over 1700 happy customers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Professional & Experienced Stylists",
              "Premium Hair & Beauty Products",
              "Hygienic & Comfortable Environment",
              "Affordable Pricing",
              "1700+ Happy Customer Reviews",
              "Modern Salon Equipment",
              "Online Appointment Booking",
              "Customer Satisfaction Guaranteed"
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-[#d4af37]/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="font-medium text-ink leading-snug">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#d4af37]/15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-bold">4.7</span>
              <div className="flex gap-1 text-yellow-400">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <StarHalf className="w-6 h-6 fill-current" />
              </div>
              <span className="text-muted text-sm ml-2">Based on 1,713+ Google Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", text: "Absolutely loved the bridal makeup by the team at Apple Salon! The entire team was professional and made me feel so special on my big day." },
              { name: "Anjali M.", text: "Best salon in Kondhwa. Great ambiance, friendly staff, and the haircut was exactly what I wanted. Highly recommend!" },
              { name: "Neha K.", text: "Amazing skin treatments. The staff takes their time to understand your skin type and suggests the best facial." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#d4af37]/20">
                <div className="flex gap-1 text-[#d4af37] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-ink mb-6 italic font-display text-lg leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Book Appointment Section */}
      <section id="book" className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#d4af37]/15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.04)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Book an Appointment</h2>
            <p className="font-sans text-muted max-w-2xl mx-auto">Schedule your premium salon experience. Fill out the form below and we will contact you to confirm your appointment.</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-[#d4af37]/20">
            <form className="space-y-6" onSubmit={handleWhatsAppBooking}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">Service Required</label>
                  <select id="service" name="service" required className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                    <option value="">Select a service</option>
                    <option value="hair">Hair Care & Styling</option>
                    <option value="skin">Advanced Skin Treatments</option>
                    <option value="bridal">Bridal & Party Makeup</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-ink mb-2">Preferred Date</label>
                  <input type="date" id="date" name="date" required className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-ink mb-2">Preferred Time (Optional)</label>
                  <select id="time" name="time" className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                    <option value="">Any Time</option>
                    <option value="Morning (10 AM - 12 PM)">Morning (10 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-ink mb-2">Special Requests / Notes</label>
                <textarea id="notes" name="notes" rows={4} className="w-full px-4 py-3 rounded-lg border border-[#d4af37]/30 bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" placeholder="Any specific requirements or questions?"></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button type="submit" className="bg-ink text-white font-display font-semibold text-[15px] py-[15px] px-[40px] rounded-full shadow-[0_8px_24px_rgba(23,21,31,0.12)] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(23,21,31,0.16)] transition-all duration-200 w-full md:w-auto">
                  Request Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#d4af37]/15">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">Visit Us</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold mb-2">Location</h4>
              <p className="text-muted text-sm text-center max-w-[280px]">Building C-Wing, Shop No. 11 & 12, Tain Square, Near Reliance Smart, Fatima Nagar, Wanowrie, Pune, Maharashtra 411040</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold mb-2">Hours</h4>
              <p className="text-muted text-sm text-center max-w-[200px]">Monday – Sunday<br/>10:00 AM – 9:00 PM</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold mb-2">Contact</h4>
              <p className="text-muted text-sm text-center max-w-[200px]">+91 82340 90909<br/>Appointments & Queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Footer */}
            {/* Action Footer */}
      <footer className="relative py-12 px-6 sm:px-12 lg:px-24 border-t border-[#d4af37]/20 bg-white/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8">
            <a href="#book" className="group flex items-center gap-2 bg-ink text-white font-display font-semibold text-[15px] py-[14px] px-[28px] rounded-full shadow-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200">
              Book Appointment
            </a>
            <a href="tel:+918234090909" className="group flex items-center gap-2 bg-white text-ink font-display font-semibold text-[15px] py-[14px] px-[28px] rounded-full shadow-md hover:-translate-y-[2px] hover:shadow-lg border border-gray-200 transition-all duration-200">
              Call Now
            </a>
            <a href="https://wa.me/918234090909" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-[#25D366] text-white font-display font-semibold text-[15px] py-[14px] px-[28px] rounded-full shadow-md hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200">
              WhatsApp
            </a>
            <a href="https://maps.google.com/maps?q=Building+C-Wing,+Shop+No.+11+&+12,+Tain+Square,+Near+Reliance+Smart,+Fatima+Nagar,+Wanowrie,+Pune,+Maharashtra+411040" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-white text-ink font-display font-semibold text-[15px] py-[14px] px-[28px] rounded-full shadow-md hover:-translate-y-[2px] hover:shadow-lg border border-gray-200 transition-all duration-200">
              Get Directions
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[8px] sm:gap-[16px]">
            <span className="font-mono font-normal text-[11.5px] uppercase tracking-[0.16em] text-faint">Hair Care</span>
            <div className="w-[4px] h-[4px] rounded-full bg-accent"></div>
            <span className="font-mono font-normal text-[11.5px] uppercase tracking-[0.16em] text-faint">Skin Treatments</span>
            <div className="w-[4px] h-[4px] rounded-full bg-accent"></div>
            <span className="font-mono font-normal text-[11.5px] uppercase tracking-[0.16em] text-faint">Bridal Makeup</span>
          </div>
          <p className="text-muted text-sm mt-8 text-center">© {new Date().getFullYear()} Apple Salon Fatimanagar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </EntranceAnimation>
  );
}

export default App;
