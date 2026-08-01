const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /function App\(\) \{\n  const \[isSubmitted, setIsSubmitted\] = React\.useState\(false\);\n  return \(/,
  `function App() {
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

    const message = \`Hello! I would like to book an appointment.

👤 Name: \${name}
📞 Phone: \${phone}
📅 Date: \${date}
⏰ Time: \${time}
💇 Service: \${service}
📝 Notes: \${notes}

Please confirm my appointment. Thank you.\`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "918234090909";
    const whatsappUrl = \`https://wa.me/\${whatsappNumber}?text=\${encodedMessage}\`;
    window.open(whatsappUrl, '_blank');
  };

  return (`
);

content = content.replace(
  /\{isSubmitted \? \([\s\S]*?\) : \(\n            <form className="space-y-6" onSubmit=\{\(e\) => \{ e\.preventDefault\(\); setIsSubmitted\(true\); \}\}>/,
  `<form className="space-y-6" onSubmit={handleWhatsAppBooking}>`
);

content = content.replace(
  /<div className="grid grid-cols-1 md:grid-cols-2 gap-6">\s*<div>\s*<label htmlFor="service"[\s\S]*?<\/div>\s*<\/div>/,
  `<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>`
);

content = content.replace(
  /<\/form>\n            \)}/,
  `</form>`
);

content = content.replace(/id="name" required/g, 'id="name" name="name" required');
content = content.replace(/id="phone" required/g, 'id="phone" name="phone" required');
content = content.replace(/id="notes" rows=\{4\}/g, 'id="notes" name="notes" rows={4}');


fs.writeFileSync('src/App.tsx', content);
