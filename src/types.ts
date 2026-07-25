export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  whatsAppMessage: string;
  suggestedItems: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'THE SPACE' | 'THE DETAIL' | 'THE EXPERIENCE';
  image: string;
  caption: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  avatarBg: string;
  rating: number;
  date: string;
  serviceCategory: string;
  serviceName: string;
  comment: string;
  verified: boolean;
  likes: number;
}

export const BUSINESS_INFO = {
  name: 'A Square Unisex Salon And Spa',
  wordmarkName: 'A SQUARE',
  wordmarkTagline: 'UNISEX SALON & SPA',
  category: 'Unisex Salon & Spa',
  address: 'Sanjeevan Hospital Road, Gujarmala, Shirur, Maharashtra 412210, India',
  shortAddress: 'Sanjeevan Hospital Road, Gujarmala, Shirur',
  cityRegion: 'Shirur, Maharashtra',
  phoneDisplay: '+91 80077 43377',
  phoneRaw: '+918007743377',
  whatsAppNumber: '918007743377',
  openingHours: 'Every day, 8:00 AM – 10:30 PM',
  rating: '4.8',
  maxRating: '5',
  reviewCount: 28,
  defaultWhatsAppMessage: 'Hello A Square Unisex Salon & Spa, I would like to book an appointment. Please share the available time slots.',
  googleMapsUrl: 'https://maps.app.goo.gl/su7rNkB8JwCH7hq79'
};

export const createWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'HAIR',
    tagline: 'Precision Styling & Haircare',
    description: 'Discover available services tailored to your personal style.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello A Square Unisex Salon & Spa, I would like to enquire about your hair services.',
    suggestedItems: ['Hair Styling & Cut', 'Coloring & Highlights', 'Keratin & Nourishing Treatments', 'Scalp Care & Blowout']
  },
  {
    id: 'beauty',
    title: 'BEAUTY',
    tagline: 'Skin Radiance & Rejuvenation',
    description: 'Discover available services tailored to your personal style.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello A Square Unisex Salon & Spa, I would like to enquire about your beauty services.',
    suggestedItems: ['Radiance Facials', 'Skin Rejuvenation', 'Makeup & Styling', 'Gentle Exfoliation']
  },
  {
    id: 'spa',
    title: 'SPA & WELLNESS',
    tagline: 'Relaxation & Body Renewal',
    description: 'Discover available services tailored to your personal style.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello A Square Unisex Salon & Spa, I would like to enquire about your spa services.',
    suggestedItems: ['Head & Shoulder Massage', 'Full Body Therapies', 'Aromatherapy Sessions', 'Stress-Relief Treatments']
  },
  {
    id: 'grooming',
    title: 'GROOMING',
    tagline: 'Refined Personal Care',
    description: 'Discover available services tailored to your personal style.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello A Square Unisex Salon & Spa, I would like to enquire about your grooming services.',
    suggestedItems: ['Beard Sculpting & Care', 'Manicure & Pedicure', 'Precision Waxing & Threading', 'Customized Grooming Packages']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Interior Sanctuary',
    category: 'THE SPACE',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=85&w=1000',
    caption: 'Modern luxury boutique aesthetic designed for peace and comfort.'
  },
  {
    id: 'g2',
    title: 'Precision Artistry',
    category: 'THE DETAIL',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=85&w=1000',
    caption: 'Attention to detail in every service step.'
  },
  {
    id: 'g3',
    title: 'Quiet Wellness',
    category: 'THE EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=85&w=1000',
    caption: 'A serene space crafted for your personal relaxation.'
  },
  {
    id: 'g4',
    title: 'Styling Station',
    category: 'THE SPACE',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=85&w=1000',
    caption: 'Clean, minimalist stations with high-end lighting.'
  },
  {
    id: 'g5',
    title: 'Pure Rejuvenation',
    category: 'THE DETAIL',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=85&w=1000',
    caption: 'Thoughtful self-care and beauty therapies.'
  },
  {
    id: 'g6',
    title: 'Elevated Atmosphere',
    category: 'THE EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=85&w=1000',
    caption: 'Warm ambiance, clean aesthetics, and professional care.'
  }
];

export const WHY_US_PILLARS = [
  {
    number: '01',
    title: 'PERSONAL STYLE',
    description: 'A space to express your individual look with confidence and care.'
  },
  {
    number: '02',
    title: 'SELF-CARE',
    description: 'Take time to slow down, unwind, and care for yourself in comfort.'
  },
  {
    number: '03',
    title: 'A MODERN EXPERIENCE',
    description: 'A contemporary approach to beauty and grooming tailored to your lifestyle.'
  },
  {
    number: '04',
    title: 'YOUR SPACE',
    description: 'A place designed around your personal comfort and total satisfaction.'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Rahul Deshmukh',
    avatarBg: 'bg-amber-900/60 text-amber-200',
    rating: 5,
    date: '2 weeks ago',
    serviceCategory: 'hair',
    serviceName: 'Hair Styling & Precision Cut',
    comment: 'Best salon in Shirur! Excellent hair styling and very hygienic atmosphere. The staff takes time to understand what style fits your face cut. Highly recommended on Sanjeevan Hospital Road.',
    verified: true,
    likes: 12
  },
  {
    id: 'rev-2',
    author: 'Pooja Kulkarni',
    avatarBg: 'bg-yellow-900/60 text-yellow-200',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'beauty',
    serviceName: 'Hydra Facial & Glow Treatment',
    comment: 'Loved the facial treatment at A Square! The spa ambiance is so peaceful and relaxing. My skin feels thoroughly hydrated and glowing. Cleanliness and hospitality are top-notch.',
    verified: true,
    likes: 18
  },
  {
    id: 'rev-3',
    author: 'Sanket Gawade',
    avatarBg: 'bg-amber-800/60 text-amber-100',
    rating: 5,
    date: '3 weeks ago',
    serviceCategory: 'grooming',
    serviceName: 'Beard Sculpting & Hair Spa',
    comment: 'A true premium unisex salon in Shirur. Great attention to detail during beard styling and hair spa massage. Polite staff and very fair pricing for the quality provided.',
    verified: true,
    likes: 9
  },
  {
    id: 'rev-4',
    author: 'Snehal Patil',
    avatarBg: 'bg-amber-950/70 text-amber-300',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'hair',
    serviceName: 'Hair Keratin Treatment & Color',
    comment: 'Got my keratin hair treatment done here. The results are amazing! Smooth, shiny hair and zero frizz. The salon interior feels modern and luxury.',
    verified: true,
    likes: 15
  },
  {
    id: 'rev-5',
    author: 'Amit Bhandari',
    avatarBg: 'bg-yellow-950/70 text-yellow-300',
    rating: 5,
    date: '2 months ago',
    serviceCategory: 'spa',
    serviceName: 'Head & Shoulder Spa Massage',
    comment: 'Very relaxing head massage and spa session after a long week. The staff is polite, skillful, and professional. Easily the most comfortable salon in Gujarmala, Shirur.',
    verified: true,
    likes: 11
  },
  {
    id: 'rev-6',
    author: 'Priya Jadhav',
    avatarBg: 'bg-amber-900/80 text-amber-200',
    rating: 5,
    date: '3 months ago',
    serviceCategory: 'beauty',
    serviceName: 'Bridal & Party Makeup',
    comment: 'Visited for party makeup and hair styling. Extremely satisfied with the flawless finish! They use quality products and maintain strict hygiene. Will definitely return.',
    verified: true,
    likes: 21
  }
];
