import React from 'react';
import { FluxHero } from './components/FluxHero';
import { GallerySection } from './components/GallerySection';
import { MapPin, Clock, Phone, Sparkles, CheckCircle2, Star, StarHalf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <FluxHero />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Services Section Placeholder */}
      <section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Our Services</h2>
            <p className="font-sans text-muted max-w-2xl mx-auto">Experience our premium salon and spa services designed to rejuvenate and elevate your personal style.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Hair Care & Styling', 'Advanced Skin Treatments', 'Bridal & Party Makeup'].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-accent mb-6" />
                <h3 className="font-display font-semibold text-xl mb-3">{service}</h3>
                <p className="text-muted mb-6">Expert care using premium international products, tailored perfectly to your unique needs.</p>
                <ul className="space-y-3">
                  {['Consultation', 'Premium Products', 'Expert Styling'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-ink">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        <div className="max-w-4xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-sm h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=Hairport+Salon+by+Nora,+Salunkhe+Vihar+Society,+Kondhwa,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

      
      {/* Reviews Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-bold">4.8</span>
              <div className="flex gap-1 text-yellow-400">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <StarHalf className="w-6 h-6 fill-current" />
              </div>
              <span className="text-muted text-sm ml-2">Based on Google Reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", text: "Absolutely loved the bridal makeup by Nora! The entire team was professional and made me feel so special on my big day." },
              { name: "Anjali M.", text: "Best salon in Kondhwa. Great ambiance, friendly staff, and the haircut was exactly what I wanted. Highly recommend!" },
              { name: "Neha K.", text: "Amazing skin treatments. The staff takes their time to understand your skin type and suggests the best facial." }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
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
      <section id="book" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">Book an Appointment</h2>
            <p className="font-sans text-muted max-w-2xl mx-auto">Schedule your premium salon experience. Fill out the form below and we will contact you to confirm your appointment.</p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for booking! We will contact you shortly to confirm your appointment.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">Service Required</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white">
                    <option value="">Select a service</option>
                    <option value="hair">Hair Care & Styling</option>
                    <option value="skin">Advanced Skin Treatments</option>
                    <option value="bridal">Bridal & Party Makeup</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-ink mb-2">Preferred Date</label>
                  <input type="date" id="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-ink mb-2">Special Requests / Notes</label>
                <textarea id="notes" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" placeholder="Any specific requirements or questions?"></textarea>
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
      <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12">Visit Us</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold mb-2">Location</h4>
              <p className="text-muted text-sm text-center max-w-[250px]">Shop No.1, Taha House, opp. Girme Heights, Salunkhe Vihar Society, Kondhwa, Pune, Maharashtra 411048</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold mb-2">Hours</h4>
              <p className="text-muted text-sm text-center max-w-[200px]">Every day<br/>8:00 AM - 10:30 PM</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-display font-semibold mb-2">Contact</h4>
              <p className="text-muted text-sm text-center max-w-[200px]">+91 99759 02351<br/>Appointments & Queries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
