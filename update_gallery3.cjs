const fs = require('fs');
const file = 'src/components/GallerySection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import galleryImg1 from '../assets/images/IMG-20260730-WA0000.jpg';\nimport galleryImg2 from '../assets/images/IMG-20260730-WA0002.jpg';",
  `import salon1 from '../assets/images/salon_interior_styling_1785401599830.jpg';
import salon2 from '../assets/images/salon_spa_area_1785401622046.jpg';
import salon3 from '../assets/images/salon_makeup_station_1785401638368.jpg';
import salon4 from '../assets/images/salon_exterior_1785401656424.jpg';`
);

// Fallback in case the newlines differ
content = content.replace(
  "import galleryImg1 from '../assets/images/IMG-20260730-WA0000.jpg';",
  `import salon1 from '../assets/images/salon_interior_styling_1785401599830.jpg';
import salon2 from '../assets/images/salon_spa_area_1785401622046.jpg';
import salon3 from '../assets/images/salon_makeup_station_1785401638368.jpg';
import salon4 from '../assets/images/salon_exterior_1785401656424.jpg';`
);
content = content.replace("import galleryImg2 from '../assets/images/IMG-20260730-WA0002.jpg';", "");

content = content.replace(
  `  const items = [
    {
      type: 'image',
      url: galleryImg1,
      alt: 'Salon Interior & Styling',
      span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      type: 'image',
      url: galleryImg2,
      alt: 'Premium Hair Care',
      span: 'col-span-1 md:col-span-2 row-span-2'
    }
  ];`,
  `  const items = [
    {
      type: 'image',
      url: salon1,
      alt: 'Premium Salon Interior',
      span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      type: 'image',
      url: salon2,
      alt: 'Luxury Hair & Spa Area',
      span: 'col-span-1 row-span-1'
    },
    {
      type: 'image',
      url: salon3,
      alt: 'Bridal Makeup Station',
      span: 'col-span-1 row-span-1'
    },
    {
      type: 'image',
      url: salon4,
      alt: 'Hairport Salon Exterior',
      span: 'col-span-1 md:col-span-2 row-span-1'
    }
  ];`
);

fs.writeFileSync(file, content);
