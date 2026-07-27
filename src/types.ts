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
  name: 'Aura Unisex Salon',
  wordmarkName: 'AURA',
  wordmarkTagline: 'UNISEX SALON',
  category: 'Unisex Salon',
  address: 'Mont Vert Finesse Housing Society, Baner - Pashan Link Rd, near Nano Space IT Park, Pashan, Pune, Maharashtra 411021, India',
  shortAddress: 'Baner - Pashan Link Rd, Pashan, Pune',
  cityRegion: 'Pashan, Pune, MH',
  phoneDisplay: '+91 76205 22481',
  phoneRaw: '+917620522481',
  whatsAppNumber: '917620522481',
  openingHours: 'Every day, 8:00 AM – 10:30 PM',
  rating: '4.8',
  maxRating: '5',
  reviewCount: 35,
  defaultWhatsAppMessage: 'Hello Aura Unisex Salon, I would like to book an appointment. Please share available time slots.',
  googleMapsUrl: 'https://maps.app.goo.gl/vT6YLyry7RXcAeap6'
};

export const createWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair',
    title: 'HAIR',
    tagline: 'Precision Cuts & Creative Styling',
    description: 'Discover specialized hair design, precision cuts, and scalp revitalizing care.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello Aura Unisex Salon, I would like to enquire about your hair styling services.',
    suggestedItems: ['Precision Haircuts & Blowouts', 'Global Hair Color & Highlights', 'Keratin & Smoothing Therapy', 'Nourishing Hair Spa']
  },
  {
    id: 'beauty',
    title: 'BEAUTY',
    tagline: 'Radiant Skin & Glow Care',
    description: 'Custom facials, skin exfoliation, and beauty treatments designed for your skin type.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello Aura Unisex Salon, I would like to enquire about your beauty and facial treatments.',
    suggestedItems: ['Deep Hydrating Facials', 'Skin Brightening & Cleanups', 'Bridal & Party Makeups', 'Gentle Threading & Waxing']
  },
  {
    id: 'spa',
    title: 'SPA & WELLNESS',
    tagline: 'Deep Relaxation & Body Rejuvenation',
    description: 'Soothing body therapies, stress-relief massages, and holistic head spa sessions.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello Aura Unisex Salon, I would like to enquire about your spa and relaxation sessions.',
    suggestedItems: ['Head, Neck & Shoulder Therapy', 'Deep Tissue Body Massage', 'Aromatherapy Relaxation', 'Scalp Rejuvenation Spa']
  },
  {
    id: 'grooming',
    title: 'GROOMING',
    tagline: 'Refined Beard & Personal Care',
    description: 'Expert beard sculpting, man-care packages, and detailed grooming sessions.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=85&w=1200',
    whatsAppMessage: 'Hello Aura Unisex Salon, I would like to enquire about your beard and grooming packages.',
    suggestedItems: ['Beard Sculpting & Hot Towel Shave', 'Spa Manicure & Pedicure', 'De-Tan Skin Rejuvenation', 'Complete Grooming Bundles']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Aura Studio Interior',
    category: 'THE SPACE',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=85&w=1000',
    caption: 'Modern luxury boutique aesthetic at Baner - Pashan Link Road, Pashan.'
  },
  {
    id: 'g2',
    title: 'Precision Hair Artistry',
    category: 'THE DETAIL',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=85&w=1000',
    caption: 'Fine attention to detail in every haircut and styling session.'
  },
  {
    id: 'g3',
    title: 'Relaxing Spa Corner',
    category: 'THE EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=85&w=1000',
    caption: 'A serene sanctuary crafted for deep personal relaxation.'
  },
  {
    id: 'g4',
    title: 'Styling Mirrors & Lights',
    category: 'THE SPACE',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=85&w=1000',
    caption: 'Clean, minimalist stations near Mont Vert Finesse, Pashan.'
  },
  {
    id: 'g5',
    title: 'Skin Rejuvenation Care',
    category: 'THE DETAIL',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=85&w=1000',
    caption: 'Thoughtful self-care and glowing beauty therapies.'
  },
  {
    id: 'g6',
    title: 'Elevated Atmosphere',
    category: 'THE EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=85&w=1000',
    caption: 'Warm ambiance, strict hygiene standards, and expert professionals.'
  }
];

export const WHY_US_PILLARS = [
  {
    number: '01',
    title: 'PERSONAL STYLE',
    description: 'A space to express your individual look with confidence and care in Pashan.'
  },
  {
    number: '02',
    title: 'SELF-CARE',
    description: 'Take time to slow down, unwind, and care for yourself in complete comfort.'
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
    author: 'Rohan Mehta',
    avatarBg: 'bg-amber-900/60 text-amber-200',
    rating: 5,
    date: '1 week ago',
    serviceCategory: 'hair',
    serviceName: 'Hair Styling & Precision Cut',
    comment: 'Fantastic experience at Aura Unisex Salon! Located right on Baner - Pashan Link Road near Nano Space IT Park. The hairdresser listened carefully to what I wanted and gave me a perfect fade and style.',
    verified: true,
    likes: 14
  },
  {
    id: 'rev-2',
    author: 'Ananya Joshi',
    avatarBg: 'bg-yellow-900/60 text-yellow-200',
    rating: 5,
    date: '2 weeks ago',
    serviceCategory: 'beauty',
    serviceName: 'Hydra Facial & Skin Rejuvenation',
    comment: 'Visited Aura Unisex Salon for a facial before an event. The glow on my skin was incredible! Very polite staff, clean equipment, and very comfortable ambiance near Mont Vert Finesse.',
    verified: true,
    likes: 19
  },
  {
    id: 'rev-3',
    author: 'Vikram Kulkarni',
    avatarBg: 'bg-amber-800/60 text-amber-100',
    rating: 5,
    date: '3 weeks ago',
    serviceCategory: 'grooming',
    serviceName: 'Beard Sculpting & Hair Spa',
    comment: 'Best unisex salon in Pashan! Great attention to detail during beard trimming and hair spa massage. Very professional team and reasonable pricing.',
    verified: true,
    likes: 11
  },
  {
    id: 'rev-4',
    author: 'Shweta Shinde',
    avatarBg: 'bg-amber-950/70 text-amber-300',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'hair',
    serviceName: 'Keratin Treatment & Global Color',
    comment: 'Got hair keratin treatment done at Aura Salon. Smooth, silky hair with zero frizz! The interior is super aesthetic and clean. Highly recommended for everyone in Pashan and Baner.',
    verified: true,
    likes: 16
  },
  {
    id: 'rev-5',
    author: 'Aditya Agarwal',
    avatarBg: 'bg-yellow-950/70 text-yellow-300',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'spa',
    serviceName: 'Head & Shoulder Relaxation Massage',
    comment: 'Deeply relaxing head massage after work. Since it is near IT parks, it is very convenient to drop in. Staff is polite, skillful, and courteous.',
    verified: true,
    likes: 12
  },
  {
    id: 'rev-6',
    author: 'Neha Deshpande',
    avatarBg: 'bg-amber-900/80 text-amber-200',
    rating: 5,
    date: '2 months ago',
    serviceCategory: 'beauty',
    serviceName: 'Party Makeup & Hair Styling',
    comment: 'Wonderful party makeup and blow dry! Everything was sanitized and professionally handled. Easily the top salon choice near Baner-Pashan link road.',
    verified: true,
    likes: 22
  }
];
