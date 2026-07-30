const fs = require('fs');
const file = 'src/components/GallerySection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import colorfulSaree from '../assets/images/colorful_saree_1785294679649.jpg';",
  ""
);

content = content.replace(
  `  const items = [
    {
      type: 'image',
      url: colorfulSaree,
      alt: 'Bridal Saree & Draping',
      span: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      type: 'image',
      url: galleryImg1,
      alt: 'Hair Styling',
      span: 'col-span-1 row-span-1'
    },
    {
      type: 'image',
      url: galleryImg2,
      alt: 'Makeup Application',
      span: 'col-span-1 row-span-1'
    },
    {
      type: 'video',
      url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      alt: 'Salon Team Training',
      span: 'col-span-1 md:col-span-2 row-span-1'
    }
  ];`,
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
  ];`
);

fs.writeFileSync(file, content);
