const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/function App\(\) \{/, 'function App() {\n  const [isSubmitted, setIsSubmitted] = React.useState(false);');

content = content.replace(
  /<form className="space-y-6" onSubmit=\{\(e\) => \{ e\.preventDefault\(\); alert\('Thank you for booking! We will contact you shortly to confirm your appointment\.'\); \}\}>/,
  `{isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-2">Thank you for booking!</h3>
                <p className="text-muted mb-8">We will contact you shortly to confirm your appointment details.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white text-ink border border-[#d4af37]/30 font-display font-semibold text-[15px] py-3 px-8 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>`
);

content = content.replace(/<\/form>/, '</form>\n            )}');

fs.writeFileSync('src/App.tsx', content);
