const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import { MapPin, Clock, Phone, Sparkles, CheckCircle2 } from 'lucide-react';",
  "import { MapPin, Clock, Phone, Sparkles, CheckCircle2, Star, StarHalf } from 'lucide-react';"
);

const reviewsSection = `
      {/* Reviews Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-100">
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
                <p className="text-ink mb-6 italic">"{review.text}"</p>
                <p className="font-semibold text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

content = content.replace(
  "{/* Contact Section Placeholder */}",
  reviewsSection + "\n      {/* Contact Section Placeholder */}"
);

content = content.replace(
  '<p className="text-muted text-sm text-center max-w-[200px]">Mont Vert Finesse, Baner - Pashan Link Rd, Pune</p>',
  '<p className="text-muted text-sm text-center max-w-[200px]">Shop No.1, Taha House, opp. Girme Heights, Salunkhe Vihar Society, Kondhwa, Pune, Maharashtra 411048</p>'
);

content = content.replace(
  '<p className="text-muted text-sm text-center max-w-[200px]">+91 76205 22481<br/>Appointments & Queries</p>',
  '<p className="text-muted text-sm text-center max-w-[200px]">+91 99759 02300<br/>Appointments & Queries</p>'
);

const mapEmbed = `
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
`;

content = content.replace(
  '          </div>\n        </div>\n      </section>',
  '          </div>\n' + mapEmbed + '        </div>\n      </section>'
);

fs.writeFileSync(file, content);
