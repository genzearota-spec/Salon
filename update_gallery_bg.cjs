const fs = require('fs');
const file = 'src/components/GallerySection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<section id="gallery" className="py-24 px-6 sm:px-12 lg:px-24 bg-white">',
  '<section id="gallery" className="py-24 px-6 sm:px-12 lg:px-24 bg-[#FAF9F6]">'
);

fs.writeFileSync(file, content);
