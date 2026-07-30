const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const bookSection = `
      {/* Book Appointment Section */}
      <section id="book" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6]">
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
`;

content = content.replace(
  "{/* Contact Section Placeholder */}",
  bookSection + "\n      {/* Contact Section Placeholder */}"
);

fs.writeFileSync(file, content);
