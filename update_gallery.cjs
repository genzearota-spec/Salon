const fs = require('fs');
const file = 'src/components/GallerySection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import colorfulSaree from '../assets/images/colorful_saree_1785294679649.jpg';",
  `import colorfulSaree from '../assets/images/colorful_saree_1785294679649.jpg';
import galleryImg1 from '../assets/images/IMG-20260730-WA0000.jpg';
import galleryImg2 from '../assets/images/IMG-20260730-WA0002.jpg';`
);

content = content.replace(
  `    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
      alt: 'Hair Styling',
      span: 'col-span-1 row-span-1'
    }`,
  `    {
      type: 'image',
      url: galleryImg1,
      alt: 'Hair Styling',
      span: 'col-span-1 row-span-1'
    }`
);

content = content.replace(
  `    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
      alt: 'Makeup Application',
      span: 'col-span-1 row-span-1'
    }`,
  `    {
      type: 'image',
      url: galleryImg2,
      alt: 'Makeup Application',
      span: 'col-span-1 row-span-1'
    }`
);

fs.writeFileSync(file, content);
