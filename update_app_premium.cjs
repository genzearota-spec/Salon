const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Services Section Update
content = content.replace(
  'bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow',
  'bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300'
);

// Review Section Quotes Update
content = content.replace(
  '<p className="text-ink mb-6 italic">"{review.text}"</p>',
  '<p className="text-ink mb-6 italic font-display text-lg leading-relaxed">"{review.text}"</p>'
);

// Update Services background
content = content.replace(
  '<section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6]">',
  '<section id="services" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">'
);
content = content.replace(
  '<section className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-100">',
  '<section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-gray-100">'
);
content = content.replace(
  '<section id="book" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6]">',
  '<section id="book" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">'
);
content = content.replace(
  '<section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-white border-t border-gray-100">',
  '<section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6] border-t border-gray-100">'
);

// Change purple icon backgrounds
content = content.replace(
  /<div className="w-12 h-12 rounded-full bg-\[#f4f3ff\] flex items-center justify-center mb-4">/g,
  '<div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">'
);

fs.writeFileSync(file, content);
